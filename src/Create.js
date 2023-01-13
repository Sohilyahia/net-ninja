import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Create() {
    const[title , setTitle] = useState('');
    const[body , setBody] = useState('');
    const[author , setAuthor] = useState('mario');
    const [isLoading, setISloading] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = { title, body, author }

        setISloading(true);

        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("new blog add")
            setISloading(false)
            navigate('/')
        })
    }

  return (
    <div className='content create'>
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
            <label>Blog title:</label>
            <input
                type='text'
                required
                value={title}
                onChange={(e) => {setTitle(e.target.value)}}
            />

            <label>Blog body:</label>
            <textarea 
                required
                onChange={(e) => {setBody(e.target.value)}}
            >
            </textarea>

            <label>Blog author</label>
            <select value={author} onChange={(e)=> {setAuthor(e.target.value)}}>
                <option value='mario'>mario</option>
                <option value='yoshi'>yoshi</option>
            </select>
            {!isLoading && <button>Add Blog</button>}
            {isLoading && <button disabled>Adding Blog....</button>}
        </form>
       
    </div>
  )
}

export default Create