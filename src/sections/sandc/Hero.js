import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";

import sprinter from "../../img/sprinter.png";

const Hero = () => {
	return (
		<>
			{/* <!-- Hero Area --> */}
			<Section bg="dark">
				<div className="pt-md-5"></div>
				<Container
					className="position-relative"
					css={`
						z-index: 10;
					`}>
					<Row>
						<Col md="6" lg="6" xl="5">
							<Box py={4}>
								<Text
									color="light"
									data-aos="fade-up"
									data-aos-duration="1500"
									data-aos-once="true"
									data-aos-delay="700"
									className="d-md-none d-lg-block">
									Officia dolor aute magna id id cillum
									tempor.
								</Text>
								<Title
									my={4}
									variant="hero"
									color="light"
									data-aos="fade-up"
									data-aos-duration="1500"
									data-aos-once="true"
									data-aos-delay="1000">
									Strength &{" "}
									<br className="d-none d-lg-block" />
									Conditioning
								</Title>
								<Box
									pt="12px"
									data-aos="fade-up"
									data-aos-duration="1500"
									data-aos-once="true"
									data-aos-delay="1300">
									<Button>Button text</Button>
								</Box>
							</Box>
						</Col>
						<Col
							md="6"
							lg="6"
							xl="7"
							style={{ position: "relative" }}>
							<div
								data-aos="fade-left"
								data-aos-duration="1500"
								data-aos-once="true"
								data-aos-delay="700"
								className="mt-5 mt-xl-0">
								<img
									src={sprinter}
									alt=""
									style={{
										width: "100%",
										opacity: "0.8",
									}}
								/>
							</div>
						</Col>
					</Row>
				</Container>
			</Section>
		</>
	);
};

export default Hero;
