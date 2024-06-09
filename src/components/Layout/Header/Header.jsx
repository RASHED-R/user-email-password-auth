import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const links = <>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " bg-blue-400 p-2 text-white rounded-lg" : ""
        }
            to={'/'}>Home</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " bg-blue-400 p-2 text-white rounded-lg" : ""
        }
            to={'/login'}>Login</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " bg-blue-400 p-2 text-white rounded-lg" : ""
        }
            to={'/register'}>Register</NavLink></li>



    </>
    return (
        <nav
            className="block w-full  px-6 py-3 mx-auto bg-white border shadow-md rounded-xl border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Link to={'/'}>Email Auth</Link>
                <div className="hidden lg:block">
                    <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                        {
                            links
                        }
                    </ul>
                </div>
                <button
                    className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all bg-slate-700 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
                    type="button">

                </button>
            </div>
        </nav>
    );
};

export default Header;