module.exports = {
	siteMetadata: {
		title: `My First Gatsby Site`,
		description: "A gatsby web site.",
		siteUrl: `https://myfirstgatsbysitemaster90213.gatsbyjs.io`,
	},
	plugins: [
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: `blog`,
				path: `${__dirname}/blog`,
			},
		},
		"gatsby-plugin-mdx",
	],
};
