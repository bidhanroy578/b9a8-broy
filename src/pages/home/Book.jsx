import PropTypes from 'prop-types';
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ book }) => {
    let { book_name, author_name, tags, book_type, image_url, id, rating } = book;
    return (
        <div className="border border-slate-300 p-5 rounded-xl">
            <div className="flex flex-col gap-2 lg:gap-5">

                <Link to={`/detail/${id}`} className=" btn bg-[#F3F3F3] items-center content-center p-3 h-[50vh] lg:h-[20vw] rounded-xl">
                    <img src={image_url} className="max-h-[90%] max-w-[90%] m-auto" />
                </Link>
                <div className="flex gap-3 md:gap-5 text-[#23BE0A] ">
                    <h3 className="bg-[#F4FCF3] px-3 md:px-5 py-1 rounded-3xl font-medium">{tags[0]}</h3>
                    <h3 className="bg-[#F4FCF3] px-3 md:px-5 py-1 rounded-3xl font-medium">{tags[1]}</h3>
                </div>
                <h2 className="font-bold text-[24px]">{book_name}</h2>
                <h5 className="font-medium ">By : {author_name} </h5>
            </div>
            <hr className="border-dotted my-2 lg:my-5" />
            <div className="flex justify-between items-center font-medium ">
                <h6>{book_type}</h6>
                <h6 className="flex items-center gap-2">{rating} <FaRegStar className=" text-2xl" /></h6>
            </div>
        </div>
    );
};

export default Book;
Book.propTypes = {
    book: PropTypes.object,

};