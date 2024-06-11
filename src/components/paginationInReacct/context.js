

import React, { useState } from "react";
const Pagination = () => {
    // Sample data (you can replace this with data from an API)
    const data = Array.from({ length: 100 }, (v, k) => `Item ${k + 1}`);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);


    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="container mt-5">
            <h1 className="text-primary mb-3">My Items</h1>
            <ul className="list-group mb-4">
                {currentItems.map((item, index) => (
                    <li key={index} className="list-group-item">
                        {item}
                    </li>
                ))}
            </ul>
            <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={data.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </div>
    );
};

export default Pagination;
