import { useLoaderData } from "react-router-dom";


const ProductDeatils = () => {
    const deatils = useLoaderData()
    console.log(deatils)
    const { image,description,name } = deatils;
    return (
        <div className=" bg-green-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} className=" w-1/2 h-96" />
                <div>
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <p className="py-6">{description}</p>
                    <button className="btn btn-secondary">Click to Add Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDeatils;