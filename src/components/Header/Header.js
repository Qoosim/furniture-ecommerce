import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./header.module.css";
import { motion } from "framer-motion";
import { Container, Row } from "reactstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import { navLinks } from "./navLinks";
import useAuth from "../../custom-hooks/useAuth";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const profileActionRef = useRef(null);
  const navigate = useNavigate();

  const { currentUser } = useAuth();

  const headerSticky = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add(`${styles.stickyHeader}`);
      } else {
        headerRef.current.classList.remove(`${styles.stickyHeader}`);
      }
    });
  };

  const navigateToCart = () => {
    navigate("/cart");
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out");
        navigate("/home");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  useEffect(() => {
    headerSticky();

    return () => window.removeEventListener("scroll", headerSticky);
  });

  const menuToggle = () =>
    menuRef.current.classList.toggle(`${styles.activeMenu}`);

  const toggleProfileActions = () =>
    profileActionRef.current.classList.toggle(`${styles.showProfileActions}`);

  return (
    <header className={styles.header} ref={headerRef}>
      <Container>
        <Row>
          <div className={styles.navWrapper}>
            <Link to="/home">
              <div className={styles.logo}>
                <img src={logo} alt="logo" />
                <div>
                  <h1>Multimart</h1>
                </div>
              </div>
            </Link>
            <div
              className={styles.navigation}
              ref={menuRef}
              onClick={menuToggle}
            >
              <ul className={styles.menu}>
                {navLinks.map((link, index) => (
                  <li className={styles.navItem} key={index}>
                    <NavLink
                      to={link.path}
                      className={(navClass) =>
                        navClass.isActive ? `${styles.navActive}` : ``
                      }
                    >
                      {link.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.navIcons}>
              <span className={styles.heartIcon}>
                <i className="ri-heart-line"></i>
                <span className={styles.badge}>2</span>
              </span>
              <span className={styles.cartIcon} onClick={navigateToCart}>
                <i className="ri-shopping-cart-2-line"></i>
                <span className={styles.badge}>{totalQuantity}</span>
              </span>
              <div className={styles.profile}>
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={currentUser ? currentUser.photoURL : userIcon}
                  alt="user icon"
                  onClick={toggleProfileActions}
                />
                <div
                  className={styles.profileActions}
                  ref={profileActionRef}
                  onClick={toggleProfileActions}
                >
                  {currentUser ? (
                    <span onClick={logout}>Logout</span>
                  ) : (
                    <div
                      className={`
                        d-flex align-items-center justify-content-center flex-column
                      `}
                    >
                      <Link to="/signup">Sign up</Link>
                      <Link to="/login">Login</Link>
                      <Link to="/dashboard">Dashboard</Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.mobileMenu}>
              <span onClick={menuToggle}>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
       
    </header>
  );
};

export default Header;
