import React from "react";
import ReactDOM from "react-dom";
import ThemeProvider from "./context/ThemeProvider";
import Layout from "./components/Layout";
import "./main.scss";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
