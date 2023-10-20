/* eslint-disable no-unused-vars */

import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProductDeatils = () => {
    const product = useLoaderData()
    console.log(product)

    const { name, image, type, brand, price, rating, _id, description } = product;

        const handleAddProduct = (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const brand = formData.get("brand");
            const name = formData.get("name");
            const image = formData.get("image");
            const price = formData.get("price");
            const description = formData.get("description");
            const rating = formData.get("rating");
            const type = formData.get("type");
            const updateProduct = { name ,brand,price,image,description,rating,type};
            console.log(updateProduct);
            fetch(`http://localhost:5001/update/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire(
                        'Good job!',
                        'Update Product succesfully',
                        'success'
                    )
                }
            })
        }
        
    return (
         <div className="bg-[#F4F3F0] p-20" >
            <h2 className="text-3xl text-green-500 font-bold">Update Product:{name}</h2>
            <form onSubmit={handleAddProduct} >
                {/* form name and brand row */}
                <div className="md:flex  ">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text"> Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder=" Name" defaultValue={name} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand"  defaultValue={brand} placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form image and price row */}
                <div className="md:flex ">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image"  defaultValue={image} placeholder="Image URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price"  defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form short Description and Rating row */}
                <div className="md:flex  ">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description"  defaultValue={description} placeholder="Enter Product Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Type</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="type"  defaultValue={type} placeholder="Type of Product" className="input input-bordered w-full" />
                    </label>
                </div>
                <div>
                    <input type="submit" value="add Producet" className="btn btn-block bg-black text-white mt-8" />
                </div>
            </form>
        </div>

    );
};

export default UpdateProductDeatils;