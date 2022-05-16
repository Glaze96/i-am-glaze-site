import React, { useContext } from "react";
import Image from "next/image";
import logo_rect from "../public/graphics/LOGO_RECT.svg";
import styled from "styled-components";
import { theme } from "./UI/Theme";
import {
	FaSpotify,
	FaInstagram,
	FaYoutube,
	FaTwitch,
	FaArtstation,
} from "react-icons/fa";

import IconTextButton from "./IconTextButton";
import { ResponsiveContext } from "./UseResposiveContext";

const Header = () => {
	const linkContent = (
		<LinkContainer>
			<IconTextButton
				IconComponent={FaSpotify}
				iconSize={45}
				link="https://open.spotify.com/artist/6gAx05BlEJQcHp7mMVi3eM"
			/>
			<IconTextButton
				IconComponent={FaInstagram}
				iconSize={45}
				link="https://www.instagram.com/i_am_the_real_glaze/"
			/>
			<IconTextButton
				IconComponent={FaYoutube}
				iconSize={45}
				link="https://www.youtube.com/channel/UCXh8mqVGRwUhQvT5ZZG-w0g"
			/>
			<IconTextButton
				IconComponent={FaTwitch}
				iconSize={45}
				link="https://www.twitch.tv/i_am_glaze"
			/>
			<IconTextButton
				IconComponent={FaArtstation}
				iconSize={45}
				link="https://www.artstation.com/glaze"
			/>
		</LinkContainer>
	);

	const size = useContext(ResponsiveContext);
	return (
		<Navbar>
			{size.width < theme.contextSize.small ? (
				<StackVertical>
					<div style={{ width: "100%" }}>
						<Image src={logo_rect} alt="Rect logo" />
					</div>
					<div style={{ paddingBottom: "10px" }}>{linkContent}</div>
				</StackVertical>
			) : (
				<StackHorizontal>
					<div style={{ width: "600px", padding: "5px" }}>
						<Image src={logo_rect} alt="Rect logo" />
					</div>
					{linkContent}
				</StackHorizontal>
			)}
		</Navbar>
	);
};

const StackHorizontal = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding-right: 20px;
`;

const StackVertical = styled.div`
	display: flex;
	flex-direction: column;
`;

const LinkContainer = styled.div`
	margin-top: auto;
	margin-bottom: auto;
	display: flex;
	justify-content: center;
	gap: 32px;
	> * {
		color: ${theme.color.primary};
		width: 42px;
		height: 42px;
	}
`;

const Navbar = styled.div`
	width: 100%;
	background-color: ${theme.color.background};
	border-bottom: 2px solid ${theme.color.secondary};
`;

export default Header;
