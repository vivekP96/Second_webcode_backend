import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [err, setErr] = useState("");

  const handleChange = ({ target: ip }) => {
    setData({ ...data, [ip.name]: ip.value });
  };

  const handleSubmit = async (e) => {
    console.log("Handle Submit!!!!!");
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/auth";
      console.log("Handle Submit!!!!! - 2");
      const { data: res } = await axios.post(url, data);
      console.log(res);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setErr(error.response.data.message);
      }
      console.log(error);
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Login Page</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            ></input>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            ></input>
            {err && <div className={styles.error_msg}>{err}</div>}
            <Link to="/forget-password" className={styles.forget}>
              Forget Password?
            </Link>
            <button type="submit" className={styles.green_btn}>
              Sign In
            </button>
          </form>
        </div>

        <div className={styles.right}>
          <h1>No Account?</h1>
          <Link to="/signup">
            <button type="button" className={styles.white_btn}>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
