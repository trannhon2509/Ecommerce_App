import React from 'react';

function Pagging({ startPage, endPage, itemsPerPage }) {
    const pages = [];
    
    for (let i = startPage; i <= endPage; i++) {
        pages.push(
            <li className="page-item" key={i}>
                <a className="page-link pagging" href="#">{i}</a>
            </li>
        );
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center bg-white">
                <li className="page-item disabled">
                    <a className="page-link pagging" href="#" tabIndex={-1}>Previous</a>
                </li>
                {pages}
                <li className="page-item">
                    <a className="page-link pagging" href="#">Next</a>
                </li>
            </ul>
        </nav>
    );
}

export default Pagging;