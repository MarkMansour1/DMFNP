import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import {
	Title,
	Button,
	Section,
	Box,
	Text,
	Input,
	Select,
} from "../components/Core";

import PageWrapper from "../components/PageWrapper";

const FormStyled = styled.form``;

const Contact1 = () => {
	return (
		<>
			<PageWrapper>
				<Section className="mt-4">
					<Container>
						<Row className="align-items-center">
							<Col lg="6">
								<FormStyled
									onSubmit={(e) => {
										e.preventDefault();
										alert("sent");
									}}>
									<Box mb={5}>
										<Title>
											Don’t leave results to chance -
											start today!
										</Title>
									</Box>
									<Box mb={4}>
										<Input
											type="text"
											id="nameput"
											placeholder="Your name"
										/>
									</Box>
									<Box mb={4}>
										<Input
											type="email"
											id="emailput"
											placeholder="Your email"
										/>
									</Box>
									<Box mb={4}>
										<Select
											id="serviceput"
											name="serviceput"
											options={[
												{
													value: "",
													label:
														"What service are you interested in?",
													isDisabled: true,
												},
												{
													value: "personal-training",
													label: "Personal Training",
												},
												{
													value:
														"strength-and-conditioning",
													label:
														"Strength and Conditioning",
												},
												{
													value: "program",
													label: "Programs",
												},
											]}
										/>
									</Box>
									<Box mb={4}>
										<Input
											type="text"
											as="textarea"
											placeholder="Write your message here"
											rows={4}
											id="messageput"
										/>
									</Box>
									<Button
										width="100%"
										type="submit"
										borderRadius={10}>
										Send Message
									</Button>
								</FormStyled>
							</Col>
							<Col
								lg={5}
								className="offset-lg-1 order-lg-2 mt-5 mt-lg-0 pt-lg-5">
								<Box className="mb-5">
									<Title variant="card" fontSize="24px">
										Call us
									</Title>
									<Text>+44 123 456 789</Text>
								</Box>
								<Box className="mb-5">
									<Title variant="card" fontSize="24px">
										Email us
									</Title>
									<Text>email@gmail.com</Text>
								</Box>
								<Box className="mb-5">
									<Title variant="card" fontSize="24px">
										Location
									</Title>
									<Text>34 Earl's Court Road</Text>
									<Text>SW5 9LZ</Text>
								</Box>
							</Col>
						</Row>
					</Container>
				</Section>
			</PageWrapper>
		</>
	);
};
export default Contact1;
