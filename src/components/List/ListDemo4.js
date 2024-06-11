import React from "react";
import { products } from "./Products";
import ProductProps from "./ProductProps";

export default function ListDemo4() {


    return (
        <>
            <div className="container-fluid">
                <div className="row p-1"> 
                    <h1 className="text-center bg-warning mt-3 p-3" style={{ fontFamily: 'sans-serif' }}>Product List</h1>
                    {products.map((product, ind) => {
                        return <ProductProps prod={product} key={ind}/>
                    })}
                </div>
            </div>
        </>
    )
}
