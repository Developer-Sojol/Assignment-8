import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('Books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div>
            <h2 className="text-3xl text-center">Books:{books.length}</h2>

            <div className="grid m-4 md:grid-cols-3 gap-6 mt-10 mb-10">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)

                }
            </div>
        </div>
    );
};

export default Books;