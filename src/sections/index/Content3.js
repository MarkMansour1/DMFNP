import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";
import imgContentMobile from "../../assets/image/png/content-img1--mobile.webp";

import img from "../../img/index3.png";

const ShapeCard = styled(Box)`
	width: 305px;
	box-shadow: 0 32px 34px rgba(28, 27, 32, 0.2);
	position: absolute;
	top: 52%;
	left: 0%;
	transform: scale(0.85);
	@media ${device.sm} {
		left: 0;
		transform: scale(1);
	}
	@media ${device.md} {
		left: 0%;
	}
`;

const Content = () => (
	<>
		{/* <!-- Content section 1 --> */}
		<Section>
			<Container>
				<Row className="align-items-center">
					<Col md="12" lg="6" className="order-lg-2">
						<div className="position-relative pl-lg-5">
							<div
								className="pl-lg-4 text-center text-lg-right"
								data-aos="fade-down"
								data-aos-duration="750"
								data-aos-once="true">
								<img src={img} alt="" className="img-fluid" />
							</div>
						</div>
					</Col>
					<Col lg="6" className="order-lg-1 mt-5 mt-lg-0">
						<div
							data-aos="fade-right"
							data-aos-duration="750"
							data-aos-once="true">
							<Box>
								<Title>Programs</Title>
								<Text mb={4}>
									Take the guesswork out of achieving your
									results. Find a program to fit your needs,
									or have a custom program created.
								</Text>
								<Link to="/programs">
									<Button mt={3}>Find out more</Button>
								</Link>
							</Box>
						</div>
					</Col>
				</Row>
			</Container>
		</Section>
	</>
);

export default Content;
