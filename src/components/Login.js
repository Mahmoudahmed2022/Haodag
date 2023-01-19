import "../Css/Login.css";
import { FaLock } from "@react-icons/all-files/fa/FaLock";
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import { ImMail } from "react-icons/im";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://fakestoreapi.com/products", { email, password })
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="tilte">
          <h2>Login</h2>
        </div>
        <div className="mb-3 email">
          <label className="form-label">
            <FaUserAlt />
            &nbsp;Email address
          </label>
          <br />
          <input
            type="email"
            className="form-control email-input"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Type your email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3 password">
          <label className="form-label">
            <FaLock />
            &nbsp;Password
          </label>
          <br />
          <input
            type="password"
            className="form-control password-input"
            id="password"
            name="password"
            placeholder="Type your password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="rememberme" />

          <label className="form-check-label" htmlFor="exampleCheck1">
            Remember me
          </label>
        </div>
        <div className="button">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <h5>New Visitor ?</h5>
          <button type="submit" className="btn btn-primary">
          Subscribe
          </button>
          
        </div>
      </form>
    </div>
  );
}

export default Login;
