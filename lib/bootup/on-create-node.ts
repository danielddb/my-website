import { GatsbyNode } from 'gatsby';
import { createFilePath } from 'gatsby-source-filesystem';

export const onCreateNode: GatsbyNode['onCreateNode'] = ({
  node,
  getNode,
  actions
}) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const basePath = 'blog';
    const slug = `/${basePath}${createFilePath({
      node,
      getNode,
      basePath
    })}`;

    createNodeField({
      node,
      name: 'slug',
      value: slug
    });
  }
};
