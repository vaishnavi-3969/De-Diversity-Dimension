import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/HomePage";
import Footer from "./components/Additional/Footer";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Additional/Profile";
import BlogForm, { BlogList } from "./components/Blog/BlogForm";
import Blogs from "./components/Blog/Blogs";
import LGBTQEducation from "./components/Inclusivity Education/LGBTQEducation";
import AdvocacySection from "./components/Activism & Advocacy/AdvocacySection";
import SafeSpacesAndCommunitySection from "./components/Safe Spaces & Community/SafeSpacesAndCommunitySection";
import HealthWellnessSection from "./components/Health & Wellness/HealthWellness";
import LGBTQMarketplace from "./components/LGBTQ+ Friendly Shopping/LGBTQMarketplace";
import MentalHealthSupport from "./components/Mental Health Resources/MentalHealthSupport";

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
          <Route path="/blogList" element={<Blogs/>} exact/>
          <Route path="/inclusivity-education" element={<LGBTQEducation/>} exact/>
          <Route path="/activism-and-advocacy" element={<AdvocacySection/>} exact/>
          <Route path="/safe-spaces-and-community" element={<SafeSpacesAndCommunitySection/>} exact/>
          <Route path="/health-and-wellness" element={<HealthWellnessSection/>} exact/>
          <Route path="/shopping" element={<LGBTQMarketplace/>} exact/>
          <Route path="/mental-health" element={<MentalHealthSupport/>} exact/>
        </Routes>
        </div>
      </BrowserRouter>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
