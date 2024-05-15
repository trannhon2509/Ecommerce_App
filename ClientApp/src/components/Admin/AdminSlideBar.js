import React from 'react'
import { Link } from 'react-router-dom';
import { RoutePaths } from '../../config/config';
function AdminSlideBar() {
  return (

    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <svg className="bi me-2" width={40} height={32}><use xlinkHref="#bootstrap" /></svg>
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">

        <li>
          <Link to={RoutePaths.admin} className="nav-link link-dark">
            <i class="bi bi-speedometer"></i>{" "}Dashboard
          </Link>
        </li>
        <li>
          <Link to={RoutePaths.adminOrder} className="nav-link link-dark">
            <i class="bi bi-card-checklist"></i>{" "}Orders
          </Link>
        </li>
        <li>
          <Link to={RoutePaths.adminProduct} className="nav-link link-dark">
            <i class="bi bi-grid-fill"></i>{" "}Products
          </Link>
        </li>
        <li>
          <Link to={RoutePaths.adminUser} className="nav-link link-dark">
            <i class="bi bi-people-fill"></i>{" "}User
          </Link>
        </li>
        <li>
          <Link to={RoutePaths.adminBlog} className="nav-link link-dark">
            <i class="bi bi-file-earmark-post"></i>{" "}Blog
          </Link>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <Link href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://github.com/mdo.png" alt='' width={32} height={32} className="rounded-circle me-2" />
          <strong>mdo</strong>
        </Link>
        <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
          <li><Link className="dropdown-item" href="#">New project...</Link></li>
          <li><Link className="dropdown-item" href="#">Settings</Link></li>
          <li><Link className="dropdown-item" href="#">Profile</Link></li>
          <li><hr className="dropdown-divider" /></li>
          <li><Link className="dropdown-item" href="#">Sign out</Link></li>
        </ul>
      </div>
    </div>





  )
}

export default AdminSlideBar