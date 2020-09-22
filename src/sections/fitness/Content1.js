import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";

import imgC1 from "../../assets/image/jpeg/l7-content2-image-1.jpg";
import imgC2 from "../../assets/image/jpeg/l7-content2-image-2.jpg";
import imgC3 from "../../assets/image/jpeg/l7-content2-image-3.jpg";
import imgC4 from "../../assets/image/jpeg/l7-content2-image-4.jpg";

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
										src={imgC1}
										alt=""
										className="img-fluid"
										data-aos="zoom-in"
										data-aos-duration="750"
										data-aos-once="true"
									/>
									<img
										src={imgC2}
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
										src={imgC3}
										alt=""
										className="img-fluid"
										data-aos="zoom-in"
										data-aos-duration="750"
										data-aos-delay="1000"
										data-aos-once="true"
									/>
									<img
										src={imgC4}
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
								<Title>
									Sit labore quis &amp;{" "}
									<br className="d-none d-sm-block d-md-none d-xl-block" />
									non cillum duis.
								</Title>
								<Text>
									Id anim est reprehenderit ad exercitation
									consectetur magna commodo voluptate ea
									proident est consectetur.
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
