import React, { useState } from 'react'
import NavBar from "../components/NavBar";
import { useDispatch } from "react-redux";
import "../assets/css/createBlog.css";
import { useNavigate } from "react-router-dom";
import Heading from '../components/Heading';

const CreateBlog = () => {
  const date = new Date();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    id: 0,
    title: "",
    img: "",
    description: "",
    like: 0,
    date : date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
  });

  const handleChange = (name) => (event) => {
    setValue({ ...value, [name]: event.target.value });
  };

  const handleSubmit = () => {
    if (value.title === "" || value.img === "" || value.description === "") {
      alert("Please fill all the fields");
    } else {
      dispatch({ type: "ADD_BLOG", payload: value });
      navigate("/");
    }
  };

  // const handleSubmit = () => {
  //   if (value.title === "" || value.img === "" || value.description === "") {
  //     alert("Please fill all the fields");
  //   } else {
  //     const currentData = JSON.parse(localStorage.getItem("blog"));
  //     if (currentData) {
  //       setValue({ ...value, id: currentData.length + 1 });
  //       const newData = [...currentData, value];
  //       localStorage.setItem("blog", JSON.stringify(newData));
  //     } else {
  //       localStorage.setItem("blog", JSON.stringify([value]));
  //     }
  //     alert("Blog created successfully");
  //   }
  // };

  return (
    <>
      <NavBar />
      <Heading title="Create Blog" />
      <div className="createBlog">
        <div>
            <label>Title</label>
            <input type="text"  placeholder="Title"
            onChange={handleChange("title")}
            />
          </div>
        <div>
            <label>Image</label>
            <input type="text"  placeholder="Image url"
            onChange={handleChange("img")}
            />
          </div>
        <div>
            <label>Description</label>
            <textarea
              placeholder="Write description"
              onChange={handleChange("description")}
              styles={{ height: "200px" }}></textarea>
          </div>
        <div>
          <button className="btn"
          onClick={() => {
            handleSubmit(value);
          }}>
          Submit</button>
        </div>
      </div>
    </>
  );
}

export default CreateBlog