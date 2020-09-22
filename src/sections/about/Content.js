import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";

import imgContent1 from "../../img/about1.png";
import imgContent2 from "../../img/about2.png";

const ContentImg = styled(Box)`
	box-shadow: ${({ theme }) => `0 42px 54px ${theme.colors.shadow}`};
	border-radius: 10px;
	overflow: hidden;
	max-height: 515px;
`;

const Content = () => (
	<>
		<Section>
			<Container>
				<Row className="justify-content-center pt-5 pb-4">
					<Col lg="6">
						<Title variant="hero">About Us</Title>
					</Col>
					<Col lg="6" className="pl-lg-5">
						<Text>
							Adipisicing elit nulla mollit dolore et voluptate.
							Duis deserunt proident eiusmod adipisicing quis elit
							fugiat aliquip.
						</Text>
					</Col>
				</Row>
				<Row className="mt-5">
					<Col lg="4" sm="5" className="mb-4 ">
						<ContentImg>
							<img
								src={imgContent1}
								alt=""
								className="img-fluid"
							/>
						</ContentImg>
					</Col>
					<Col lg="8" sm="7" className="mb-4">
						<ContentImg>
							<img
								src={imgContent2}
								alt=""
								className="img-fluid"
							/>
						</ContentImg>
					</Col>
				</Row>
			</Container>
		</Section>
	</>
);

export default Content;
