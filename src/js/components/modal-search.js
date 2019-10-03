export function modal_search() {
	return `
    <!-- search -->
    <!-- MODAL CLOSE BTN -->
    <div class="modal-close-btn flex-center">
      <i class="fa fa-close"></i>
    </div>

					<form class="form search-form">
						<div class="form-group">
							<input class="form-control" type="text" placeholder="Enter your search here">
							<a class="dropdown-link milli" href="#">All Sports&nbsp;<i class="fa fa-caret-down"></i></a>
						</div>
						<p class="input-instruction milli">Please Enter the minimum 3 characters. Results will start displaying here
							immediately.</p>
					</form>

					<div class="table table-2 search-table">
						<div class="table-name font-w-bold pad-half-left">Most popular searches
						</div>

						<div class="table-2-content">
							<ul>
								<li><a href="#">Spain: LaLiga</a></li>
								<li><a href="#">England: Premier League</a> </li>
								<li><a href="#">Juventus (italy)</a></li>
								<li><a href="#">Ajax (Netherlands)</a></li>
								<li><a href="#">Tottenham (England)</a></li>
							</ul>
						</div>
					</div>
  `;
}
