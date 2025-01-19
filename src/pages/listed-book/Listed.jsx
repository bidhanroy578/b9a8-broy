import { useLoaderData } from "react-router";
import List from "./List";
import { FaAngleDown } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { getFromLocalStorage, removeAllSelected } from "./../../utils/SaveToLocalStorage";

const Listed = () => {
    let [removeAllSelectedBtn, setRemoveAllSelectedBtn] = useState(true)
    let books = useLoaderData();
    let [show, setShow] = useState(false);
    let [active, setActive] = useState(true);
    let [bookId, setBookId] = useState(getFromLocalStorage('toRead') || [])
    let [bookList, setBookList] = useState([])
    let onclickBtn = (localStorageKey) => {
        let list = getFromLocalStorage(localStorageKey)
        list ? setBookId(list) : setBookId([])
    }
    useEffect(() => {
        let tmpBookList = books.filter(book => bookId.includes(book.id))
        setBookList(tmpBookList)
    }, [bookId, books])

    let handleSort = (key) => {
        let sorted = bookList.toSorted(function (a, b) { return b[key] - a[key] })
        setBookList(sorted)
    }

    return (
        <div>
            <div className="text-center bg-[#F3F3F3] p-4 md:p-7 lg:p-10 mb-4 lg:my-10 rounded-xl"><p className="font-bold text-3xl">Books</p></div>

            {/* sort by button  */}

            <div className="text-center">
                <button onClick={() => setShow(!show)} className="btn px-20 bg-[#23BE0A] text-white font-semibold text-lg hover:bg-[#22be0aa3]"><span>Sort By </span> <FaAngleDown /></button>

                <div className={`relative ${show ? "visible" : "invisible"}`}>
                    <div className="absolute w-full">
                        <ul className="text-lg bg-[#F3F3F3] w-fit mx-auto px-4 py-1 rounded-b-lg">
                            <li onClick={() => { handleSort('rating'); setShow(!show) }}          className="hover:bg-white px-8 py-1 rounded-lg cursor-pointer ">Rating</li>
                            <li onClick={() => { handleSort('number_of_pages'); setShow(!show) }} className="hover:bg-white px-8 py-1 rounded-lg cursor-pointer ">Number of pages</li>
                            <li onClick={() => { handleSort('publish_year'); setShow(!show) }}    className="hover:bg-white px-8 py-1 rounded-lg cursor-pointer ">Publisher year</li>
                        </ul>
                    </div>
                </div>

            </div>

            {/* remove all btn  */}
            <div className="text-center">
                <button onClick={() => { removeAllSelected('toRead'); onclickBtn('toRead') }}     className={`btn ${removeAllSelectedBtn ? "" : "hidden"}  btn-error text-white my-2`}>Remove all selected Read Book list</button>
                <button onClick={() => { removeAllSelected('wishList'); onclickBtn('wishList') }} className={`btn ${removeAllSelectedBtn ? "hidden" : ""}  btn-error text-white my-2`}>Remove all selected Wishlist Book list</button>
            </div>

            {/* 'read  books' and 'wishlist books' button  */}

            <div>
                <div className="flex w-full">
                    <button onClick={() => { setActive(true); onclickBtn('toRead'); setRemoveAllSelectedBtn(true) }} className={`min-w-fit p-3 duration-150 ${active ? "rounded-lg rounded-b-none border-2 border-b-0" : "border-b-2 text-slate-500"}`}>Read Books</button>
                    <button onClick={() => { setActive(false); onclickBtn('wishList'); setRemoveAllSelectedBtn(false) }} className={`min-w-fit p-3 duration-150 ${active ? "border-b-2 text-slate-500" : "rounded-lg rounded-b-none border-2 border-b-0"}`}>Wishlist Books</button>
                    <p className="w-full border-b-2 "></p>
                </div>

                {/* book list  */}

                {
                    bookList.length > 0 ?

                        bookList.map(book => <List key={book.id} book={book} />)
                        :
                        <p className="text-center mt-5 text-xl font-bold">No Books Found 😢😢😢 Please Add Books Here ...</p>
                }
            </div>
        </div>
    );
};

export default Listed;