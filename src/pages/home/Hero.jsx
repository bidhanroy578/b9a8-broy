

const Hero = () => {
    return (
        <div className="my-10">
            <div className="bg-[#F3F3F3] w-3/4 mx-auto flex items-center content-center border p-5">
                <div className="w-2/3 border border-black ">
                    <h3 className="font-bold text-6xl text-black">Books to freshen up your bookshelf</h3>
                    <button className="btn btn-green">View The List</button>
                </div>

                <div className="w-1/3 border border-black "><img src="/pngwing1.png" alt="book" /></div>

            </div>
        </div>
    );
};

export default Hero;