import * as React from "react"; //eslint-disable-line
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles"; // eslint-disable-line no-unused-vars

import "./styles/index.css";
import App from "./components/App"; // eslint-disable-line no-unused-vars
import reportWebVitals from "./reportWebVitals";

const theme = createTheme({
	palette: {
		primary: {
			main: "#37c",
		},
		secondary: {
			main: "#1ac959",
		},
		tertiary: {
			main: "#571ac9",
		},
		icon: {
			main: "#FFFFFF",
		},
	},
	typography: {
		fontFamily: "Lato",
	},
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App /> 
		</ThemeProvider>
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
