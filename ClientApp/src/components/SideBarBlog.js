import React from 'react'

function SideBarBlog() {
    return (
        <div>
            <div className="widget widget-author">
                <div className="widget-title">
                    <h3>Author</h3>
                </div>
                <div className="widget-body">
                    <div className="media align-items-center">
                        <div className="avatar">
                            <img src="https://bootdey.com/img/Content/avatar/avatar6.png" title alt />
                        </div>
                        <div className="media-body">
                            <h6>Hello, I'm<br /> Rachel Roth</h6>
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
                </div>
            </div>
            <div className="widget widget-latest-post">
                <div className="widget-title">
                    <h3>Latest Post</h3>
                </div>
                <div className="widget-body">
                    <div className="latest-post-aside media">
                        <div className="lpa-left media-body">
                            <div className="lpa-title">
                                <h5><a href="#">Prevent 75% of visitors from google analytics</a></h5>
                            </div>
                            <div className="lpa-meta">
                                <a className="name" href="#">
                                    Rachel Roth
                                </a>
                                <a className="date" href="#">
                                    26 FEB 2020
                                </a>
                            </div>
                        </div>
                        <div className="lpa-right">
                            <a href="#">
                                <img src="https://www.bootdey.com/image/400x200/E6E6FA/000000" title alt />
                            </a>
                        </div>
                    </div>
                    <div className="latest-post-aside media">
                        <div className="lpa-left media-body">
                            <div className="lpa-title">
                                <h5><a href="#">Prevent 75% of visitors from google analytics</a></h5>
                            </div>
                            <div className="lpa-meta">
                                <a className="name" href="#">
                                    Rachel Roth
                                </a>
                                <a className="date" href="#">
                                    26 FEB 2020
                                </a>
                            </div>
                        </div>
                        <div className="lpa-right">
                            <a href="#">
                                <img src="https://www.bootdey.com/image/400x200/FFA07A/000000" title alt />
                            </a>
                        </div>
                    </div>
                    <div className="latest-post-aside media">
                        <div className="lpa-left media-body">
                            <div className="lpa-title">
                                <h5><a href="#">Prevent 75% of visitors from google analytics</a></h5>
                            </div>
                            <div className="lpa-meta">
                                <a className="name" href="#">
                                    Rachel Roth
                                </a>
                                <a className="date" href="#">
                                    26 FEB 2020
                                </a>
                            </div>
                        </div>
                        <div className="lpa-right">
                            <a href="#">
                                <img src="https://www.bootdey.com/image/400x200/FFF0F5/000000" title alt />
                            </a>
                        </div>
                    </div>
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

export default SideBarBlog