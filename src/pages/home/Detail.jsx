import { useLoaderData, useNavigate, useParams } from "react-router";
import { saveToLocalStorage } from "../../utils/SaveToLocalStorage";
import { ToastContainer, toast } from 'react-toastify';
import { TiArrowBack } from "react-icons/ti";

const Detail = () => {

    

    let { id } = useParams();
    let books = useLoaderData();
    let book = books.find((book) => book.id == id);
    let { book_name, author_name, book_type, review, tags, image_url, number_of_pages
        , publish_year, rating } = book;
    // console.log(book)
let nevigate = useNavigate()
    const notify1 = () => toast('Already added to the list !');
    const notify2 = () => toast('Added to the list !');

    let handleClick = (localStorageKey, bookId) => {
        console.log(localStorageKey, bookId)
        let status = saveToLocalStorage(localStorageKey, bookId)
        console.log(status)
        status ? notify1() : notify2()
    }

    return (
        <div className="min-h-auto flex ">
            <div className="w-1/2 bg-[#F3F3F3] content-center rounded-xl">
                <img src={image_url} alt="" className="m-auto" />
            </div>


            <div className="w-1/2 p-10">
                <h1 className="font-bold text-[40px] text-[#131313cc]">{book_name}</h1>
                <h2 className="font-medium text-[#131313cc] text-xl">By : {author_name}</h2>
                <hr className="m-3" />
                <h3 className="font-medium text-[#131313cc] text-xl">{book_type}</h3>
                <hr className="m-3" />
                <p className="text-[#131313b3]"><span className="font-bold text-[#131313cc]">Review : </span>{review}</p>
                <h5 className="flex gap-3 my-3"><span className="font-bold ">Tag</span>{tags.map((key, id) => <p className="bgfnt " key={id}>#{key}</p>)}</h5>
                <hr className="m-3" />
                <table>
                    <tbody>
                        <tr>
                            <td className="font[#131313b3]">Number of Pages:</td>
                            <td className="w-20"></td>
                            <td className="font-semibold">{number_of_pages}</td>
                        </tr>
                        <tr>
                            <td className="font[#131313b3]">Year of Publishing:</td>
                            <td className="w-20"></td>
                            <td className="font-semibold">{publish_year}</td>
                        </tr>
                        <tr>
                            <td className="font[#131313b3]">Rating:</td>
                            <td className="w-20"></td>
                            <td className="font-semibold">{rating}</td>
                        </tr>
                    </tbody>
                </table>

                <div className="flex gap-3 mt-5">
                    <button onClick={() => handleClick('toRead', book.id)} className="btn bg-transparent px-6 border border-slate-400">Read</button>
                    <button onClick={() => handleClick('wishList', book.id)} className="btn bg-[#50B1C9] px-6">Wishlist</button>
                    <button onClick={()=> nevigate(-1)} className="btn "><TiArrowBack className="text-xl" /> Go Back</button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Detail;