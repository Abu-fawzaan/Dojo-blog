import React from 'react';
import { useState } from 'react';
import {  useNavigate} from 'react-router-dom';


const Create = () => {
    const [title,SetTitle] = useState('');
    const [body,SetBody] = useState('');
    const [author,SetAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const navigate =  useNavigate();


    const handleSubmit = (e) =>{
      e.preventDefault();
      const blog = { title, body, author };
      setIsPending(true);

     fetch('http://localhost:8000/blogs', {
      method:"POST",
      headers:{ "Content-Type":"application/json"},
      body: JSON.stringify(blog)
     }).then(()=>{
      // console.log("new blog added");
      setIsPending(false);
      navigate('/');
     })
    }
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e)=>SetTitle(e.target.value)}
                />
                 <label>Blog body:</label>
                <textarea
                required
                value={body}
                onChange={(e)=>SetBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select  
                  value={author}
                  onChange={(e)=>SetAuthor(e.target.value)}
                >
                    <option value="mario" >mario</option>
                    <option value="yoshi" >yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}

            </form>
            {/* <p>{ title }</p>
            <p>{ body }</p>
            <p>{ author }</p> */}


        </div>
     );
}
 
export default Create;