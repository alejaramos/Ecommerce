import React, { useRef, useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

const Login = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const captcha = useRef(null);
  const [captchaValue, setCaptchaValue] = useState(null);

  const navigate = useNavigate();

  const onChange = () => {
    if (captcha.current.getValue()) {
      setCaptchaValue(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (captcha.current.getValue()) {
      setCaptchaValue(true);
    }

    axios
      .post("http://localhost:3000/api/users/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        setUser(res.data);
      });
    navigate('/me');
  };


  return (
    <div class="container">
      <div class="col-sm-6 login-form pt-5">
        <h2>Accedé a tu cuenta</h2>
        <form onSubmit={handleSubmit}>
          <div class="form-group col-md-6 pb-3">
            <label for="Email" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="Email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div class="form-group col-md-6 pb-3">
            <label for="Password" class="form-label">
              Contraseña
            </label>
            <input
              type="password"
              class="form-control"
              id="Password"
              placeholder="contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Ingresá
          </button>
        </form>
        <div class="recaptcha pt-4">
          <ReCAPTCHA
            sitekey="6Le-5lUgAAAAAMhhuBnrbEXThYz4cFNhY-txabwp"
            onChange={onChange}
            ref={captcha}
          />
        </div>
        <div>
          {captchaValue === false && <p>Por favor hacé click en el checkbox</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
