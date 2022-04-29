import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";

import ImagesJson from "/images.json";

function getImagePaths(directory) {
  let images = [];
  directory.keys().map((item, index) => images.push(item.replace("./", "")));
  return images;
}

const ImageCollage = () => {
	const [finalImages, setFinalImages] = useState([]);

	const directory = require.context("../public/resources/2D", false, /\.(png|jpe?g|svg)$/);
	let imagePaths = getImagePaths(directory);

	console.log(imagePaths)

	useEffect(() => {
		const images = ImagesJson["images"];

		const basePath = "/resources/2D/";

		setFinalImages(
			images.map((img) => {
				return (
					<ImageContainer
						width={img.ratio == "wide" ? 2 : 1}
						height={img.ratio == "tall" ? 2 : 1}
						key={Math.random()}
					>
						<Image
							src={basePath + img.id + ".png"}
							layout="fill"
							alt={"Artwork: 1"}
						/>
					</ImageContainer>
				);
			})
		);
	}, []);

	return <Grid>{finalImages}</Grid>;
};

export default ImageCollage;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, 300px);
	grid-template-rows: repeat(10, 300px);
	grid-gap: 0.5rem;
	grid-auto-flow: dense;
	justify-content: center;
`;

const ImageContainer = styled.div`
	position: relative;

	grid-column: span ${(props) => props.width};
	grid-row: span ${(props) => props.height};
`;
