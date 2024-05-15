import React from 'react'
import { Link } from 'react-router-dom'

function ItemShoppingCard() {
    return (
        <tr>
            <td>
                <div className="product-item">
                    <a className="product-thumb" href="#">
                        <img
                            src="/img/p1.png" width={100}
                            alt="Product"
                        />
                    </a>
                    <div className="product-info">
                        <h4 className="product-title">
                            <a href="#">Unionbay Park</a>
                        </h4>
                        <span>
                            <em>Size:</em>
                            10.5
                        </span>
                        <span>
                            <em>Color:</em> Dark Blue
                        </span>
                    </div>
                </div>
            </td>
            <td className="text-center">
                <div className="count-input">
                    <input type='number' min={0}  className='search'/>
                </div>
            </td>
            <td className="text-center text-lg text-medium">$43.90</td>
            <td className="text-center text-lg text-medium">$18.00</td>
            <td className="text-center">
                <Link
                    className="remove-from-cart"
                    to={""}
                    data-toggle="tooltip"
                    title
                    data-original-title="Remove item"
                >
                    <i class="bi bi-trash-fill"></i>
                </Link>
            </td>
        </tr>
    )
}

export default ItemShoppingCard