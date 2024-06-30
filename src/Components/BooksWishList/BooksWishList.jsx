import { LuMapPin } from "react-icons/lu";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { GoPeople } from "react-icons/go";

const BooksWishList = ({ book }) => {
    return (
        <div className="border border-gray-300 rounded-2xl p-6 m-4 md:flex gap-12 ">
            <div className="bg-[#1313130D] p-12 rounded-2xl" >
                <img src={book.image} alt="" />
            </div>
            <div className="space-y-4">
                <h1 className="text-2xl font-blod">{book.bookName}</h1>
                <p className="text-xl">By: {book.author}</p>

                <div className="flex gap-3 text-[#23BE0A] ">
                    <p className="font-bold text-black">Tag</p>
                    <p className="rounded-full font-bold bg-[#23BE0A0D] px-3">{book.tags[0]}</p>
                    <p className="rounded-full font-bold bg-[#23BE0A0D] px-3">{book.tags[1]}</p>
                    <div className="flex gap-2 items-center text-gray-500">
                        <LuMapPin />
                        <h5 className="">Year Of publishing : {book.yearOfPublishing}</h5>
                    </div>
                </div>
                <div className="flex gap-10 border-b border-gray-300 pb-6 ">
                    <div className="flex gap-2 items-center">
                        <GoPeople />
                        <p>Publisher: {book.publisher}</p>

                    </div>
                    <div className="flex gap-2 items-center">
                        <MdOutlineStickyNote2 />
                        <p>Page {book.totalPages}</p>
                    </div>
                </div>
                <div className="flex gap-5 mt-5">
                    <button className="btn rounded-full text-[#328EFF] bg-[#328EFF26]">Category:{book.category}</button>
                    <button className="btn rounded-full text-[#FFAC33] bg-[#FFAC3326]">Rating:{book.rating}</button>
                    <button className="btn rounded-full text-white bg-[#23BE0A]">View details </button>
                </div>
            </div>
        </div>
    );
};

export default BooksWishList;