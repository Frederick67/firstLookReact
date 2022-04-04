import "./blogView.css";

const BlogView = ({ blogs, title, onDelete }) => {
  return (
    <div>
      <h1>{title}</h1>
      <hr style={{marginBottom: "35px"}}/>
      <div className="row">
        {blogs.map((blog) => (
          <div className="col-4">
            <div className = "blog-card">
              <h2>{blog.heading}</h2>
              <p>{"by " + blog.author}</p>
              <p>{blog.content}</p>
              <div className="d-flex flex-row-reverse">
                <button style={{margin: "10px"}} type="button" className="btn btn-success">Open</button>
                <button onClick={() => onDelete(blog.id)} style={{margin: "10px"}} type="button" className="btn btn-danger">Delete</button>   
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogView;
