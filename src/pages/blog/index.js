import * as React from "react";
import {Link, graphql} from "gatsby";
import Layout from "../../components/layout";

// styles
const articleStyles = {
	background: "#ddd",
	borderRadius: "4px",
	padding: "20px",
	margin: "0 0 10px",
};

const articleTitleStyles = {
	margin: "0 0 10px",
};
const articleDescStyles = {
	margin: "0",
};
const containerStyles = {
	maxWidth: 1200,
	width: "100%",
	margin: "0 auto",
};

const BlogPage = ({data}) => {
	return (
		<Layout pageTitle="My Blog Posts" mainStyle={containerStyles}>
			<h3>All Posts</h3>
			<p>My cool posts will go in here</p>
			{data.allMdx.nodes.map((node) => (
				<article key={node.id} style={articleStyles}>
					<h2 style={articleTitleStyles}>
						<Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
					</h2>
					<p style={articleDescStyles}>Posted: {node.frontmatter.date}</p>
				</article>
			))}
		</Layout>
	);
};

export const query = graphql`
	query {
		allMdx(sort: {fields: frontmatter___date, order: DESC}) {
			nodes {
				frontmatter {
					date(formatString: "MMMM D, YYYY")
					title
				}
				id
				slug
			}
		}
	}
`;

export default BlogPage;
