require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const secretSanityToken = process.env.SANITY_READ_TOKEN;
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  siteMetadata: {
    title: `Dagpenger - www.nav.no`,
    description: `Dagpenger som arbeidsledig eller permittert`,
    author: `NAV`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-typescript',
    'nav-decorator',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'rt6o382n',
        dataset: 'production',
        token: secretSanityToken,
        watchMode: !isProd,
        overlayDrafts: !isProd && secretSanityToken,
      },
    },
  ],
};
