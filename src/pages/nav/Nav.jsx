import { NavLink, Outlet } from "react-router";
import { CiMenuKebab } from "react-icons/ci";
import "./Nav.css"
import { useState } from "react";

const Nav = () => {
    let [cl, setCl] = useState(false)
    let linklist = <>
        <NavLink onClick={()=> setCl(false)} className={'btn font-semibold text-xl  lg:text-lg shadow-none hover:bg-green-200 bg-transparent border-none ouline-none'} to={'/'}>Home</NavLink>
        <NavLink onClick={()=> setCl(false)} className={'btn font-semibold text-xl  lg:text-lg shadow-none hover:bg-green-200 bg-transparent border-none ouline-none'} to={'/listed-books'}>Listed Books</NavLink>
        <NavLink onClick={()=> setCl(false)} className={'btn font-semibold text-xl  lg:text-lg shadow-none hover:bg-green-200 bg-transparent border-none ouline-none'} to={'/pages-to-read'}>Pages to Read</NavLink>
    </>
    return (
        <div className="my-10">
            <div className="flex justify-between items-center lg:grid grid-cols-3 ">
                <div className="font-bold text-[28px] btn border-none justify-start bg-transparent shadow-none hover:bg-transparent hover:">Book Vibe</div>
                <div className=" hidden lg:flex gap-2"> {linklist} </div>
                <div className="text-end hidden lg:inline-block">
                    <button className="btn mx-2 px-7 text-lg bg-[#23BE0A] hover:bg-green-400 text-white">Sign In</button>
                    <button className="btn mx-2 px-7 text-lg hover:bg-[#59c6d2a6] bg-[#59C6D2] text-white">Sign Up</button>
                </div>
                {/* this is for mobile view  */}
                <div onClick={()=> setCl(!cl)} className="md:hidden">
                   <div className="btn bg-transparent shadow-none hover:bg-green-200"><CiMenuKebab /></div>
                </div>
            </div>
            <div className={`duration-300 ${cl ? '' : 'hidden'}`}>
                <div className="h-full w-full bg-white absolute z-10 bg-opacity-70 "></div>
                <div className="rounded-t-xl absolute z-20 w-full p-5 flex flex-col ">{linklist}</div>
            </div>


            <Outlet></Outlet>
        </div>
    );
};

export default Nav;