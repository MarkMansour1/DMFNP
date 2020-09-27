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
		<SectionStyled>
			<Container>
				<Row>
					<Col xs="12" className="my-5">
						<div className="text-center">
							<Title>About Daniel</Title>
						</div>
					</Col>
					<Col lg="4" className="offset-lg-1 mb-4 mb-lg-0">
						<Author>
							<img src={imgAuthor} alt="Author" />
						</Author>
					</Col>
					<Col lg="7" className="pr-lg-5">
						<div className="author-text">
							{/* <Title variant="card" fontSize="24px">
								Officia aliqua cupidatat.
							</Title> */}
							<Text variant="small">
								Having worked in the fitness industry for
								several years now, my background is in personal
								training and competitive sport.
							</Text>
							<Text variant="small" my={4}>
								Playing semi professional football, studying a
								Strength and conditioning MSc and coaching a
								wide variety of clients has led to my approach
								of merging elements of the fitness and
								performance industries to provide the best of
								both.
							</Text>
							<Text variant="small" my={4}>
								My clients get the professional standards of
								elite level training, without losing the care
								and attention of a personal trainer.
							</Text>
							<Text variant="small">
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
