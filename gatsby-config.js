require('ts-node').register({ files: true, project: './tsconfig.node.json' });

module.exports = {
  siteMetadata: {
    siteUrl: 'https://dandawsonbrown.com',
    title: `Dan Dawson-Brown`,
    description: `UI Developer from Brum - Dan Dawson-Brown`,
    author: `@daniel_ddb`,
    socials: [
      {
        name: 'GitHub',
        url: 'https://github.com/danielddb',
        icon: 'github'
      },
      {
        name: 'CodeSandbox',
        url: 'https://codesandbox.io/u/danielddb',
        icon: 'code-sandbox'
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/dandawsonbrown',
        icon: 'linkedin'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/fonts`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog'
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dan Dawson-Brown`,
        short_name: `dandawsonbrown`,
        start_url: `/`,
        background_color: `#101010`,
        theme_color: `#9b80d9`,
        display: `standalone`,
        icon: `src/images/icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          { resolve: 'gatsby-remark-copy-linked-files' },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200
            }
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow'
            }
          }
        ]
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        env: {
          production: {
            policy: [{ userAgent: '*' }]
          },
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          }
        }
      }
    }
    // uncomment when https://github.com/gatsbyjs/gatsby/issues/12536 is fixed
    // `gatsby-plugin-offline`
  ]
};
