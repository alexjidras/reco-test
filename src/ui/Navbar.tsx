import { Link } from "react-router-dom";

export const Navbar = () => (
  <div className="navbar bg-primary">
    <div className="navbar-start">
      <img
        src="https://static.thenounproject.com/png/583402-200.png"
        alt="Reco logo"
        loading="lazy"
        className="h-10"
      />

      <ul className="menu menu-horizontal px-1">
        <li className="text-white">
          <Link to="/apps">Apps</Link>
        </li>
        <li className="text-white">
          <Link to="/data">Data</Link>
        </li>
        <li className="text-white">
          <Link to="/identities">Identities</Link>
        </li>
      </ul>
    </div>

    <div className="navbar-end">
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="h-5 rounded-full">
            <img
              alt="Profile image"
              src="https://cdn-icons-png.flaticon.com/512/2815/2815428"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
