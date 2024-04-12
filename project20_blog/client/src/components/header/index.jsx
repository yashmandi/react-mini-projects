import { Link } from "react-router-dom"

export default function Header() {
  return <div className="flex p-6 shadow-md">
    <h3 className="flex-1 font-bold text-3xl ">My Blog App</h3>
    <ul className="flex mr-8 gap-8 font-semibold">
      <Link to={'/'}>
        <li className="border-2 border-gray-800 p-2 rounded-2xl shadow-md hover:bg-blue-200">Home</li>
      </Link>
      <Link to={'/add-blog'}>
        <li className="border-2 border-gray-800 p-2 rounded-2xl shadow-md hover:bg-blue-200">Add Blog</li>
      </Link>
    </ul>
  </div>
}