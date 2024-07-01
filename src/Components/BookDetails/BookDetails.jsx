import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveAddToReadBook, saveAddToWishListBook } from "../../Utility/localstroage";


const BookDetails = () => {
    const books = useLoaderData();
    console.log(books);
    const { id } = useParams();
    const book = books.find(book => book.bookId === id);

    const handleAddToRead = () => {
        saveAddToReadBook(id);
        toast('Add To Read Sucessfully');
    }
    const handleAddToWishList = () => {
        saveAddToWishListBook(id);
        toast('Add To WishList SucessFully');
    }

    return (
        <div className="m-5 gap-10 md:flex md:gap-32">
            <div className=" flex justify-center bg-[#1313130D] p-12 md:p-32 rounded-2xl mb-12">
                <img className=" md:w-[500px] md:h-[400px]" src={book.image} alt="" />
            </div>

            <div className="m-6 space-y-5">
                <h1 className="text-4xl font-blod">{book.bookName}</h1>
                <p className="text-xl">By: {book.author}</p>
                <hr />
                <p className="text-xl">{book.category}</p>

                <hr />
                <h2 className="text-2xl"><h5 className="font-bold">Review:</h5> {book.review}</h2>

                <div className="flex gap-3 text-[#23BE0A]">
                    <p className="font-bold text-black">Tag</p>
                    <p className="rounded-full font-bold bg-[#23BE0A0D] px-3">{book.tags[0]}</p>
                    <p className="rounded-full font-bold bg-[#23BE0A0D] px-3">{book.tags[1]}</p>
                </div>
                <hr />
                <div className="flex gap-12 ">
                    <div className="space-y-4">
                        <h2>Number of pages: </h2>
                        <h2>Publisher:      </h2>
                        <h2> Year of Publishing:</h2>
                        <h2>Rating:</h2>
                    </div>
                    <div className="font-bold  space-y-4">
                        <h5>{book.totalPages}</h5>
                        <h5>{book.publisher}</h5>
                        <h5> {book.yearOfPublishing}</h5>
                        <h5> {book.rating}</h5>
                    </div>
                </div>

                <div className="flex gap-8">
                    <button onClick={handleAddToRead} className="btn btn-outline">Read</button>
                    <button onClick={handleAddToWishList} className="btn btn-info">WishList</button>
                    <ToastContainer />
                </div>


            </div>
        </div>
    );
};

export default BookDetails;