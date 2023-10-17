
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Register = () => {
    const {createUser} = useContext(AuthContext)
    const handleRegister = e =>{
        e.preventDefault();
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const photo = form.photo.value
        console.log(name,email,password,photo)
        // create user 
        createUser(email,password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
        })


    }
    return (
        <div>
        <h2 className="text-3xl my-10 text-center font-bold text-black">Register Your Account</h2>
        <form onSubmit={handleRegister} className=" md:w-3/4 lg: w-1/2 mx-auto">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text"> Your Photo</span>
                </label>
                <input type="text" name="photo" placeholder="Your photo" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-accent">Register</button>
            </div>
        </form>
        <div className="text-center mt-4 ">
            <p>Already Have an Account?
                <Link className="text-blue-600" to='/login'>Login</Link>
            </p>
        </div>

    </div>
);
    
};

export default Register;