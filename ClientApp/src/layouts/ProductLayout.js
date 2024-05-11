import React from 'react'
import FilterProduct from '../components/FilterProduct'
import ReactPaginate from "https://cdn.skypack.dev/react-paginate@7.1.3";
import NavMenu from '../components/NavMenu';
function ProductLayout({ children }) {
    const handlePageClick = (event) => {

    };
    return (
        <div>
            <NavMenu />
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-4 col-md-3'><FilterProduct /></div>
                    <div className='col-sm-8 col-md-9'>
                        <ul className="shop__sorting">
                            <li className="active"><a href="#">Popular</a></li>
                            <li><a href="#">Newest</a></li>
                            <li><a href="#">Bestselling</a></li>
                            <li><a href="#">Price (low)</a></li>
                            <li><a href="#">Price (high)</a></li>
                        </ul>
                        <div className='row'>
                            {children}
                        </div>
                        <div className="row">
                            <ReactPaginate
                                nextLabel="next >"
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={2}
                                marginPagesDisplayed={2}
                                pageCount={30}
                                previousLabel="< previous"
                                pageClassName="page-item"
                                pageLinkClassName="page-link"
                                previousClassName="page-item"
                                previousLinkClassName="page-link"
                                nextClassName="page-item"
                                nextLinkClassName="page-link"
                                breakLabel="..."
                                breakClassName="page-item"
                                breakLinkClassName="page-link"
                                containerClassName="pagination"
                                activeClassName="active"
                                renderOnZeroPageCount={null}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductLayout