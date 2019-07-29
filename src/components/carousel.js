import React, { useRef, useMemo, useState } from "react"
import styled from "styled-components"
import { useSpring, useSprings, interpolate, animated as a } from "react-spring"
import { useGesture } from "react-use-gesture"
import useMeasure from "use-measure"
import IconButton from "./icon-button"
import Icon, { iconKeys } from "./icon"
import { scale } from "../theme/mixins"
import { clamp } from "../utils/math"

const CarouselIconButton = styled(IconButton)`
  position: absolute;
  top: 50%;
  transform: translate(
    ${props => (props.align === "left" ? "-100%, -50%" : "100%, -50%")}
  );
  ${props => (props.align === "left" ? "left" : "right")}: -${scale()};
`

const CarouselItem = ({ children, className, style }) => (
  <a.div className={className} style={style}>
    {children}
  </a.div>
)

const StyledCarouselItem = styled(CarouselItem)`
  display: grid;
  align-items: center;
  padding: ${scale()};
  background: rgba(0, 0, 0, 0.1);
  border-radius: 2px;
`

const CarouselItems = styled(a.div)`
  display: grid;
  grid-column-gap: ${scale(0.5)};
  grid-template-columns: repeat(${props => props.columns}, 100%);
  cursor: grab;
`

const Carousel = ({ children, className, nextIndex, onIndexChange }) => {
  const [activeIndex, setActiveIndex] = useState(nextIndex || 0)
  const activeIndexRef = useRef(nextIndex || 0)
  const carouselNodeRef = useRef(null)
  const carouselDimensions = useMeasure(carouselNodeRef)
  const [itemSpring, setItemSpring] = useSprings(children.length, i => ({
    opacity: activeIndexRef.current === i ? 1 : 0.4,
  }))
  const [itemsSpring, setItemsSpring] = useSpring(i => ({
    activeIndex: activeIndexRef.current,
    xOffset: 0,
  }))

  useMemo(() => {
    if (typeof nextIndex === "number") goTo(nextIndex)
  }, [nextIndex])

  const bind = useGesture(
    ({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
      if (down && distance > carouselDimensions.width / 4) {
        cancel(
          (() => {
            activeIndexRef.current = clamp(
              activeIndexRef.current + (xDir > 0 ? -1 : 1),
              0,
              children.length - 1
            )

            setActiveIndex(activeIndexRef.current)

            if (onIndexChange) onIndexChange(activeIndexRef.current)
          })()
        )
      }

      setItemsSpring({
        activeIndex: activeIndexRef.current,
        xOffset: down ? xDelta : 0,
      })

      setItemSpring(i => ({
        opacity: activeIndexRef.current === i ? 1 : 0.2,
      }))
    }
  )

  const items = itemSpring.map((spring, i) => {
    const child = children[i]

    return React.cloneElement(child, {
      key: i,
      style: spring,
    })
  })

  function goTo(index) {
    const newIndex = clamp(index, 0, children.length - 1)

    activeIndexRef.current = newIndex

    setActiveIndex(activeIndexRef.current)

    setItemsSpring({
      activeIndex: activeIndexRef.current,
      xOffset: 0,
    })

    setItemSpring(i => ({
      opacity: activeIndexRef.current === i ? 1 : 0.2,
    }))

    if (onIndexChange) onIndexChange(activeIndexRef.current)
  }

  return (
    <div ref={carouselNodeRef} className={className}>
      <CarouselItems
        {...bind()}
        style={{
          transform: interpolate(
            [itemsSpring.activeIndex, itemsSpring.xOffset],
            (i, x) =>
              `translate3d(calc((${i} * (-100% - ${scale(
                0.5
              )})) + ${x}px), 0px, 0px)`
          ),
        }}
        columns={items.length}
      >
        {items}
      </CarouselItems>
      {activeIndex > 0 && (
        <CarouselIconButton
          align="left"
          onClick={() => goTo(activeIndexRef.current - 1)}
        >
          <Icon name={iconKeys.leftArrow} scale="1" />
        </CarouselIconButton>
      )}
      {activeIndex < items.length - 1 && (
        <CarouselIconButton onClick={() => goTo(activeIndexRef.current + 1)}>
          <Icon name={iconKeys.rightArrow} scale="1" />
        </CarouselIconButton>
      )}
    </div>
  )
}

const StyledCarousel = styled(Carousel)`
  position: relative;
  touch-action: pan-y;
  user-select: none;
`

StyledCarousel.CarouselItem = StyledCarouselItem

export default StyledCarousel
