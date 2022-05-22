import React, { useContext } from "react";
import Image from "next/image";
import { ResponsiveContext } from "./UseResposiveContext";
import styled from "styled-components";
import { theme } from "./UI/Theme";

const AboutMeTab = () => {
	const size = useContext(ResponsiveContext);

	return (
		<FlexBox mobile={size.width < theme.contextSize.small}>
			<div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
				<p>
					Hi, I Am Glaze. I love making stuff. Creating art has always been a
					passion of mine. I started my endeavors in digital art and after that
					I fell in love with more techincal creative fields like programming
					and 3d modelling. Also, I adore music, both listening to it and
					creating it.
					<br />
					<br />
					Here's some programs I work with: Blender, FL Studio, Photoshop, Adobe
					Illustrator and Figma. Other than those, I generally have an easy time
					picking up and learning new software.
					<br />
					<br />I have a wonderful girlfriend, a couple of awesome dogs and an
					amazing family.
				</p>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					textAlign: "center",
				}}
			>
				<Image src="/resources/pfp.jpg" width={1000} height={1300} />
				<h2 style={{ padding: "5px" }}>A palm tree and Me</h2>
			</div>
		</FlexBox>
	);
};

export default AboutMeTab;

const FlexBox = styled.div`
	display: flex;
	flex-direction: ${(props) => (props.mobile ? "column-reverse" : "row")};
`;
