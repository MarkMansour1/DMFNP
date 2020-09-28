import React from "react";

import PageWrapper from "../../components/PageWrapper";

import Hero from "../../sections/programs/Hero";
import ProgramList from "../../sections/programs/ProgramList";
import Content from "../../sections/programs/Content";
import Features from "../../sections/programs/Features";
import CTA from "../../sections/programs/CTA";

const Programs = () => {
	return (
		<>
			<PageWrapper>
				<Hero />
				{/* <Content /> */}
				{/* <Features /> */}
				<ProgramList />
				<CTA />
			</PageWrapper>
		</>
	);
};

export default Programs;
