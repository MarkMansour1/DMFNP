import React from "react";

import PageWrapper from "../components/PageWrapper";

import Hero from "../sections/index/Hero";

import Features from "../sections/index/Features";
import Content1 from "../sections/index/Content1";
import Content2 from "../sections/index/Content2";
import Content3 from "../sections/index/Content3";
import Reviews from "../sections/common/Reviews";
import CTA from "../sections/index/CTA";

const IndexPage = () => {
	return (
		<>
			<PageWrapper footerDark>
				<Hero />
				<Features />
				<Content1 />
				<Content2 />
				<Content3 />
				{/* <Reviews bg="white" /> */}
				<CTA />
			</PageWrapper>
		</>
	);
};

export default IndexPage;
