import React from "react";
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";



const Footer = () => {
	return (
		<Container fluid className="p-5 d-flex justify-content-center bg-">
			<Row>
				<Col>Made by Tevis, Alex, Linh and Quentin</Col>
			</Row>
		</Container>
	);
};

export default Footer;
