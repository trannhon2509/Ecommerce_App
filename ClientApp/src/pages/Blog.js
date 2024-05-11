import React from 'react'
import '../assets/css/Blog.css'
import ReactPaginate from 'react-paginate'
import SideBarBlog from '../components/SideBarBlog';
import BlogGrid from '../components/BlogGrid';
function Blog() {
  const handlePageClick = (event) => {

  };
  return (
    <div className='mt-5'>
      <section className="blog-listing gray-bg">
        <div className="container">
          <div className="row align-items-start">

            <div className="col-lg-8 m-15px-tb">
              <div className='row'>
                <BlogGrid />
                <div className='col-md-12 d-flex justify-content-center'>
                  <ReactPaginate
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={1}
                    marginPagesDisplayed={1}
                    pageCount={10}
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
            <div className="col-lg-4 m-15px-tb blog-aside">
              <SideBarBlog />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Blog