import * as React from "react";
import {Link, useStaticQuery, graphql} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";

// styles
const linkStyle = {
	color: "#8954A8",
	fontWeight: "bold",
	fontSize: 16,
	verticalAlign: "5%",
	margin: "10px 5px",
	textDecoration: "none",
	display: "inline-block",
};

const link2Style = {
	color: "#fff",
	fontWeight: "bold",
	fontSize: 16,
	verticalAlign: "5%",
	margin: "10px 5px",
	textDecoration: "none",
	display: "inline-block",
};

const logoStyles = {
	width: 60,
	height: "auto",
	display: "block",
};

const navStyles = {
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	margin: "20px 0",
};

const bannerStyles = {
	background: "#371777",
	color: "#fff",
	padding: "100px ",
	textAlign: "center",
};

const logoWrapStyles = {
	display: "flex",
	flexDirection: "column",
};

const footerStyles = {
	textAlign: "center",
	background: "#ddd",
	padding: " 10px 0 "
}
const Layout = ({pageTitle, children, mainStyle}) => {
	const _date = new Date().getFullYear();
	
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					description
				}
			}
		}
	`);
	return (
		<div style={mainStyle}>
			<title>
				{pageTitle} | {data.site.siteMetadata.title}
			</title>
			{/* <header>{data.site.siteMetadata.title}</header> */}

			<div style={navStyles}>
				<div style={logoWrapStyles}>
					<Link to={data.site.siteMetadata.siteUrl}>
						<StaticImage style={logoStyles} src="../images/logo.jpg" alt="Logo" />
					</Link>
					<p>{data.site.siteMetadata.description}</p>
				</div>
				<nav>
					<Link style={linkStyle} to="/">
						Home
					</Link>
					<Link style={linkStyle} to="/about">
						About Us
					</Link>
					<Link style={linkStyle} to="/blog">
						Blog
					</Link>
				</nav>
			</div>
			
			<main>
				<div style={bannerStyles}>
					<h1>{pageTitle}</h1>
					<span>
						<Link style={link2Style} to="/">
							Home
						</Link>
						/ {pageTitle}
					</span>
				</div>
				{children}
			</main>
			
			<footer style={footerStyles}>
				<p>@copyright {_date}. </p>
				<p>Powered by Gatsby. Made with <span style={{color: "#c00", fontSize: "14px"}}>❤️</span> </p>
			</footer>
		</div>
	);
};

export default Layout;
