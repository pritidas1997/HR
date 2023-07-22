import React from "react";

export default function Testimonial() {
  const handleSignUpClick = () => {
    const container = document.getElementById("container");
    container.classList.add("right-panel-active");
  };

  const handleSignInClick = () => {
    const container = document.getElementById("container");
    container.classList.remove("right-panel-active");
  };
  return (
    <div>
      <section className="newlogin-sec">
        <div className="container" id="container">
          <div className="row">
            <div className="col-md-12">
              <div className="form-container sign-up-container">
                <form action="#">
                  <h1>Create Account</h1>
                  <span>or use your email for registration</span>
                  <div className="input-box">
                    <input type="email" placeholder="Email" />
                  </div>
                  <div className="input-box">
                    <input type="password" placeholder="Password" />
                  </div>
                  <div className="btn-box">
                    <button>Sign Up</button>
                  </div>
                </form>
              </div>
              <div className="form-container sign-in-container">
                <form action="#">
                  <h1>Sign in</h1>

                  <span>or use your account</span>
                  <div className="input-box">
                    <input type="email" placeholder="Email" />
                  </div>
                  <div className="input-box">
                    <input type="password" placeholder="Password" />
                  </div>
                  <button>Sign In</button>
                </form>
              </div>
              <div className="overlay-container">
                <div className="overlay">
                  <div className="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>
                      To keep connected with us please login with your personal
                      info
                    </p>
                    <button
                      className="ghost"
                      id="signIn"
                      onClick={handleSignInClick}
                    >
                      Sign In
                    </button>
                  </div>
                  <div className="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <button
                      className="ghost"
                      id="signUp"
                      onClick={handleSignUpClick}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
