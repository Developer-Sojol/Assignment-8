import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import BooksWishList from "../BooksWishList/BooksWishList";
import { getStoredWishListBook } from "../../Utility/localstroage";

const WishListBooks = () => {
    const books = useLoaderData();
    const [addedToWishList, setAddedToWishList] = useState([]);

    useEffect(() => {
        const storedBookIds = getStoredWishListBook();

        if (books.length > 0) {
            const addedToWishList = books.filter(book => storedBookIds.includes(book.bookId));
            setAddedToWishList(addedToWishList);
            // console.log(books, storedBookIds, addedToWishList);
        }
    }, []);

    return (
        <div className="space-y-8 mt-10 mb-6">
            <h1></h1>
            {
                addedToWishList.map(book => <BooksWishList key={book.bookId} book={book}></BooksWishList>)

            }
        </div>
    );
};


export default WishListBooks;