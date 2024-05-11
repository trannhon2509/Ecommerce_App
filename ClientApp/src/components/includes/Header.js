import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RoutePaths } from '../../config/config';

function Header() {
  const menuItems = [
    { id: 1, name: 'Home', link: RoutePaths.home },
    { id: 2, name: 'About', link: RoutePaths.about },
    { id: 3, name: 'Shop', link: RoutePaths.shop },
    { id: 4, name: 'Blog', link: RoutePaths.blog },
    { id: 5, name: 'Contact', link: RoutePaths.contact },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isCurrentlyScrolled = scrollTop > 0;
      setIsScrolled(isCurrentlyScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const headerClassName = isScrolled ? 'site-header sticky_head' : 'site-header';

  return (
    <header className={headerClassName}>
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="d-flex align-items-center">
              <Link to={RoutePaths.home}>
                <img src="/img/logo.png" width={60} alt="Logo" />
              </Link>
              <h2 className='text-success'>RevibeCO</h2>
            </div>
          </div>
          <div className="col-lg-10">
            <div className="main-navigation">
              <button className="menu-toggle"><span /><span /></button>
              <nav className="header-menu">
                <ul className="menu food-nav-menu">
                  {menuItems.map((item) => (
                    <li key={item.id}>
                      <Link to={item.link}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="header-right">
                <form action="#" className="header-search-form for-des">
                  <input type="search" className="form-input" placeholder="Search Here..." />
                  <button type="submit">
                    <i class="bi bi-search text-success"></i>
                  </button>
                </form>
                <Link to={RoutePaths.willist} className="header-btn header-cart">
                  <i class="bi bi-bag-check-fill text-success"></i>
                  <span className="cart-number text-success">3</span>
                </Link>

                <div className="dropdown" style={{width:'40px', marginRight: '15px'}}>
                  <button className="border-0 header-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bi bi-person-circle text-success"></i>
                  </button>
                  <ul className="dropdown-menu dropdown-effect" aria-labelledby="dropdownMenuButton1">
                    <li><Link className="dropdown-item" to={RoutePaths.login}>Profile</Link></li>
                    <li><Link className="dropdown-item" to={RoutePaths.admin}>Admin</Link></li>
                    <li><Link className="dropdown-item" to={RoutePaths.login}>Sign in</Link></li>
                    <li><Link className="dropdown-item" to={''}>Sign out ㅤ<i class="bi bi-box-arrow-right"></i></Link></li>
                  </ul>
                </div>
                <Link to={RoutePaths.chat} className="header-btn">
                  <i class="bi bi-chat-dots-fill text-success"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;