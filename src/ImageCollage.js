import React, { useEffect, useState, createRef } from "react";
import styled from "styled-components";
import Image from "next/image";
import MyImage from "./MyImage";

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
	let directory = null;

	if (props.folder == "2D") {
		directory = require.context(
			"../public/resources/2D",
			false,
			/\.(png|jpe?g|svg)$/
		);
	} else if (props.folder == "3D") {
		directory = require.context(
			"../public/resources/3D",
			false,
			/\.(png|jpe?g|svg)$/
		);
	}

	useEffect(() => {
		setImagePaths(getImagePaths(directory, props.folder));
	}, []);

	return (
		<Grid>
			{imagePaths.map((path, index) => (
				<MyImage isclickable={true} onClickImage={props.onClickImage} key={index} path={path} />
			))}
		</Grid>
	);
};

export default ImageCollage;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, minmax(50px, 1fr));
	grid-gap: 0.5vw;
	grid-auto-flow: dense;
	justify-content: center;

	@media only screen and (max-width: 768px) {
		grid-template-columns: repeat(1, minmax(100px, 1fr));
	}
`;
