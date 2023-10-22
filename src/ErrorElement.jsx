import { Link } from "react-router-dom";


const ErrorElement = () => {
    return (
        <div className="card w-1/2 mx-auto">
            <img className="w-full" src="https://i.ibb.co/jVZsPzQ/1-10.webp" alt="" />
            <div className="mx-auto my-5">
            <Link to="/">
                <button className="btn btn-succes ">Back to Home </button>
            </Link>
            </div>
        </div>
    );
};

export default ErrorElement;