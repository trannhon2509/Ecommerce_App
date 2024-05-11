import React from 'react'

function FilterProduct() {
    return (
            <div>
                <form>
                    <div className="well">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search products..." />
                                    <span className="input-group-btn">
                                        <button className="btn btn-primary" type="submit">
                                            <i class="bi bi-search"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <form className="shop__filter">
                    <h3 className="headline">
                        <span>Price</span>
                    </h3>
                    <div className="radio">
                        <input type="radio" name="shop-filter__price" id="shop-filter-price_1" defaultValue defaultChecked />
                        <label htmlFor="shop-filter-price_1">Under $25</label>
                    </div>
                    <div className="radio">
                        <input type="radio" name="shop-filter__price" id="shop-filter-price_2" defaultValue />
                        <label htmlFor="shop-filter-price_2">$25 to $50</label>
                    </div>
                    <div className="radio">
                        <input type="radio" name="shop-filter__price" id="shop-filter-price_3" defaultValue />
                        <label htmlFor="shop-filter-price_3">$50 to $100</label>
                    </div>
                    <div className="radio">
                        <input type="radio" name="shop-filter__price" id="shop-filter-price_4" defaultValue="specify" />
                        <label htmlFor="shop-filter-price_4">Other (specify)</label>
                    </div>
                    <div className="form-group shop-filter__price">
                        <div className="row">
                            <div className="col-xs-4">
                                <label htmlFor="shop-filter-price_from" className="sr-only" />
                                <input id="shop-filter-price_from" type="number" min={0} className="form-control" placeholder="From" disabled />
                            </div>
                            <div className="col-xs-4">
                                <label htmlFor="shop-filter-price_to" className="sr-only" />
                                <input id="shop-filter-price_to" type="number" min={0} className="form-control" placeholder="To" disabled />
                            </div>
                            <div className="col-xs-4 mt-2">
                                <button type="submit" className="btn btn-block btn-default" disabled>Go</button>
                            </div>
                        </div>
                    </div>
                    <h3 className="headline">
                        <span>Brand</span>
                    </h3>
                    <div className="checkbox">
                        <input type="checkbox" defaultValue id="shop-filter-checkbox_1" defaultChecked />
                        <label htmlFor="shop-filter-checkbox_1">Adidas</label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" defaultValue id="shop-filter-checkbox_2" />
                        <label htmlFor="shop-filter-checkbox_2">Calvin Klein</label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" defaultValue id="shop-filter-checkbox_3" />
                        <label htmlFor="shop-filter-checkbox_3">Columbia</label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" defaultValue id="shop-filter-checkbox_4" />
                        <label htmlFor="shop-filter-checkbox_4">Tommy Hilfiger</label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" defaultValue id="shop-filter-checkbox_5" />
                        <label htmlFor="shop-filter-checkbox_5">Not specified</label>
                    </div>
                    <h3 className="headline">
                        <span>Material</span>
                    </h3>
                    <div className="radio">
                        <input type="radio" name="shop-filter__radio" id="shop-filter-radio_1" defaultValue defaultChecked />
                        <label htmlFor="shop-filter-radio_1">100% Cotton</label>
                    </div>
                    <div className="radio">
                        <input type="radio" name="shop-filter__radio" id="shop-filter-radio_2" defaultValue />
                        <label htmlFor="shop-filter-radio_2">Bamboo</label>
                    </div>
                    <div className="radio">
                        <input type="radio" name="shop-filter__radio" id="shop-filter-radio_3" defaultValue />
                        <label htmlFor="shop-filter-radio_3">Leather</label>
                    </div>
                    <div className="radio">
                        <input type="radio" name="shop-filter__radio" id="shop-filter-radio_4" defaultValue />
                        <label htmlFor="shop-filter-radio_4">Polyester</label>
                    </div>
                    <div className="radio">
                        <input type="radio" name="shop-filter__radio" id="shop-filter-radio_5" defaultValue />
                        <label htmlFor="shop-filter-radio_5">Not specified</label>
                    </div>
                    <h3 className="headline">
                        <span>Colors</span>
                    </h3>
                    <div className="shop-filter__color">
                        <input type="text" id="shop-filter-color_1" defaultValue data-input-color="black" />
                        <label htmlFor="shop-filter-color_1" style={{ backgroundColor: 'black' }} />
                    </div>
                    <div className="shop-filter__color">
                        <input type="text" id="shop-filter-color_2" defaultValue data-input-color="gray" />
                        <label htmlFor="shop-filter-color_2" style={{ backgroundColor: 'gray' }} />
                    </div>
                    <div className="shop-filter__color">
                        <input type="text" id="shop-filter-color_3" defaultValue data-input-color="brown" />
                        <label htmlFor="shop-filter-color_3" style={{ backgroundColor: 'brown' }} />
                    </div>
                    <div className="shop-filter__color">
                        <input type="text" id="shop-filter-color_4" defaultValue data-input-color="beige" />
                        <label htmlFor="shop-filter-color_4" style={{ backgroundColor: 'beige' }} />
                    </div>
                    <div className="shop-filter__color">
                        <input type="text" id="shop-filter-color_5" defaultValue data-input-color="white" />
                        <label htmlFor="shop-filter-color_5" style={{ backgroundColor: 'white' }} />
                    </div>
                </form>
            </div>
    )
}

export default FilterProduct