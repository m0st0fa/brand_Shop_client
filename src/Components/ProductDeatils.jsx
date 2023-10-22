import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDeatils = () => {
    // Assuming useLoaderData is properly imported or defined
    const deatils = useLoaderData();
    const { image, description, name, price } = deatils;

    const handleClickToaddData = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const image = formData.get("image");
        const name = formData.get("name");
        const price = formData.get("price");
        const description = formData.get("description");
        const cartProduct = { name, image, price, description }
        console.log(cartProduct);
        fetch('http://localhost:5001/carts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire(
                        'well Done',
                        'You succesfully add this product to your shoping cart!',
                        'success'
                    )
                }
            })

    };
    return (
        <div className="bg-green-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} className="w-1/2 h-96" alt="Product Image" />
                <div>
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <p className="py-6">{description}</p>
                    <form onSubmit={handleClickToaddData}>
                        <input type="text" name="name" value={name} hidden />
                        <input type="text" name="price" value={price} hidden />
                        <input type="text" name="image" value={image} hidden />
                        <input type="text" name="description" value={description} hidden />
                        <button className="btn btn-secondary" type="submit">
                            Click to Add Cart
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductDeatils;
