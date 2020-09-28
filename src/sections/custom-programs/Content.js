import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Text, Section, Box, Span } from "../../components/Core";
import { device } from "../../utils";

const SectionStyled = styled(Section)``;

const ContentWidget = styled(Box)`
	border-radius: 10px;
	border: 1px solid #ddd;
	background-color: ${({ theme }) => theme.colors.light};
	padding: 20px 0;
	padding-left: 28px;
	padding-right: 55px;
	min-width: 100%;
	width: 100%;
	min-height: 90px;
	display: flex;
	align-items: center;
	transition: 0.4s;
	cursor: pointer;

	@media ${device.xl} {
		width: 360px;
		min-width: 360px;
	}
	@media ${device.md} {
		min-height: 89px;
	}

	i {
		font-size: 30px;
		color: #fff;
		position: absolute;
		right: 0;
		margin-right: 30px;
		opacity: 0;
		transition: 0.4s;
	}

	&:hover {
		box-shadow: 0 52px 54px rgba(25, 25, 27, 0.3);
		border-radius: 10px;
		border-color: ${({ theme }) => theme.colors.secondary};
		background-color: ${({ theme }) => theme.colors.secondary};
	}
	&:hover i {
		transform: translateX(10px);
		opacity: 1;
	}
`;

const ContentCard = ({ children = "" }) => {
	return (
		<ContentWidget>
			<div className="d-flex align-items-center">
				<Title variant="card" mb={0}>
					{children}
				</Title>
			</div>
			<i className="fas fa-chevron-circle-right"></i>
		</ContentWidget>
	);
};

const Content = () => {
	return (
		<>
			{/* <!-- Content section --> */}
			<SectionStyled>
				<Container>
					<Row className="justify-content-center mb-5">
						<Col lg="11">
							<div className="text-center">
								<Title>
									6 week program -
									<Span color="secondary">
										{" what you get "}
									</Span>
								</Title>
							</div>
						</Col>
					</Row>
					<Row className="justify-content-center mb-5">
						<Col lg="7">
							<div className="text-center">
								<Text>
									• Initial phone/text consultation to discuss
									the program that works for you
								</Text>
								<Text className="mt-4">
									• 2-4 sessions per week designed to
									continuously progress your training over the
									6 week period
								</Text>
								<Text className="mt-4">
									• Flexible design to ensure a balance with
									work and personal life
								</Text>
								<Text className="mt-4">
									• Weekly check-in to maintain consistency
									and motivation
								</Text>
								<Text className="mt-4">
									• Active recovery days included FREE to be
									taken when needed
								</Text>
							</div>
						</Col>
					</Row>
					<Row className="justify-content-center py-5">
						<Col lg="8">
							<div className="text-center">
								<h4 className="mb-4">6 week program</h4>
								<table className="table table-bordered">
									<thead>
										<tr>
											<td style={{ width: "50%" }}>
												Sessions per week
											</td>

											<td style={{ width: "50%" }}>
												Total Program Price
											</td>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>2 sessions</td>
											<td>£60</td>
										</tr>
										<tr>
											<td>3 sessions</td>
											<td>£66</td>
										</tr>
										<tr>
											<td>4 sessions</td>
											<td>£70</td>
										</tr>
									</tbody>
								</table>
							</div>
						</Col>
					</Row>
				</Container>
			</SectionStyled>
		</>
	);
};

export default Content;
