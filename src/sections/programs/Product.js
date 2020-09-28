import React, { useEffect } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text, Span } from "../../components/Core";

import { device } from "../../utils";

const ImgRight = styled(Box)`
	max-width: 80%;
	margin-left: -35px;
	@media ${device.sm} {
		max-width: unset;
		margin-left: -35px;
		position: relative;
		left: -35px;
	}
	@media ${device.md} {
		margin-left: -85px;
		position: relative;
		left: -35px;
	}
`;

const ULStyled = styled.ul`
	list-style: none;
	margin: 0;
	padding-top: 0;
	padding-left: 0;

	li {
		&:nth-child(odd) {
			@media ${device.sm} {
				margin-right: 40px;
			}
		}
		font-weight: 400;
		letter-spacing: -0.66px;
		line-height: 45px;
		display: flex;
		margin-bottom: 5px;

		&:before {
			content: "-";
			margin-right: 13px;
		}
	}
`;

const Product = (props) => {
	const { img, name, features } = props;

	return (
		<>
			{/* <!-- Hero Area --> */}
			<Section className="position-relative">
				<div className="pt-5"></div>
				<Container>
					<Row className="position-relative">
						<Col
							md="6"
							className="position-static"
							data-aos="fade-right"
							data-aos-duration="750"
							data-aos-delay="500"
							data-aos-once="true">
							<ImgRight>
								<div className=" w-75 ml-auto">
									<img
										src={img}
										alt=""
										className="img-fluid"
									/>
								</div>
							</ImgRight>
						</Col>
						<Col md="6">
							<div
								data-aos="fade-left"
								data-aos-duration="750"
								data-aos-delay="500"
								data-aos-once="true">
								<Box pt={[4, null, null, 0]} pl={5}>
									<h2 className="text-dark mb-4">{name}</h2>
									{features && (
										<Box mb={3}>
											<ULStyled>
												{features.map((feature) => (
													<li key={feature}>
														{feature}
													</li>
												))}
											</ULStyled>
										</Box>
									)}
									<h3 className="my-4">£30</h3>
									<div id="smart-button-container">
										<div id="paypal-button-container"></div>
									</div>
								</Box>
							</div>
						</Col>
					</Row>
				</Container>
			</Section>
		</>
	);
};

export default Product;
