import React from 'react';
import { useDispatch } from 'react-redux';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from './css/product.module.css';
import { motion } from 'framer-motion';
import { cartActions } from '../../redux/slices/cartSlice';
import { toast } from 'react-toastify';


const ProductCard = ({ product }) => {
  const { id, category, imgUrl, productName, price } = product;

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id: id,
      productName: productName,
      price: price,
      image: imgUrl,
    }))

    toast.success('Product added successfully');
  }

  return (
    <Col lg='3' md='4' className={`mb-2`}>
      <article className={styles.productItem}>
        <div className={styles.productImage}>
          <motion.img whileHover={{ scale: 0.9 }} src={imgUrl} alt="Product" />
        </div>
        <div className={`${styles.itemTitle} ${styles.productInfo}`}>
          <h3 className={styles.productName}>
            <Link to={`/shop/${id}`}>{productName}</Link>
          </h3>
          <span>{category}</span>
        </div>
        <div className={styles.productCardBtn}>
          <span className={styles.price}>${price}</span>
          <motion.span whileTap={{ scale: 1.3 }} onClick={addToCart}>
            <i className="ri-add-line"></i>
          </motion.span>
        </div>
      </article>
    </Col>
  )
}

export default ProductCard;
