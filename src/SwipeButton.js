import React from "react";
import styled from "styled-components";
import { theme } from "./UI/Theme";
import { useSwiper } from "swiper/react";

const SwipeButton = (props) => {
	const swiper = useSwiper();

	let action = null;
	if (props.slide != null) {
		action = () => {
			if (props.slide == "left") {
				swiper.slidePrev();
			} else if (props.slide == "right") {
				swiper.slideNext();
			} else {
				swiper.slideTo(parseInt(props.slide));
			}
		};
	}

	return (
		<ButtonStyle
			onClick={() => {
				action();
			}}
		>
			{props.children}
		</ButtonStyle>
	);
};

export default SwipeButton;

const ButtonStyle = styled.button`
	background-color: none;
	background: none;
	border: none;
	color: ${theme.color.gray};
	cursor: pointer;
	margin-left: 10px;
	margin-right: 10px;
	
	&:hover {
		color: ${theme.color.primary}
	}
`;
