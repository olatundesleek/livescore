import { HEADER_NAV_BAR } from "../dom-variables.js";

export default class UI {
	constructor() {
		HEADER_NAV_BAR.addEventListener("click", event => {
			console.log(event.target.classList.contains("nav-bar-search-icon"));
		});
	}
}
