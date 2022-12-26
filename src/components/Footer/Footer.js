import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from './footer.module.css';

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col lg='4' md='6' className='mb-4'>
            <div className={styles.logo}>
              <div>
                <h1>Multimart</h1>
              </div>
            </div>
            <p className={`mt-2 ${styles.footerText}`}>
                Ipsum ipsam est delectus nulla impedit. Dolores beatae aperiam harum id impedit, fugiat? Illo qui sunt soluta deleniti iusto ipsam.
              </p>
          </Col>
          <Col lg='3' md='3' className='mb-4'>
            <div className={styles.footerQuickLinks}>
              <h4 className={styles.footerQuickTitle}>Top Categories</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Modern Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Arm Chair</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Smart Watches</Link>
                </ListGroupItem>

              </ListGroup>
            </div>
          </Col>
          <Col lg='2' md='3' className='mb-4'>
            <div className={styles.footerQuickLinks}>
              <h4 className={styles.footerQuickTitle}>Useful Links</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>Shop</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'>Cart</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>Login</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Private Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='3' md='4' className='mb-4'>
            <div className={styles.footerQuickLinks}>
              <h4 className={styles.footerQuickTitle}>Contact</h4>
              <ListGroup className={styles.footerContact}>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i className="ri-map-pin-2-line"></i></span>
                  <p>123 GEM BUILDING, Ojo, Ibadan, Oyo State</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i className="ri-phone-line"></i></span>
                  <p>+2348036095204</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i className="ri-mail-line"></i></span>
                  <p>ayinde.abdulghaniyy@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col md='12' className={styles.footerCopyright}>
            <p>Copyright {year} developed by Qoosim Abdul. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;
