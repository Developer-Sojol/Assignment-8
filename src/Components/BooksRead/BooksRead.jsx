import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBook } from "../../Utility/localstroage";
import ReadBooks from "../ReadBooks/ReadBooks";

const BooksRead = () => {

    const books = useLoaderData();
    const [addedRead, setAddedRead] = useState([]);

    useEffect(() => {
        const storedBookIds = getStoredReadBook();

        if (books.length > 0) {
            const addedToRead = books.filter(book => storedBookIds.includes(book.bookId));
            setAddedRead(addedToRead);
            console.log(books, storedBookIds, addedToRead);
        }
    }, []);

    return (
        <div>
            <div className="space-y-8 mt-10 mb-6">
                {
                    addedRead.map(book => <ReadBooks key={book.bookId} book={book}></ReadBooks>)

                }
            </div>

        </div>
    );
};

export default BooksRead;