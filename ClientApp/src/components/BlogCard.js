import React, { useState } from "react";
import { Link } from 'react-router-dom';
import RoutePath from "../routes/RoutePath";
function BlogCard() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className={`col-sm-6`}>
            <div
                className={`blog-grid ${isHovered ? "shadow" : ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {/* Rest of the code */}
                <div className="blog-img">
                    <div className="date">
                        <span>04</span>
                        <label>FEB</label>
                    </div>
                    <Link to={RoutePath.BLOGDETAIL}>
                        <img
                            src="https://www.bootdey.com/image/400x200/FFB6C1/000000"
                            title=""
                            alt=""
                        />
                    </Link>
                </div>
                <div className="blog-info">
                    <h5>
                        <Link to={RoutePath.BLOGDETAIL}>Prevent 75% of visitors from google analytics</Link>
                    </h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="btn-bar">
                        <Link to={RoutePath.BLOGDETAIL} className="px-btn-arrow">
                            <span>Read More</span>
                            <i className="arrow" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
