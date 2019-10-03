import { HEADER_NAV_BAR, MODAL } from "../dom-variables.js";
import { modal_login_form } from "../components/modal-login-form.js";
import { modal_search } from "../components/modal-search.js";
import { modal_categories } from "../components/modal-categories.js";

export default class UI {
	constructor() {
		HEADER_NAV_BAR.addEventListener("click", event => {
			if (event.target.classList.contains("nav-bar-icon")) {
				if (!event.target.classList.contains("modal-toggle")) {
					MODAL.classList.add("modal-toggle");
				}
				if (event.target.classList.contains("nav-bar-search-icon")) {
					MODAL.innerHTML = modal_search();
				} else if (event.target.classList.contains("nav-bar-user-icon")) {
					MODAL.innerHTML = modal_login_form();
				} else if (event.target.classList.contains("nav-bar-bars-icon")) {
					MODAL.innerHTML = modal_categories();
				}
			}
		});
	}
}
