import React, { useState, useEffect } from "react";
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

import ReactMarkdown from "react-markdown";

import AboutMe from "./AboutMe";

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
		console.log("opened modal path: ", imagePath);
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

	return (
		<>
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
							marginBottom: "10px",
							marginTop: "10px",
						}}
					>
						<SwipeButton slide="left" text="LEFT">
							<FaArrowLeft size={35} />
						</SwipeButton>
						<div style={{ margin: "0 auto" }}>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									gap: "15px",
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
					<SwiperSlide>
						<Card title="ABOUT ME">
							<AboutMe />
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
					<SwiperSlide>
						<Card title="MY MUSIC" />
					</SwiperSlide>
					<SwiperSlide>
						<Card title="BUSINESS" />
					</SwiperSlide>
				</Swiper>
			</CenterContent>
			<MyModal
				isOpen={modalIsOpen}
				onAfterOpen={afterModalOpen}
				onRequestClose={closeModal}
				style={modalStyles}
			>
				<ImageModal currentImage={currentImage} />
			</MyModal>
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
	margin-top: 15vh;
	width: 40vw;
	margin-left: auto;
	margin-right: auto;
	border: 3px solid ${theme.color.primary};
	border-radius: 22px;
`;
