import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import PageWrapper from "../components/PageWrapper";
import { Section, Title, Text, Box, List } from "../components/Core";

const TermsConditions = () => {
	return (
		<>
			<PageWrapper footerDark>
				<Section>
					<div className="pt-5"></div>
					<Container>
						<Row className="justify-content-center">
							<Col lg="9" xl="8">
								<Title
									variant="hero"
									className="text-center"
									mb="50px">
									Terms & Conditions
								</Title>
								<Title variant="card" fontSize="2rem" mb="30px">
									Heading
								</Title>
								<Text variant="small">
									Commodo aliqua est tempor enim anim esse
									fugiat anim. Elit nostrud aliqua nisi magna
									anim mollit reprehenderit sint. Mollit
									nostrud tempor Lorem ex fugiat ut veniam
									irure do. Occaecat magna id laboris fugiat
									sint reprehenderit ipsum nulla pariatur
									exercitation officia ea. Occaecat non aliqua
									ea occaecat et in consequat quis commodo qui
									aliqua. Do eu commodo pariatur in ipsum
									culpa occaecat sunt fugiat. Consectetur
									dolore sint nulla enim. Ut nisi elit in quis
									id. Eiusmod in aliquip aliqua in tempor
									cupidatat anim. Velit irure deserunt minim
									non esse minim in quis minim. Magna ad
									adipisicing fugiat minim cupidatat qui non
									do. Minim ex nisi officia officia esse dolor
									eiusmod nostrud aliqua ut veniam. Eu
									proident irure fugiat est dolore incididunt
									do dolore. Aute aute nisi ullamco cupidatat
									nulla nisi do velit cupidatat non.
								</Text>
								<Box mt={["40px", null, "50px"]}>
									<Title
										variant="card"
										fontSize="2rem"
										mb="30px">
										Heading
									</Title>
									<Text variant="small">
										Magna deserunt sit ut enim
										reprehenderit. Ullamco elit nulla non
										voluptate anim. Sit enim ea adipisicing
										consequat et. Exercitation ut elit
										nostrud sit dolor nulla ex ipsum do sit
										ipsum voluptate dolore. Aliqua velit
										consequat laborum dolore minim. In
										ullamco duis eu amet fugiat eu in
										excepteur dolor laboris aute. Sunt
										deserunt id consectetur Lorem quis
										laboris et. Officia fugiat in laborum
										velit et velit. Cillum pariatur
										cupidatat duis exercitation officia
										ullamco non est enim qui incididunt
										culpa. Sint irure duis ea cupidatat
										Lorem consequat ea Lorem id. Dolore
										veniam commodo in id eu. Est et laboris
										veniam duis nisi. Proident mollit
										nostrud minim est proident do irure
										consequat dolor velit do tempor dolor.
										Consequat magna elit officia nulla ad
										deserunt culpa. Est veniam qui pariatur
										labore enim est adipisicing aute officia
										consequat ut. Velit id duis duis
										cupidatat ullamco consequat voluptate.
									</Text>
								</Box>
								<Box mt={["40px", null, "50px"]}>
									<Title
										variant="card"
										fontSize="2rem"
										mb="30px">
										Heading
									</Title>
									<Text variant="small">
										Magna deserunt sit ut enim
										reprehenderit. Ullamco elit nulla non
										voluptate anim. Sit enim ea adipisicing
										consequat et. Exercitation ut elit
										nostrud sit dolor nulla ex ipsum do sit
										ipsum voluptate dolore. Aliqua velit
										consequat laborum dolore minim. In
										ullamco duis eu amet fugiat eu in
										excepteur dolor laboris aute. Sunt
										deserunt id consectetur Lorem quis
										laboris et. Officia fugiat in laborum
										velit et velit. Cillum pariatur
										cupidatat duis exercitation officia
										ullamco non est enim qui incididunt
										culpa. Sint irure duis ea cupidatat
										Lorem consequat ea Lorem id. Dolore
										veniam commodo in id eu. Est et laboris
										veniam duis nisi. Proident mollit
										nostrud minim est proident do irure
										consequat dolor velit do tempor dolor.
										Consequat magna elit officia nulla ad
										deserunt culpa. Est veniam qui pariatur
										labore enim est adipisicing aute officia
										consequat ut. Velit id duis duis
										cupidatat ullamco consequat voluptate.
									</Text>
								</Box>
							</Col>
						</Row>
					</Container>
				</Section>
			</PageWrapper>
		</>
	);
};
export default TermsConditions;
