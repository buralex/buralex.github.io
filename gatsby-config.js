module.exports = {
    siteMetadata: {
        title: `Alex Burlachenko`,
        description: `Personal page.`,
        author: `@buralex`,
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        'gatsby-plugin-root-import',
        {
            resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
            options: {
                analyzerPort: '3010',
            },
        },
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
                background_color: `#2755db`,
                theme_color: `#2755db`,
                display: `minimal-ui`,
                icon: `src/images/favicon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
