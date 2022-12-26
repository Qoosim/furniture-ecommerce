import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './header.module.css';
import { motion } from 'framer-motion';
import { Container, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/eco-logo.png';
import userIcon from '../../assets/images/user-icon.png';
import { navLinks } from './navLinks';

const Header = () => {

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const headerRef = useRef(null);
  const menuRef = useRef(null)

  const headerSticky = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add(`${styles.stickyHeader}`);
      } else {
        headerRef.current.classList.remove(`${styles.stickyHeader}`);
      }
    })
  }

  useEffect(() => {
    headerSticky();

    return () => window.removeEventListener('scroll', headerSticky);
  })

  const menuToggle = () => menuRef.current.classList.toggle(`${styles.activeMenu}`);

  return (
    <header className={styles.header} ref={headerRef}>
      <Container>
        <Row>
          <div className={styles.navWrapper}>
            <div className={styles.logo}>
              <img src={logo} alt="logo" />
              <div>
                <h1>Multimart</h1>
              </div>
            </div>
            <div className={styles.navigation} ref={menuRef} onClick={menuToggle}>
              <ul className={styles.menu}>
                {
                  navLinks.map((link, index) => (
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
                  ))
                }
              </ul>
            </div>
            <div className={styles.navIcons}>
              <span className={styles.heartIcon}>
                <i className="ri-heart-line"></i>
                <span className={styles.badge}>2</span>
              </span>
              <span className={styles.cartIcon}>
                <i className="ri-shopping-cart-2-line"></i>
                <span className={styles.badge}>{totalQuantity}</span>
              </span>
              <span>
                <motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt="user icon" />
              </span>
            </div>
            <div className={styles.mobileMenu}>
              <span onClick={menuToggle}><i className="ri-menu-line"></i></span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header;
