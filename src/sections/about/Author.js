import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text, Span } from "../../components/Core";
import { device } from "../../utils";

import imgAuthor from "../../img/daniel.png";

const SectionStyled = styled(Section)``;

const Author = styled(Box)`
	min-width: 271px;
	max-width: 271px;
	min-height: 271px;
	max-height: 271px;
	border-radius: 500px;
	overflow: hidden;
	margin-bottom: 30px;
	@media ${device.lg} {
		margin-bottom: 0;
	}
`;

const Fact = () => (
	<>
		{/* <!-- Fact section 1 --> */}
		<SectionStyled bg="#f6f6f8">
			<Container>
				<Row>
					<Col xs="12" className="mb-5">
						<div className="text-center">
							<Title>About Daniel Mansour</Title>
						</div>
					</Col>
					<Col lg="4" className="offset-lg-1 mb-4 mb-lg-0">
						<Author>
							<img src={imgAuthor} alt="Author" />
						</Author>
					</Col>
					<Col lg="7" className="pr-lg-5">
						<div className="author-text">
							<Title variant="card" fontSize="24px">
								Economist, S&C Coach, Ex Greenford Trialist
							</Title>
							<Text variant="small" my={4}>
								Nostrud sint ad aute elit eiusmod ut qui ipsum
								ex. Tempor pariatur tempor duis anim incididunt.
								Et consectetur irure dolore voluptate mollit
								mollit commodo enim elit fugiat nulla. Fugiat
								consectetur consequat quis minim eiusmod nisi
								enim velit sint consequat.
							</Text>
							<Text variant="small">
								Nostrud adipisicing sint ut magna duis elit
								laborum pariatur et laboris id. Cupidatat
								adipisicing aute consequat duis ullamco aliquip
								exercitation exercitation sit nisi officia.
								Magna consequat anim mollit deserunt id.
								Deserunt deserunt quis ex velit.
							</Text>
							<Text variant="small" mt={4}>
								<Link to="/contact">
									<Span color="secondary">Contact Me</Span>
								</Link>
							</Text>
						</div>
					</Col>
				</Row>
			</Container>
		</SectionStyled>
	</>
);

export default Fact;
