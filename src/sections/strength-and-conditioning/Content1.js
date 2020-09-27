import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text, Badge } from "../../components/Core";

import imgShape from "../../assets/image/png/content1-img-small.png";
import imgContent from "../../img/sandc1.png";

const SectionStyled = styled(Section)`
	border-top: 1px solid #242427;
`;

const ShapeBox = styled(Box)`
	position: absolute;
	top: -70px;
	left: -20px;
	z-index: 2;
`;

const Content1 = () => (
	<>
		<SectionStyled bg="dark">
			<Container>
				<Row className="justify-content-center align-items-center">
					<Col lg="6" className="my-5 my-lg-0">
						<div className="">
							<Box
								className=" "
								data-aos="zoom-out"
								data-aos-duration="750"
								data-aos-once="true"
								data-aos-delay="500">
								<img
									src={imgContent}
									alt=""
									className="img-fluid"
								/>
							</Box>
							<ShapeBox
								className=""
								data-aos="zoom-out"
								data-aos-duration="750"
								data-aos-once="true"
								data-aos-delay="500">
								<img
									src={imgShape}
									alt=""
									className="img-fluid"
									css={`
										opacity: 0.25;
									`}
								/>
							</ShapeBox>
						</div>
					</Col>
					<Col
						md="10"
						lg="6"
						className="mt-3 mt-lg-0"
						data-aos="fade-right"
						data-aos-duration="750"
						data-aos-once="true">
						<div className="mt-4">
							<Title color="light">S&C Coaching</Title>
							<Text color="lightShade">
								No matter what level you compete at, an athlete
								has the desire to improve and perform at their
								best. Through an initial testing process you can
								identify areas for progression- from movement
								mechanics, to strength or fitness. Become a
								faster, stronger, injury free athlete, fully
								prepared to meet the demands of your sport.
							</Text>
						</div>
					</Col>
				</Row>
			</Container>
		</SectionStyled>
	</>
);

export default Content1;
