import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
  let [books, setBooks] = useState([])
  useEffect(() => {
    fetch('/books.json')
      .then(res => res.json())
      .then(data => setBooks(data))
  }, [books])

  return (
    <div className="mb-10">
      <h4 className="font-bold text-[40px] text-center mb-5">Books</h4>
      <div className="grid md:grid-cols-2 p-5 lg:p-0 lg:grid-cols-3 gap-5">
        {
          books.map((book) => <Book key={book.id} book={book} />)
        }
      </div>
    </div>
  );
};

export default Books;