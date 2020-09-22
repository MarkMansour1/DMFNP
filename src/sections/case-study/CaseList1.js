import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Section } from "../../components/Core";
import PostCard from "../../components/PostCard";

import imgCase1 from "../../assets/image/jpeg/case-card-img.jpg";
import imgCase2 from "../../assets/image/jpeg/case-card-img-2.jpg";
import imgCase3 from "../../assets/image/jpeg/case-card-img-3.jpg";
import imgBrand1 from "../../assets/image/jpeg/case-card-brand-img.jpg";
import imgBrand2 from "../../assets/image/jpeg/case-card-brand-img-2.jpg";
import imgBrand3 from "../../assets/image/jpeg/case-card-brand-img-3.jpg";

const CaseList = () => (
	<>
		{/* <!-- Feature section --> */}
		<Section className="position-relative">
			<Container>
				<Row className="align-items-center justify-content-center">
					<Col lg="4" className="mb-5 mb-lg-0">
						<PostCard img={imgCase1} title="Program 1">
							Ex minim id deserunt nisi. Non commodo cupidatat id
							mollit duis proident veniam. Labore amet veniam duis
							veniam ex et id anim proident qui in.
						</PostCard>
					</Col>
					<Col lg="4" className="mb-5 mb-lg-0">
						<PostCard img={imgCase2} title="Program 2">
							Ipsum excepteur sint nulla et ullamco ipsum.
							Occaecat dolore esse id mollit eu labore culpa
							occaecat cillum elit proident est.
						</PostCard>
					</Col>
					<Col lg="4" className="mb-5 mb-lg-0">
						<PostCard img={imgCase3} title="Program 3">
							Commodo eiusmod cupidatat culpa magna ipsum
							consectetur. Non ipsum elit veniam excepteur sit id
							exercitation laborum qui nostrud.
						</PostCard>
					</Col>
				</Row>
			</Container>
		</Section>
	</>
);

export default CaseList;
