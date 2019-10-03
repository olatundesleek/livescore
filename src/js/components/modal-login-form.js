export function modal_login_form() {
	return `
  <!-- Login Form -->

  <!-- MODAL CLOSE BTN -->
  <div class="modal-close-btn flex-center">
    <i class="fa fa-close"></i>
  </div>

    <form class="form login-form pad-l-1 pad-r-1">

      <h5 class="form-title">
        Login
							<i class="fa fa-lock"></i>
      </h5>
      <div class="form-group">
        <input class="login-email form-control" type="email" placeholder="Username or Email...">
          
						</div>

        <div class="form-group">
          <input class="password form-control" type="password" placeholder="Password...">
            
            </div>
            
        <div class="buttons">
          <button class="login-btn btn-dark">Login</button>
          <i class="milli font-w-bold text-t-upper p-l-1-2 p-r-1-2">-or-</i>
          <a href="#" class="register-btn btn-success">Register</a>
      </div>
    </form>`;
}
