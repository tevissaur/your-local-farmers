import React, { useEffect } from "react";
import AuthService from "../../services/authentication.service";
import { BaseButton as Button } from "../Buttons/BaseButton";
import { RootState } from "../../utils/store";
import { setLoginForm } from "../../utils/slices/ui-slice";
import { useLoginMutation } from "../../utils/slices/user/user-api";
import { Alert, Container, Form } from "react-bootstrap";
import { StyledInput } from "../NavBar/NavBar";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { homeUrl } from "../../services/constants.service";

function LoginForm() {
	const { login } = useAppSelector((state: RootState) => state.ui);

	const dispatch = useAppDispatch();

	const [loginUser, { data, isLoading, isSuccess, isError, error }] =
		useLoginMutation();

	const handleFormChange = async (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		e.stopPropagation();
		dispatch(
			setLoginForm({
				...login,
				[e.currentTarget.name]: e.currentTarget.value,
			})
		);
	};

	useEffect(() => {
		if (isSuccess && !isLoading && data) {
			AuthService.login(data.login.token, homeUrl);
		}
	}, [isLoading, isSuccess, data]);

	const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { email, password } = login;

		try {
			await loginUser({ email, password });
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<Container>
				{isError && !isLoading ? (
					<Alert variant="danger" className="my-3">

						{`${ error }`}
					</Alert>
				) : (<></>)}
				<Form onSubmit={handleFormSubmit}>
					<Form.Group className="my-3">
						<Form.Label className="display-6" htmlFor="loginEmail">
							Email
						</Form.Label>
						<StyledInput
							className="bg-white"
							type="email"
							name="email"
							id="loginEmail"
							defaultValue={login.email}
							onChange={handleFormChange}
						/>
					</Form.Group>
					<Form.Group className="my-3">
						<Form.Label
							className="display-6"
							htmlFor="loginPassword"
						>
							Password
						</Form.Label>
						<StyledInput
							className="bg-white"
							type="password"
							name="password"
							id="loginPassword"
							defaultValue={login.password}
							onChange={handleFormChange}
						/>
					</Form.Group>
				</Form>

				<Button onClick={handleFormSubmit} type="submit">
					Log In
				</Button>
			</Container>
		</>
	);
}

export default LoginForm;
