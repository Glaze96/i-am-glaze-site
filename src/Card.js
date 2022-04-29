import React from "react";
import styled from "styled-components";
import { theme } from "./UI/Theme";

const Card = (props) => {
	return (
		<ContentBox>
			<TitleBox>
				<h1>{props.title}</h1>
			</TitleBox>
			<div style={{ padding: "25px" }}>
				{props.children}
			</div>
		</ContentBox>
	);
};

const TitleBox = styled.div`
	border-bottom: 3px solid ${theme.color.primary};
	border-top: 3px solid ${theme.color.primary};
`;

const ContentBox = styled.div`
	height: 50vh;
`;

export default Card;
