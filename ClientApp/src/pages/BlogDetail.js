import React from 'react'
import { Link } from 'react-router-dom'
import { RoutePaths } from '../config/config'

function BlogDetail() {
    return (
        <div className="container-fluid">
            <article className="article m-0">
                <div className="article-img">
                    <img src="https://www.bootdey.com/image/800x350/87CEFA/000000" title alt />
                </div>
                <div className="article-title">
                    <h6><a href="#">Lifestyle</a></h6>
                    <h2>They Now Bade Farewell To The Kind But Unseen People</h2>
                    <div className="media">
                        <div className="avatar">
                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" title alt />
                        </div>
                        <div className="media-body">
                            <label>Rachel Roth</label>
                            <span>26 FEB 2020</span>
                        </div>
                    </div>
                </div>
                <div className="article-content">
                    <p>Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici
                        consequat justo enim. Venenatis eget adipiscing luctus lorem. Adipiscing veni amet luctus enim sem
                        libero tellus viverra venenatis aliquam. Commodo natoque quam pulvinar elit.</p>
                    <p>Eget aenean tellus venenatis. Donec odio tempus. Felis arcu pretium metus nullam quam aenean sociis
                        quis sem neque vici libero. Venenatis nullam fringilla pretium magnis aliquam nunc vulputate integer
                        augue ultricies cras. Eget viverra feugiat cras ut. Sit natoque montes tempus ligula eget vitae pede
                        rhoncus maecenas consectetuer commodo condimentum aenean.</p>
                    <h4>What are my payment options?</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat.</p>
                    <blockquote>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <p className="blockquote-footer">Someone famous in <cite title="Source Title">Dick Grayson</cite></p>
                    </blockquote>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.</p>
                </div>
                <div className="nav tag-cloud">
                    <Link to={RoutePaths.blog}>Design</Link>
                    <Link to={RoutePaths.blog}>Development</Link>
                    <Link to={RoutePaths.blog}>Travel</Link>
                    <Link to={RoutePaths.blog}>Web Design</Link>
                    <Link to={RoutePaths.blog}>Marketing</Link>
                    <Link to={RoutePaths.blog}>Research</Link>
                    <Link to={RoutePaths.blog}>Managment</Link>
                </div>
            </article>
            <div className="contact-form article-comment">
                <h4>Leave a Reply</h4>
                <form id="contact-form" method="POST">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input name="Name" id="name" placeholder="Name *" className="search" type="text" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input name="Email" id="email" placeholder="Email *" className="search" type="email" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <textarea name="message" id="message" placeholder="Your message *" rows={4} className="search" defaultValue={""} style={{ height: '90px' }} />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="send">
                                <button className="btn btn-success"><span>Submit</span> <i class="bi bi-send-fill"></i></button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default BlogDetail