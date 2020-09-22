import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";

const SectionStyled = styled(Section)`
	border-bottom: 1px solid #2d2d30;
	padding-bottom: 30px;
	padding-top: 0;
	@media ${device.md} {
		padding-bottom: 70px;
	}
`;

const Fact = () => (
	<>
		{/* <!-- Fact section 1 --> */}
		<SectionStyled bg="dark">
			<Container>
				<Row>
					<Col md="4" sm="6" className="mb-4 mb-md-0">
						<Box pr={4}>
							<Title color="light" mb="20px!important">
								Feature
							</Title>
							<Text color="lightShade">
								Incididunt excepteur aliquip irure incididunt
								elit exercitation.
							</Text>
						</Box>
					</Col>
					<Col md="4" sm="6" className="mb-4 mb-md-0">
						<Box>
							<Title color="light" mb="20px!important">
								Feature
							</Title>
							<Text color="lightShade">
								In adipisicing ea in ad sunt ad qui ullamco est
								Lorem eiusmod.
							</Text>
						</Box>
					</Col>
					<Col md="4" sm="6" className="mb-4 mb-md-0">
						<Box pl={[null, null, null, 4]}>
							<Title color="light" mb="20px!important">
								Feature
							</Title>
							<Text color="lightShade">
								Mollit qui ipsum. Est sunt eu occaecat amet.
							</Text>
						</Box>
					</Col>
				</Row>
			</Container>
		</SectionStyled>
	</>
);

export default Fact;
