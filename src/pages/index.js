import React from "react";

import PageWrapper from "../components/PageWrapper";
import CTA from "../sections/common/CTA";

import Hero from "../sections/index/Hero";

const IndexPage = () => {
	return (
		<>
			<PageWrapper>
				<Hero />
				<CTA />
			</PageWrapper>
		</>
	);
};

export default IndexPage;
