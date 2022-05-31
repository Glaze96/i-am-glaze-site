import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Card from "./Card";
import { FaArrowRight, FaArrowLeft, FaHeadphonesAlt } from "react-icons/fa";
import { BsFillPersonLinesFill, BsBrush } from "react-icons/bs";
import { BiCube } from "react-icons/bi";
import { TiBusinessCard } from "react-icons/ti";
import { theme } from "./UI/Theme";
import IconTextButton from "./IconTextButton";
import Modal from "react-modal";

import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import SwipeButton from "./SwipeButton";
import ImageCollage from "./ImageCollage";
import ImageModal from "./ImageModal";

import AboutMeTab from "./AboutMeTab";
import MusicTab from "./MusicTab";
import { ResponsiveContext } from "./UseResposiveContext";
import BusinessTab from "./BusinessTab";

const Content = () => {
	const [index, setIndex] = useState(0);
	const [modalIsOpen, setIsOpen] = useState(false);
	const [currentImage, setCurrentImage] = useState();

	const numSlides = 5;

	const SlideChangeHandler = (index) => {
		let mod = index;

		if (index === 0) {
			mod = numSlides;
		}
		if (index === numSlides + 1) {
			mod = 1;
		}

		setIndex(mod);
	};

	function openModal(imagePath) {
		setCurrentImage(imagePath);
		setIsOpen(true);
	}

	function afterModalOpen() {
		console.log("after modal open");
	}

	function closeModal() {
		setIsOpen(false);
	}

	Modal.setAppElement("#main");

	const modalStyles = {
		overlay: {
			zIndex: 100,
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			backgroundColor: "#000000bb",
		},
		content: {
			height: "max-content",
		},
	};

	const size = useContext(ResponsiveContext);

	const content = (
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
				allowTouchMove={false}
			>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<SwipeButton slide="left" text="LEFT">
						<FaArrowLeft size={35} />
					</SwipeButton>
					<div style={{ padding: "10px" }}>
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								gap: "15px",
								margin: 0,
							}}
						>
							<IconTextButton
								IconComponent={BsFillPersonLinesFill}
								baseIndex={1}
								currentIndex={index}
								text="ABOUT"
								iconSize={35}
							/>
							<IconTextButton
								IconComponent={BsBrush}
								baseIndex={2}
								currentIndex={index}
								text="ART"
								iconSize={35}
							/>
							<IconTextButton
								IconComponent={BiCube}
								baseIndex={3}
								currentIndex={index}
								text="3D"
								iconSize={35}
							/>
							<IconTextButton
								IconComponent={FaHeadphonesAlt}
								baseIndex={4}
								currentIndex={index}
								text="MUSIC"
								iconSize={35}
							/>
							<IconTextButton
								IconComponent={TiBusinessCard}
								baseIndex={5}
								currentIndex={index}
								text="BUSINESS"
								iconSize={35}
							/>
						</div>
					</div>
					<SwipeButton slide="right" text="RIGHT">
						<FaArrowRight size={35} />
					</SwipeButton>
				</div>
				<SwiperSlide style={{ overflowY: "scroll" }}>
					<Card title="ABOUT ME">
						<AboutMeTab />
					</Card>
				</SwiperSlide>
				<SwiperSlide style={{ overflowY: "scroll" }}>
					<Card title="MY ART">
						<ImageCollage folder="2D" onClickImage={openModal} />
					</Card>
				</SwiperSlide>
				<SwiperSlide style={{ overflowY: "scroll" }}>
					<Card title="MY 3D">
						<ImageCollage folder="3D" onClickImage={openModal} />
					</Card>
				</SwiperSlide>
				<SwiperSlide style={{ overflowY: "scroll" }}>
					<Card title="MY MUSIC">
						<MusicTab />
					</Card>
				</SwiperSlide>
				<SwiperSlide style={{ overflowY: "scroll" }}>
					<Card title="BUSINESS">
						<BusinessTab />
					</Card>
				</SwiperSlide>
			</Swiper>
		</CenterContent>
	);

	return (
		<>
			{size.width < theme.contextSize.small ? (
				<>
					<Swiper
						spaceBetween={0}
						slidesPerView={1}
						style={{
							display: "flex",
							flexDirection: "column-reverse",
							height: "80vh",
						}}
						onSlideChange={(e) => SlideChangeHandler(e.activeIndex)}
						onSwiper={(e) => SlideChangeHandler(e.activeIndex)}
						loop="true"
						allowTouchMove={false}
					>
						<div style={{}}>
							<div style={{ padding: "5px" }}>
								<div
									style={{
										display: "flex",
										justifyContent: "space-between",
										margin: 0,
										flexDirection: "column",
										backgroundColor: `${theme.color.background}`
									}}
								>
									<IconTextButton
										IconComponent={BsFillPersonLinesFill}
										baseIndex={1}
										currentIndex={index}
										text="ABOUT"
										iconSize={35}
									/>
									<IconTextButton
										IconComponent={BsBrush}
										baseIndex={2}
										currentIndex={index}
										text="ART"
										iconSize={35}
									/>
									<IconTextButton
										IconComponent={BiCube}
										baseIndex={3}
										currentIndex={index}
										text="3D"
										iconSize={35}
									/>
									<IconTextButton
										IconComponent={FaHeadphonesAlt}
										baseIndex={4}
										currentIndex={index}
										text="MUSIC"
										iconSize={35}
									/>
									<IconTextButton
										IconComponent={TiBusinessCard}
										baseIndex={5}
										currentIndex={index}
										text="BUSINESS"
										iconSize={35}
									/>
								</div>
							</div>
						</div>
						<SwiperSlide style={{ overflowY: "scroll" }}>
							<Card title="ABOUT ME">
								<AboutMeTab />
							</Card>
						</SwiperSlide>
						<SwiperSlide style={{ overflowY: "scroll" }}>
							<Card title="MY ART">
								<ImageCollage folder="2D" onClickImage={openModal} />
							</Card>
						</SwiperSlide>
						<SwiperSlide style={{ overflowY: "scroll" }}>
							<Card title="MY 3D">
								<ImageCollage folder="3D" onClickImage={openModal} />
							</Card>
						</SwiperSlide>
						<SwiperSlide style={{ overflowY: "scroll" }}>
							<Card title="MY MUSIC">
								<MusicTab />
							</Card>
						</SwiperSlide>
						<SwiperSlide style={{ overflowY: "scroll" }}>
							<Card title="BUSINESS">
								<BusinessTab />
							</Card>
						</SwiperSlide>
					</Swiper>
				</>
			) : (
				<>
					<Background>{content}</Background>
					<MyModal
						isOpen={modalIsOpen}
						onAfterOpen={afterModalOpen}
						onRequestClose={closeModal}
						style={modalStyles}
					>
						<ImageModal currentImage={currentImage} />
					</MyModal>
				</>
			)}
		</>
	);
};

export default Content;

const MyModal = styled(Modal)`
	z-index: 20;
	border-radius: 20px;
	border-color: pink;
	position: relative;
`;

const CenterContent = styled.div`
	margin-top: 12vh;
	width: 50vw;
	height: 55vh;
	margin-left: auto;
	margin-right: auto;
	border: 2px solid ${theme.color.primary};
	border-radius: 22px;
	background-color: ${theme.color.backgroundLight};
	overflow: hidden;
`;

const Background = styled.div`
	background-image: url("/resources/bg.jpg");
	background-size: 100% 100vh;
	background-repeat: no-repeat;
	display: flex;
	height: 100vh;
`;
