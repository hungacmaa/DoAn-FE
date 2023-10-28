import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Signin from "./page/signin";
import Signup from "./page/signup";
import Index from "./page";

function App() {
  return (
    <>
      <Routes>
          <Route path="signin" element={<Signin/>}></Route>
          <Route path="signup" element={<Signup/>}></Route>
          <Route path="index" element={<Index/>}></Route>
      </Routes>
    </>
  );
}

export default App;
