import { FaCartArrowDown } from "react-icons/fa";

const Electronics = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold  text-gray-600 text-center mb-10">Our Electronics Section</h1>
            <div className="grid md:grid-cols-2 gap-10 rounded-lg shadow-orange-300">
                {/* Product 1*/}
                <div className=" ring-offset-2 ring rounded p-5">
                    <div className="flex">
                        <div className="w-1/2">
                            <h1 className="font-bold text-4xl decoration-sky-600 mb-2 mt-4">Cc Camara s21 </h1>
                            <h2 className="text-2xl"> Price:$136 <span className="text-red-500 line-through ">$92</span></h2>
                            <div className="rating mt-4">
                                <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <div>
                                <button className="btn btn-warning mt-5">
                                    <FaCartArrowDown></FaCartArrowDown>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <img className="w-full h-72" src="https://i.ibb.co/ccpypFD/44.jpg" alt="" />
                        </div>
                    </div>
                </div>

                <div className=" ring-offset-2 ring rounded p-5">
                    <div className="flex">
                        <div className="w-1/2">
                            <h1 className="font-bold text-4xl text-pink-600 mb-2 mt-4">Apple Vr set
                            </h1>
                            <h2 className="text-2xl"> Price:$990 <span className="text-red-500 line-through ">$50</span></h2>
                            <div className="rating mt-4">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            </div>
                            <div>
                                <button className="btn btn-warning mt-5">
                                    <FaCartArrowDown></FaCartArrowDown>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <img className="w-full h-72" src="https://i.ibb.co/QNLCPLz/33.jpg" alt="" />
                        </div>
                    </div>
                </div>

                {/* Product 3 */}
                <div className=" ring-offset-2 ring rounded p-5">
                    <div className="flex">
                        <div className="w-1/2">
                            <h1 className="font-bold text-4xl text-pink-600 mb-2 mt-4">Camara</h1>
                            <h2 className="text-2xl"> Price:$420 <span className="text-red-500 line-through ">$50</span></h2>
                            <div className="rating mt-4">
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <div>
                                <button className="btn btn-warning mt-5">
                                    <FaCartArrowDown></FaCartArrowDown>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <img className="w-full h-72" src="https://i.ibb.co/4Y3xHk5/22.jpg" alt="" />
                        </div>
                    </div>
                </div>
                {/* product 4 */}
                <div className=" ring-offset-2 ring rounded p-5">
                    <div className="flex">
                        <div className="w-1/2">
                            <h1 className="font-bold text-4xl text-pink-600 mb-2 mt-4">Gaming Remote</h1>
                            <h2 className="text-2xl"> Price:$420 <span className="text-red-500 line-through ">$30</span></h2>
                            <div className="rating mt-4">
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <div>
                                <button className="btn btn-warning mt-5">
                                    <FaCartArrowDown></FaCartArrowDown>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <img className="w-full h-72" src="https://i.ibb.co/sWbbqc1/11.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );



};

export default Electronics;