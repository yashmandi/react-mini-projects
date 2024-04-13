import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

export default function AddNewBlog() {
  const { formData, setFormData, setIsEdit, isEdit } =
    useContext(GlobalContext);
  const navigate = useNavigate();
  const location = useLocation();

  async function handleSaveBlogToDatabase() {
    const response = isEdit
      ? await axios.put(
        `http://localhost:5000/api/blogs/update/${location.state.getCurrentBlogItem._id}`,
        {
          title: formData.title,
          description: formData.description,
        }
      )
      : await axios.post("http://localhost:5000/api/blogs/add", {
        title: formData.title,
        description: formData.description,
      });

    const result = await response.data;
    if (result) {
      setIsEdit(false)
      setFormData({
        title: "",
        description: "",
      });
      navigate("/");
    }
  }

  useEffect(() => {
    console.log(location);
    if (location.state) {
      const { getCurrentBlogItem } = location.state;
      setIsEdit(true);
      setFormData({
        title: getCurrentBlogItem.title,
        description: getCurrentBlogItem.description,
      });
    }
  }, [location]);

  return (
    <div className=" justify-center items-center h-screen bg-gray-200">

      <div className="flex items-center p-8  ">
        <div className="p-4 border-2 border-gray-500 w-96 rounded-3xl shadow-2xl">
          <h1 className="text-2xl font-bold ml-5  w-auto ">{isEdit ? "Edit a Blog" : "Add a Blog"}</h1>
          <div className="p-5 ">
            <input
              name="title"
              className="border-2 border-gray-800 p-2 rounded-2xl w-[300px] shadow-md"
              placeholder="Enter Blog Title"
              id="title"
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  title: e.target.value,
                })
              }
            />
            <div>
              <textarea
                name="description"
                className="border-2 border-gray-800 p-2 mt-3 w-[300px] rounded-2xl shadow-md"
                placeholder="Enter Blog Description"
                id="description"
                value={formData.description}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    description: event.target.value,
                  })
                }
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-3 rounded-lg shadow-md transition duration-300 ease-in-out" onClick={handleSaveBlogToDatabase}>
                {isEdit ? "Edit Blog" : "Add Blog"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

