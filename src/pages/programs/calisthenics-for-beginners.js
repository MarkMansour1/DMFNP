import React from "react";

import PageWrapper from "../../components/PageWrapper";

import Product from "../../sections/programs/Product";

import program from "../../img/featuredprogram.png";

const Program = () => {
	const name = "Calisthenics for beginners";
	const img = program;
	const features = [
		"First steps towards mastering your bodyweight and unlocking your potential strength",
		"High intensity circuit style to build lean muscle, while burning fat",
		"Each session includes rehabilitating exercises to fix posture and mobility, freeing you to move better",
	];

	return (
		<>
			<PageWrapper>
				<Product img={img} name={name} features={features} />
			</PageWrapper>
		</>
	);
};

export default Program;
