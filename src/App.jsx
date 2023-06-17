import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/HomePage";
import Footer from "./components/Additional/Footer";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Additional/Profile";
import BlogForm from "./components/Blog/BlogForm";

export function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="flex-1">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<HomePage/>} exact/>
          <Route path="/profile" element={<Profile/>} exact/>
          <Route path="/profile" element={<Profile/>} exact/>
          <Route path="/blogForm" element={<BlogForm/>} exact/>
          
        </Routes>
        </div>
      </BrowserRouter>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
