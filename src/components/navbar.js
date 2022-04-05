import { useState } from "react";

const Navbar = ( { onSearch, onAddBlog, blogsLength } ) => {
  
  const [heading, setHeading] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Navbar</span>
        <form className="d-flex">
          <input  className="form-control me-2" type="search" placeholder="Title" aria-label="Search" onChange={(event) => setHeading(event.target.value)}></input>
          <input  className="form-control me-2" type="search" placeholder="Author" aria-label="Search" onChange={(event) => setAuthor(event.target.value)}></input>
          <input  className="form-control me-2" type="search" placeholder="Body" aria-label="Search" onChange={(event) => setContent(event.target.value)}></input>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <button type="button" style={{marginRight: "40px"}}  onClick={() => onAddBlog({
            id: blogsLength, 
            heading: heading,
            author: author,
            content: content
          })} class="btn btn-dark">New</button>
          <input  className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(event) => onSearch(event.target.value)}></input>
        </form>
        
      </div>
    </nav>
  );
};

export default Navbar;
