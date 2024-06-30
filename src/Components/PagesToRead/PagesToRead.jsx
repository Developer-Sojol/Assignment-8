import { useEffect, useState } from "react";



const PagesToRead = () => {

    const [pages, setPages] = useState([]);

    useEffect(() => {
        fetch('Books.json')
            .then(res => res.json())
            .then(data => setPages(data));
    }, [])

    return (
        <div>
            <h2 className="text-center text-2xl p-12">This Is Pages To read:{pages.length}</h2>
        </div >
    );
};

export default PagesToRead;