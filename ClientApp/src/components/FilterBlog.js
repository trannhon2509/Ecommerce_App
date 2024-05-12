import React from 'react'
import '../assets/css/FilterBlog.css'
import MiniCardBlog from './MiniCardBlog'
function FilterBlog() {
  return (
    <div className="blog-aside">
  <div className="widget widget-author">
    <div className="widget-title">
      <h3>Author</h3>
    </div>
    <div className="widget-body">
      <div className="media align-items-center">
        <div className="avatar">
          <img src="/img/logo.png" title='' alt='avarta' />
        </div>
        <div className="media-body">
          <h6>Hello, I'm<br /> Trần Duy Nguyễn Nhơn</h6>
        </div>
      </div>
      <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern
        websites, web services and online stores</p>
    </div>
  </div>
  <div className="widget widget-post">
    <div className="widget-title">
      <h3>Trending Now</h3>
    </div>
    <div className="widget-body">
    <MiniCardBlog />

    <MiniCardBlog />
    
    <MiniCardBlog />
    
    <MiniCardBlog />
      
    </div>
  </div>
  <div className="widget widget-latest-post">
    <div className="widget-title">
      <h3>Latest Post</h3>
    </div>
    <div className="widget-body">
      <MiniCardBlog />

      <MiniCardBlog />

      <MiniCardBlog />
    </div>
  </div>
  <div className="widget widget-tags">
    <div className="widget-title">
      <h3>Latest Tags</h3>
    </div>
    <div className="widget-body">
      <div className="nav tag-cloud">
        <a href="#">Design</a>
        <a href="#">Development</a>
        <a href="#">Travel</a>
        <a href="#">Web Design</a>
        <a href="#">Marketing</a>
        <a href="#">Research</a>
        <a href="#">Managment</a>
      </div>
    </div>
  </div>
</div>

  )
}

export default FilterBlog