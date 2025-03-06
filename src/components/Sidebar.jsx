import { NavLink,useNavigate } from "react-router-dom";
import { FaHome, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, setIsOpen } from "../app/slices/appSlice";

const Sidebar = () => {
    const {isOpen} = useSelector(state=>state.app)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate("/login");
    };
    

    return (
        <div className={`flex-column flex-shrink-0 p-3 text-bg-dark sidebar ${isOpen ? 'open':'close'}`}>
            {/* Logo */}
            <NavLink to="/">
                <img
                    src="https://cdn.prod.website-files.com/6526818bfceadf48df98d71c/66a3dde68c6900bed96ab341_Doit%20Logo%20Full.avif"
                    alt="logo"
                    width={65}
                />
            </NavLink>

            <hr />

            {/* Navigation Links */}
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item" onClick={()=>dispatch(setIsOpen(false))}>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `d-flex nav-link gap-2 align-items-center mb-3 text-white text-decoration-none ${isActive ? "active" : ""}`
                        }
                    >
                        <FaHome />
                        Home
                    </NavLink>
                </li>
                <li className="nav-item" onClick={()=>dispatch(setIsOpen(false))}>
                    <NavLink
                        to="/add"
                        
                        className={({ isActive }) =>
                            `d-flex nav-link gap-2 align-items-center mb-3 text-white text-decoration-none ${isActive ? "active" : ""}`
                        }
                    >
                        <FaPlus />
                        Add Todo
                    </NavLink>
                </li>
            </ul>

            <hr />

            {/* User Profile Dropdown */}
            <div className="dropdown">
                <a
                    href="#"
                    className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <img
                        src="https://github.com/mdo.png"
                        alt="User"
                        width={32}
                        height={32}
                        className="rounded-circle me-2"
                    />
                    <strong>mdo</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                    <li>
                        <a className="dropdown-item" href="#">
                            New project...
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Settings
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Profile
                        </a>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li onClick={handleLogout}>
                        <NavLink className="dropdown-item" to="/login">
                            Sign out
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
