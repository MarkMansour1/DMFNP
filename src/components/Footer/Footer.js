import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Title, Box } from "../Core";
import Logo from "../Logo";
import { addDays } from "../../utils";

const TitleStyled = styled(Title)`
	font-size: 16px;
	font-weight: 700;
	letter-spacing: -0.5px;
	margin-bottom: 22px;
`;

const UlStyled = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	li {
		line-height: 2.25;
		a {
			color: ${({ theme, color }) => theme.colors[color]} !important;
			&:hover {
				text-decoration: none;
				color: ${({ theme, color }) =>
					theme.colors.secondary} !important;
			}
		}
	}
`;

const CopyRightArea = styled.div`
	border-top: ${({ dark, theme }) =>
		dark ? `1px solid #2f2f31 ` : `1px solid ${theme.colors.border}`};

	padding: 15px 0;
	p {
		color: ${({ dark, theme }) =>
			dark ? theme.colors.lightShade : theme.colors.darkShade};
		font-size: 13px;
		font-weight: 300;
		letter-spacing: -0.41px;
		line-height: 38px;
		margin-bottom: 0;
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: inline-flex;
		a {
			color: ${({ dark, theme }) =>
				dark ? theme.colors.light : theme.colors.dark} !important;
			font-size: 16px;
			transition: 0.4s;
			padding: 0 3px;
			margin: 0 2.5px;
			&:visited {
				text-decoration: none;
			}
			&:hover {
				text-decoration: none;
				color: ${({ theme, color }) =>
					theme.colors.secondary} !important;
			}
		}
	}
`;

const Footer = ({ isDark = true }) => {
	return (
		<>
			{/* <!-- Footer section --> */}
			<Box bg={isDark ? "dark" : "light"}>
				<Container>
					<Box
						css={`
							padding: 80px 0 60px;
						`}>
						<Row className="justify-content-center">
							<Col lg="3" md="4">
								<Logo white={isDark} />
							</Col>
							<Col lg="9" md="8" className="mt-5 mt-lg-0">
								<Row>
									<Col xs="6" lg="4">
										<div className="mb-5 mb-lg-4">
											<TitleStyled
												variant="card"
												color={
													isDark ? "light" : "dark"
												}>
												Header
											</TitleStyled>
											<UlStyled
												color={
													isDark
														? "lightShade"
														: "darkShade"
												}>
												<li>
													<a
														href="/#"
														target="_blank">
														Footer Link
													</a>
												</li>
												<li>
													<a
														href="/#"
														target="_blank">
														Footer Link
													</a>
												</li>
												<li>
													<a
														href="/#"
														target="_blank">
														Footer Link
													</a>
												</li>
											</UlStyled>
										</div>
									</Col>
									<Col xs="6" lg="4">
										<div className="mb-5 mb-lg-4">
											<TitleStyled
												variant="card"
												color={
													isDark ? "light" : "dark"
												}>
												Header
											</TitleStyled>
											<UlStyled
												color={
													isDark
														? "lightShade"
														: "darkShade"
												}>
												<li>
													<a
														href="/#"
														target="_blank">
														Footer Link
													</a>
												</li>
												<li>
													<a
														href="/#"
														target="_blank">
														Footer Link
													</a>
												</li>
												<li>
													<a
														href="/#"
														target="_blank">
														Footer Link
													</a>
												</li>
											</UlStyled>
										</div>
									</Col>
									<Col xs="6" lg="4">
										<div className="mb-lg-4">
											<TitleStyled
												variant="card"
												color={
													isDark ? "light" : "dark"
												}>
												Header
											</TitleStyled>
											<UlStyled
												color={
													isDark
														? "lightShade"
														: "darkShade"
												}>
												<li>
													<a
														href="/#"
														target="_blank">
														Footer Link
													</a>
												</li>
												<li>
													<a
														href="/#"
														target="_blank">
														Footer Link
													</a>
												</li>
												<li>
													<a
														href="/#"
														target="_blank">
														Footer Link
													</a>
												</li>
											</UlStyled>
										</div>
									</Col>
								</Row>
							</Col>
						</Row>
					</Box>
					<CopyRightArea dark={isDark ? 1 : 0}>
						<Row className="align-items-center">
							<Col
								sm="6"
								className="text-sm-left text-center mb-2 mb-sm-0">
								<p>
									&copy; {new Date().getFullYear()} DM Fitness
									and Performance. All Rights Reserved.
								</p>
							</Col>
							<Col sm="6" className="text-sm-right text-center">
								<a
									href="https://captivastudio.com"
									target="_blank">
									<p>Website by Captiva</p>
								</a>
							</Col>
						</Row>
					</CopyRightArea>
				</Container>
			</Box>
		</>
	);
};

export default Footer;
