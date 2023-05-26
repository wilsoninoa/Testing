import React from "react";
import ReactDOM, { createRoot } from "react-dom";
import App from "./App";
/*
ReactDOM.render(
    <App />, document.getElementById("root")
);
*/
const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);
