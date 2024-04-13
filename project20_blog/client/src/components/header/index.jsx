import { Link } from "react-router-dom"
import blog from "./blog.png"

export default function Header() {

  return <div className="flex p-6 shadow-2xl">
    <img src={blog} alt="Blog Icon" className="w-10 h-10 mr-4" />
    <h3 className="flex-1 font-bold text-4xl ">Blogify</h3>
    <ul className="flex gap-8 font-semibold">
      <Link to={'/'}>
        <li className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">Home</li>
      </Link>
      <Link to={'/add-blog'}>
        <li className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">Add Blog</li>
      </Link>
    </ul>
  </div>
}