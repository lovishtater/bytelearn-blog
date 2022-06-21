import Home from "./views/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateBlog from "./views/CreateBlog";
import ErrorPage from "./components/404";
import EditPost from "./views/EditPost";
import Blog from "./views/Blog";
function App() {
  return (
    <BrowserRouter baseUrl="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<CreateBlog />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

