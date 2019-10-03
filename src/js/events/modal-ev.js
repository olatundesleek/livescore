import { MODAL, MODAL_USERNAME_INPUT } from "../dom-variables.js";
import { modal_login_form } from "../components/modal-login-form.js";
import { modal_register_form } from "../components/modal-register-form.js";

fetch("http://localhost:5001/src/js/json/fieldPattern.json").then(data =>
	console.log(data)
);

export default class UI {
	constructor() {
		MODAL.addEventListener("click", event => {
			const element = event.target;
			const parent = event.target.parentElement;

      if (element.classList.contains("modal-close-btn") || parent.classList.contains("modal-close-btn"))
				MODAL.classList.remove("modal-toggle");
			else if (
				element.classList.contains("register-btn") &&
				parent.parentElement.classList.contains("login-form")
			) {
				MODAL.innerHTML = modal_register_form();
			} else if (
				element.classList.contains("login-btn") &&
				parent.parentElement.classList.contains("register-form")
			) {
				MODAL.innerHTML = modal_login_form();
			}
			//   else if (element.classList.contains("form-control")) {
			// 		// parent.classList.add("form-group-error");

			// 		element.addEventListener("input", () => {
			// 			// this.getFieldPattern().then(data => {
			// 			// 	console.log(
			// 			// 		element.name,
			// 			// 		this.validate(element, data[element.name])
			// 			// 	);
			// 			// 	if (this.validate(element, data[element.name])) {
			// 			// 		parent.classList.remove("form-group-error");
			// 			// 		parent.classList.add("form-group-success");
			// 			// 	} else {
			// 			// 		parent.classList.remove("form-group-success");

			// 			// 		parent.classList.add("form-group-error");
			// 			// 	}
			// 			// });

			// 			this.getFieldPattern();
			// 		});
			// 		// console.log(parent);
			// 	}
			else if (
				element.classList.contains("form-control") &&
				parent.parentElement.classList.contains("register-form")
			) {
				element.addEventListener("input", () => {
					this.getFieldPattern().then(data => {
						console.log(data[element.name]);
						if (this.validate(element, data[element.name])) {
							parent.classList.remove("form-group-error");
							parent.classList.add("form-group-success");
						} else {
							parent.classList.remove("form-group-success");
							parent.classList.add("form-group-error");
						}
					});
				});
			} else if (parent.parentElement.classList.contains("register-form")) {
				parent.parentElement.addEventListener("submit", event => {
					event.preventDefault();
					console.log(element.parentElement.siblings);
				});
			}
		});
	}

	// async getFieldPattern() {
	// 	const response = await fetch(
	// 		"http://localhost:5001/src/js/json/fieldPattern.json"
	// 	);

	// 	const data = await response.json();
	// 	return data;
	// }

	// validate({ value }, pattern) {
	// 	console.log(value, pattern);
	// 	return new RegExp(pattern).test(value);
	// }

	async getFieldPattern() {
		const response = await fetch(
			"http://localhost:5001/src/js/json/fieldPattern.json"
		);
		const data = await response.json();

		return data;
	}

	validate({ value }, pattern) {
		return new RegExp(pattern).test(value);
	}
}
