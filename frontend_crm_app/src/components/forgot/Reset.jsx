import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles.module.css";
import { Form, Button, Badge } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Reset() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
  });

  const [err, setErr] = useState("");

  const handleChange = ({ target: ip }) => {
    setData({ ...data, [ip.name]: ip.value });
  };

  const handleSubmit = async (e) => {
    console.log("handle submit");
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/forgetpassword/forgetpassword";
      console.log("Api call initiated");
      const { data: res } = await axios.post(url, data);
      console.log(res);

      navigate("/reset-password");
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
            <Badge bg="success">Forgot Password</Badge>
          </h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address </Form.Label>
            <Form.Control
              type="email"
              name="email"
              required
              onChange={handleChange}
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          {err && <div className={styles.error_msg}>{err}</div>}
          <Button variant="success" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}
