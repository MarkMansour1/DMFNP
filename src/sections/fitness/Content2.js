import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text, Button } from "../../components/Core";

import imgPhone from "../../assets/image/png/l7-mobile-2.png";

const SectionStyled = styled(Section)``;

const Content2 = () => {
	return (
		<>
			{/* <!-- Content2 section --> */}
			<SectionStyled>
				<Container>
					<Row className="align-items-center">
						<Col lg="6" className="mb-4 mb-lg-0 pl-lg-5 order-lg-2">
							<div
								data-aos="fade-right"
								data-aos-duration="750"
								data-aos-delay="500"
								data-aos-once="true">
								<img
									src={imgPhone}
									alt=""
									className="img-fluid"
								/>
							</div>
						</Col>
						<Col lg="6" md={9} className="order-lg-1">
							<div>
								<Title>
									Tempor sint est{" "}
									<br className="d-none d-sm-block d-md-none d-xl-block" />{" "}
									aute voluptate qui.
								</Title>
								<Text>
									Sint ad consectetur ipsum irure. Est laboris
									ex enim mollit ut fugiat esse exercitation
									sint cupidatat sint exercitation. Nisi
									laboris laborum nostrud.
								</Text>
								<Box mt={4}>
									<Button>Button text</Button>
								</Box>
							</div>
						</Col>
					</Row>
				</Container>
			</SectionStyled>
		</>
	);
};

export default Content2;
