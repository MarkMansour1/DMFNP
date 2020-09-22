import React from "react";

import PageWrapper from "../components/PageWrapper";

import Hero from "../sections/programs/Hero";
import ProgramList from "../sections/programs/ProgramList";
import Content from "../sections/programs/Content";
import Testimonial from "../sections/programs/Testimonial";
import CTA from "../sections/programs/CTA";

const Programs = () => {
	return (
		<>
			<PageWrapper>
				<Hero />
				{/* <Testimonial /> */}
				{/* <Content /> */}
				<ProgramList />
				<CTA />
			</PageWrapper>
		</>
	);
};

export default Programs;
