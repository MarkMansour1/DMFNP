import React from "react";

import PageWrapper from "../components/PageWrapper";

import Hero from "../sections/strength-and-conditioning/Hero";
import Features from "../sections/strength-and-conditioning/Features";
import Content1 from "../sections/strength-and-conditioning/Content1";
import Content2 from "../sections/strength-and-conditioning/Content2";
import Content3 from "../sections/strength-and-conditioning/Content3";
import CTA from "../sections/strength-and-conditioning/Contact";

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
