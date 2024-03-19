import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Forgot from "./Pages/Forgot";
import Confirm from "./Pages/Confirm";
import Home from "./Pages/Home";
import Leads from "./Pages/Leads";
import Casestudy from "./Pages/Casestudy";
import Blogs from "./Pages/Blogs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/confirm" element={<Confirm />} />
      <Route path="/home" element={<Home />} />
      <Route path="/leads" element={<Leads />} />
      <Route path="/casestudy" element={<Casestudy />} />
      <Route path="/blogs" element={<Blogs />} />
    </Routes>
  );
}

export default App;
