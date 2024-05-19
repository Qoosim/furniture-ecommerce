import React from 'react';
import { Container, Row } from 'reactstrap';
import styles from './css/adminNav.module.css';
import useAuth from '../custom-hooks/useAuth';
import { NavLink } from 'react-router-dom';

const adminNav = [
  {
    display: 'Dashboard',
    path: '/dashboard'
  },
  {
    display: 'Add Product',
    path: 'dashboard/add-products'
  },
  {
    display: 'All-Products',
    path: '/dashboard/all-products'
  },
  {
    display: 'Orders',
    path: '/dashboard/orders'
  },
  {
    display: 'Users',
    path: '/dashboard/users'
  },
]

const AdminNav = () => {
  const { currentUser } = useAuth();
  if (!currentUser) return <div>Loading...</div>

  return (
    <>
      <header className={styles.adminHeader}>
        <div className={styles.adminNavTop}>
          <Container>
            <div className={styles.adminNavWrapperTop}>
              <div className={styles.logo}>
                <h2>Maltimart</h2>
              </div>
              <div className={styles.searchBox}>
                <input type="text" placeholder="Search..." />
                <span><i className="ri-search-line"></i></span>
              </div>
              <div className={styles.adminNavTopRight}>
                <span><i className="ri-notification-3-line"></i></span>
                <span><i className="ri-settings-2-line"></i></span>
                <img src={currentUser && currentUser.photoURL} alt="User Avatar" />
              </div>
            </div>
          </Container>
        </div>
      </header>

      <section className={`${styles.adminMenu} p-0`}>
        <Container>
          <Row>
            <div className={styles.adminNavigation}>
              <ul className={styles.adminMenuList}>
                {
                  adminNav.map((item, index) => (
                    <li key={index} className={styles.adminMenuItem}>
                      <NavLink to={item.path}
                        className={menuClick => 
                          menuClick.isActive ? `${styles.activeAdminMenu}` : ''
                        }
                      >
                        {item.display}
                      </NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default AdminNav;
