import React, { useEffect, useState } from 'react'

export default function HttpDemo1() {
    const [products, setProducts] = useState([]);

    const fetchProducts = async function () {
        const response = await fetch('https://fakestoreapi.com/products')
        const finalData = await response.json();
        setProducts(finalData)
        console.log(response, finalData);
    };

    useEffect(() => {
        fetchProducts();
    }, [])
    return (
        <> <h3 className='text-center bg-warning'>Fetch products using HTTP Methods</h3>
            <div className='container'>
                <div className='row'>
                    {products.map((product, ind) => {
                        return (
                                <div className="card col-md-3 text-center" key={ind}>
                                    <img
                                        src={product.image}
                                        className='card-img-top product-image' alt="..." style={{ height: '200px', width: '250px' }} />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text bg-dark text-justify text-white">${product.price}</p>
                                        <p className="card-category bg-warning">{product.category}</p>
                                        <p className="rating bg-primary text-white">Reating {product.rating.rate}</p>
                                        <p className="rating bg-danger"> Count {product.rating.count}</p>
                                        <p className=" card-description text-center ">{product.description}</p>
                                        <a className="btn btn-dark text-centyer bg-success" href=" ">Buy Now</a>
                                    </div>
                                </div>
                        ) 
                    })}
                </div>
            </div>
        </>
    )
}
