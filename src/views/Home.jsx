import React, { useState, useEffect } from "react";
import NavBar from '../components/NavBar'
import Heading from "../components/Heading";
import BlogCard from "../components/BlogCard";
import { useSelector} from 'react-redux'

const Home = () => {

  const blogs = useSelector(state => state.blogs)
  const [blogsData, setBlogsData] = useState(blogs)

  // console.log(blogsData)

  useEffect(() => {
    setBlogsData(blogs)
    console.log("blogsData")
  }, [blogs])


  return (
    <div>
      <NavBar />
      <Heading 
      title="Welcome to ByteLearn Blog" 
      subtitle= {blogsData ? "A place to share your knowledge" : "Sorry, no blogs found"}
      />
      {blogsData?.map((item, index) => {
        console.log(item)
        return (
        <BlogCard key={index} data={item} />
      )})}
    </div>
  );
}

export default Home

