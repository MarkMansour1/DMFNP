import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";

import imgC1 from "../../assets/image/jpeg/l7-content2-image-1.jpg";
import imgC2 from "../../assets/image/jpeg/l7-content2-image-2.jpg";
import imgC3 from "../../assets/image/jpeg/l7-content2-image-3.jpg";
import imgC4 from "../../assets/image/jpeg/l7-content2-image-4.jpg";

import img1 from "../../img/pt1.png";
import img2 from "../../img/pt2.png";
import img3 from "../../img/pt3.png";
import img4 from "../../img/pt4.png";

const SectionStyled = styled(Section)``;

const SingleImage = styled(Box)`
	display: flex;
	flex-direction: column;
	img {
		padding-bottom: 15px;
		padding-right: 15px;
		border-radius: 8px;
	}
`;

const Content1 = () => {
	return (
		<>
			{/* <!-- Content1 section --> */}
			<SectionStyled>
				<Container>
					<Row className="align-items-center">
						<Col lg="6" className="mb-4 mb-lg-0">
							<Box className="d-flex">
								<SingleImage>
									<img
										src={img1}
										alt=""
										className="img-fluid"
										data-aos="zoom-in"
										data-aos-duration="750"
										data-aos-once="true"
									/>
									<img
										src={img2}
										alt=""
										className="img-fluid"
										data-aos="zoom-in"
										data-aos-duration="750"
										data-aos-delay="500"
										data-aos-once="true"
									/>
								</SingleImage>
								<SingleImage>
									<img
										src={img3}
										alt=""
										className="img-fluid"
										data-aos="zoom-in"
										data-aos-duration="750"
										data-aos-delay="1000"
										data-aos-once="true"
									/>
									<img
										src={img4}
										alt=""
										className="img-fluid"
										data-aos="zoom-in"
										data-aos-duration="750"
										data-aos-delay="1500"
										data-aos-once="true"
									/>
								</SingleImage>
							</Box>
						</Col>
						<Col lg="6" md={9}>
							<div>
								<Text className="mb-3">
									Using a variety of methods each session will
									push you, test you and grow you.
								</Text>
								<Text className="mb-3">
									• Bodyweight methods such as calisthenics or
									Pilates exercises can improve posture, core
									strength and body control.
								</Text>
								<Text className="mb-3">
									• High intensity intervals will have you
									building lean muscle while shredding fat
									every session
								</Text>
								<Text>
									• Strength and conditioning methods ensure
									you can work around or even fix long term
									injuries which previously held you back from
									training.
								</Text>
							</div>
						</Col>
					</Row>
				</Container>
			</SectionStyled>
		</>
	);
};

export default Content1;
