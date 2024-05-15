import React from "react";

function Testimonial({ imageUrl, name, message, starCount }) {
    const stars = Array.from({ length: starCount }, (_, index) => (
        <i key={index} className="bi bi-star-fill"></i>
    ));

    return (
        <div className="testimonials-box">
            <div className="testimonial-box-top">
                <div
                    className="testimonials-box-img back-img"
                    style={{ backgroundImage: `url(${imageUrl})` }}
                ></div>
                <div className="star-rating-wp">{stars}</div>
            </div>
            <div className="testimonials-box-text">
                <h3 className="h3-title">{name}</h3>
                <p>{message}</p>
            </div>
        </div>
    );
}

export default Testimonial;
