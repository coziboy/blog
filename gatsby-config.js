module.exports = {
  siteMetadata: {
    title: `Geek IT Blog`,
    name: `Geek IT`,
    siteUrl: `https://coziboy.github.io/blog`,
    description: `Blog for geek people`,
    hero: {
      heading: `Welcome to Geek IT, a blog for Geek people.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/coziboy`,
      },
      {
        name: `github`,
        url: `https://github.com/coziboy`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/eas.andreas`,
      },
    ],
  },
  pathPrefix: '/blog',
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
