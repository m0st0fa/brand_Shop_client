import { useLoaderData } from "react-router-dom";
import UpdateProduct from "./UpdateProduct";

const ProductAddDeatils = () => {
    const product = useLoaderData();
    return (
        <div className=" grid grid-cols-3 gap-4 my-9 ">
            {product.map(item => <UpdateProduct key={item._id} item={item}></UpdateProduct>)}
        </div>
    );
};
export default ProductAddDeatils;
