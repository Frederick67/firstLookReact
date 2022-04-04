import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";

//import my component
import Navbar from "./components/navbar";
import BlogView from "./components/blogView";

function App() {
  //use state
  const [blogs, setBlogs] = useState(null);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/blogs")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
        setIsLoading(false);
      });
  }, []);

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
      {!isLoading && (
        <Navbar
          onSearch={handleSearch}
          onAddBlog={handleAddBlog}
          blogsLength={blogs.length}
        />
      )}
      <div className="container">
        {isLoading && <h2>Loading...</h2>}
        {!isLoading && (
          <BlogView
            blogs={blogs.filter(
              (blog) =>
                blog.author.toLowerCase().includes(search.toLowerCase()) ||
                blog.content.toLowerCase().includes(search.toLowerCase()) ||
                blog.heading.toLowerCase().includes(search.toLowerCase())
            )}
            title="Blogs"
            onDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
}

export default App;
