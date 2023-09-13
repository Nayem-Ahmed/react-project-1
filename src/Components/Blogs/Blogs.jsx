import { useEffect, useState } from "react"
import Blog from "../Blog/Blog";

export default function Blogs({handleAddBookmarks,handleReading}) {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blog.json')
        .then((response) => response.json())
        .then((json) => setBlogs(json))
      },[])
    return(
        <div className="w-3/5">
            {
                blogs.map(blog => <Blog handleAddBookmarks = {handleAddBookmarks} key={blog.id} blog={blog} handleReading = {handleReading}></Blog>)
            }
        </div>
    )
    
}