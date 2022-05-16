import React, { useEffect, useState, useCallback } from "react";
import { theme } from "./UI/Theme";

export const ResponsiveContext = React.createContext();

export default function UseResponsiveContext({ children }) {
	const [hasWindow, setHasWindow] = useState(false);

	useEffect(() => {
		setHasWindow(true);
	}, []);

	const getWindowDimensions = useCallback(() => {
		const width = hasWindow ? window.innerWidth : theme.contextSize.large;
		const height = hasWindow ? window.innerHeight : theme.contextSize.large;
		return {
			width,
			height,
		};
	}, [hasWindow]);

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => { 
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
      handleResize();

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }

  }, [getWindowDimensions, hasWindow])

	return (
		<ResponsiveContext.Provider value={windowDimensions}>
			{children}
		</ResponsiveContext.Provider>
	);
}
