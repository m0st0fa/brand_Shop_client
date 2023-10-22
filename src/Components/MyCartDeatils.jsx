/* eslint-disable react/prop-types */

import Swal from "sweetalert2";

const MyCartDeatils = ({ item,setCart,cart }) => {

    const { _id, name, price, image, } = item;

    const handleClickToDelete = _id=> {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5001/delete/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const reamaming = cart.filter(singleCart => singleCart._id !== _id)
                            setCart(reamaming)
                        }
                    })
            }

        })

    }
    return (
        <div className="card bg-base-100 shadow-xl outline outline-offset-2 outline-blue-500 my-10">
            <img className="w-full h-80 rounded-xl" src={image} alt="" />
            <div className="card-body">
                <h2 className="card-title font-bold">{name}</h2>
                <h1 className="text-xl text-red-600">Price: {price}$</h1>
                <button className="btn btn-outline btn-warning0" onClick={() => handleClickToDelete(_id)}>Delete</button>
            </div>
        </div>

    );
};

export default MyCartDeatils;