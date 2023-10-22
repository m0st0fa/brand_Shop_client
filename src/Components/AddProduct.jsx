import Swal from 'sweetalert2'


const AddProduct = () => {
    const hadnldeAddProduct = (e) => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value
        const brandName = form.brand.value
        const image = form.image.value
        const price = form.price.value
        const description = form.description.value
        const rating = form.rating.value
        const type = form.type.value
        const newProducet = { name, brandName, image, price, description, rating, type }
        console.log(newProducet)
        // send data to the server 
        fetch('http://localhost:5001/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProducet)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire(
                        'Well done!',
                        'Add Product succesfully',
                        'success'
                    )
                }
            })
    }
    return (
        <div className="bg-[#F4F3F0] p-20">
            <h2 className="text-3xl text-green-500 font-bold">Add Product</h2>
            <form onSubmit={hadnldeAddProduct} >
                {/* form name and quantity row */}
                <div className="  md:flex ">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text"> Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder=" Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full" />
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
                            <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
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
                            <input type="text" name="description" placeholder="Enter Product Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Type</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="type" placeholder="Type of Product" className="input input-bordered w-full" />
                    </label>
                </div>
                <div>
                    <input type="submit" value="add Producet" className="btn btn-block bg-black text-white mt-8" />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;