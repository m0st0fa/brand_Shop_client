import { useState } from "react";
import { useEffect } from "react";
import Banner from "./Banner";
import DealsOfTheDay from "./DealsOfTheDay";
import Electronics from "./Electronics";
import ProductAdd from "./ProductAdd";


const Home = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('card.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div className="">
            <Banner></Banner>
            <ProductAdd></ProductAdd>
            <h3 className=" text-5xl text-center font-bold text-red-500 mb-5"> Our Services</h3>

            <div className="grid md:grid-cols-3 mt-2 mb-10 gap-5">
                {
                    product.map(item => <ProductAdd key={item._id} item={item} />)
                }

            </div>
            <DealsOfTheDay></DealsOfTheDay>
            <div className="mb-4">
                <Electronics></Electronics>
            </div>
        </div>
    );
};

export default Home;