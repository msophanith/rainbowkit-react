import React from "react";
import ReactDOM from "react-dom/client";
import "@rainbow-me/rainbowkit/styles.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { WagmiConfig } from "wagmi";
import { darkTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { wagmiClient } from "./wagmiClient";
import { chains } from "./wagmiClient";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        modalSize="compact"
        theme={darkTheme()}
      >
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
