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

const Contact1 = () => {
	return (
		<>
			<PageWrapper>
				<Section className="mt-4">
					<Container>
						<Row className="align-items-center">
							<Col lg="6">
								<form
									name="contact"
									method="POST"
									action="/personal-training"
									data-netlify="true">
									<input
										type="hidden"
										name="form-name"
										value="contact"
									/>
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
								</form>
							</Col>
							<Col
								lg={5}
								className="offset-lg-1 order-lg-2 mt-5 mt-lg-0 pt-lg-5">
								<Box className="mb-5">
									<Title variant="card" fontSize="24px">
										Phone
									</Title>
									<Text>+44 790 325 4513</Text>
								</Box>
								<Box className="mb-5">
									<Title variant="card" fontSize="24px">
										Email
									</Title>
									<Text>danielmansour14@gmail.com</Text>
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
