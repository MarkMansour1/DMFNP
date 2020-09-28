import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import {
	Title,
	Button,
	Box,
	Text,
	Input,
	Select,
	Checkbox,
} from "../../components/Core";

import { device } from "../../utils";

import imgShape from "../../assets/image/svg/contact-shape.svg";

const BoxStyled = styled(Box)`
	border-top: 1px solid #e2e5e6;

	&::after {
		position: absolute;
		bottom: 0;
		left: 0;
		height: 49%;
		content: "";
		width: 100%;
		background: ${({ theme }) => theme.colors.secondary};
		z-index: 1;
	}
`;

const Shape = styled(Box)`
	position: absolute;
	width: 150%;
	bottom: 48%;
	left: -5%;

	@media ${device.lg} {
		bottom: 47%;
	}
`;

const FormStyled = styled.form`
	padding: 40px 30px;
	@media ${device.sm} {
		padding: 53px 58px 50px;
	}
	box-shadow: ${({ theme }) => `0 20px 61px ${theme.colors.shadow}`};
	border-radius: 10px;
	background-color: #f7f7fb;
	width: 100%;
`;

const AForgot = styled.a`
	color: ${({ theme }) => theme.colors.secondary} !important;
	text-decoration: none !important;
`;

const Contact = () => (
	<>
		<BoxStyled
			bg="#f7f7fb"
			pt={[0, null, null, 4]}
			pb={6}
			className="position-relative"
			id="contact">
			<Shape>
				<img src={imgShape} alt="" className="w-100 img-fluid" />
			</Shape>
			<Container
				css={`
					position: relative;
					z-index: 10;
				`}>
				<Row className="justify-content-center">
					<Col
						lg="9"
						xl="8"
						data-aos="fade-up"
						data-aos-duration="750"
						data-aos-once="true"
						data-aos-delay="500">
						<FormStyled>
							<div className="mb-5 text-center">
								<Title className="mb-2">Get in touch</Title>
								<Text>
									Fill out the form and we'll be in touch
									soon!
								</Text>
							</div>
							<Box mb={3}>
								<Input type="text" placeholder="Your name" />
							</Box>
							<Box mb={3}>
								<Input
									type="email"
									placeholder="Email address"
								/>
							</Box>
							{/* <Box mb={4}>
								<Select
									id="serviceput"
									name="serviceput"
									options={[
										{
											value: "",
											label: "Number of sessions",
											isDisabled: true,
										},
										{
											value: "single-session",
											label: "1 session",
										},
										{
											value: "four-sessions",
											label: "4 sessions",
										},
										{
											value: "eight-sessions",
											label: "8 sessions",
										},
									]}
								/>
							</Box> */}
							<Box mb={4} className="position-relative">
								<Input
									as="textarea"
									placeholder="Write your message here"
								/>
							</Box>
							<Button
								width="100%"
								type="submit"
								borderRadius={10}>
								Send
							</Button>
						</FormStyled>
					</Col>
				</Row>
			</Container>
		</BoxStyled>
	</>
);

export default Contact;
