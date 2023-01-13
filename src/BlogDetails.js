import { useNavigate, useParams } from "react-router-dom"
import useFetch from "./useFetch";

function BlogDetails() {
    const { id } = useParams();
    const { data: blogs , isLoading , error} = useFetch("http://localhost:8000/blogs/" + id);
    const navigate = useNavigate()

    const handleClick = ()=>{
      fetch("http://localhost:8000/blogs/" + id,{
        method: "DELETE"
      }).then(()=>{
        navigate("/")
      })
    }

  return (
    <div className="content">
        {isLoading && <div>Loading.....</div>}
        {error && <div>{error}</div>}
        {blogs && (
            <article className="blog-preview">
                <h2>{blogs.title}</h2>
                <p>Written By {blogs.author}</p><br/>
                <div>{blogs.body}</div>
                <button onClick={handleClick}>Delete</button>
            </article>
        )}
    </div>
  )
}

export default BlogDetails