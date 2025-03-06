import { RiMenu3Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen } from "../app/slices/appSlice";
import { logoutUser } from "../app/slices/appSlice";
import { useNavigate } from "react-router-dom";
const Topbar = ({ title }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate("/login");
    };
    const { isOpen } = useSelector(state => state.app)
    return (
        <div className="d-flex align-items-center bg-body-tertiary justify-content-between topbar p-3 border-bottom">
            <span className="fs-5 fw-semibold">{title}</span>
            <button className="btn  d-lg-none" onClick={() => dispatch(setIsOpen(!isOpen))}>
                <RiMenu3Line size={20} />
            </button>
            <button className="btn btn-danger d-none d-lg-block" onClick={handleLogout}>
                Logout
            </button>
        </div>
    )
}



export default Topbar