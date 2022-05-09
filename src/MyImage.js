import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const MyImage = (props) => {
	const [ratio, setRatio] = useState({ height: -1, width: -1 });
	const [naturalSize, setNaturalSize] = useState({ width: -1, height: -1 });

	function handleLoadImage(natural) {
		let h = natural.naturalHeight > natural.naturalWidth ? 2 : 1;
		let w = natural.naturalHeight < natural.naturalWidth ? 2 : 1;
		setRatio({ height: h, width: w });
		setNaturalSize({
			width: natural.naturalWidth,
			height: natural.naturalHeight,
		});
	}

	const handleClick = (p) => {
		console.log("YOU CLICKED AN IMAGE");
		if (props.isclickable) {
			console.log("AND IT IS CLICKABLE");
			console.log("PATH: ", p);
			props.onClickImage(p);
		}
	};

	return (
		<ImageContainer w={ratio.width} h={ratio.height} >
			<Image
				objectFit="cover"
				src={props.path}
				layout="responsive"
				width={props.originalSize ? naturalSize.width : ratio.width}
				height={props.originalSize ? naturalSize.height : ratio.height}
				onLoadingComplete={handleLoadImage}
				loading={"eager"}
				onClick={() => handleClick(props.path)}
			/>
		</ImageContainer>
	);
};

const ImageContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	grid-column: span ${(props) => props.w};
	grid-row: span ${(props) => props.h};
`;

export default MyImage;
