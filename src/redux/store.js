import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { blogsReducer } from "./BlogReducer";

const state = {
  blogs: localStorage.getItem("blog")
    ? JSON.parse(localStorage.getItem("blog"))
    : [
        {
          id: 165756,
          title: "My First Blog",
          description: "This is my first blog post. I hope you like it!",
          img: "https://picsum.photos/300",
          date: "2021-01-01",
          like: 0,
        },
        {
          id: 2675,
          title: "My Second Blog",
          description: "This is my second blog post. I hope you like it!",
          img: "https://picsum.photos/200",
          date: "2021-01-02",
          like: 10,
        },
      ],
};

const reducer = combineReducers({
  blogs : blogsReducer,
});

const store = configureStore({
    reducer,
    preloadedState: state,
});



export default store;
