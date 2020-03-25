import { GatsbyNode } from 'gatsby';
import path from 'path';

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions
}) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`./src/templates/blog-post.tsx`);
  const { data, errors } = await graphql<any, any>(`
    query {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  `);

  if (errors) {
    throw errors;
  }

  const posts = data.allMdx.nodes;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1];
    const next = index === 0 ? null : posts[index - 1];

    createPage({
      path: post.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: post.fields.slug,
        sdsdf: 'sddddd',
        previous,
        next
      }
    });
  });

  return null;
};
