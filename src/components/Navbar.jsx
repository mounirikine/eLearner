import { CiMenuBurger, CiSearch, CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="px-4 md:px-10 py-4 md:py-6 fixed w-full bg-white z-[99999999] ">
        <nav className="flex items-center justify-between">
          <Link to="/" className="w-2/4 lg:w-2/12">
            <img
              src="https://assets-global.website-files.com/63bc69e0c008e8ad2e8c02e7/63bc7d6e265bccb6251da454_logo-elearner-webflow-ecommerce-template.svg"
              alt=""
            />
          </Link>
          <div className="w-5/12 md:w-7/12 hidden lg:flex">
            <ul className="flex items-center text-black justify-center space-x-6 md:space-x-8">
              <Link
                to="/"
                className="hover:text-violet-700 cursor-pointer font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:text-violet-700 cursor-pointer font-medium"
              >
                About
              </Link>
              <Link
                to="/courses"
                className="hover:text-violet-700 cursor-pointer font-medium"
              >
                Courses
              </Link>
              <h1 className="hover:text-violet-700 cursor-pointer font-medium">
                Cart(0)
              </h1>
            </ul>
          </div>
          <div className="hidden  w-2/4 md:w-2/12 lg:flex items-center justify-end text-black gap-4">
            <div
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="flex items-center justify-center px-4 md:px-10 py-1 font-medium hover:text-violet-500 cursor-pointer transition-all"
            >
              <CiSearch className="text-2xl hover:font-bold" /> Search
            </div>
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box bg-white">
                <div className="bg-slate-100 px-4 md:px-10 flex items-center py-2 rounded-full mb-4 md:mb-10 md:mx-auto">
                  <CiSearch className="text-3xl font-medium" />
                  <input
                    type="text"
                    className="w-full md:w-11/12 py-2 text-lg px-3 bg-transparent outline-none"
                    placeholder="Search"
                  />
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="bg-yellow-200 px-10 md:px-14 hover:bg-yellow-300 hover:scale-105 transition-all py-2 rounded-full">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
            <div className="w-10 h-10 flex items-center justify-center bg-slate-200 p-2 rounded-full cursor-pointer hover:bg-slate-300 transition-all">
              <div className="dropdown dropdown-end">
                <h1 tabIndex={0} role="button" className="mx-1">
                  <CiUser className="text-2xl font-bold" />
                </h1>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-4 shadow rounded-box w-52 bg-slate-200 mt-5"
                >
                  <li>
                    <Link to="/login">SignIn</Link>
                  </li>
                  <li>
                    <Link to="/register">SignUp</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="drawer w-2/12">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className="btn bg-violet-600 border-none drawer-button"
              >
                <CiMenuBurger className="text-white font-semibold text-lg" />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-80 min-h-full bg-slate-200 text-black pt-32 text-xl gap-5">
                {/* Sidebar content here */}
                <Link
                  to="/"
                  className="hover:text-violet-700 cursor-pointer font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="hover:text-violet-700 cursor-pointer font-medium"
                >
                  About
                </Link>
                <Link
                  to="/courses"
                  className="hover:text-violet-700 cursor-pointer font-medium"
                >
                  Courses
                </Link>
                <h1 className="hover:text-violet-700 cursor-pointer font-medium">
                  Cart(0)
                </h1>
              <div className="flex flex-col gap-1.5">
              <Link
                  to="/login"
                  className="hover:text-violet-700 mt-10 cursor-pointer font-medium bg-violet-600 text-white text-center py-3 rounded-full" 
                >
                  SignIn
                </Link>
                <Link
                  to="/register"
                  className="hover:text-violet-700  cursor-pointer font-medium bg-yellow-200 text-black text-center py-3 rounded-full" 
                >
                  SignUp
                </Link>
              </div>



              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
