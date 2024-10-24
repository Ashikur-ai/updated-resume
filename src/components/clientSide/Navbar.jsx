import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <div>
            {/* Desktop view  */}


            <div className="">
                <div className="lg:hidden">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <div className="flex gap-24 items-center">
                                <div className=''>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h8m-8 6h16" />
                                    </svg>
                                </div>

                                <Link>
                                    <div className="flex items-center gap-3 ">
                                        <img src="https://res.cloudinary.com/deifi77os/image/upload/v1726680899/Portfolio/dylum9u4vdxunqttctma.png"
                                            type="image/x-icon" className="w-8" alt="" />
                                        <span className="font-bold text-2xl">Ashikur</span>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <div className="bg-base-300">
                                    <div className="buttons">
                                    <Link to={"/"}>
                                        <button
                                            className="text-white hover:bg-theme_orange duration-300 py-3 px-8 hover:font-bold  rounded-3xl">Home</button>
                                    </Link>
                                    </div>
                                    <div className="buttons">
                                    <Link to={"/about"}>
                                        <button
                                            className="text-white hover:bg-theme_orange duration-300 py-3 px-8 hover:font-bold  rounded-3xl">About</button>
                                    </Link>
                                    </div>

                                    <div className="buttons">
                                    <Link to={"/stack-overflow"}>
                                        <button
                                            className="text-white hover:bg-theme_orange duration-300 py-3 px-8 hover:font-bold  rounded-3xl">Stack Overflow</button>
                                    </Link>
                                    </div>
                                </div>
                        </ul>
                    </div>

                </div>



                {/* Desktop view  */}
                <div className=" hidden lg:flex ">
                    <div className=' container mx-auto'>
                        <section className="navigation">
                            <div className="flex items-center justify-between gap-2 py-2 mt-5 rounded-[50px] px-2 bg-black text-white font-bold">

                                <div className="flex">
                                    <div className="buttons">
                                        <Link to={"/"}>
                                            <button
                                                className="text-white hover:bg-theme_orange duration-300 py-3 px-8 hover:font-bold  rounded-3xl">Home</button>
                                        </Link>
                                    </div>
                                    <div className="buttons">
                                        <Link to={"/about"}>
                                            <button
                                                className="text-white hover:bg-theme_orange duration-300 py-3 px-8 hover:font-bold  rounded-3xl">About</button>
                                        </Link>
                                    </div>

                                    <div className="buttons">
                                        <Link to={"/stack-overflow"}>
                                            <button
                                                className="text-white hover:bg-theme_orange duration-300 py-3 px-8 hover:font-bold  rounded-3xl">Stack Overflow</button>
                                        </Link>
                                    </div>
                                </div>


                                <Link to={"/"}>
                                    <div className="flex items-center gap-3 ">
                                        <img src="https://res.cloudinary.com/deifi77os/image/upload/v1726680899/Portfolio/dylum9u4vdxunqttctma.png"
                                            type="image/x-icon" className="w-12 bg-theme_primary p-2 rounded-full" alt="" />
                                        <span className="font-bold text-2xl uppercase">Ashikur</span>
                                    </div>
                                </Link>


                                <div className="flex">
                                    <div className="buttons">
                                        <Link to={"https://drive.google.com/file/d/1McooBW_qjrTudp97BWw-D6vcESTS60jG/view?usp=sharing"} target="_blank">
                                            <button
                                                className="text-white hover:bg-theme_orange duration-300 py-3 px-8  hover:font-bold  rounded-3xl">My CV</button>
                                        </Link>
                                    </div>
                                    <div className="buttons">
                                        <Link to={"/project"}>
                                            <button
                                                className="text-white hover:bg-theme_orange duration-300 py-3 px-8  hover:font-bold  rounded-3xl">Project</button>
                                        </Link>
                                    </div>

                                    <div className="buttons">
                                        <Link to={"/contact-us"}>
                                            <button
                                                className="text-white hover:bg-theme_orange duration-300 py-3 px-8  hover:font-bold  rounded-3xl">Contact</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar