
import { BsJustifyLeft } from "react-icons/bs";
import logo from '../../../assets/nevbar/images (1)_prev_ui.png'
import { FaLocationDot } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
const HomeNavbar = () => {
    return (
        <div>
            <header className="bg-[#fdd670]">
                <div className="mx-auto flex py-2 max-w-screen-xl items-center gap-8 px-2 sm:px-2 lg:px-2">
                    <div className="font-bold text-[40px]"><BsJustifyLeft /></div>
                    <a className="block text-teal-600" href="/">
                        <span className="sr-only">Home</span>
                        <img src={logo} className="w-[70px]" alt="" />
                    </a>

                    <div className="flex flex-1 items-center justify-end md:justify-between">
                        <nav aria-label="Global" className="hidden md:block">
                            {/* <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/"> About </a>
                                </li>

                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/"> Careers </a>
                                </li>

                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/"> History </a>
                                </li>

                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/"> Services </a>
                                </li>

                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/"> Projects </a>
                                </li>

                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/"> Blog </a>
                                </li>
                            </ul> */}
                        </nav>

                        <div className="flex items-center gap-4">
                            {/* location div  */}
                            <div className="hover:bg-[#615e58] hover:bg-opacity-20 p-4 text-[#ff686e] flex justify-center items-center">
                                    <FaLocationDot />
                                    <h1 className="font-semibold text-[18px] mx-2">Dhaka</h1>
                                    <FaAngleDown />
                                </div>
                            <div className="sm:flex sm:gap-4">
                                <a
                                    className="block rounded-md bg-[#ff686e] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                                    href="/"
                                >
                                    Login
                                </a>

                                <a
                                    className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
                                    href="/"
                                >
                                    Register
                                </a>
                            </div>

                            <button
                                className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                            >
                                <span className="sr-only">Toggle menu</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default HomeNavbar;