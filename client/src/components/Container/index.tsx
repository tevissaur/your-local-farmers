import React from "react";
import styled from "styled-components";
import { Flex } from "../Flex";

export const MainContainer: React.FC = ({ children, ...props }) => {
	return <Flex {...props}>{children}</Flex>;
};
