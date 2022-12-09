import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../utils/store";

function BaseModal() {
	const {
		ui: {
			modal: { open },
		},
	} = useSelector((state: RootState) => state);
	const dispatch = useDispatch();

	const handleClose = () => {
		dispatch();
	};

	return <Dialog keepMounted open={open} onClose={handleClose}>
        <DialogTitle>
            
        </DialogTitle>
    </Dialog>;
}
