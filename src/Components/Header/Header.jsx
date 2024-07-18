
import React from "react";
import classes from "./Header.module.css"; 
import { FiSearch } from "react-icons/fi"; // FiSearch from react-icons/fi
import { BiCart } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl"; 
import { Link } from "react-router-dom";
import LowerHeader from "./LowerHeader";

function Header() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.headerContainer}>
          <Link to="/" className={classes.headerLogo}>
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon Logo"
            />
          </Link>
          <div className={classes.headerLocationAndSearch}>
            <div className={classes.headerLocation}>
              <span>
                <SlLocationPin
                  size={17}
                  className={classes.headerLocationIcon}
                />
              </span>
              <div className={classes.headerDeliver}>
                <p>Deliver to</p>
                <span>USA</span>
              </div>
            </div>
            <div className={classes.headerSearch}>
              <select>
                <option value=""> All</option>
              </select>
              <input type="text" placeholder="Search Amazon" />
              <button className={classes.headerSearchButton}>
                <FiSearch />
              </button>
            </div>
          </div>
          <div className={classes.headerNavigation}>
            <Link to="/" className={classes.headerNavigation}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1024px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
                alt="/"
              />
              <div>
                <select>
                  <option value=""> EN</option>
                </select>
              </div>
            </Link>
            <Link to="#" className={classes.headerNavLink}>
              <div>
                <p>Hello, sign in</p>
                <select>
                  <option value=""> Account & Lits</option>
                </select>
              </div>
            </Link>
            <Link to="/Orders" className={classes.headerNavLink}>
              <div className={classes.headerNavLink_returns}>
                <div>Returns</div>
                <p>& Orders</p>
              </div>
            </Link>
            <Link to="/Cart" className={classes.headerNavLink_cart}>
              <div>
                <span>0</span>
                <BiCart size={35} />
              </div>
              <p>Cart</p>
            </Link>
          </div>
        </div>
      </header>
      <LowerHeader />
    </>
  );
}

export default Header;




