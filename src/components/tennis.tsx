import React from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import * as mixins from '../theme/mixins';
import { toRem } from '../theme/typography';
import mp4Path from '../videos/me-wimbledon.mp4';
import Band from './band';
import Container from './container';

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Video = styled.video`
  /* Make video to at least 100% wide and tall */
  min-width: 100%;
  min-height: 100%;

  /* Setting width & height to auto prevents the browser from stretching or squishing the video */
  width: auto;
  height: auto;

  /* Center the video */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
`;

const TennisVideo = () => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true
  });

  return (
    <VideoContainer>
      <div ref={ref}>
        {inView && (
          <Video
            autoPlay={true}
            controls={false}
            loop={true}
            muted={true}
            playsInline={true}
          >
            <source src={mp4Path} type="video/mp4" />
            <p>
              Your browser doesn't support HTML5 video. Here is a
              <a href={mp4Path}>link to the video</a> instead.
            </p>
          </Video>
        )}
      </div>
    </VideoContainer>
  );
};

const TennisWrap = styled.div`
  ${mixins.respondTo.md`  
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: flex-end;
  `}

  > div {
    position: relative;
    min-height: ${mixins.scale(16)};
  }

  ${Band} {
    display: flex;
    align-items: center;
  }
`;

const TennisContainer = styled(Container)`
  max-width: ${toRem(700)};
`;

const Tennis = () => (
  <TennisWrap>
    <Band>
      <TennisContainer>
        <h3>Me in a nutshell</h3>

        <p>
          I'm a UI developer from Birmingham with over 6 years commercial
          experience woking across a range of industries. This has included
          leading a large UI rebuild for npower and building financial web
          applications for various banks across the world for Vermeg.
        </p>

        <p>
          As you can see, I love to play tennis in my spare time (recognise the
          court?). Once upon a time I played at national level, was Warwickshire
          county champion, represented Great Britain at junior level, and
          achieved a world ranking at the dizzy heights of 1744.
        </p>
      </TennisContainer>
    </Band>
    <div>
      <TennisVideo />
    </div>
  </TennisWrap>
);

export default Tennis;
