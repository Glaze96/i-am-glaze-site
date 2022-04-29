import React, { useEffect, useState, createRef } from "react";
import styled from "styled-components";
import Image from "next/image";

const MyImage = (props) => {
	const [size, setSize] = useState(null);
	const [ratio, setRatio] = useState({ height: 2, width: 2 });

	function handleLoadImage(natural) {
		setSize(natural);
		let h = natural.naturalHeight > natural.naturalWidth ? 2 : 1;
		let w = natural.naturalHeight < natural.naturalWidth ? 2 : 1;
		setRatio({ height: h, width: w });
	}

	return (
		<ImageContainer width={ratio.width} height={ratio.height}>
			<Image
				objectFit="cover"
				src={props.path}
				layout="fill"
				onLoadingComplete={handleLoadImage}
				loading={"eager"}
			/>
		</ImageContainer>
	);
};

function getImagePaths(directory, folder) {
	let images = [];
	directory
		.keys()
		.map((item, index) =>
			images.push("/resources/" + folder + "/" + item.replace("./", ""))
		);
	return images;
}

const ImageCollage = (props) => {
	const [imagePaths, setImagePaths] = useState([]);
	let directory = null

	if (props.folder == "2D") {
		directory = require.context("../public/resources/2D", false, /\.(png|jpe?g|svg)$/);
	}
	else if (props.folder == "3D"){
		directory = require.context("../public/resources/3D", false, /\.(png|jpe?g|svg)$/);
	}

	useEffect(() => {
		setImagePaths(getImagePaths(directory, props.folder));
	}, []);

	return (
		<Grid>
			{imagePaths.map((path, index) => (
				<MyImage key={index} path={path} />
			))}
		</Grid>
	);
};

export default ImageCollage;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-template-rows: repeat(5, clamp(100px, 300px, 1000px));
	grid-gap: 0.75rem;
	grid-auto-flow: dense;
	justify-content: center;
`;

const ImageContainer = styled.div`
	position: relative;

	grid-column: span ${(props) => props.width};
	grid-row: span ${(props) => props.height};
`;
