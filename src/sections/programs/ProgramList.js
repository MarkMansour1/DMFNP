import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { Section, Title, Text } from "../../components/Core";

import PostCard from "../../components/PostCard";

import imgCase1 from "../../assets/image/jpeg/case-card-img.jpg";
import imgCase2 from "../../assets/image/jpeg/case-card-img-2.jpg";
import imgCase3 from "../../assets/image/jpeg/case-card-img-3.jpg";

import img1 from "../../img/program1.png";
import img2 from "../../img/program2.png";
import img3 from "../../img/program3.png";

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
								Channel your hard work and dedication into a
								carefully designed blueprint for success.
							</Text>
						</Col>
					</Row>
				</Container>
			</Section>
			<Section className="position-relative">
				<Container>
					<Row className="align-items-center justify-content-center">
						<Col lg="4" className="mb-5 mb-lg-0">
							<PostCard
								img={img1}
								title="Football Injury Prevention">
								- Focuses on common injuries amongst footballers
								- hamstrings, hip flexors and adductors
								<br /> - Designed to fit into an in-season
								training schedule
							</PostCard>
						</Col>
						<Col lg="4" className="mb-5 mb-lg-0">
							<PostCard
								img={img2}
								title="Speed, Agility, Quickness">
								- Improve movement mechanics to move quickly and
								efficiently in your sport
								<br />- Combines plyometrics, change of
								direction and fast feet drills
								<br />
								<br />
							</PostCard>
						</Col>
						<Col lg="4" className="mb-5 mb-lg-0">
							<PostCard img={img3} title="Total Strength Program">
								- Periodised training to improve compound lifts
								and gain absolute strength
								<br />- Works in season for athletes alongside
								training schedule
								<br />
								<br />
							</PostCard>
						</Col>
					</Row>
				</Container>
			</Section>
		</>
	);
};

export default ProgramList;
