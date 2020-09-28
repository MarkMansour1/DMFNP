import React from "react";

import PageWrapper from "../components/PageWrapper";
import Reviews from "../sections/common/Reviews";

import Hero from "../sections/custom-programs/Hero";
import Content from "../sections/custom-programs/Content";
import CTA from "../sections/custom-programs/Contact";

const PersonalTraining = () => {
	return (
		<>
			<PageWrapper>
				<Hero />
				<Content />
				<CTA />
			</PageWrapper>
		</>
	);
};

export default PersonalTraining;
