import { Link } from "react-router-dom";
import {  useAppDispatch, useAppSelector } from "../redux/hook";
import { signOut } from "firebase/auth";
import { setUser } from "../redux/features/user/userSlice";
import { auth } from "../utils/firebase";




const Navbar = () => {
  const { user } = useAppSelector((state) => state.user);
  // const dispatch = useAppDispatch();

  const navItems = (
    <>
      <li>
        <Link to="/allbooks">All Books</Link>
      </li>
      {!user?.email && (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </>
      )}
    </>
  );
 const dispatch = useAppDispatch();

    const handleLogout = () => {
      signOut(auth).then(() => {
        dispatch(setUser(null));
      });
    };


  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Readers Review
          </Link>
        </div>
        <div className="navbar-end  md:flex hidden lg:flex">
          <ul className="menu lg:menu-horizontal md:menu-horizontal menu-dropdown-toggle text-black font-bold">
            {navItems}
          </ul>
        </div>
        {/* Logged in start */}
        {user?.email && (
          <div className="flex-none ">
            <div className="dropdown dropdown-end">
              <Link to="/w">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path d="M399.3 32H112.7C79.1 32 51.6 55.6 48.8 89.2L24 424c-.7 8.6 5.3 16 13.8 16h437.3c9.7 0 14.9-9.5 13.5-18.8L413 89.2c-3.7-33.5-31.2-57.2-63.7-57.2zM360 96H152c-7.7 0-14 6.3-14 14v14h240v-14c0-7.7-6.3-14-14-14zM100.3 112L128 376h.3l28.7-264H100.3zM56 432l23.2-288h.2l23.2 288H56zm360-16h-56V112h56v304z"></path>
                    </svg>
                  </div>
                </label>
              </Link>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
      
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://img.freepik.com/premium-vector/person-avatar-icon-design-vector-multiple-use-vector-illustration_625349-280.jpg?w=740" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li onClick={handleLogout}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Logged in End */}
      </div>
    </div>
  );
};

export default Navbar;
