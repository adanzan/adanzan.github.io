import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import workData from "./resources/workData.json";
import agula_logo_file from "./resources/images/agula_logo.jpeg"

const agula_logo = <img src={agula_logo_file} alt="Logo of Agula Insurance"></img>

const props = {workData, agula_logo};

const theme = createTheme({
  palette: {
    primary: {
      main: "#1ac959",
    },
    secondary: {
      main: "#1a8cc9",
    },
    tertiary: {
      main: "#571ac9",
    }
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App {...props}/>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
