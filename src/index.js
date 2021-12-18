import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Feed from "./pages/Feed";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <div className="index-main">
          <Header />
          <Routes>
            <Route exact path="/" element={<App />} />
            <Route path="feed" element={<Feed />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
