import React from "react";

import PageWrapper from "../components/PageWrapper";
import Reviews from "../sections/common/Reviews";

import Hero from "../sections/personal-training/Hero";
import Features from "../sections/personal-training/Features";
import Content1 from "../sections/personal-training/Content1";
import Content2 from "../sections/personal-training/Content2";
import Pricing from "../sections/personal-training/Pricing";
import CTA from "../sections/personal-training/Contact";

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
