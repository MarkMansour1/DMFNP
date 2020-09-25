import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";

import imgL1FeatureOval from "../../assets/image/png/l1-feature-oval.png";
import imgL1FeatureCurve from "../../assets/image/svg/l1-curve-feature.svg";

import imgContentMobile from "../../assets/image/png/content-img1--mobile.webp";

import img from "../../img/index1.png";

const ShapeTopRight = styled(Box)`
	position: absolute;
	top: 0;
	right: 0px;
`;

const ShapeBottmRight = styled(Box)`
	position: absolute;
	bottom: -10px;
	left: 0;
	width: 100%;
	img {
		min-width: 100%;
	}
`;

const FeatureCard = ({
	color = "primary",
	iconName,
	title,
	children,
	...rest
}) => (
	<Box bg="light" py="25px" px="30px" borderRadius={10} mb={4} {...rest}>
		<Box
			size={69}
			borderRadius="50%"
			color={color}
			fontSize="28px"
			className="d-flex justify-content-center align-items-center"
			css={`
				background-color: ${({ theme, color }) =>
					rgba(theme.colors[color], 0.1)};
			`}>
			<i className={`icon ${iconName}`}></i>
		</Box>
		<div>
			<Text
				color="heading"
				as="h3"
				fontSize={4}
				fontWeight={500}
				letterSpacing={-0.75}
				my={3}>
				{title}
			</Text>
			<Text fontSize={2} lineHeight={1.75}>
				{children}
			</Text>
		</div>
	</Box>
);

const Feature = () => (
	<>
		{/* <!-- Feature section --> */}
		<Section bg="secondary" className="position-relative">
			<ShapeBottmRight>
				<img src={imgL1FeatureCurve} alt="" className="img-fluid" />
			</ShapeBottmRight>
			<Container>
				<Row className="align-items-center">
					<Col lg="5" md="9" sm="10" className="mb-5 mb-lg-0">
						<div className="position-relative">
							<div
								data-aos="fade-down"
								data-aos-duration="750"
								data-aos-once="true">
								<img src={img} alt="" className="img-fluid" />
							</div>
						</div>
					</Col>
					<Col lg="7">
						<div
							data-aos="fade-left"
							data-aos-duration="750"
							data-aos-once="true">
							<div className="content-text pl-lg--50">
								<div className="section-title">
									<Title color="light">
										Personal Training
									</Title>
									<Text color="light" mb={4}>
										One to one personal training expertly
										designed to fit with your schedule and
										improve your lifestyle. Each session
										will push you to your limits, and closer
										to your goals.
									</Text>
								</div>
								<div className="mt-5">
									{/* <ContentCard
										title="50+ Unique Design Blocks"
										color="primary"
										iconName="icon-cards-2"
										mb={3}>
										with Carefully Coded
									</ContentCard>
									<ContentCard
										title="Mobile First Design
"
										color="secondary"
										iconName="icon-phone-charging-3-2">
										on Every Devices
									</ContentCard> */}
									<Link to="/personal-training">
										<Button variant="outline" mt={3}>
											Find out more
										</Button>
									</Link>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</Section>
	</>
);

export default Feature;
