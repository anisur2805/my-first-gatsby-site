import * as React from "react";
import {Link} from "gatsby";
import Layout from "../components/layout";

import {StaticImage} from "gatsby-plugin-image";
// styles
const containerStyles = {
	maxWidth: 1200,
	width: "100%",
	margin: "0 auto",
};
const backButtonStyle = {
	backgroundColor: "#333",
	color: "#fff",
	borderRadius: 4,
	fontWeight: "500",
	fontSize: 16,
	verticalAlign: "5%",
	margin: "10px 5px",
	textDecoration: "none",
	display: "inline-block",
	padding: "10px 15px",
};

// markup
const AboutPage = ({pageStyles}) => {
	return (
		<Layout pageTitle="About Us" mainStyle={containerStyles}>
			<p>Lorem ipsum dollar set amet. </p>
			<ul>
				<li>
					<a href="#">Item 1</a>
					<a href="#">Item 2</a>
				</li>
			</ul>

			<StaticImage
				// src="https://github.com/gatsbyjs/gatsby/raw/master/packages/gatsby-source-wordpress/docs/assets/gatsby-wapuus.png"
				src="../images/banner.jpg"
				alt="About Page Image"
				width={250}
				height={250}
				layout="fixed"
			/>
			<br />
			<Link to="/" style={backButtonStyle}>
				Go back to Home
			</Link>
		</Layout>
	);
};

export default AboutPage;
