import React, { useEffect } from 'react'
import "../assets/css/blogcard.css"
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
const BlogCard = ({
    data
}) => {
    const dispatch = useDispatch();
    const blogs = useSelector(state => state.blogs)


    const deletePost = (id) => {
      dispatch({
        type: "DELETE_BLOG",
        payload: id,
      });
    };

    const likePost = (id) => {
      dispatch({
        type: "LIKE_BLOG",
        payload: id,
      });
    };

    useEffect(() => {
        localStorage.setItem('blog', JSON.stringify(blogs))
    }, [blogs])

//     const likePost = () => {
//          const currentPost = JSON.parse(localStorage.getItem('blog'));
//             const index = currentPost.findIndex(item => item.id === data.id);
//             console.log(index)
//             currentPost[index].like += 1;
//             setBlog(currentPost[index]);
//             localStorage.setItem('blog', JSON.stringify(currentPost));
//     }

//    const deletePost = () => {
//     const currentPost = JSON.parse(localStorage.getItem('blog'));
//     const newPost = currentPost.filter(item => item.id !== data.id);
//     localStorage.setItem('blog', JSON.stringify(newPost));
//     window.location.reload();
//    }

    
  return (
    <div className="container_copy">
      <div className="img-container"
      style={{
        backgroundImage: `url(${data.img})`,
      }}
      ></div>
      <div
        style={{
          width: "100%",
          padding: "1rem",
        }}>
        <h3>{data.date}</h3>
        <h1>{data.title}</h1>
        <p className="p">{data.description?.substring(0, 100)}...</p>
        <div class="flex_container">
          <Link to={`/blog/${data.id}`} className="btn">
            Read more
          </Link>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => likePost(data.id)}
            style={{ marginLeft: "5px" }}
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            height="25px"
            stroke="currentColor"
            strokeWidth="2">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <p
          style={{ margin: "0px 5px 0px 2px" }}
          >{data.like}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => deletePost(data.id)}
            className="h-1 w-1"
            height="25px"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          <Link to={`/edit/${data.id}`} style={{ marginLeft: "10px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-1 w-1"
              fill="none"
              style={{ marginLeft: "10px" }}
              viewBox="0 0 24 24"
              height="25px"
              stroke="currentColor"
              strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default BlogCard