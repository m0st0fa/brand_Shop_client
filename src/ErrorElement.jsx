import { Link } from "react-router-dom";


const ErrorElement = () => {
    return (
        <div>
            <h4>opss no data found!!!!!!</h4>
            <Link to="/">
                <button className="btn btn-accent">Back to Home </button>
            </Link>
        </div>
    );
};

export default ErrorElement;