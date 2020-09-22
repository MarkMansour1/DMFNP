import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";

import imgContent1 from "../../img/sandc3.png";
import imgContent2 from "../../img/sandc4.png";

const ContentImg = styled(Box)`
	box-shadow: ${({ theme }) => `0 42px 54px ${theme.colors.dark}`};
	border-radius: 10px;
	overflow: hidden;
	max-height: 515px;
`;

const Content2 = () => (
    <>
        <Section bg="#1e1e20;">
            <Container>
                <Row className="justify-content-center">
                    <Col xl="7" lg="10" md="9">
                        <div className="text-center">
                            <Title color="light">
                                Esse mollit adipisicing.
							</Title>
                            <Text color="lightShade">
                                Do irure adipisicing aliqua elit nisi qui
                                pariatur deserunt proident. Cillum eiusmod Lorem
                                proident laboris occaecat.
							</Text>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col lg="4" sm="5" className="mb-4 ">
                        <ContentImg>
                            <img
                                src={imgContent1}
                                alt=""
                                className="img-fluid"
                            />
                        </ContentImg>
                    </Col>
                    <Col lg="8" sm="7" className="mb-4">
                        <ContentImg>
                            <img
                                src={imgContent2}
                                alt=""
                                className="img-fluid"
                            />
                        </ContentImg>
                    </Col>
                </Row>
            </Container>
        </Section>
    </>
);

export default Content2;
