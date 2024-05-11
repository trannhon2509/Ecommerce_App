import React from 'react'
import ReactPaginate from 'react-paginate'
import BlogCard from './BlogCard';

function BlogGrid() {
    const handlePageClick = (event) => {

    };
    return (
            <div className="row">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                
            </div>
    )
}

export default BlogGrid