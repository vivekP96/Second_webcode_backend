import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
  });

  const [err, setErr] = useState("");

  const navigate = useNavigate();

  const handleChange = ({ target: ip }) => {
    setInput({ ...input, [ip.name]: ip.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/users";
      const { input: res } = await axios.post(url, input);
      alert("User Registered Successfully");
      navigate("/login");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setErr(error.response.data.message);
      }
    }
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h1>Welcome to Our CRM App</h1>
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              Sign in
            </button>
          </Link>
        </div>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              value={input.firstName}
              required
              className={styles.input}
            ></input>
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              value={input.lastName}
              required
              className={styles.input}
            ></input>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={input.email}
              className={styles.input}
            ></input>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={input.password}
              required
              className={styles.input}
            ></input>
            <input
              type="text"
              placeholder="Role"
              name="role"
              onChange={handleChange}
              value={input.role}
              required
              className={styles.input}
            ></input>
            {err && <div className={styles.error_msg}>{err}</div>}
            <button type="submit" className={styles.green_btn}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
