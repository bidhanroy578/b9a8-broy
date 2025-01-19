

const Hero = () => {
    return (
        <div className="my-10">
            <div className="bg-[#F3F3F3] rounded-3xl mx-auto flex items-center content-center border p-5">
                <div className="w-2/3 md:pl-20">
                    <h3 className="font-bold text-6xl text-black text-balance">Books to freshen up your bookshelf</h3>
                    <button className="btn px-7 text-lg font-semibold bg-[#23BE0A] hover:bg-green-400 text-white mt-9">View The List</button>
                </div>

                <div className="w-1/3 "><img src="/pngwing1.png" alt="book" /></div>

            </div>
        </div>
    );
};

export default Hero;