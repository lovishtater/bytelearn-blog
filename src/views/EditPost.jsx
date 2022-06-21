import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import "../assets/css/createBlog.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Heading from "../components/Heading";

const EditPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const blogs = useSelector(state => state.blogs)
    const [value, setValue] = useState(blogs.find((item) => item.id === parseInt(id)));

    const handleChange = (name) => (event) => {
    setValue({ ...value, [name]: event.target.value });
    };

    const handleSubmit = (event) => {
        if (value.title === "" || value.img === "" || value.description === "") {
        alert("Please fill all the fields");
        } else {
        dispatch({ type: "EDIT_BLOG", payload: value });
        navigate("/");
        }
    }  

//     const handleSubmit = () => {
//     if (value.title === "" || value.img === "" || value.description === "") {
//       alert("Please fill all the fields");
//     } else {
//       const currentData = JSON.parse(localStorage.getItem("blog"));
//       if (currentData) {
//         setValue({ ...value, id: currentData.length + 1 });
//         const newData = [...currentData, value];
//         localStorage.setItem("blog", JSON.stringify(newData));
//       } else {
//         localStorage.setItem("blog", JSON.stringify([value]));
//       }
//       navigate("/");
//     }
//   };

  return (
    <>
      <NavBar />
      <Heading title="Edit Blog" />
      <div className="createBlog">
        <div>
          <div>
            <label>Title</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="Title"
              onChange={handleChange("title")}
              value={value.title}
            />
          </div>
        </div>
        <div>
          <div>
            <label>Image</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="Image url"
              onChange={handleChange("img")}
              value={value.img}
            />
          </div>
        </div>
        <div>
          <div>
            <label>Description</label>
          </div>
          <div>
            <textarea
              placeholder="Write description"
              onChange={handleChange("description")}
              value={value.description}
              styles={{ height: "200px" }}></textarea>
          </div>
        </div>
        <div>
          <button
            className="btn"
            onClick={() => {
              handleSubmit(value);
            }}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default EditPost;
