import React, { useState, useRef, ChangeEvent } from "react";
import AuthService from "../../services/authentication.service";
import { useMutation } from "@apollo/client";
import {
	Box,
	Modal,
	FormControl,
	FormLabel,
	Input,
	Typography,
} from "@mui/material";
import { BaseButton as Button } from "../Buttons/BaseButton";
import { RootState } from "../../utils/store";
import { useDispatch, useSelector } from "react-redux";
import { setLoginForm, toggleModal } from "../../utils/slices/ui-slice";
import { useLoginMutation } from "../../services/api.service";

function LoginForm() {
	const {
		ui: {
			modal: { open },
			login,
		},
	} = useSelector((state: RootState) => state);
	const dispatch = useDispatch();
	const isInvalid = login.password === "" || login.email === "";
	const [loginUser, { data, isLoading, isSuccess, isError }] =
		useLoginMutation();

	const handleChange = async (e: ChangeEvent) => {
		e.preventDefault();
		e.stopPropagation();
		dispatch(setLoginForm(login));
	};

	const handleModal = () => {
		dispatch(toggleModal());
	};

	const handleFormSubmit = async (e: MouseEvent) => {
		e.preventDefault();

		try {
			await loginUser(login);

			AuthService.login(data.token, window.location.pathname);
			window.location.reload();
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<Button onClick={handleModal}>Login</Button>

			<Modal
				open={open}
				onClose={handleModal}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box
					component={"form"}
					onChange={() => handleChange}
					sx={{
						position: "fixed",
						width: 600,
						height: 400,
						top: "50%",
						left: "50%",
						display: "flex",
						justifyContent: "center",
						flexDirection: "column",
						transform: "translate(-50%, -50%)",
						border: "1px solid",
						borderRadius: "10px",
						padding: "auto 1",
						bgcolor: "ivory",
					}}
				>
					<Typography variant="h6" textAlign="center">
						Login
					</Typography>
					<FormControl
						sx={{
							width: "50%",
							margin: "auto",
						}}
					>
						<FormLabel>Email</FormLabel>
						<Input
							placeholder="Email"
							type="email"
							id="email"
							value={login.email}
						/>
					</FormControl>

					<FormControl
						sx={{
							width: "50%",
							margin: "auto",
						}}
					>
						<FormLabel>Password</FormLabel>
						<Input
							placeholder="Password"
							type="password"
							id="password"
							value={login.password}
						/>
					</FormControl>
					<Button onClick={() => handleFormSubmit} disabled={isInvalid}>
						Login
					</Button>
					<Button onClick={handleModal}>Cancel</Button>
				</Box>
			</Modal>
		</>
	);
}

export default LoginForm;
