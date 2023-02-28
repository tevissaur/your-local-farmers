import React from "react";
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";

const FooterContainer = styled(Container)``;

const Footer = () => {
	return (
		<FooterContainer>
			<Row>
				<Col>Made by Tevis, Alex, Linh and Quentin</Col>
			</Row>
		</FooterContainer>
	);
};

export default Footer;
