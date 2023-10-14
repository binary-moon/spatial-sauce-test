const path = require("path")

module.exports = {
  siteMetadata: {
    title: "Spatial Sauce",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "G-0D9PH27LK1",
        includeInDevelopment: false
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/
        }
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "src", "images"),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/content`,
      },
    }
  ],
};
