import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import { rgba } from "polished";
import styled from "styled-components";

import { Title, Button, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";

import svgCurve from "../../assets/image/svg/l1-curve-content2.svg";
import imgContentMobile from "../../assets/image/png/content-img2--mobile.webp";

import img from "../../img/index2.png";

const ShapeTop = styled(Box)`
	position: absolute;
	top: 0;
	left: -150px;
	img {
		min-width: 100%;
	}
`;

const ShapeCard = styled(Box)`
	width: 305px;
	box-shadow: ${({ theme }) => `0 32px 34px ${theme.colors.border}`};
	position: absolute;
	top: 20%;
	left: 0;
	z-index: 2;
	transform: scale(0.85);
	@media ${device.sm} {
		transform: scale(1);
		left: -14%;
	}
`;

const ContentCard = ({
	color = "primary",
	className,
	iconName,
	title,
	children,
	...rest
}) => (
	<Box
		width={360}
		bg="light"
		border="1px solid"
		borderColor="border"
		p="20px"
		borderRadius={10}
		className={`d-flex ${className}`}
		{...rest}
		css={`
			min-width: 100%;
			width: 100%;
			@media ${device.sm} {
				width: 360px;
				min-width: 360px;
			}
		`}>
		<Box
			size={55}
			minWidth={55}
			borderRadius="50%"
			color={color}
			fontSize="28px"
			className="d-flex justify-content-center align-items-center"
			css={`
				background-color: ${({ theme, color }) =>
					rgba(theme.colors[color], 0.1)};
			`}
			mr={3}>
			<i className={`icon ${iconName}`}></i>
		</Box>
		<div>
			<Title variant="card" mb={0}>
				{title}
			</Title>
			<Text>{children}</Text>
		</div>
	</Box>
);

const Content = () => (
	<>
		{/* <!-- Content section 2 --> */}
		<Section bg="#f7f7fb" className="position-relative">
			<ShapeTop>
				<img src={svgCurve} alt="" className="img-fluid" />
			</ShapeTop>
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
									<Title>Strength & Conditioning</Title>
									<Text mb={4}>
										Improve athletic performance with tailor
										made coaching to suit the individual
										goal- from amateur to professional
										levels.
									</Text>
								</div>
								<div className="mt-5">
									<Link to="/strength-and-conditioning">
										<Button mt={3}>Find out more</Button>
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

export default Content;
