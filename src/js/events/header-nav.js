import { HEADER_NAV_BAR, MODAL } from "../dom-variables.js";

export default class UI {
	constructor() {
		HEADER_NAV_BAR.addEventListener("click", event => {
			if (event.target.classList.contains("nav-bar-icon")) {
				MODAL.classList.toggle("modal-toggle");
				if (event.target.classList.contains("nav-bar-search-icon")) {
					MODAL.innerHTML = `
					<!-- search -->
					<div class="search-bar">
						<input class="search" type="text" placeholder="Enter your search here">
						<a class="dropdown milli" href="#">All Sports&nbsp;<i class="fa fa-caret-down"></i></a>
					</div>
					<p class="search-instruction milli">Please Enter the minimum 3 characters. Results will start displaying here
						immediately.</p>

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
					<form>
						<div class="form-title">
							Login
						</div>
						<input class="username/email" type="text" placeholder="Username or Email...">
						<input class="username/email" type="password" placeholder="Password...">

						<button class="btn-dark">Login</button>
						<button class="btn-dark">Register</button>
					</form>
					`;
				}
			}
		});
	}
}
