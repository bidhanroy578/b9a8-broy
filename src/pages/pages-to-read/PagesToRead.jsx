import Chart from './Chart';

const PagesToRead = () => {
    return (
        <div>
            this is for pages to read

            <div className='flex items-center justify-center bg-[#F8F8F8] p-5 rounded-3xl'>
                <div className='overflow-x-auto mx-auto'>
                    <Chart />
                </div>
            </div>
        </div>
    );
};

export default PagesToRead;