import React from 'react';
import Band from '../components/band';
import Container from '../components/container';
import Heading from '../components/heading';
import SEO from '../components/seo';
import { graphql, Link } from 'gatsby';
import VerticalSpacing from '../components/vertical-spacing';

interface Props {
  data: {
    allMdx: {
      nodes: {
        id: string;
        fields: {
          slug: string;
        };
        frontmatter: {
          title: string;
          date: string;
          description: string;
        };
      }[];
    };
  };
}

const BlogPage: React.FC<Props> = ({ data }) => {
  const posts = data.allMdx.nodes;

  return (
    <>
      <SEO title="Blog" />
      <Band spacing={3}>
        <Container maxWidth={'sm'}>
          <Heading as="h1">Blog</Heading>
          {posts.length ? (
            posts.map(post => (
              <VerticalSpacing key={post.id} spacing={3} topOnly>
                <Heading as="h2" variant="h4">
                  <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                </Heading>
                <Heading as="h3" variant="h6" isSubheading>
                  {post.frontmatter.date}
                </Heading>
                <p>{post.frontmatter.description}</p>
              </VerticalSpacing>
            ))
          ) : (
            <p>There are currently no blog posts.</p>
          )}
        </Container>
      </Band>
    </>
  );
};

export const query = graphql`
  query {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MMMM Do, YYYY")
          description
        }
      }
    }
  }
`;

export default BlogPage;
