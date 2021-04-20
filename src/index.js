import React from "react";
import ReactDOM from "react-dom";
import Main from "./js/Main";
import "./css/menu.css";

import { ThemeProvider } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from './theme';
 
ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider  theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <Main/>
      </React.Fragment>
    </MuiThemeProvider >
  </React.StrictMode>,
  document.getElementById("root")
);