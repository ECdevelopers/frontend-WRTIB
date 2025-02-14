import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900   text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap flex-col items-center">
          <div className="mb-4 md:mb-0 flex items-center">
            <div className="logo w-[3rem] border-r-2 border-white pr-2">
              <img src={assets.icons.logo} alt="" />
            </div>
            <h2 className="ml-2 text-2xl font-bold">Website-RTIB</h2>
          </div>

          {/* Navigasi */}
          <nav className="mb-4 md:mb-0 ">
            <ul className="flex space-x-6 flex-row text-sm">
              <li>
                <Link to="/" className="hover:text-gray-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-400">
                  About
                </Link>
              </li>
              <li>
                <Link to="/service" className="hover:text-gray-400">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/join/MRTIB" className="hover:text-gray-400">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Social Media */}
          <div className="flex space-x-4">
            <Link to="#" className="hover:text-gray-400">
              <i className="fab fa-facebook"></i>
            </Link>

            <Link to="/about" className="hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="#" className="hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4 text-sm">
          &copy; {new Date().getFullYear()} Republic of TIB. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
}
