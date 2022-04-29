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

const Header = () => {
	return (
		<Navbar>
			<div style={{ width: "600px", padding: "5px" }}>
				<Image src={logo_rect} alt="Rect logo" />
			</div>
			<div style={{ justifyContent: "right", width: "100%", display: "flex" }}>
				<LinkContainer>
					<FaSpotify />
					<FaInstagram />
					<FaYoutube />
					<FaTwitch />
					<FaArtstation />
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
  >*{
    color: ${theme.color.primary};
    width: 42px;
    height: 42px;
  } 
`

const Navbar = styled.div`
	width: 100%;
	background-color: ${theme.color.background};
	border-bottom: 0.3vh solid ${theme.color.secondary};
	display: flex;
	flex-direction: row;
`;

export default Header;
