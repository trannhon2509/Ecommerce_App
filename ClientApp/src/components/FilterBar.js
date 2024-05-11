import React, { useState } from 'react';

function FilterBar() {
    const [activeFilter, setActiveFilter] = useState('all');

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

    // Mảng dữ liệu chứa các mục menu
    const menuItems = [
        { filter: 'all', label: 'All' },
        { filter: 'breakfast', label: 'Breakfast' },
        { filter: 'lunch', label: 'Lunch' },
        { filter: 'dinner', label: 'Dinner' }
    ];

    return (
        <div>
            <div className="menu-tab-wp d-lg-none">
                <div className="row">
                    <div className="col-lg-12 m-auto">
                        <div className="menu-tab text-center">
                            <ul className="filters">
                                {menuItems.map((item) => (
                                    <li
                                        key={item.filter}
                                        className={`filter ${activeFilter === item.filter ? 'bg-success' : ''}`}
                                        data-filter={`.${item.filter}`}
                                        onClick={() => handleFilterClick(item.filter)}
                                    >
                                        <img src="/img/menu-1.png" alt='' />
                                        {item.label}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <form action="#" className="header-search-form-filter for-des-filter">
                <input type="search" className="form-input" placeholder="Search Here..." />
                <button type="submit">
                    <i class="bi bi-search text-success"></i>
                </button>
            </form>

            <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-light my-4 rounded-3">
                <a href="/" className="d-flex align-items-center flex-shrink-0 px-3 py-2 link-dark text-decoration-none border-bottom">
                    <h3 className="">Category</h3>
                </a>
                <div className="list-group list-group-flush border-bottom scrollarea overflow-y-scroll" style={{height: '300px'}}>
                    <a href="#" className="list-group-item list-group-item-action active py-3 lh-tight" aria-current="true">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                            <strong className="mb-1">Lamp</strong>
                            <small>Wed</small>
                        </div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action  py-3 lh-tight" aria-current="true">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                            <strong className="mb-1">Bag</strong>
                            <small>Wed</small>
                        </div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action  py-3 lh-tight" aria-current="true">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                            <strong className="mb-1">Flower</strong>
                            <small>Wed</small>
                        </div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action  py-3 lh-tight" aria-current="true">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                            <strong className="mb-1">Pretties</strong>
                            <small>Wed</small>
                        </div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action  py-3 lh-tight" aria-current="true">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                            <strong className="mb-1">List group item heading</strong>
                            <small>Wed</small>
                        </div>
                    </a>
                    
                    
                </div>
            </div>


            <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-light pt-2 mt-3 rounded-3">
                <a href="/" className="d-flex align-items-center flex-shrink-0 px-3 link-dark text-decoration-none border-bottom">
                    <h3 className="">Top rate</h3>
                </a>
                <div className="list-group list-group-flush border-bottom scrollarea scroll overflow-y-scroll" style={{height: '800px'}}>
                    <a href="#" className="list-group-item list-group-item-action active py-3 lh-tight" aria-current="true">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                            <strong className="mb-1">List group item heading</strong>
                            <small>Wed</small>
                        </div>
                        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                            <strong className="mb-1">List group item heading</strong>
                            <small className="text-muted">Tues</small>
                        </div>
                        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                            <strong className="mb-1">List group item heading</strong>
                            <small className="text-muted">Mon</small>
                        </div>
                        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                            <strong className="mb-1">List group item heading</strong>
                            <small className="text-muted">Wed</small>
                        </div>
                        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                            <strong className="mb-1">List group item heading</strong>
                            <small className="text-muted">Tues</small>
                        </div>
                        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                            <strong className="mb-1">List group item heading</strong>
                            <small className="text-muted">Mon</small>
                        </div>
                        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                            <strong className="mb-1">List group item heading</strong>
                            <small className="text-muted">Wed</small>
                        </div>
                        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                            <strong className="mb-1">List group item heading</strong>
                            <small className="text-muted">Tues</small>
                        </div>
                        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                            <strong className="mb-1">List group item heading</strong>
                            <small className="text-muted">Mon</small>
                        </div>
                        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                            <strong className="mb-1">List group item heading</strong>
                            <small className="text-muted">Wed</small>
                        </div>
                        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                            <strong className="mb-1">List group item heading</strong>
                            <small className="text-muted">Tues</small>
                        </div>
                        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                            <strong className="mb-1">List group item heading</strong>
                            <small className="text-muted">Mon</small>
                        </div>
                        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
                    </a>
                </div>
            </div>


        </div>
    );
}

export default FilterBar;
