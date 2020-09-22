import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/common/Hero";
import Reviews from "../sections/common/Reviews";
import CTA from "../sections/common/CTA";

import Content from "../sections/about/Content";
import Author from "../sections/about/Author";

const About = () => {
	return (
		<>
			<PageWrapper>
				{/* <Hero title="About us">
					Magna in irure aute dolore esse adipisicing id adipisicing
					enim qui. Qui laborum irure consequat cillum laboris ipsum
					id aliquip proident.
				</Hero> */}
				<Content />
				<Author />
				<Reviews white={true} />
				<CTA />
			</PageWrapper>
		</>
	);
};
export default About;
