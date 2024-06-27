import { ImStarEmpty } from "react-icons/im";
import { Link } from "react-router-dom";

const Book = ({ book }) => {

    const { image, bookId, bookName, author, rating, category, tags,
        yearOfPublishing, publisher, totalPages, review } = book;
    return (
        <Link to={`/book/${bookId}`}>
            <div className="border border-gray-300 p-6 rounded-3xl cursor-pointer space-y-6 ">
                <div className="bg-[#F3F3F3] rounded-3xl p-6 flex  justify-center">
                    <img className="" src={image} alt="" />
                </div>
                <div className="flex gap-3 text-[#23BE0A]">
                    <p className="rounded-full font-bold bg-[#23BE0A0D] px-3">{tags[0]}</p>
                    <p className="rounded-full font-bold bg-[#23BE0A0D] px-3">{tags[1]}</p>
                </div>
                <div className="border-dotted border-b-2  boder-gray-300 pb-4">
                    <h1 className="text-3xl">{bookName}</h1>
                    <h3 className="text-xl">By : {author}</h3>
                </div>
                <div className="flex justify-between">
                    <p>{category}</p>
                    <div className="flex items-center gap-2">
                        <p>{rating}</p>
                        <ImStarEmpty />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;