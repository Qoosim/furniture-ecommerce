import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import styles from '../styles/cart.module.css';
import SingleCartRow from './SingleCartRow';

const Cart = () => {

  const cartProducts = useSelector((state) => state.cart.cartProducts)

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />

      <section>
        <Container>
          <Row>
            <Col lg='9'>
              {
                cartProducts.length === 0 ? (
                  <h2 className='fs-4 text-center'>No product in the cart</h2>
                ) : (
                  <table className={`${styles.table} table bordered`}>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        cartProducts.map((product, index) => (
                          <SingleCartRow product={product} key={index} />
                        ))
                      }
                    </tbody>
                  </table>
                )
              }
            </Col>
            <Col lg='3'></Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}


export default Cart;
