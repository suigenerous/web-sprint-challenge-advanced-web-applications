import React, {useState} from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth'

const Login = () => {
 
  const [formValues, setFormValues] = useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState('');

  const submitCredentials = (credentials) => {
    return axiosWithAuth()
        .post('/api/login', { username: credentials.username, password: credentials.password })
        .then (res => {
            localStorage.setItem('token', res.data.payload);
            console.log(res.data.payload);
            window.location.href = 'http://localhost:3000/bubblepage';

        })
        .catch(err => {
            console.log(err);
            setErrors(err.response.data.error);
        })
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(formValues)
    submitCredentials(formValues)
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username
          <input
              type = "text"
              name="username"
              value = {formValues.username}
              onChange = {e => setFormValues({...formValues, username: e.target.value})}
          />
          </label>
          <label htmlFor="password">Password
              <input
              type = "password"
              name="password"
              value = {formValues.password}
              onChange = {e => setFormValues({...formValues, password: e.target.value})}
              />
          </label>
          <button type = "submit">Login</button>
        </form>
        <p>{errors}</p>
    </div>
  );
};

export default Login;
