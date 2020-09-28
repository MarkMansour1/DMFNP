import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import {
	Title,
	Button,
	Section,
	Box,
	Text,
	Input,
} from "../../components/Core";

import imgOval from "../../assets/image/png/l1-cta-oval.png";
import svgCurve from "../../assets/image/svg/l1-curve-cta.svg";

const LeftCard = styled(Box)`
	position: absolute;
	top: 0;
	left: 0px;
`;

const RightCard = styled(Box)`
	position: absolute;
	top: 0;
	right: -275px;
`;

const CTA = () => (
	<>
		{/* <!-- CTA section --> */}
		<Section bg="dark" className="position-relative">
			<LeftCard>
				<img src={imgOval} alt="" className="img-fluid" />
			</LeftCard>
			<RightCard>
				<img src={svgCurve} alt="" className="img-fluid" />
			</RightCard>
			<Container>
				<Row className="justify-content-center">
					<Col lg="7" xl="6">
						<Box mb={5} className="text-center">
							<Title color="light">
								Don’t leave results to chance - start today!
							</Title>
							{/* <Text color="light" opacity={0.7}>
								Starte
							</Text> */}
						</Box>
						<div className="text-center">
							<Link to="/contact">
								<Button>Get in touch</Button>
							</Link>
						</div>
					</Col>
				</Row>
			</Container>
		</Section>
	</>
);

export default CTA;
