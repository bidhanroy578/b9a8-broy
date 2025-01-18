import { LuCalendarDays } from "react-icons/lu";
import { GrBook } from "react-icons/gr";

const List = ({ book }) => {
    let { id , image_url, book_name
        , author_name, tags, publish_year
        , number_of_pages
        , book_type, rating
    } = book;
    return (
        <div className='flex gap-5 border p-5 rounded-3xl my-5'>
            <div className='w-[220px] h-[243px] bg-[#F3F3F3] p-5 content-center rounded-2xl'>
                <img className='m-auto max-h-full max-w-full' src={image_url} alt="" />
            </div>
            <div className='leading-7'>
                <h1 className='font-bold text-2xl'>{book_name}</h1>
                <h3 className='font-medium'>By : {author_name}</h3>
                <h5 className="flex gap-3 my-3"><span className="font-bold ">Tag</span>{tags.map((key, id) => <p className="bgfnt " key={id}>#{key}</p>)}</h5>
                <p className="flex gap-1"><span className=' text-[#000000a3] flex items-center gap-1'><LuCalendarDays /> Year of Publishing: </span>{publish_year}</p>
                <p className="flex gap-1"><span className=' text-[#000000a3] flex gap-1 items-center'><GrBook /> Page: </span>{number_of_pages}</p>
                <hr className='my-3 border min-w-[70vw]'/>
                <div className='flex gap-5 my-3'>
                    <div className='w-[vw]'><button className='btn px-5 rounded-full text-[#328EFF] bg-[#328eff36]'>Category: {book_type} </button> </div>
                    <div className='w-[vw]'><button className='btn px-5 rounded-full text-[#FFAC33] bg-[#ffad3325]'>Rating: {rating} </button> </div>
                    <div className='w-[vw]'><Link to={`/detail/${id}`} className='btn px-5 rounded-full text-white bg-[#23BE0A]'>View Details  </Link> </div>
                </div>
            </div>
        </div>
    );
};

export default List;

import PropTypes from 'prop-types';
import { Link } from "react-router";

List.propTypes = {
    book: PropTypes.object
};
