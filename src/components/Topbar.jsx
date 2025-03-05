import { RiMenu3Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen } from "../app/slices/appSlice";

const Topbar = ({title}) => {
    const dispatch = useDispatch()
    const {isOpen} = useSelector(state=>state.app)
    return (
        <div className="d-flex align-items-center justify-content-between topbar p-3 border-bottom">
            <span className="fs-5 fw-semibold">{title}</span>
            <button className="btn  d-lg-none" onClick={()=>dispatch(setIsOpen(!isOpen))}>
                <RiMenu3Line size={20} />
            </button>
        </div>
    )
}



export default Topbar