import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

export default function ProductDetails() {
    const [prodInfo, setProdInfo] = useState({});
    const { id } = useParams();
    const fetchData = async () => {
        let prodInfo = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setProdInfo(prodInfo.data);
        // console.log(prodInfo.data);

    }
    useEffect(() => {
        console.log("Effect Called...", id);
        fetchData();
    },[])

    return <>
        <h2 className='text-center'>This is the Product details for product-{id}</h2>

        <div className="card col-md-3 offset-3 text-center">
            <img
                src={prodInfo?.image}
                className='card-img-top product-image' alt="..." style={{ height: '200px', width: '250px' }} />
            <div className="card-body text-center">
                <h5 className="card-title">{prodInfo?.title}</h5>
                <p className="card-text bg-dark text-justify text-white">${prodInfo?.price}</p>
                <p className="card-category bg-warning">{prodInfo?.category}</p>
                <p className="rating bg-primary text-white">Reating {prodInfo?.rating?.rate}</p>
                <p className="rating bg-danger"> Count {prodInfo?.rating?.count}</p>
                <p className=" card-description text-center ">{prodInfo?.description}</p>
                <button className="btn btn-dark text-centyer " href=" ">
                    <Link to={`/ProductDetails/${id}`}>View</Link></button>
            </div>
        </div>
    </>
}
