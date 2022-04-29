import styled, { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "../src/UI/Theme";
import Content from "../src/Content"

export default function Home() {
	return (
		<ThemeProvider theme={theme}>
      <GlobalStyle />
      <Content />
		</ThemeProvider>
	);
}
