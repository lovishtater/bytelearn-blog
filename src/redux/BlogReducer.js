export const blogsReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_BLOG":
            localStorage.setItem("blog", JSON.stringify([...state, action.payload]));
        return [...state, action.payload];
        case "EDIT_BLOG":
            const newBlogs = state.map((blog) => blog.id === action.payload.id ? action.payload : blog);
            localStorage.setItem("blog", JSON.stringify(newBlogs));
        return newBlogs;
        case "DELETE_BLOG":
        return state.filter((blog) => blog.id !== action.payload);
        case "LIKE_BLOG":
        return state.map((blog) =>
            blog.id === action.payload ? { ...blog, like: blog.like + 1 } : blog
        );
        default:
        return state;
    }
};