import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Forget from "./Pages/Forget";
import Confirm from "./Pages/Confirm";
import Home from "./Pages/Home";
import Leads from "./Pages/Leads";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forget" element={<Forget />} />
      <Route path="/confirm" element={<Confirm />} />
      <Route path="/home" element={<Home />} />
      <Route path="/leads" element={<Leads />} />
    </Routes>
  );
}

export default App;
