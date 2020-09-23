import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Text } from "../../components/Core";

import imgContent from "../../img/sandc2.png";

const SectionStyled = styled(Section)`
	border-bottom: 1px solid #242427;
`;

const Content3 = () => (
	<>
		<SectionStyled bg="dark">
			<Container>
				<Row className="justify-content-center align-items-center">
					<Col lg="5" className="offset-lg-1 order-lg-2 mb-5 mb-lg-0">
						<div>
							<div
								data-aos="zoom-out"
								data-aos-duration="750"
								data-aos-once="true"
								data-aos-delay="500">
								<img
									src={imgContent}
									alt=""
									className="img-fluid"
								/>
							</div>
						</div>
					</Col>
					<Col
						md="10"
						lg="6"
						className="order-lg-1"
						data-aos="fade-right"
						data-aos-duration="750"
						data-aos-once="true">
						<div>
							<Title color="light">
								Dolor nisi quis esse do et.
							</Title>
							<Text color="lightShade">
								Exercitation amet nulla laborum ipsum irure
								minim consectetur dolor. Aliquip culpa deserunt
								veniam commodo consectetur cupidatat minim non.
							</Text>
							<div className="mt-5">
								<Button>Button text</Button>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</SectionStyled>
	</>
);

export default Content3;
