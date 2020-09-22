import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section } from "../../components/Core";

const CTA = () => (
	<>
		<Section bg="secondary" className="position-relative">
			<Container>
				<Row>
					<Col lg="8" xl="7">
						<div>
							<Title color="light">Call to action.</Title>
						</div>
					</Col>
					<Col
						lg="4"
						xl="5"
						className="d-flex align-items-center justify-content-lg-end mt-4 mt-lg-0">
						<div>
							<Link to="/contact">
								<Button bg="warning" color="dark">
									Button text
								</Button>
							</Link>
						</div>
					</Col>
				</Row>
			</Container>
		</Section>
	</>
);

export default CTA;
