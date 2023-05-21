import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, HashRouter as Routes } from "react-router-dom";
import App from "./app";
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <Routes>
        <App />
    </Routes>
)