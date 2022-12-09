import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../utils/mutations";
import AuthService from "../../services/authentication.service";
import { Box, Modal, FormLabel, FormControl, Input } from "@mui/material";
import { BaseButton as Button } from "../Buttons/BaseButton";
import { RootState } from "../../utils/store";
import React, { ChangeEvent, MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSignupForm, toggleModal } from "../../utils/slices/ui-slice";

function SignupForm() {
	const {
		ui: {
			modal: { open },
			signup,
		},
	} = useSelector((state: RootState) => state);
	const dispatch = useDispatch();
	const isInvalid = signup.password === "" || signup.email === "";

	const [createUser] = useMutation(CREATE_USER);

	const handleModal = async () => {
		dispatch(toggleModal());
	};

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
			<Button onClick={handleModal}>Sign Up</Button>

			<Modal
				open={open}
				onClose={handleModal}
				sx={{
					borderRadius: "10px",
				}}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box
					sx={{
						position: "fixed",
						width: 600,
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						border: "1px solid black",
						borderRadius: "10px",
						bgcolor: "background.paper",
						padding: "20px",
					}}
				>
					<Box
						component={"form"}
						onChange={() => handleFormChange}
						sx={{
							display: "flex",
							flexWrap: "wrap",
							justifyContent: "center",
							margin: "1",
						}}
					>
						<FormControl fullWidth>
							<FormLabel
								sx={{
									margin: "10px 0 0 0",
								}}
							>
								Username
							</FormLabel>
							<Input
								type="text"
								id="username"
								value={signup.username}
							/>
						</FormControl>
						<FormControl fullWidth>
							<FormLabel
								sx={{
									margin: "10px 0 0 0",
								}}
							>
								First Name
							</FormLabel>
							<Input
								type="text"
								id="firstName"
								value={signup.firstName}
							/>
						</FormControl>
						<FormControl fullWidth>
							<FormLabel
								sx={{
									margin: "10px 0 0 0",
								}}
							>
								Email
							</FormLabel>
							<Input
								type="email"
								id="email"
								value={signup.email}
							/>
						</FormControl>
						<FormControl fullWidth>
							<FormLabel
								sx={{
									margin: "10px 0 0 0",
								}}
							>
								Password
							</FormLabel>
							<Input
								type="password"
								id="password"
								value={signup.password}
							/>
						</FormControl>
					</Box>

					<Button onClick={handleFormSubmit} disabled={isInvalid}>
						Signup
					</Button>
					<Button onClick={handleModal}>Cancel</Button>
				</Box>
			</Modal>
		</>
	);
}

export default SignupForm;
