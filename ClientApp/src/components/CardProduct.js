import React from 'react'
import { Link } from 'react-router-dom'
import RoutePath from '../routes/RoutePath'

function CardProduct() {
    return (
        <div className="col-sm-6 col-md-4">
            <div className="shop__thumb">
                <Link to={RoutePath.PRODUCT_DETAIL}>
                    <div className="shop-thumb__img">
                        <img src="https://www.bootdey.com/image/400x400/48D1CC/000000" className="img-responsive" alt="..." />
                        <div className="shop-thumb__rating">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                        </div>
                    </div>
                    <h5 className="shop-thumb__title">
                        Product Title
                    </h5>
                    <div className="shop-thumb__price">
                        $59.99
                    </div>

                </Link>
            </div>
        </div>
    )
}

export default CardProduct