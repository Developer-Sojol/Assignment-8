
const getStoredReadBook = () => {
    const storedReadBook = localStorage.getItem('add-to-read');
    if (storedReadBook) {
        return JSON.parse(storedReadBook);
    }
    return [];
}

const saveAddToReadBook = id => {
    const storedReadBook = getStoredReadBook();
    const exists = storedReadBook.find(bookId => bookId === id);
    if (!exists) {
        storedReadBook.push(id);
        localStorage.setItem('add-to-read', JSON.stringify(storedReadBook))
    }
}

const getStoredWishListBook = () => {
    const storedWishListBook = localStorage.getItem('add-to-wishList');
    if (storedWishListBook) {
        return JSON.parse(storedWishListBook);
    }
    return [];
}

const saveAddToWishListBook = id => {
    const storedWishListBook = getStoredWishListBook();
    const exists = storedWishListBook.find(bookId => bookId === id);
    if (!exists) {
        storedWishListBook.push(id);
        localStorage.setItem('add-to-wishList', JSON.stringify(storedWishListBook))
    }
}
export { getStoredReadBook, saveAddToReadBook, saveAddToWishListBook, getStoredWishListBook }