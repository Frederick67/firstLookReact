import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

//import my component
import Navbar from "./components/navbar";
import BlogView from "./components/blogView";

function App() {
  const b = [
    
  ];

  
  //use state
  const [blogs, setBlogs] = useState(b);
  const [search, setSearch] = useState("");

  function handleDelete(id) {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  }

  function handleSearch(newSearch) {
    setSearch(newSearch);
  }

  function handleAddBlog(newBlog) {
    const newBlogs = [...blogs, newBlog];
    setBlogs(newBlogs);
  }

  return (
    <div>
      <Navbar onSearch={handleSearch} onAddBlog = {handleAddBlog} blogsLength = {blogs.length}/>
      <div className="container">
        <BlogView
          blogs={blogs.filter(
            (blog) =>
              blog.author.toLowerCase().includes(search.toLowerCase()) ||
              blog.content.toLowerCase().includes(search.toLowerCase()) ||
              blog.heading.toLowerCase().includes(search.toLowerCase())
          )}
          title = "Blogs"
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}




export default App;
