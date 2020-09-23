import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { Section, Title, Text } from "../../components/Core";
import CaseList from "../case-study/CaseList1";

const ProgramList = () => {
	return (
		<>
			<Section className="pb-0">
				<div className="pt-5"></div>
				<Container>
					<Row className="justify-content-center text-center">
						<Col lg="6">
							<Title variant="hero">All Programs</Title>
							<Text>
								Aliqua deserunt laborum dolor voluptate
								occaecat. Quis id sunt culpa amet sit nisi
								officia culpa.
							</Text>
						</Col>
					</Row>
				</Container>
			</Section>
			<CaseList />
		</>
	);
};

export default ProgramList;
