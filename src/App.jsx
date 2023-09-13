import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks,setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddBookmarks = (blog)=>{
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
  }
  const handleReading = (time)=>{
   setReadingTime(readingTime + time);
  }

  return (
    <>
     <Header></Header>
     <div className='flex max-w-screen-xl flex-col mx-auto md:flex-row md:justify-between justify-center items-center md:items-start p-5 gap-6'>
      <Blogs handleAddBookmarks = {handleAddBookmarks} handleReading = {handleReading}></Blogs>
      <Bookmarks bookmarks = {bookmarks} readingTime = {readingTime}></Bookmarks>
     
     </div>

    </>
  )
}

export default App
