import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import products from '../assets/data/products';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import styles from '../styles/productDetails.module.css';
import { motion } from 'framer-motion';

const ProductDetails = () => {

  const { id } = useParams();

  const product = products.find((product) => product.id === id);

  const { imgUrl, productName, price, review, avgRating, description, shortDesc } = product;

  return (
    <Helmet>
      <CommonSection />
      
      <section className={`pt-0`}>
        <Container>
          <Row>
            <Col lg='6'>
              <img src={imgUrl} alt={productName} />
            </Col>
            <Col lg='6'>
              <div className={styles.productDetails}>
                <h2>{ productName }</h2>
                <div className={styles.productRating}>
                  <div>
                    <span><i className="ri-star-s-fill"></i></span>
                    <span><i className="ri-star-s-fill"></i></span>
                    <span><i className="ri-star-s-fill"></i></span>
                    <span><i className="ri-star-s-fill"></i></span>
                    <span><i className="ri-star-half-s-line"></i></span>
                  </div>
                  <p>(<span>{ avgRating }</span> ratings)</p>
                </div>
                <span className={styles.productPrice}>${ price }</span>
                <p className={`mt-3`}>{ shortDesc }</p>
                <motion.button whileTap={{ scale: 1.2 }} className={styles.buyBtn}>Add to cart</motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default ProductDetails;
