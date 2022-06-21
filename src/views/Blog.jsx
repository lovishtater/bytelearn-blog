import React from 'react'
import Heading from "../components/Heading";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";


const Blog = () => {
  const data = localStorage.getItem('blog') ? JSON.parse(localStorage.getItem('blog')) : []
  const {id} = useParams()
  const blog = data.find(item => item.id === parseInt(id))
  
  return (
    <div>
      <NavBar />
      {blog ? (
        <center>
      <Heading title={blog?.title} />
      <img src={blog.img} alt="" 
      style={{
        width: '30vw',
      }}/>
      <br />
      <p>{blog.description}</p>
        </center>
      ) : (
        <center>No blog found</center>
      )}
    </div>
  )
}

export default Blog