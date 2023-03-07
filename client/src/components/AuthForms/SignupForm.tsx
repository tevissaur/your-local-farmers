import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../utils/mutations";
import AuthService from "../../services/authentication.service";
import { BaseButton as Button } from "../Buttons/BaseButton";
import React, { ChangeEvent, MouseEvent } from "react";
import { setSignupForm, toggleDrawer } from "../../utils/slices/ui-slice";
import { Container, Form } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { StyledInput } from "../NavBar/NavBar";

function SignupForm() {
	const { signup } = useAppSelector(state => state.ui);

	const dispatch = useAppDispatch();
	const isInvalid = signup.password === "" || signup.email === "";

	const [createUser] = useMutation(CREATE_USER);


	const handleFormSubmit = async (e: MouseEvent) => {
		/* 
        TODO: Check if username is taken or not
        TODO: Check password strength
        */

		try {
			const {
				data: {
					createUser: { token },
				},
			} = await createUser({
				variables: {
					...signup,
				},
			});
			AuthService.login(token, window.location.pathname);
			window.location.reload();
		} catch (err) {
			console.log(err);
		}
	};

	const handleFormChange = async (e: ChangeEvent) => {
		e.preventDefault();
		e.stopPropagation();

		dispatch(setSignupForm(signup));
	};
    
	return (
		<>
				<Container>
					<Form onChange={() => handleFormChange}>
						<Form.Group className="my-3">
							<Form.Label className="display-6" htmlFor="signupUsername">
								Username
							</Form.Label>
							<StyledInput
							    className="bg-white"
								type="text"
								id="signupUsername"
								value={signup.username}
							/>
						</Form.Group>
						<Form.Group className="my-3">
							<Form.Label className="display-6" htmlFor="signupFirstName">
								First Name
							</Form.Label>
							<StyledInput
							    className="bg-white"
								type="text"
								id="signupFirstName"
								value={signup.firstName}
							/>
						</Form.Group>
						<Form.Group className="my-3">
							<Form.Label className="display-6" htmlFor="signupEmail">
								Email
							</Form.Label>
							<StyledInput
							    className="bg-white"
								type="email"
								id="signupEmail"
								value={signup.email}
							/>
						</Form.Group>
						<Form.Group className="my-3">
							<Form.Label className="display-6" htmlFor="signupPassword">
								Password
							</Form.Label>
							<StyledInput
							    className="bg-white"
								type="password"
								id="signupPassword"
								value={signup.password}
							/>
						</Form.Group>
					</Form>

					<Button onClick={handleFormSubmit} disabled={isInvalid}>
						Signup
					</Button>
					<Button>Cancel</Button>
				</Container>
		</>
	);
}

export default SignupForm;
