import { useLoaderData } from 'react-router';
import { createCustomArray, getFromLocalStorage } from '../../utils/SaveToLocalStorage';
import Chart from './Chart';

const PagesToRead = () => {
    let books = useLoaderData()
    let ids = getFromLocalStorage('toRead') || []
    let bookList = books.filter(book => ids.includes(book.id))
    let data = createCustomArray(bookList)

    return (
        <div>
            <div className='flex items-center justify-center bg-[#F8F8F8] lg:p-5 rounded-3xl'>
                <div className='overflow-x-auto mx-auto'>
                    {
                        data.length > 0 ? 
                        <Chart data={data} /> 
                        :
                        <p className='text-center content-center h-[60vh] text-3xl font-extrabold'>No data to show . Please add books to Read Book list...</p>

                    }
                </div>
            </div>
        </div>
    );
};

export default PagesToRead;