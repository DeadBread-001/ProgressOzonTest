import { ProgressBar } from "./components/progressBar/progressBar.js";
import "./index.scss";

const root = document.querySelector("#root");

new ProgressBar(root, "Progress");
