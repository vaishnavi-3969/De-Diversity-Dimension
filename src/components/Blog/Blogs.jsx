import React from "react";
import { BlogList } from "./BlogForm";

const Blogs = () => {
  return (
    <div className="flex flex-col items-center justify-center"> 
        <h1 className="text-3xl text-white mb-6">Blog Posts</h1>
        <div className="grid grid-cols-3 gap-4">
          <BlogList />
        </div>
    </div>
  );
};

export default Blogs;
