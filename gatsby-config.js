const path = require('path');

module.exports = {
    siteMetadata: {
        title: `Alexandr Burlachenko`,
        description: `Personal page.`,
        author: `@alexandr`,
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        'gatsby-plugin-root-import',
        // `gatsby-plugin-layout`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `alexandr burlachenko`,
                short_name: `personal page`,
                start_url: `/`,
                background_color: `#1d4299`,
                theme_color: `#1d4299`,
                display: `minimal-ui`,
                icon: `src/images/favicon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
