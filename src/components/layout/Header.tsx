import Link from 'next/link';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Search from '../resources/Search';
import Image from 'next/image';
import Menu from './Menu';
import { IHeader } from '../../../types';

const Header = ({
  configHeader,
  configInfo,
  configLanguages,
  menu,
  totalCartItems,
  totalCompareItems,
  toggleClick,
  totalSavedItems,
  headerStyle,
}: IHeader) => {
  const [isToggled, setToggled] = useState<boolean>(false);
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    document.addEventListener('scroll', () => {
      const scrollCheck = window.scrollY >= 100;
      if (isMounted && scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });

    return () => {
      isMounted = false;
    };
  });

  const handleToggle = () => setToggled(!isToggled);

  return (
    // <header className={`header-area ${headerStyle} header-height-2`}>
    <header className={`header-area header-height-2`}>
      {configHeader.showHeaderTop && (
        <div className="header-top header-top-ptb-1 d-none d-lg-block">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-4">
                <div className="header-info">
                  <ul>
                    {configHeader.top.showPhone && (
                      <li>
                        <i className="fi-rs-smartphone"></i>
                        <Link href="/#">{configInfo.phone}</Link>
                      </li>
                    )}

                    {configHeader.top.showLocation && (
                      <li>
                        <i className="fi-rs-marker"></i>
                        <Link href="/contact">Our location</Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              {configHeader.top.showNewsflash && (
                <div className="col-xl-6 col-lg-4">
                  <div className="text-center">
                    <div id="news-flash" className="d-inline-block">
                      <ul>
                        <li>
                          {configHeader.top.newsflash.text}
                          <Link href={configHeader.top.newsflash.href}>
                            {configHeader.top.newsflash.callToAction}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              <div className="col-xl-3 col-lg-4">
                <div className="header-info header-info-right">
                  <ul>
                    {/* Languages */}
                    {configHeader.top.showLanguages && (
                      <li>
                        <Link href="/#" className="language-dropdown-active">
                          <i className="fi-rs-world"></i>English
                          <i className="fi-rs-angle-small-down"></i>
                        </Link>
                        <ul className="language-dropdown">
                          {configLanguages.map((language, idx) => {
                            return (
                              <li key={idx}>
                                <Link href={language.href ?? '/#'}>
                                  <Image
                                    src={language.flag}
                                    alt={language.label}
                                    sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }}
                                    width={language.flagWidth}
                                    height={language.flagHeight}
                                  />
                                  {language.label}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                    )}

                    {configHeader.top.showLoginSignup && (
                      <li>
                        <i className="fi-rs-user"></i>
                        <Link href="/">Log In / Sign Up</Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {configHeader.showHeaderMiddle && (
        <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
          <div className="container">
            <div className="header-wrap">
              {/* Logo */}
              <div className="logo logo-width-1">
                <Link href="/">
                  <div style={{ width: configInfo.logoWidth }}>
                    <Image
                      src={configInfo.logo}
                      alt={configInfo.companyName + ' Logo'}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto' }}
                      width={configInfo.logoWidth}
                      height={configInfo.logoHeight}
                    />
                  </div>
                </Link>
              </div>
              <div className="header-right">
                {/* Search */}
                {configHeader.middle.showSearch && (
                  <div className="search-style-2">
                    <Search />
                  </div>
                )}

                {/* Compare, Cart & Saved Icons */}
                {configHeader.middle.showCompareCartSaved === true && (
                  <div className="header-action-right">
                    <div className="header-action-2">
                      <div className="header-action-icon-2">
                        <Link href="/">
                          <Image
                            className="svgInject"
                            alt="Compare"
                            src="/assets/images/theme/icons/icon-compare.svg"
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                            width={25}
                            height={25}
                          />
                          <span className="pro-count blue">{totalCompareItems}</span>
                        </Link>
                      </div>
                      <div className="header-action-icon-2">
                        <Link href="/" className="mini-cart-icon">
                          <Image
                            alt="Cart"
                            src="/assets/images/theme/icons/icon-cart.svg"
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                            width={25}
                            height={25}
                          />
                          <span className="pro-count blue">{totalCartItems}</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {configHeader.showHeaderBottom && (
        <div
          className={
            scroll
              ? 'header-bottom header-bottom-bg-color sticky-bar stick'
              : 'header-bottom header-bottom-bg-color sticky-bar'
          }
        >
          <div className="container">
            <div className="header-wrap header-space-between position-relative">
              {/* Logo */}
              <div className="logo logo-width-1 d-block d-lg-none">
                <Link href="/">
                  <div style={{ margin: '0.8em 0', width: '250px' }}>
                    <Image
                      src={configInfo.logo}
                      alt={configInfo.companyName + ' Logo'}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto' }}
                      width={configInfo.logoWidth}
                      height={configInfo.logoHeight}
                    />
                  </div>
                </Link>
              </div>

              <div className="header-nav d-none d-lg-flex flex-fill">
                {/* Logo */}
                <div className="main-category-wrap d-none d-lg-block logo logo-width-1">
                  <Link href="/">
                    <div style={{ margin: '0.8em 0', width: '250px' }}>
                      <Image
                        src={configInfo.logo}
                        alt={configInfo.companyName + ' Logo'}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        width={configInfo.logoWidth}
                        height={configInfo.logoHeight}
                      />
                    </div>
                  </Link>
                </div>

                {/* Browse Categories */}
                {configHeader.bottom.showBrowseCategories && (
                  <div className="main-category-wrap d-none d-lg-block">
                    <a className="category-button-active" onClick={handleToggle}>
                      <span className="fi-rs-apps"></span>
                      Browse Categories
                    </a>

                    <div
                      className={
                        isToggled
                          ? 'category-dropdown-wrap category-dropdown-active-large open'
                          : 'category-dropdown-wrap category-dropdown-active-large'
                      }
                    >
                      <ul>
                        <li className="has-children">
                          <Link href="/">
                            <i className="evara-font-dress"></i>Women's Clothing
                          </Link>
                          <div className="dropdown-menu">
                            <ul className="mega-menu d-lg-flex">
                              <li className="mega-menu-col col-lg-7">
                                <ul className="d-lg-flex">
                                  <li className="mega-menu-col col-lg-6">
                                    <ul>
                                      <li>
                                        <span className="submenu-title">Hot & Trending</span>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Dresses
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Blouses & Shirts
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Hoodies & Sweatshirts
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Women's Sets
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Suits & Blazers
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Bodysuits
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Tanks & Camis
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Coats & Jackets
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li className="mega-menu-col col-lg-6">
                                    <ul>
                                      <li>
                                        <span className="submenu-title">Bottoms</span>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Leggings
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Skirts
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Shorts
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Jeans
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Pants & Capris
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Bikini Sets
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Cover-Ups
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Swimwear
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li className="mega-menu-col col-lg-5">
                                <div className="header-banner2">
                                  <Image
                                    src="/assets/images/banner/menu-banner-2.jpg"
                                    alt="menu_banner1"
                                    sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }}
                                    width={370}
                                    height={200}
                                  />
                                  <div className="banner_infoConfig">
                                    <h6>10% Off</h6>
                                    <h4>New Arrival</h4>
                                    <Link href="/#">Shop now</Link>
                                  </div>
                                </div>
                                <div className="header-banner2">
                                  <Image
                                    src="/assets/images/banner/menu-banner-3.jpg"
                                    alt="menu_banner2"
                                    sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }}
                                    width={370}
                                    height={200}
                                  />
                                  <div className="banner_infoConfig">
                                    <h6>15% Off</h6>
                                    <h4>Hot Deals</h4>
                                    <Link href="/#">Shop now</Link>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="has-children">
                          <Link href="/">
                            <i className="evara-font-tshirt"></i>Men's Clothing
                          </Link>
                          <div className="dropdown-menu">
                            <ul className="mega-menu d-lg-flex">
                              <li className="mega-menu-col col-lg-7">
                                <ul className="d-lg-flex">
                                  <li className="mega-menu-col col-lg-6">
                                    <ul>
                                      <li>
                                        <span className="submenu-title">Jackets & Coats</span>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Down Jackets
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Jackets
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Parkas
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Faux Leather Coats
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Trench
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Wool & Blends
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Vests & Waistcoats
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Leather Coats
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li className="mega-menu-col col-lg-6">
                                    <ul>
                                      <li>
                                        <span className="submenu-title">Suits & Blazers</span>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Blazers
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Suit Jackets
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Suit Pants
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Suits
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Vests
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Tailor-made Suits
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Cover-Ups
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li className="mega-menu-col col-lg-5">
                                <div className="header-banner2" style={{ width: '100%' }}>
                                  <Image
                                    src="/assets/images/banner/menu-banner-4.jpg"
                                    alt="menu_banner1"
                                    sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }}
                                    width={1320}
                                    height={300}
                                  />
                                  <div className="banner_infoConfig">
                                    <h6>10% Off</h6>
                                    <h4>New Arrival</h4>
                                    <Link href="/#">Shop now</Link>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="has-children">
                          <Link href="/">
                            <i className="evara-font-smartphone"></i>Cellphones
                          </Link>
                          <div className="dropdown-menu">
                            <ul className="mega-menu d-lg-flex">
                              <li className="mega-menu-col col-lg-7">
                                <ul className="d-lg-flex">
                                  <li className="mega-menu-col col-lg-6">
                                    <ul>
                                      <li>
                                        <span className="submenu-title">Hot & Trending</span>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Cellphones
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          iPhones
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Refurbished Phones
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Mobile Phone
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Mobile Phone Parts
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Phone Bags & Cases
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Communication Equipments
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Walkie Talkie
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li className="mega-menu-col col-lg-6">
                                    <ul>
                                      <li>
                                        <span className="submenu-title">Accessories</span>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Screen Protectors
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Wire Chargers
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Wireless Chargers
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Car Chargers
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Power Bank
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Armbands
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Dust Plug
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#" className="dropdown-item nav-link nav_item">
                                          Signal Boosters
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li className="mega-menu-col col-lg-5">
                                <div className="header-banner2">
                                  <Image
                                    src="/assets/images/banner/menu-banner-5.jpg"
                                    alt="menu_banner1"
                                    sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }}
                                    width={370}
                                    height={200}
                                  />
                                  <div className="banner_infoConfig">
                                    <h6>10% Off</h6>
                                    <h4>New Arrival</h4>
                                    <Link href="/#">Shop now</Link>
                                  </div>
                                </div>
                                <div className="header-banner2">
                                  <Image
                                    src="/assets/images/banner/menu-banner-6.jpg"
                                    alt="menu_banner2"
                                    sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }}
                                    width={370}
                                    height={200}
                                  />
                                  <div className="banner_infoConfig">
                                    <h6>15% Off</h6>
                                    <h4>Hot Deals</h4>
                                    <Link href="/#">Shop now</Link>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="evara-font-desktop"></i>Computer & Office
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="evara-font-cpu"></i>Consumer Electronics
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="evara-font-diamond"></i>Jewelry & Accessories
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="evara-font-home"></i>Home & Garden
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="evara-font-high-heels"></i>Shoes
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="evara-font-teddy-bear"></i>Mother & Kids
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="evara-font-kite"></i>Outdoor fun
                          </Link>
                        </li>
                        <li>
                          <ul className="more_slide_open" style={{ display: 'none' }}>
                            <li>
                              <Link href="/">
                                <i className="evara-font-desktop"></i>Beauty, Health
                              </Link>
                            </li>
                            <li>
                              <Link href="/">
                                <i className="evara-font-cpu"></i>Bags and Shoes
                              </Link>
                            </li>
                            <li>
                              <Link href="/">
                                <i className="evara-font-diamond"></i>Consumer Electronics
                              </Link>
                            </li>
                            <li>
                              <Link href="/">
                                <i className="evara-font-home"></i>Automobiles & Motorcycles
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <div className="more_categories">Show more...</div>
                    </div>
                  </div>
                )}

                {/* Menu/Navbar Items */}
                <Menu menu={menu} />
              </div>
              {configHeader.bottom.showHotline && (
                <div className="hotline d-none d-lg-block">
                  <p>
                    <i className="fi-rs-headset"></i>
                    <span>Hotline</span> 1900 - 888
                  </p>
                </div>
              )}
              {configHeader.bottom.showMobilePromo && (
                <p className="mobile-promotion">
                  Happy
                  <span className="text-brand">Mother's Day</span>. Big Sale Up to 40%
                </p>
              )}

              <div className="header-action-right d-block d-lg-none">
                <div className="header-action-2">
                  {configHeader.bottom.showIconCompare && (
                    <div className="header-action-icon-2">
                      <Link href="/saved">
                        <Image
                          alt="Compare Items"
                          src="/assets/images/theme/icons/icon-compare.svg"
                          sizes="100vw"
                          style={{ width: '100%', height: 'auto' }}
                          width={25}
                          height={25}
                        />
                        <span className="pro-count white">{totalCompareItems}</span>
                      </Link>
                    </div>
                  )}

                  {configHeader.bottom.showIconSaved && (
                    <div className="header-action-icon-2">
                      <Link href="/saved">
                        <Image
                          alt="Saved Items"
                          src="/assets/images/theme/icons/icon-heart.svg"
                          sizes="100vw"
                          style={{ width: '100%', height: 'auto' }}
                          width={25}
                          height={25}
                        />
                        <span className="pro-count white">{totalSavedItems}</span>
                      </Link>
                    </div>
                  )}

                  {configHeader.bottom.showIconCart && (
                    <div className="header-action-icon-2">
                      <Link href="/" className="mini-cart-icon">
                        <Image
                          alt="The Textile Code"
                          src="/assets/images/theme/icons/icon-cart.svg"
                          sizes="100vw"
                          style={{ width: '100%', height: 'auto' }}
                          width={25}
                          height={25}
                        />
                        <span className="pro-count white">{totalCartItems}</span>
                      </Link>
                      <div className="cart-dropdown-wrap cart-dropdown-hm2">
                        <ul>
                          <li>
                            <div className="shopping-cart-img">
                              <Link href="/">
                                <Image
                                  alt="Cart"
                                  src="/assets/images/shop/thumbnail-3.jpg"
                                  sizes="100vw"
                                  style={{ width: '100%', height: 'auto' }}
                                  width={600}
                                  height={600}
                                />
                              </Link>
                            </div>
                            <div className="shopping-cart-title">
                              <h4>
                                <Link href="/">Plain Striola Shirts</Link>
                              </h4>
                              <h3>
                                <span>1 × </span>
                                $800.00
                              </h3>
                            </div>
                            <div className="shopping-cart-delete">
                              <Link href="/#">
                                <i className="fi-rs-cross-small"></i>
                              </Link>
                            </div>
                          </li>
                          <li>
                            <div className="shopping-cart-img">
                              <Link href="/">
                                <Image
                                  alt="The Textile Code"
                                  src="/assets/images/shop/thumbnail-4.jpg"
                                  sizes="100vw"
                                  style={{ width: '100%', height: 'auto' }}
                                  width={600}
                                  height={600}
                                />
                              </Link>
                            </div>
                            <div className="shopping-cart-title">
                              <h4>
                                <Link href="/">Macbook Pro 2022</Link>
                              </h4>
                              <h3>
                                <span>1 × </span>
                                $3500.00
                              </h3>
                            </div>
                            <div className="shopping-cart-delete">
                              <Link href="/#">
                                <i className="fi-rs-cross-small"></i>
                              </Link>
                            </div>
                          </li>
                        </ul>
                        <div className="shopping-cart-footer">
                          <div className="shopping-cart-total">
                            <h4>
                              Total
                              <span>$383.00</span>
                            </h4>
                          </div>
                          <div className="shopping-cart-button">
                            <Link href="/">View cart</Link>
                            <Link href="/">Checkout</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="header-action-icon-2 d-block d-lg-none">
                    <div className="burger-icon burger-icon-white" onClick={toggleClick}>
                      <span className="burger-icon-top"></span>
                      <span className="burger-icon-mid"></span>
                      <span className="burger-icon-bottom"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const mapStateToProps = (state) => ({
  totalCartItems: state.cart.length,
  totalCompareItems: state.compare.items.length,
  totalSavedItems: state.wishlist.items.length,
});

export default connect(mapStateToProps, null)(Header);
