import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  doc,
  onSnapshot
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import Hands from "../../assets/blog.png";
import { useAuth0 } from "@auth0/auth0-react";

const firebaseConfig = {
  apiKey: "AIzaSyB4eurB_mgOyTIs9_70wviE_RPji16NGcs",
  authDomain: "de-diversity-dimension.firebaseapp.com",
  projectId: "de-diversity-dimension",
  storageBucket: "de-diversity-dimension.appspot.com",
  messagingSenderId: "804377955572",
  appId: "1:804377955572:web:7d3298e4c8e5db94a862a1",
  measurementId: "G-0B7642ZPM0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const BlogForm = ({ onAddBlog }) => {
  const { user, isAuthenticated } = useAuth0();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");


  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleAuthorChange = (event) => {
    if (isAuthenticated) {
      setAuthor(user.name);
    } else {
      setAuthor(event.target.value);
    }
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleTagInputChange = (event) => {
    setTagInput(event.target.value);
  };

  const handleAddTag = () => {
    if (tagInput.trim() !== "") {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const blog = {
      id: uuid(),
      title,
      content,
      author,
      category,
      tags,
      upvotes: 0,
      comments: [],
    };

    try {
      const docRef = await addDoc(collection(db, "blogs"), blog);
      blog.id = docRef.id;
      alert("Blog submitted successfully")
    } catch (error) {
      console.error("Error adding blog:", error);
    }


    setTitle("");
    setContent("");
    setAuthor("");
    setCategory("");
    setTags([]);
    setTagInput("");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500">
      <div className="p-8 bg-gray-800 shadow-md rounded-md min-w-[1000px] text-white flex flex-col items-center justify-center">
        <div className="flex">
        <h1>Write the future...</h1>
          <img src={Hands} alt="Dark Logo" className="h-16 mb-4" />
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <div>
            <label htmlFor="title" className="text-gray-300">
              Title:
            </label>
            <input
              type="text"
              id="title"
              value={title}
              className="text-gray-700 w-full px-2 py-1 rounded "
              onChange={handleTitleChange}
            />
          </div>
          <div>
            <label htmlFor="content" className="text-gray-300">
              Content:
            </label>
            <textarea
              id="content"
              value={content}
              className="text-gray-700 w-full px-2 py-1 rounded min-h-[100px] "
              onChange={handleContentChange}
            ></textarea>
          </div>
          <div>
            <label htmlFor="author" className="text-gray-300">
              Author:
            </label>
            <input
              type="text"
              id="author"
              className="text-gray-700 w-full px-2 py-1 rounded"
              value={author}
              onChange={handleAuthorChange}
            />
          </div>
          <div>
            <label htmlFor="category" className="text-gray-300">
              Category:
            </label>
            <input
              type="text"
              id="category"
              value={category}
              className="text-gray-700 w-full px-2 py-1 rounded"
              onChange={handleCategoryChange}
            />
          </div>
          <div>
            <label htmlFor="tags" className="text-gray-300">
              Tags:
            </label>
            <div className="flex space-x-2">
              <input
                type="text"
                id="tags"
                className="text-gray-700 w-full px-2 py-1 rounded"
                value={tagInput}
                onChange={handleTagInputChange}
              />
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"
                onClick={handleAddTag}
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap mt-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-500 text-gray-100 px-2 py-1 rounded-full mr-2 mb-2 flex items-center"
                >
                  {tag}
                  <button
                    type="button"
                    className="ml-2 text-red-500 hover:text-red-700"
                    onClick={() => handleRemoveTag(tag)}
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
      
    </div>

  );
};

const BlogPost = ({ blog }) => {
  const { user } = useAuth0();
  const [upvotes, setUpvotes] = useState(blog.upvotes);
  const [comments, setComments] = useState(blog.comments);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, "blogs", blog.id), (doc) => {
      const updatedBlog = doc.data();
      setComments(updatedBlog.comments);
    });

    return () => {
      unsubscribe();
    };
  }, [blog.id]);

  const handleUpvote = () => {
    const updatedUpvotes = upvotes + 1;
    setUpvotes(updatedUpvotes);

    updateDoc(doc(db, "blogs", blog.id), { upvotes: updatedUpvotes });
  };

  const handleAddComment = async () => {
    if (newComment.trim() === "") return;

    const comment = {
      id: uuid(),
      text: newComment,
      author: user.name,
    };

    const updatedComments = [...comments, comment];
    setComments(updatedComments);

    updateDoc(doc(db, "blogs", blog.id), { comments: updatedComments });

    setNewComment("");
  };

  return (
    
    <div className="blog-post border border-gray-300 rounded-md p-4 mb-6 bg-white">
      <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
      <p className="text-gray-300">{blog.content}</p>
      <p className="text-gray-400">Author: {blog.author}</p>
      <p className="text-gray-400">Category: {blog.category}</p>
      <div className="flex items-center mt-4">
        <button
          onClick={handleUpvote}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
        >
          Upvote
        </button>
        <p className="text-gray-400">Upvotes: {upvotes}</p>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-bold mb-2">Comments</h3>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id} className="mb-2">
              <p>{comment.text}</p>
              <p className="text-gray-400">Author: {comment.author}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <input
          type="text"
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
          className="text-gray-700 w-full px-2 py-1 rounded"
          placeholder="Add a comment"
        />
        <button
          onClick={handleAddComment}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded ml-2"
        >
          Add Comment
        </button>
      </div>
    </div>
  );
};

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "blogs"), (snapshot) => {
      const fetchedBlogs = snapshot.docs.map((doc) => doc.data());
      setBlogs(fetchedBlogs);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      {blogs.map((blog) => (
        <BlogPost key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogForm;
export { BlogList };
