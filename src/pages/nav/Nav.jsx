import { NavLink, Outlet } from "react-router";
import "./Nav.css"

const Nav = () => {
    let linklist = <>
                    <NavLink className={'btn font-semibold text-lg shadow-none hover:bg-green-200 bg-transparent border-none ouline-none'} to={'/'}>Home</NavLink>
                    <NavLink className={'btn font-semibold text-lg shadow-none hover:bg-green-200 bg-transparent border-none ouline-none'} to={'/listed-books'}>Listed Books</NavLink>
                    <NavLink className={'btn font-semibold text-lg shadow-none hover:bg-green-200 bg-transparent border-none ouline-none'} to={'/pages-to-read'}>Pages to Read</NavLink>
    </>
    return (
        <div className="my-10">
            <div className="grid grid-cols-3 ">
                <div className="font-bold text-[28px] btn border-none justify-start bg-transparent shadow-none hover:bg-transparent hover:">Book Vibe</div>
                <div className="flex gap-2"> {linklist} </div>
                <div className="text-end">
                    <button className="btn mx-2 px-7 text-lg bg-[#23BE0A] text-white">Sign In</button>
                    <button className="btn mx-2 px-7 text-lg bg-[#59C6D2] text-white">Sign Up</button></div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Nav;