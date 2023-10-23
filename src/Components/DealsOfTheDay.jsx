import { FaCartArrowDown } from "react-icons/fa";

const DealsOfTheDay = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold text-center mb-10">Deal of the day section</h1>
            <div className="grid md:grid-cols-2 gap-4 rounded-lg shadow-orange-300">
                {/* Product 1 */}
                <div className="border p-5"  data-aos="fade-right">
                    <div className="flex">
                        <div className="w-1/2">
                            <h1 className="font-bold text-4xl text-white-200 mb-2 mt-4">Lenovo </h1>
                            <h2 className="text-2xl"> Price:$186 <span className="text-red-500 line-through ">$92</span></h2>
                            <div className="rating mt-4">
                                <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <div>
                                <button className="btn btn-accent mt-5">
                                    <FaCartArrowDown></FaCartArrowDown>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <img className="w-full h-72" src="https://i.ibb.co/hCLkp98/1-8c1232f3-fa1a-44c5-8a5d-cf35e0db34e2-600x695.jpg" alt="" />
                        </div>
                    </div>
                </div>

                {/* Product 2 - Add a similar section with different details and image */}
                <div className="border p-5"  data-aos="fade-left">
                    <div className="flex">
                        <div className="w-1/2">
                            <h1 className="font-bold text-4xl text-white-200 mb-2 mt-4">Iphone 8 plus
                            </h1>
                            <h2 className="text-2xl"> Price:$190 <span className="text-red-500 line-through ">$50</span></h2>
                            <div className="rating mt-4">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <div>
                                <button className="btn btn-accent mt-5">
                                    <FaCartArrowDown></FaCartArrowDown>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <img className="w-full h-72" src="https://i.ibb.co/kSdVBhZ/3-3f46a377-7330-4e9a-a4ea-40eb55c1c09f-600x695.jpg" alt="" />
                        </div>
                    </div>
                </div>

                {/* Product 3 - Add another section with different details and image */}
                <div className="border p-5"  data-aos="fade-right">
                    <div className="flex">
                        <div className="w-1/2">
                            <h1 className="font-bold text-4xl text-white-200 mb-2 mt-4">Poco x3</h1>
                            <h2 className="text-2xl"> Price:$320 <span className="text-red-500 line-through ">$60</span></h2>
                            <div className="rating mt-4">
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <div>
                                <button className="btn btn-accent mt-5">
                                    <FaCartArrowDown></FaCartArrowDown>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <img className="w-full h-72" src="https://i.ibb.co/m0H4Njj/4-a5c2083d-45e7-4b50-83ed-0ab58e2589a1-600x695.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="border p-5"  data-aos="fade-left">
                    <div className="flex">
                        <div className="w-1/2">
                            <h1 className="font-bold text-4xl text-white-200 mb-2 mt-4">Samsung J2</h1>
                            <h2 className="text-2xl"> Price:$220 <span className="text-red-500 line-through ">$60</span></h2>
                            <div className="rating mt-4">
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <div>
                                <button className="btn btn-accent mt-5">
                                    <FaCartArrowDown></FaCartArrowDown>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <img className="w-full h-72" src="https://i.ibb.co/PGyFhRJ/6-0efd3d6e-2903-400a-b5bf-94e911905bbc-600x695.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DealsOfTheDay;
