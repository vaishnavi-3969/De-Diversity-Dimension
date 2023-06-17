import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/HomePage";
import Footer from "./components/Additional/Footer";

export function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} exact/>
        </Routes>
      </BrowserRouter>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
