import { createGlobalStyle } from "styled-components";

const theme = {
	color: {
		primary: "#FF94FD",
		primaryAccent: "#000000",
		secondary: "#74ABFF",
		secondaryAccent: "#000000",
		background: "#202020",
		backgroundLight: "#2A2A2A",
		text: "#ffffff",
		gray: "#cfcfcf",
	},
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "RalewaySemiBold";
    src: url("/fonts/Raleway-SemiBold.ttf") format('truetype');
    font-weight: bold;
    font-style: bold;
  }
  @font-face {
    font-family: "RalewayMedium";
    src: url("/fonts/Raleway-Medium.ttf") format('truetype');
    font-weight: bold;
    font-style: bold;
  }
  html {
    font-family: "RalewaySemiBold";
    color: white;
  }

  body {
    background-color: ${theme.color.backgroundLight};
    font-family: "RalewaySemiBold";
    
    ::-webkit-scrollbar {
      width: 30px;
    }
  }
  h1 {
    padding: 15px;
  }
  p {
    font-family: "RalewayMedium";
    font-size: 15px;
  }
  * {
    margin: 0;
  }
`;

export { GlobalStyle, theme };
