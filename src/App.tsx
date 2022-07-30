import "./index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Register from "./component/Register";
import Login from "./component/Login";
import Mypage from "./component/Mypage";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          {/* <Route path={`/home/`} element={<Home />} /> */}
          <Route path={`/register/`} element={<Register />} />
          <Route path={`/login/`} element={<Login />} />
          <Route path={`/mypage/`} element={<Mypage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
