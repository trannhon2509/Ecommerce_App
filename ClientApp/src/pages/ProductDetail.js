import React from 'react';
import '../assets/css/ProductDetail.css';
import Comment from '../components/Comment';

function ProductDetail({ rating }) {
    rating = 5;
    const filledStars = Array.from({ length: rating }, (_, index) => index + 1);
    return (
        <div className='container'>
            <section className="product">
                <div className="product__photo">
                    <div className="photo-container">
                        <div className="photo-main bg-light">
                           
                            <img src="/img/p1.png" alt="product" />
                        </div>
                    </div>
                </div>
                <div className="product__info">
                    <div className="title">
                        <h1>Delicious Apples</h1>
                    </div>
                    <div className="price">
                        $ <span>7.93</span>
                    </div>
                    <div className="variant">
                        <h3>RATING</h3>
                        <div className='d-flex justify-content-start gap-1'>
                            {filledStars.map((_, index) => (
                                <i key={index} className="bi bi-star-fill"></i>
                            ))}
                        </div>
                    </div>
                    <div className="description">
                        <h3>DESCRIPTION</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Donec ac libero nec lectus ultricies aliquam. Nullam nec nunc nec nunc ultricies aliquam. Nullam nec nunc nec nunc ultricies aliquam.</p>
                    </div>
                    <button className="buy--btn">ADD TO CART</button>
                </div>
            </section>
            <Comment />
        </div>
    );
}

export default ProductDetail;
