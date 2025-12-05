import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-20 py-4 bg-white shadow-md fixed w-full top-0 z-50">
      <h1 className="text-2xl font-bold text-blue-600">IELTS Pro</h1>

      <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
        <li className="hover:text-blue-600 cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-blue-600 cursor-pointer">
          <Link to="/courses">Courses</Link>
        </li>
        <li className="hover:text-blue-600 cursor-pointer">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:text-blue-600 cursor-pointer">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="hover:text-blue-600 cursor-pointer">
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
   

      <button className="md:hidden text-2xl">☰</button>
    </nav>
  );
}
