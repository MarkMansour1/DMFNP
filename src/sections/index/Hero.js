import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

import { Title, Button, Section, Box, Text } from "../../components/Core";

import svgHeroShape from "../../assets/image/svg/hero-shape-svg.svg";
import index from "../../img/index.png";

const ShapeTopLeft = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	transform: translate(-50%, -50%);
	z-index: 10;
`;

const StyledImage = styled.div`
	position: absolute;
	right: 0;
	bottom: 0;
`;

const Hero = () => {
	return (
		<>
			{/* <!-- Hero Area --> */}
			<Section>
				<ShapeTopLeft>
					<img src={svgHeroShape} alt="" className="img-fluid" />
				</ShapeTopLeft>
				<StyledImage>
					<img src={index} alt="" className="img-fluid" />
				</StyledImage>
				<div className="pt-md-5"></div>
				<Container
					className="position-relative"
					css={`
						z-index: 10;
					`}>
					<Row>
						{/* <Col
							md="6"
							lg="6"
							style={{ position: "relative" }}
							className="order-lg-2">
							<div
								data-aos="fade-left"
								data-aos-duration="1500"
								data-aos-once="true"
								data-aos-delay="700"
								className="mt-5">
								<img
									src={index}
									alt=""
									style={{
										width: "100%",
										opacity: "0.8",
									}}
								/>
							</div>
						</Col> */}
						<Col md="6" lg="6">
							<div
								data-aos="fade-right"
								data-aos-duration="750"
								data-aos-once="true"
								data-aos-delay="500">
								<Box
									py={[null, null, null, 5]}
									pr={5}
									pt={[4, null]}>
									<Title variant="hero">
										DM Fitness & Performance
									</Title>
									<Text mb={4}>
										Channel your hard work and dedication
										into professionally designed,
										science-backed training, to unlock your
										fitness and performance potential.
									</Text>
									<div className="d-flex flex-column align-items-start">
										<Link to="/contact">
											<Button mb={3}>Get Started</Button>
										</Link>
									</div>
								</Box>
							</div>
						</Col>
					</Row>
				</Container>
			</Section>
		</>
	);
};

export default Hero;
