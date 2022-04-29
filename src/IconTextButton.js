import React, { useState, useEffect } from "react";
import SwipeButton from "./SwipeButton";
import { theme } from "./UI/Theme";
import styled from "styled-components";

const IconTextButton = ({ IconComponent, text, currentIndex, baseIndex }) => {
	const [hovering, setHovering] = useState(false);
	const [color, setColor] = useState(theme.color.text);

	useEffect(() => {
		if (hovering || currentIndex == baseIndex) {
			setColor(theme.color.primary);
		}
		else {
			setColor(theme.color.text)
		}
	}, [hovering, currentIndex])

	return (
		<Scaler
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
		>
			<SwipeButton slide={baseIndex}>
				<IconText>
					<IconComponent
						color={color}
						size={35}
					/>
					<CenterText style={{color: {color}}}>{text}</CenterText>
				</IconText>
			</SwipeButton>
		</Scaler>
	);
};

export default IconTextButton;

const Scaler = styled.div`
	transition: all 0.12s;

	&:hover {
		transform: scale(1.1);
	}
`;

const CenterText = styled.h2`
	margin-top: auto;
	margin-bottom: auto;
	padding: 8px;
`;

const IconText = styled.div`
	display: flex;
	flex-direction: row;
	align-content: center;
	font-family: "RalewaySemiBold";
`;
