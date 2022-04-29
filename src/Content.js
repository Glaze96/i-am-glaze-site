import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";
import { FaArrowRight, FaArrowLeft, FaHeadphonesAlt } from "react-icons/fa";
import { BsFillPersonLinesFill, BsBrush } from "react-icons/bs";
import { BiCube } from "react-icons/bi";
import { TiBusinessCard } from "react-icons/ti";
import { theme } from "./UI/Theme";
import IconTextButton from "./IconTextButton";

import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import SwipeButton from "./SwipeButton";
import ImageCollage from "./ImageCollage";

const Content = () => {
	const [index, setIndex] = useState(0);

	const SlideChangeHandler = (index) => {
		let mod = index;

		if (index === 0) {
			mod = 5;
		}
		if (index === 6) {
			mod = 1;
		}

		console.log("Mod: ", mod);
		setIndex(mod);
	};

	return (
		<CenterContent>
			<Swiper
				spaceBetween={0}
				slidesPerView={1}
				style={{
					display: "flex",
					flexDirection: "column-reverse",
				}}
				onSlideChange={(e) => SlideChangeHandler(e.activeIndex)}
				onSwiper={(e) => SlideChangeHandler(e.activeIndex)}
				loop="true"
			>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						marginBottom: "10px",
						marginTop: "10px",
					}}
				>
					<SwipeButton slide="left" text="LEFT">
						<FaArrowLeft size={35} />
					</SwipeButton>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							gap: "20px",
							marginTop: "auto",
							marginBottom: "auto",
						}}
					>
						<IconTextButton
							IconComponent={BsFillPersonLinesFill}
							baseIndex={1}
							currentIndex={index}
							text="ABOUT ME"
						/>
						<IconTextButton
							IconComponent={BsBrush}
							baseIndex={2}
							currentIndex={index}
							text="ART"
						/>
						<IconTextButton
							IconComponent={BiCube}
							baseIndex={3}
							currentIndex={index}
							text="3D"
						/>
						<IconTextButton
							IconComponent={FaHeadphonesAlt}
							baseIndex={4}
							currentIndex={index}
							text="MUSIC"
						/>
						<IconTextButton
							IconComponent={TiBusinessCard}
							baseIndex={5}
							currentIndex={index}
							text="BUSINESS"
						/>
					</div>

					<SwipeButton slide="right" text="RIGHT">
						<FaArrowRight size={35} />
					</SwipeButton>
				</div>
				<SwiperSlide>
					<Card title="ABOUT ME">
						<p>
							Hi, I Am Glaze!
							<br />
							<br />
							I've been making music for years and been generally creative in a
							lot of different areas such as digital painting, 3d modelling,
							game development and generally programming.
							<br />
							<br />
							I'm the main producer of a music group called 'MxTxG'. I also have
							a solo project called 'I Am Glaze'.
							<br />
							<br />
							I love making new friends and socializing. I adore coffee to the
							point that it's scary.
							<br />
							<br />I speak Swedish, English and Computer.
						</p>
					</Card>
				</SwiperSlide>
				<SwiperSlide style={{ overflowY: "scroll" }}>
					<Card title="MY ART">
						<ImageCollage folder="2D" />
					</Card>
				</SwiperSlide>
				<SwiperSlide style={{ overflowY: "scroll" }}>
					<Card title="MY 3D">
						<ImageCollage folder="3D" />
					</Card>
				</SwiperSlide>
				<SwiperSlide>
					<Card title="MY MUSIC" />
				</SwiperSlide>
				<SwiperSlide>
					<Card title="BUSINESS" />
				</SwiperSlide>
			</Swiper>
		</CenterContent>
	);
};

const CenterContent = styled.div`
	margin-top: 15vh;
	width: 40vw;
	margin-left: auto;
	margin-right: auto;
	border: 3px solid ${theme.color.primary};
	border-radius: 22px;
`;

export default Content;
