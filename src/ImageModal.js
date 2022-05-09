import React from "react";
import MyImage from "./MyImage";
import styled from "styled-components";
import {theme} from "./UI/Theme"

const ImageModal = (props) => {
	return (
		<ModalWrapper>
			<MyImage
				isClickable={false}
				path={props.currentImage}
				originalSize={true}
			/>
		</ModalWrapper>
	);
};

const ModalWrapper = styled.div`
	width: clamp(20vw, 25vw, 700px);
	border: 4px solid ${theme.color.primary};
	border-radius: 22px;
	padding: 30px;
	background-color: ${theme.color.backgroundLight}
`;

export default ImageModal;
