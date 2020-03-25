import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Band from '../components/band';
import Container from '../components/container';
import Heading from '../components/heading';
import SEO from '../components/seo';
import styled from 'styled-components';
import BioSummary from '../components/bio-summary';
import { spacingUnitMajorPx } from '../themes/variables';
import { toRem } from '../themes/functions';

const NextPreviousLinks = styled.ul`
  list-style: none;
  margin-bottom: ${toRem(spacingUnitMajorPx * -1)};
  margin-left: ${toRem(spacingUnitMajorPx * -2)};
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const NextPreviousLinkItem = styled.li`
  padding-bottom: ${toRem(spacingUnitMajorPx)};
  padding-left: ${toRem(spacingUnitMajorPx * 2)};
`;

const BlogPost = ({ data, pageContext }) => {
  const post = data.mdx;
  const { previous, next } = pageContext;

  return (
    <>
      <SEO title={post.frontmatter.title} />
      <Band spacing={2}>
        <Container maxWidth={'sm'}>
          <Heading as="h1">{post.frontmatter.title}</Heading>
          <Heading as="h3" variant="h6" isSubheading>
            {post.frontmatter.date}
          </Heading>
          <MDXRenderer>{post.body}</MDXRenderer>
        </Container>
      </Band>
      {(next || previous) && (
        <Band spacing={2}>
          <Container maxWidth={'sm'}>
            <NextPreviousLinks>
              {previous && (
                <NextPreviousLinkItem>
                  <Link to={previous.fields.slug} rel="prev">
                    Previous: {previous.frontmatter.title}
                  </Link>
                </NextPreviousLinkItem>
              )}
              {next && (
                <NextPreviousLinkItem>
                  <Link to={next.fields.slug} rel="next">
                    Next: {next.frontmatter.title}
                  </Link>
                </NextPreviousLinkItem>
              )}
            </NextPreviousLinks>
          </Container>
        </Band>
      )}
      <Band spacing={2}>
        <Container maxWidth={'sm'}>
          <BioSummary />
        </Container>
      </Band>
    </>
  );
};

export const query = graphql`
  query($slug: String!) {
    mdx(
      fields: { slug: { eq: $slug } }
      frontmatter: { published: { eq: true } }
    ) {
      body
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`;

export default BlogPost;
