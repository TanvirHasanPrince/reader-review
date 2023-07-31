import { Link } from "react-router-dom";

const navItems = (
  <>
    <li>
      <Link to="/allbooks">All Books</Link>
    </li>
    <li>
      <Link to="/register">Register</Link>
    </li>
    <li>
      <Link to="/login">Login</Link>
    </li>
  </>
);
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Readers Review</a>
        </div>
        <div className="navbar-end  md:flex hidden lg:flex">
          <ul className="menu lg:menu-horizontal md:menu-horizontal menu-dropdown-toggle text-black font-bold">
            {navItems}
          </ul>
        </div>
        <div className="flex-none ">
          <div className="dropdown dropdown-end">
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

                <span className="badge badge-sm indicator-item">4</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View Wishlist
                  </button>
                </div>
              </div>
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
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
