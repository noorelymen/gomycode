import React from 'react';
import { useNavigate } from 'react-router-dom';
const NotFoundPage = () => {
    const navigate =useNavigate()
    return (
        <div>
            <h1>Not found page</h1>
            <button
            onClick={()=>navigate("/")}
            className="btn btn-danger mt-4">
                go back home
            </button>
        </div>
    );
}

export default NotFoundPage;
