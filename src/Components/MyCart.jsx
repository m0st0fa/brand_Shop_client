import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyCartDeatils from "./MyCartDeatils";

const MyCart = () => {
    const MySelectedCart = useLoaderData();
    const [cart, setCart] = useState(MySelectedCart)

    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
                {
                    cart.map((item) =>
                        (<MyCartDeatils key={item._id}
                            cart={cart}
                            setCart={setCart}
                            item={item} />))
                }
            </div>
        </div>
    );
};

export default MyCart;
