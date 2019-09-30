import { HEADER_NAV_BAR, MODAL } from "../dom-variables.js";

export default class UI {
	constructor() {
		HEADER_NAV_BAR.addEventListener("click", event => {
			if (event.target.classList.contains("nav-bar-icon")) {
				if (!event.target.classList.contains("modal-toggle")) {
					MODAL.classList.add("modal-toggle");
				}
				if (event.target.classList.contains("nav-bar-search-icon")) {
					MODAL.innerHTML = `
					<!-- search -->
					<form class="form">
						<div class="form-group">
							<input class="form-control" type="text" placeholder="Enter your search here">
							<a class="dropdown-link milli" href="#">All Sports&nbsp;<i class="fa fa-caret-down"></i></a>
						</div>
						<p class="input-instruction milli">Please Enter the minimum 3 characters. Results will start displaying here
							immediately.</p>
					</form>

					<div class="table table-2">
						<div class="table-name font-w-bold pad-half-left">Most popular searches
						</div>

						<div class="table-2-content">
							<ul>
								<li><a href="#">Spain: LaLiga</a></li>
								<li><a href="#">England: Premier League</a> </li>
								<li><a href="#">Juventus (italy)</a></li>
								<li><a href="#">Ajax (Netherlands)</a></li>
								<li><a href="#">Tottenham (England)</a></li>
								<li><a href="#">England: Premier League</a> </li>
								<li><a href="#">Juventus (italy)</a></li>
								<li><a href="#">Ajax (Netherlands)</a></li>
								<li><a href="#">Tottenham (England)</a></li>
								<li><a href="#">England: Premier League</a> </li>
								<li><a href="#">Juventus (italy)</a></li>
								<li><a href="#">Ajax (Netherlands)</a></li>
								<li><a href="#">Tottenham (England)</a></li>
							</ul>
						</div>
					</div>
					`;
				} else if (event.target.classList.contains("nav-bar-user-icon")) {
					MODAL.innerHTML = `
					<!-- Login Form -->
					<form class="form pad-l-1 pad-r-1">
						<h5 class="form-title">
							Login
							<i class="fa fa-lock"></i>
						</h5>
						<div class="form-group">
							<input class="username/email form-control" type="text" placeholder="Username or Email...">
							<i class="fa fa-exclamation-circle"></i>
						</div>

						<div class="form-group">
							<input class="password form-control" type="password" placeholder="Password...">
							<i class="fa fa-exclamation-circle"></i>
						</div>

						<p class="input-instruction milli">Please Enter the minimum 8 characters.</p>

						<div class="buttons">
							<button class="login-btn btn-dark">Login</button> 
							
							<i class="milli font-w-bold text-t-upper p-l-1-2 p-r-1-2">-or-</i>

							<button class="register-btn btn-success">Register</button>
						</div>
					</form>
					`;
				} else if (event.target.classList.contains("register-btn")) {
					MODAL.innerHTML = `
					<!-- resgiter Form -->
					<form class="form pad-l-1 pad-r-1">
						<h5 class="form-title">
							Login
							<i class="fa fa-lock"></i>
						</h5>
						<div class="form-group">
							<input class="username/email form-control" type="text" placeholder="Username or Email...">
							<i class="fa fa-exclamation-circle"></i>
						</div>

						<div class="form-group">
							<input class="password form-control" type="password" placeholder="Password...">
							<i class="fa fa-exclamation-circle"></i>
						</div>

						<p class="input-instruction milli">Please Enter the minimum 8 characters.</p>

						<div class="buttons">
							<button class="register-btn btn-success">Register</button>

							<i class="milli font-w-bold text-t-upper p-l-1-2 p-r-1-2">-or-</i>

							<button class="login-btn btn-dark">Login</button>
						</div>
					</form>
					`;
				} else console.log(false);
			}
		});

		document.querySelector("input").addEventListener("input", e => {
			console.log("e.sty");
		});
	}
}
