import React from "react";
import LoginForm from "../../components/AuthForms/LoginForm";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Container } from "react-bootstrap";

function LoginPage() {

	return (
		<Container fluid>
			<LoginForm />
		</Container>
	);
}

export default LoginPage;
