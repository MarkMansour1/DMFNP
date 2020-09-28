import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";

import imgL1FeatureOval from "../../assets/image/png/l1-feature-oval.png";
import imgL1FeatureCurve from "../../assets/image/svg/l1-curve-feature.svg";

import imgContentMobile from "../../assets/image/png/content-img1--mobile.webp";

import img from "../../img/custom.png";

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
				<Row className="align-items-start">
					<Col lg="8" xl="7">
						<Title color="light">Custom Training Programs</Title>
						<Text mb={4} color="light" opacity={0.9}>
							Training tailored to your lifestyle and goals, with
							continuous online support to keep you on track.
						</Text>
					</Col>
					<Col
						lg="4"
						xl="5"
						className="d-flex  justify-content-lg-end mt-4 mt-lg-0">
						<Link to="/custom-programs">
							<Button variant="outline" mt={5} mb={2}>
								Find out more 
							</Button>
						</Link>
					</Col>
				</Row>
			</Container>
		</Section>
	</>
);

export default Feature;
