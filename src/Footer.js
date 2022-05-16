import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "./UI/Theme";
import { ResponsiveContext } from "./UseResposiveContext";

const Footer = () => {
	const size = useContext(ResponsiveContext);

	return (
		<>
			{size.width > theme.contextSize.small ? (
				<MyFooter>
					<p>Contact: itmeglaze@gmail.com </p>
				</MyFooter>
			) : (
				<></>
			)}
		</>
	);
};

export default Footer;

const MyFooter = styled.div`
	border-top: 2px solid ${theme.color.secondary};
	bottom: 0px;
	width: 100%;
	height: 10vh;
	display: flex;
	justify-content: center;
	padding-top: 20px;
	background-color: ${theme.color.background};
`;
