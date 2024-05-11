import React from 'react'
import CardProduct from './CardProduct'

function GridProduct() {
    return (
        <div className="row">
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
        </div>
    )
}

export default GridProduct