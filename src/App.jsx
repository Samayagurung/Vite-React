import "./App.css";
import { ToastContainer } from "react-toastify";

import { Routes, Route } from "react-router-dom";
import Counter from "./components/Counter";
import QuoteDisplay from "./components/Student";
import Countdown from "./components/Countdown";
import CardX from "./components/Card";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ModalX from "./components/Modal";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./components/Product";
import NavBar from "./components/Navbar";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar/>}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/quote" element={<QuoteDisplay />}></Route>
        <Route path="/countdown" element={<Countdown />}></Route>
        <Route path="/card" element={<CardX />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/signin" element={<SignInPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/modal" element={<ModalX/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
      <ToastContainer/>
    </>
  );
}

export default App;
