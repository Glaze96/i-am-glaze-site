import React from "react";
import Image from "next/image";
import logo_rect from "../public/graphics/LOGO_RECT.svg";
import styled from "styled-components";
import { theme } from "../src/UI/Theme";
import {
	FaSpotify,
	FaInstagram,
	FaYoutube,
	FaTwitch,
	FaArtstation,
} from "react-icons/fa";

import IconTextButton from "./IconTextButton";

const Header = () => {
	return (
		<Navbar>
			<div style={{ width: "600px", padding: "5px" }}>
				<Image src={logo_rect} alt="Rect logo" />
			</div>
			<div style={{ justifyContent: "right", width: "100%", display: "flex" }}>
				<LinkContainer>
					<IconTextButton IconComponent={FaSpotify} iconSize={45} link="https://open.spotify.com/artist/6gAx05BlEJQcHp7mMVi3eM"/>
					<IconTextButton IconComponent={FaInstagram} iconSize={45} link="https://www.instagram.com/i_am_the_real_glaze/"/>
					<IconTextButton IconComponent={FaYoutube} iconSize={45} link="https://www.youtube.com/channel/UCXh8mqVGRwUhQvT5ZZG-w0g"/>
					<IconTextButton IconComponent={FaTwitch} iconSize={45} link="https://www.twitch.tv/i_am_glaze"/>
					<IconTextButton IconComponent={FaArtstation} iconSize={45} link="https://www.artstation.com/glaze"/>
				</LinkContainer>
			</div>
		</Navbar>
	);
};

const LinkContainer = styled.div`
	margin-top: auto;
	margin-bottom: auto;
	display: flex;
	justify-content: center;
	padding-right: 16px;
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
	border-bottom: 0.3vh solid ${theme.color.secondary};
	display: flex;
	flex-direction: row;
`;

export default Header;
