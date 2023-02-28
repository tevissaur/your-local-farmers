import React, { PropsWithChildren } from "react";
import { Container } from "react-bootstrap";



export const BaseContainer: React.FC<any> = ({ children, ...props }) => {
	return <Container {...props}>{children}</Container>;
};
