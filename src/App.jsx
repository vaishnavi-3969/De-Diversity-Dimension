import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/HomePage";
import Footer from "./components/Additional/Footer";
import Sidebar from "./components/Sidebar";

export function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="flex-1">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<HomePage/>} exact/>
        </Routes>
        </div>
      </BrowserRouter>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
