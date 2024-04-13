import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { blogList, setBlogList, pending, setPending } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  async function fetchListOfBlogs() {
    setPending(true);
    const response = await axios.get("http://localhost:5000/api/blogs");
    const result = await response.data;

    if (result && result.blogList && result.blogList.length) {
      setBlogList(result.blogList);
      setPending(false);
    } else {
      setPending(false);
      setBlogList([]);
    }
  }

  async function handleDeleteBlog(getCurrentId) {
    const response = await axios.delete(
      `http://localhost:5000/api/blogs/delete/${getCurrentId}`
    );
    const result = await response.data;

    if (result?.message) {
      fetchListOfBlogs();
      // navigate(0)
    }
  }

  function handleEdit(getCurrentBlogItem) {
    console.log(getCurrentBlogItem);
    navigate("/add-blog", { state: { getCurrentBlogItem } });
  }

  useEffect(() => {
    fetchListOfBlogs();
  }, []);

  return (
    <div className=" justify-center items-center h-screen bg-gray-200">
      <h1 className="text-3xl font-bold p-6">My Blogs</h1>
      {pending ? (
        <h1 className="text-3xl font-bold p-6">Loading Blogs...</h1>
      ) : (
        <div className="p-4 ml-2">
          <div className="p-3 border-2 border-gray-500 w-96 rounded-3xl shadow-2xl">
            {blogList && blogList.length ? (
              blogList.map((blogItem) => (
                <div key={blogItem._id}>
                  <p className="text-3xl font-bold ml-5  w-auto p-1">{blogItem.title}</p>
                  <p className="text-md font-semibold ml-5 w-auto border-2 border-gray-800 p-2 rounded-2xl w-[300px] shadow-md mt-2">{blogItem.description}</p>
                  <div className="flex items-center p-6 gap-6">
                    <FaEdit className="cursor-pointer hover:bg-gray-300" onClick={() => handleEdit(blogItem)} size={32} />
                    <FaTrash
                      className="cursor-pointer hover:bg-red-300"
                      onClick={() => handleDeleteBlog(blogItem._id)}
                      size={30}
                    />
                  </div>
                </div>
              ))
            ) : (
              <h3 className="text-xl font-bold p-1 w-auto">No Blogs Added</h3>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
