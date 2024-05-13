import React from 'react';
import { Link } from 'react-router-dom';
import { RoutePaths } from '../config/config';


function Blog({ date, title, content }) {
  const previewContent = content.length > 80 ? content.substring(0, 80) + "..." : content;

  return (
    <div className='col-md-6'>
      <Link to={RoutePaths.blogDetail}>
        <div className="blog-box">
          <div className="blog-img back-img" style={{ backgroundImage: 'url(/img/1.png)' }} />
          <div className="blog-text text-black">
            <p className="blog-date">{date}</p>
            <Link to={RoutePaths.blog} className="h4-title">{title}</Link>
            <p>{previewContent}</p>
            <Link to={RoutePaths.blog} className="sec-btn">Read More</Link>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Blog;
