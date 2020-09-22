import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";

import { Title, Section, Box, Text } from "../../components/Core";
import { breakpoints } from "../../utils";

import imgC1 from "../../assets/image/jpeg/l1-customer2.jpg";
import imgC2 from "../../assets/image/jpeg/l1-customer3.jpg";

const SliderStyled = styled(Slider)`
	.slick-dots {
		position: relative;
		margin-top: 10px;
		li {
			font-size: 0;
			width: 17px;
			height: 8px;
			border-radius: 4px;
			background-color: ${({ theme }) => theme.colors.shadow};
			margin-left: 5px;
			margin-right: 5px;
			transition: 0.5s;
			&.slick-active {
				width: 45px;
				height: 8px;
				border-radius: 4px;
				background-color: ${({ theme }) => theme.colors.secondary};
			}
			button {
				width: 100%;
				height: 100%;
				&:before {
					content: none;
				}
			}
		}
	}
`;

const ContentCard = ({
	className,
	image,
	name,
	company,
	children,
	...rest
}) => (
	<Box
		bg="light"
		border="1px solid"
		borderColor="border"
		p="30px"
		mx="20px"
		borderRadius={10}
		className={`${className}`}
		{...rest}
		css={`
			&:focus {
				outline: none;
			}
		`}>
		<Text color="dark" mb={4}>
			{children}
		</Text>
		<Box className={`d-flex justify-content-between`}>
			<Box
				className="d-flex justify-content-center align-items-start"
				mr={3}>
				<img src={image} alt="" className="img-fluid" />
			</Box>
			<div className="flex-grow-1">
				<Title variant="card" mb={0}>
					{name}
				</Title>
				<Text fontSize={2}>{company}</Text>
			</div>
		</Box>
	</Box>
);

const Testimonial = (props) => {
	const slickSettings = {
		dots: true,
		infinite: true,
		arrows: false,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: breakpoints.md,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<>
			<Section bg={props.white ? "white" : "#f7f7fb"}>
				<Container>
					<Row className="justify-content-center">
						<Col md="9" lg="6" className="text-center">
							<Box className="text-center">
								<Title>Customer reviews</Title>
							</Box>
							<Text mb={4}>
								Aute reprehenderit ea elit sit pariatur nisi
								incididunt cupidatat aute amet mollit commodo.
							</Text>
						</Col>
					</Row>
					<Row className="justify-content-center mt-3">
						<Col lg="11">
							<SliderStyled {...slickSettings}>
								<Box
									css={`
										&:focus {
											outline: none;
										}
									`}>
									<ContentCard name="John Doe" image={imgC1}>
										Magna esse in eu do consectetur do aute.
										Officia nulla cillum non sit qui ea
										cupidatat anim nisi ut.
									</ContentCard>
								</Box>
								<Box
									css={`
										&:focus {
											outline: none;
										}
									`}>
									<ContentCard name="Jane Doe" image={imgC2}>
										Nisi nulla eiusmod mollit dolor ut qui
										occaecat ad esse excepteur eiusmod
										labore ut exercitation.In laborum
										deserunt eiusmod nisi in.
									</ContentCard>
								</Box>
								<Box
									css={`
										&:focus {
											outline: none;
										}
									`}>
									<ContentCard name="John Doe" image={imgC1}>
										Ipsum adipisicing exercitation aliquip
										aute qui.Dolor veniam laborum excepteur
										elit non ad incididunt eu reprehenderit.
									</ContentCard>
								</Box>
								<Box
									css={`
										&:focus {
											outline: none;
										}
									`}>
									<ContentCard name="Jane Doe" image={imgC2}>
										Laboris consectetur incididunt mollit id
										nulla in excepteur officia ut in nulla
										occaecat.Elit veniam mollit dolor
										commodo mollit proident eiusmod aliqua
										cupidatat cillum aliqua voluptate
										adipisicing est.
									</ContentCard>
								</Box>
							</SliderStyled>
						</Col>
					</Row>
				</Container>
			</Section>
		</>
	);
};

export default Testimonial;
