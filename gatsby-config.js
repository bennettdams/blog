require(`dotenv`).config({
    path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
    pathPrefix: `/blog`,
    siteMetadata: {
        author: 'TkDodo',
        siteTitle: "TkDodo's blog",
        siteTitleAlt: `TkDodo's blog`,
    },
    plugins: [
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-autolink-headers`,
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-autolink-headers`,
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 960,
                            quality: 90,
                            linkImagesToOriginal: false,
                        },
                    },
                ],
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 960,
                            quality: 90,
                            linkImagesToOriginal: false,
                        },
                    },
                ],
            },
        },
        {
            resolve: `@lekoarts/gatsby-theme-minimal-blog`,
            // See the theme's README for all available options
            options: {
                mdx: false,
                navigation: [
                    {
                        title: `Blog`,
                        slug: `/`,
                    },
                    {
                        title: `Rss`,
                        slug: `/rss.xml`,
                    },
                ],
                externalLinks: [
                    {
                        name: `Twitter`,
                        url: `https://twitter.com/tkdodo`,
                    },
                    {
                        name: `Github`,
                        url: `https://github.com/tkdodo`,
                    },
                    {
                        name: `Home`,
                        url: `https://www.dorfmeister.cc`,
                    },
                ],
                feed: true,
                feedTitle: "TkDodo's blog",
            },
        },
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `TkDodo's blog`,
                short_name: `tkdodo-blog`,
                description: `A technical blog about frontend-development, Typescript and React`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#a10f15`,
                display: `standalone`,
                icons: [
                    {
                        src: `/stack.png`,
                        sizes: `256x256`,
                        type: `image/png`,
                    },
                ],
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-netlify`,
        shouldAnalyseBundle && {
            resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
            options: {
                analyzerMode: `static`,
                reportFilename: `_bundle.html`,
                openAnalyzer: false,
            },
        },
    ].filter(Boolean),
}