import React from "react";

import PageWrapper from "../components/PageWrapper";

import Hero from "../sections/sandc/Hero";
import Features from "../sections/sandc/Features";
import Content1 from "../sections/sandc/Content1";
import Content2 from "../sections/sandc/Content2";
import Content3 from "../sections/sandc/Content3";
import CTA from "../sections/sandc/Contact";

const StrengthAndConditioning = () => {
	return (
		<>
			<PageWrapper headerDark footerDark>
				<Hero />
				<Features />
				<Content1 />
				<Content2 />
				<Content3 />
				<CTA />
			</PageWrapper>
		</>
	);
};
export default StrengthAndConditioning;
