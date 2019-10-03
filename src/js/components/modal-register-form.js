export function modal_register_form() {
	return `
    <!-- Register Form -->

   <!-- MODAL CLOSE BTN -->
  <div class="modal-close-btn flex-center">
    <i class="fa fa-close"></i>
  </div>

    <form class="form register-form pad-l-1 pad-r-1">

      <h5 class="form-title">
        Register
        <i class="fa fa-envelope"></i>
      </h5>
      
                  <div class="form-group">
                    <input name="username" class="username form-control" type="username" placeholder="Pease Enter Username...">
                    
                  </div>

                   <p class="input-instruction milli">Please Enter the minimum 8 characters.</p>

                  <div class="form-group">
                    <input name="email" class="email form-control" type="email" placeholder="Please Enter Email...">
                    
                  </div>
      
                  <div class="form-group">
                    <input name="password" class="password form-control" type="password" placeholder="Please Enter Password...">
                    
                  </div>
      
                  <p class="input-instruction milli">Please Enter the minimum 8 characters.</p>
      
                  <div class="buttons">
                    <button class="register-btn btn-dark">Register</button>
      
                    <i class="milli font-w-bold text-t-upper p-l-1-2 p-r-1-2">-or-</i>
      
                    <a href="#" class="login-btn btn-success">Login</a>
                  </div>
                </form>
  `;
}
