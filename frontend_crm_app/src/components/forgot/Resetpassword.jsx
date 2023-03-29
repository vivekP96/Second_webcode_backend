import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles.module.css";
import { Form, Button, Badge } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Resetpassword() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [err, setErr] = useState("");
  const handleChange = ({ target: ip }) => {
    setData({ ...data, [ip.name]: ip.value });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const url = "http://localhost:5000/api/changepassword/:id/:token";
      console.log("Api call initiated");
      const { data: res } = await axios.post(url, data);
      console.log(res);

      navigate("/");
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
    <div className={styles.layout}>
      <Form>
        <div className={styles.borders}>
          <h1>
            <Badge bg="success">Reset Password</Badge>
          </h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>New password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              required
              onChange={handleChange}
              placeholder="Enter your new password"
            />
            <br />
            <Form.Control
              type="password"
              name="confirmPassword"
              required
              onChange={handleChange}
              placeholder="Confirm your new password"
            />
            <Form.Text className="text-muted">
              Make sure that your new password and confirm Password must be
              equal!!!.
            </Form.Text>
          </Form.Group>
          {err && <div className={styles.error_msg}>{err}</div>}
          <Button variant="success" type="submit" onChange={handleSubmit}>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}
