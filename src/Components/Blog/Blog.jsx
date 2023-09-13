import {FaBookmark} from 'react-icons/fa';
export default function Blog({blog,handleAddBookmarks,handleReading}) {
    const {cover_image,author_image,author_name,post_time,reading_time,title,hashtags} = blog;
    return(
        <div className="mb-5">
           <img className="w-full" src={blog.cover_image} alt="" />
           <div className="flex flex-col md:flex-row md:justify-between items-center ">
            <div className="flex flex-col md:flex-row items-center mt-5">
                <img className="w-20 mr-5" src={blog.author_image} alt="" />
                <div className="text-center md:text-left">
                <h3 >{blog.author_name}</h3>
                <h3 >{blog.post_time}</h3>
                </div>
            </div>
            <div>
                <span className='mr-3'>{blog.reading_time}</span>
                <button onClick={()=>handleAddBookmarks(blog)} className='text-red-700 text-2xl'><FaBookmark /></button>
            </div>
           </div>
           <h3 className="md:text-3xl mt-3 mb-3 text-center md:text-left">{blog.title}</h3>
           <p>
            {
                hashtags.map((hashtag,index) => <span key={index}><a className='mr-2' href="#">{hashtag}</a></span>)
            }
           </p>
           <button className='underline text-blue-800' onClick={()=>handleReading(reading_time)}>Mark as read</button>
        </div>
    )
    
}