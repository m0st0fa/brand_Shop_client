/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ProductAdd = ({ item }) => {
    if (!item) {
        return null;
    }

    const { image, brand, } = item;

    return (
        <div className="card shadow-xl outline outline-offset-2 outline-blue-500" data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <figure><img className="w-full h-80" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="card-actions">
                    <Link to={`/products/${brand}`} className="w-full">
                        <button className="btn w-full ">{brand}</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default ProductAdd;
