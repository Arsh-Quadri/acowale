import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ham from "../assets/hamburger.png";
import cross from "../assets/cross.png";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = () => {
    if (searchQuery.trim() === "") return;
    navigate(`/search/${searchQuery}`);
    setSearchQuery("");
  };
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div className="w-full flex justify-between items-center px-8 py-2 bg-white">
      <Link to="/" className="font-medium text-2xl text-purple-800">
        ACONEWS
      </Link>
      <div className="list justify-center hidden lg:flex  items-center gap-8 font-medium">
        <Link
          to="/category/sports"
          className="text-gray-400 transition-colors duration-300 hover:text-purple-900"
        >
          Sports
        </Link>
        <Link
          to="/category/technology"
          className="text-gray-400 transition-colors duration-300 hover:text-purple-900"
        >
          Technology
        </Link>
        <Link
          to="/category/entertainment"
          className="text-gray-400 transition-colors duration-300 hover:text-purple-900"
        >
          Entertainment
        </Link>
        <Link
          to="/category/business"
          className="text-gray-400 transition-colors duration-300 hover:text-purple-900"
        >
          Business
        </Link>
        <Link
          to="/category/health"
          className="text-gray-400 transition-colors duration-300 hover:text-purple-900"
        >
          Health
        </Link>
      </div>
      <div className="justify-center hidden lg:flex items-center">
        <input
          type="text"
          className="bg-purple-100 outline-none p-2 px-4 w-full rounded-l-lg"
          placeholder="Search news..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="bg-purple-800 font-medium text-white p-2 px-3 rounded-r-lg"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div
        className="hamberger block lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {!isOpen ? (
          <img
            src={ham}
            width={25}
            className="cursor-pointer"
            alt="hamburger"
          />
        ) : (
          <img
            src={cross}
            width={20}
            alt="cross"
            className="cursor-pointer mr-1"
          />
        )}
      </div>
      {isOpen && (
        <div className="sider absolute left-0 top-10 w-[100%] bg-white h-screen flex flex-col items-center justify-start py-10 font-[500] gap-5 z-10">
          <div className="list justify-center flex flex-col  items-center gap-8 font-medium">
            <Link to="/category/sports" className="text-purple-900">
              Sports
            </Link>
            <Link to="/category/technology" className="text-purple-900">
              Technology
            </Link>
            <Link to="/category/entertainment" className="text-purple-900">
              Entertainment
            </Link>
            <Link to="/category/business" className="text-purple-900">
              Business
            </Link>
            <Link to="/category/health" className="text-purple-900">
              Health
            </Link>
          </div>
          <div className="justify-center flex items-center mt-10">
            <input
              type="text"
              className="bg-purple-100 outline-none p-2 px-4 w-full rounded-l-lg"
              placeholder="Search news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="bg-purple-800 font-medium text-white p-2 px-3 rounded-r-lg"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
