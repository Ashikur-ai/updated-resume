import { FaLaravel, FaReact, FaWordpress } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";


const Service = () => {
    return (
        <div className="bg-black py-16 lg:px-8 text-white  bg-contain rounded-2xl">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row md:flex-row justify-between gap-5">
                    <h2 className="text-7xl font-bold text-center lg:text-start">My <span className="text-theme_primary">Service</span></h2>
                    <p className="text-xl font-medium opacity-80 lg:w-1/2 text-center lg:text-start">Building powerful, scalable web applications with the MERN stack while mentoring the next generation of developers. </p>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-16 w-10/12 mx-auto">

                    <div className="bg-white rounded-br-[100px] text-black rounded-3xl relative ">
                        <h2 className="text-2xl py-8 px-4">MERN Development</h2>

                        <hr className="mb-8" />
                        <div className="text-[200px] flex justify-center text-blue-950 mb-5">
                            <FaReact />
                        </div>

                        <div className="bg-black p-2 rounded-full bg-cover   absolute bottom-0 right-0">
                            <Link to={"/mern-services"}>
                                <button><GoArrowUpRight className="text-8xl bg-theme_primary p-5 rounded-full text-white"></GoArrowUpRight></button>
                            </Link>
                        </div>

                    </div>



                    <div className="bg-white rounded-br-[100px] text-black rounded-3xl relative ">
                        <h2 className="text-2xl py-8 px-4">Laravel  Development</h2>

                        <hr className="mb-8" />
                        <div className="text-[200px] flex justify-center text-red-700">
                            <FaLaravel />
                        </div>
                        <div className="bg-black p-2 rounded-full bg-cover   absolute bottom-0 right-0">
                            <Link to={"/laravel-services"}>
                                <button><GoArrowUpRight className="text-8xl bg-theme_primary p-5 rounded-full text-white"></GoArrowUpRight></button>
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white rounded-br-[100px] text-black rounded-3xl relative ">
                        <h2 className="text-2xl py-8 px-4">Wordpress  Development</h2>

                        <hr className="mb-8" />
                        <div className="text-[200px] flex justify-center text-black">
                            <FaWordpress />
                        </div>
                        <div className="bg-black p-2 rounded-full bg-cover   absolute bottom-0 right-0">
                            <Link to={"/wordpress-services"}>
                                <button><GoArrowUpRight className="text-8xl bg-theme_primary p-5 rounded-full text-white"></GoArrowUpRight></button>
                            </Link>
                        </div>
                    </div>




                </div>

            </div>


        </div>
    );
};

export default Service;