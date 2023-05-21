import "./App.css";
import TopNav from "./components/Elements/TopNav";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./booking/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Reset from "./auth/Reset";
import PrivateRoutes from "./components/PrivateRoutes";
import Dashboard from "./user/Dashboard";
import JsonLogin from "./components/JWT/JsonLogin";

function App() {
  return (
    <>
      <Router>
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} index />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/jwt" element={<JsonLogin />} />
          <Route path="/dashboard" element={<PrivateRoutes />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
