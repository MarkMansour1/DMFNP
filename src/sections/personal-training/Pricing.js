import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Button } from "../../components/Core";

const PricingCard = styled.div`
	border-radius: 10px;
	border: 1px solid #eae9f2;
	background-color: #fff;
	text-align: center;
	padding-left: 25px;
	padding-right: 25px;
	padding-bottom: 25px;
	padding-top: 32px;
	.small-title {
		color: #696871;
		font-size: 18px;
		font-weight: 300;
		letter-spacing: -0.56px;
		line-height: 28px;
		margin-bottom: 22px;
	}
	.title {
		font-size: 60px;
		font-weight: 700;
		letter-spacing: -1.03px;
		line-height: 56px;
		color: #1d293f;
		margin-bottom: 30px;
	}
	.time {
		font-size: 28px;
		font-weight: 300;
		letter-spacing: -1.03px;
		line-height: 1;
	}
`;

const ULStyled = styled.ul`
	color: #696871;
	font-size: 21px;
	font-weight: 300;
	letter-spacing: -0.66px;
	line-height: 1.6;
	list-style: none;
	padding: 0;
	padding-top: 10px;

	li {
		margin-bottom: 14px;
	}
`;

const ButtonGroup = styled.div`
	border-radius: 10px;
	padding: 5px;
	background-color: #f7f7fb;
	display: inline-flex;
	max-height: 65px;
	.btn {
		border-radius: 10px 0 0 10px;
		width: 160px;
		height: 55px;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		color: #ffffff;
		font-size: 16px;
		font-weight: 700;
		letter-spacing: -0.5px;
		color: #19191b;
		&.active {
			background-color: ${({ theme }) => theme.colors.secondary};
			color: #fff;
		}
		& + .btn {
			border-radius: 0;

			& + .btn {
				border-radius: 0 10px 10px 0;
			}
		}
	}
`;

const ButtonStyled = styled(Button)`
	width: 100%;
	max-width: 305px;
	border-radius: 10px;
	border: 1px solid #eae9f2;
	background-color: #ffffff;
	color: ${({ theme }) => theme.colors.secondary};
	font-size: 21px;
	font-weight: 500;
	letter-spacing: -0.66px;
	min-height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
`;

const Pricing = () => {
	const [count, setCount] = useState(1);

	return (
		<>
			<Section>
				<Container>
					<Row className="text-md-center text-lg-left mb-5">
						<Col lg="7" xl="6">
							<div className="">
								<Title>Pricing Plans</Title>
							</div>
						</Col>
						<Col
							lg="5"
							xl="6"
							className="d-flex justify-content-center justify-content-lg-end align-items-end">
							<ButtonGroup className="mb-4 mt-3 mt-lg-0">
								<span
									role="button"
									className={`btn ${count === 1 && "active"}`}
									onClick={() => {
										setCount(1);
									}}
									onKeyDown={() => {
										setCount(1);
									}}
									tabIndex={0}>
									Single Session
								</span>
								<span
									role="button"
									className={`btn ${count === 4 && "active"}`}
									onClick={() => {
										setCount(4);
									}}
									onKeyDown={() => {
										setCount(4);
									}}
									tabIndex={1}>
									4 Sessions
								</span>
								<span
									role="button"
									className={`btn ${count === 8 && "active"}`}
									onClick={() => {
										setCount(8);
									}}
									onKeyDown={() => {
										setCount(8);
									}}
									tabIndex={2}>
									8 Sessions
								</span>
							</ButtonGroup>
						</Col>
					</Row>
					<Row className="justify-content-center">
						<Col lg="4" md="6" sm="8" className="mt-4">
							<PricingCard>
								<span className="small-title">
									{count === 1
										? "Single session"
										: count === 4
										? "4 sessions"
										: "8 sessions"}
								</span>
								<h2 className="title mt-3 mb-4">
									£
									{count === 1
										? "57"
										: count === 4
										? "54"
										: "50"}
									{count > 1 && (
										<span className="time"> /session</span>
									)}
								</h2>
								<ULStyled>
									<li>One hour session</li>
									<li>1 to 1 coaching</li>
									{count > 1 && <li>Custom training plan</li>}
								</ULStyled>
								<Box className="mt-5">
									<ButtonStyled>Button text</ButtonStyled>
								</Box>
							</PricingCard>
						</Col>
					</Row>
				</Container>
			</Section>
		</>
	);
};

export default Pricing;