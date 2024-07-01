import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="flex justify-between bg-[#1313130D] rounded-3xl mb-10 ">

            <div className=" pl-10 pt-12 md:pl-32 md:pt-32 space-y-8">
                <h1 className="text-3xl md:text-6xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                <div>
                    <Link to='/listed books'>
                        <button className="btn text-white bg-[#23BE0A]">View The List
                        </button>
                    </Link>

                </div>
            </div>

            <div className="p-14 ">
                <img className="md:w-[300px] md:h-[400px]" src="https://i.ibb.co/kKHK5RY/pngwing-1.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;