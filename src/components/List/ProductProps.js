import React from 'react'
import { Link, createSearchParams, useNavigate } from 'react-router-dom';

export default function ProductProps(props) {

    //?In the below line we use Props DeStructuring.
    const { image, category, title, price, rating, description, id } = props.prod;

    const navigate = useNavigate();
    //Below function used to query params
    const navigateHandler = (title, price) => {
        navigate({
            pathname: '/productdetail',
            search: `?${createSearchParams({
                title: title,
                price: price,
            })}`,
        });
    };

    return (
        <div className="card col-md-3 text-center">
            <img
                src={image}
                className='card-img-top product-image' alt="..." style={{ height: '200px', width: '250px' }} />
            <div className="card-body text-center">
                <h5 className="card-title">{title}</h5>
                <p className="card-text bg-dark text-justify text-white">${price}</p>
                <p className="card-category bg-warning">{category}</p>
                <p className="rating bg-primary text-white">Reating {rating.rate}</p>
                <p className="rating bg-danger"> Count {rating.count}</p>
                <p className=" card-description text-center ">{description}</p>
                <button className="btn btn-dark text-centyer " href=" ">
                    <Link to={`/ProductDetails/${id}`}>View-1</Link>
                </button><br /><br />

                <button className='btn btn-warning ms-2'
                    onClick={() => {
                        navigateHandler(title, price)
                    }}>View-2
                </button>{/*This button use to query params*/}

            </div>
        </div>
    )
}
