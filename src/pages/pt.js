import React from "react";

import PageWrapper from "../components/PageWrapper";
import Reviews from "../sections/common/Reviews";

import Hero from "../sections/fitness/Hero";
import Features from "../sections/fitness/Features";
import Content1 from "../sections/fitness/Content1";
import Content2 from "../sections/fitness/Content2";
import Pricing from "../sections/fitness/Pricing";
import CTA from "../sections/fitness/Contact";

const PersonalTraining = () => {
	return (
		<>
			<PageWrapper>
				<Hero />
				<Features />
				<Content1 />
				<Content2 />
				<Pricing />
				<Reviews />
				<CTA />
			</PageWrapper>
		</>
	);
};

export default PersonalTraining;
