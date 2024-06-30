import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";



const ListedBooks = () => {

    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div className="mb-10">
            <div className="bg-[#1313130D]">
                <h2 className="text-4xl text-center p-8 ">Books</h2>
            </div>
            {/* Dropdown */}
            <div className="text-center p-6">
                <details className="dropdown ">
                    <summary className="btn bg-[#23BE0A] text-white  m-1">Sort By  <IoIosArrowDown /></summary>

                    <ul className="menu dropdown-content bg-gray-100 rounded-box  text-black z-[1] w-52 ">
                        <li><a>Rating</a></li>
                        <li><a>Number Of pages</a></li>
                        <li><a>Published Year</a></li>
                    </ul>
                </details>
            </div>


            <div>
                {/* Tabs starts */}
                <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap w-full">

                    <Link to=''

                        onClick={`{() => setTabIndex(0)}; 'BooksRead'`}
                        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? ' border border-b-0' : 'border-b'} rounded-t-lg`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span>Read Books</span>

                    </Link>


                    <Link to='wishlist-books'
                        onClick={() => setTabIndex(1)}
                        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? ' border border-b-0' : 'border-b'} rounded-t-lg`}>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        <span>WishListed Books</span>
                    </Link>
                </div>
                <Outlet></Outlet>
            </div>


        </div >

    );
};

export default ListedBooks;