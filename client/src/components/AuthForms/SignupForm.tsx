import React, { useEffect } from "react";
import AuthService from "../../services/authentication.service";
import { BaseButton as Button } from "../Buttons/BaseButton";
import { setSignupForm } from "../../utils/slices/ui/ui-slice";
import {
	useLoginMutation,
	useSignupMutation,
} from "../../utils/slices/user/user-api";
import { Alert, Container, Form } from "react-bootstrap";
import { StyledInput } from "../NavBar/NavBar";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { homeUrl } from "../../services/constants.service";

function SignupForm() {
	const { signup } = useAppSelector((state) => state.ui);

	const dispatch = useAppDispatch();
	const [signupUser, { data, isLoading, isSuccess, isError, error }] =
		useSignupMutation();

	const handleFormChange = async (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		e.stopPropagation();
		dispatch(
			setSignupForm({
				...signup,
				[e.currentTarget.name]: e.currentTarget.value,
			})
		);
	};

	useEffect(() => {
		if (isSuccess && !isLoading && data) {
			AuthService.login(data.signup.token, homeUrl);
		}
	}, [isLoading, isSuccess, data]);

	const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			await signupUser(signup);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<Container>
				{isError && !isLoading ? (
					<Alert variant="danger" className="my-3">
						{`${error}`}
					</Alert>
				) : (
					<></>
				)}
				<Form>
					<Form.Group className="my-3">
						<Form.Label
							className="display-6"
							htmlFor="signupUsername"
						>
							Username
						</Form.Label>
						<StyledInput
							className="bg-white"
							type="text"
							name="username"
							id="signupUsername"
							value={signup.username}
							onChange={handleFormChange}
						/>
					</Form.Group>
					<Form.Group className="my-3">
						<Form.Label
							className="display-6"
							htmlFor="signupFirstName"
						>
							First Name
						</Form.Label>
						<StyledInput
							className="bg-white"
							type="text"
							name="firstName"
							id="signupFirstName"
							value={signup.firstName}
							onChange={handleFormChange}
						/>
					</Form.Group>
					<Form.Group className="my-3">
						<Form.Label
							className="display-6"
							htmlFor="signupLastName"
						>
							Last Name
						</Form.Label>
						<StyledInput
							className="bg-white"
							type="text"
							name="lastName"
							id="signupLastName"
							value={signup.lastName}
							onChange={handleFormChange}
						/>
					</Form.Group>
					<Form.Group className="my-3">
						<Form.Label className="display-6" htmlFor="signupEmail">
							Email
						</Form.Label>
						<StyledInput
							className="bg-white"
							type="email"
							name="email"
							id="signupEmail"
							value={signup.email}
							onChange={handleFormChange}
						/>
					</Form.Group>
					<Form.Group className="my-3">
						<Form.Label
							className="display-6"
							htmlFor="signupPassword"
						>
							Password
						</Form.Label>
						<StyledInput
							className="bg-white"
							type="password"
							name="password"
							id="signupPassword"
							value={signup.password}
							onChange={handleFormChange}
						/>
					</Form.Group>
				</Form>

				<Button disabled={isLoading} onClick={handleFormSubmit}>Signup</Button>
			</Container>
		</>
	);
}

export default SignupForm;
