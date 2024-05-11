import React, { useEffect, useRef } from 'react';
import '../assets/css/Login.css';
import { Link } from 'react-router-dom';

function Login() {
  const containerRef = useRef(null);
  const registerBtnRef = useRef(null);
  const loginBtnRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const registerBtn = registerBtnRef.current;
    const loginBtn = loginBtnRef.current;

    const handleRegisterClick = () => {
      container.classList.add('active');
    };

    const handleLoginClick = () => {
      container.classList.remove('active');
    };

    registerBtn.addEventListener('click', handleRegisterClick);
    loginBtn.addEventListener('click', handleLoginClick);

    return () => {
      registerBtn.removeEventListener('click', handleRegisterClick);
      loginBtn.removeEventListener('click', handleLoginClick);
    };
  }, []);

  return (
    <div className='container-login-fluid'>
      <div className="container-login" ref={containerRef}>
        <div className="form-container sign-up">
          <form>
            <h1>Create Account</h1>
            <div className="social-icons">
              <Link to={''} className="icon"><i class="bi bi-google"></i></Link>
              <Link to={''} className="icon"><i class="bi bi-facebook"></i></Link>
              <Link to={''} className="icon"><i class="bi bi-github"></i></Link>
              <Link to={''} className="icon"><i class="bi bi-linkedin"></i></Link>
            </div>
            <span>or use your email for registeration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button ref={registerBtnRef}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <h1>Sign In</h1>
            <div className="social-icons">
              <Link to={''} className="icon"><i class="bi bi-google"></i></Link>
              <Link to={''} className="icon"><i class="bi bi-facebook"></i></Link>
              <Link to={''} className="icon"><i class="bi bi-github"></i></Link>
              <Link to={''} className="icon"><i class="bi bi-linkedin"></i></Link>
            </div>
            <span>or use your email password</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <Link to={''}>Forget Your Password?</Link>
            <button ref={loginBtnRef}>Sign In</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button className="hidden" onClick={() => containerRef.current.classList.remove('active')}>Sign In</button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>Register with your personal details to use all of site features</p>
              <button className="hidden" onClick={() => containerRef.current.classList.add('active')}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
