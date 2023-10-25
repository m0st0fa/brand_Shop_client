/* eslint-disable react/prop-types */
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
const UpdateProduct = ({ item }) => {
    const { name, image, type, brandName, price, rating, _id } = item;

    return (
        <div>
            <div>
                <div className="card bg-base-100 shadow-xl outline outline-offset-2 outline-blue-500 my-10" data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">

                    <img className="w-full h-80 rounded-xl" src={image} alt="" />
                    <hr />
                    <div className="card-body">
                        <h2 className="card-title font-bold">{name}</h2>
                        <h2 className="card-title text-red-700 font-bold">Type:{type}</h2>
                        <div className="flex justify-between ">
                            <h1 className="text-2xl font-bold decoration-slate-700">Brand: {brandName}</h1>
                            <h1 className="text-xl text-red-600">Price: {price}$</h1>
                        </div>
                        <div>
                            <h1>Review:{rating}</h1>
                        </div>
                        <div className="card-actions justify-between">
                            <div>
                                <Link to={`/deatils/${_id}`}>
                                    <button className="btn btn-success">View Details</button>
                                </Link>
                            </div>
                            <Link to={`/update/${_id}`}>
                                <div className="btn btn-success">
                                    <FaRegEdit />
                                    <button>Update</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;
