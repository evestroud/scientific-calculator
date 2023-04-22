import { render } from "preact";
import { App } from "./app";
import "./reset.css";
import "./style.css";

render(<App />, document.getElementById("app") as HTMLElement);
