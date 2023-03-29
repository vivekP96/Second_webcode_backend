import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/home";
import Signup from "./components/signup";
import Login from "./components/login";
import Reset from "./components/forgot/Reset";
import Resetpassword from "./components/forgot/Resetpassword";

function App() {
  const user = localStorage.getItem("token");
  return (
    <Routes>
      {user && <Route path="/" exact element={<Home />}></Route>}
      <Route path="/signup" exact element={<Signup />}></Route>
      <Route path="/login" exact element={<Login />}></Route>
      <Route path="/" exact element={<Navigate replace to="/login" />}></Route>

      <Route path="/forget-password" exact element={<Reset />}></Route>
      <Route path="/reset-password" exact element={<Resetpassword />}></Route>
    </Routes>
  );
}

export default App;
