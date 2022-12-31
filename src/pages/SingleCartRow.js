import React from 'react';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { cartActions } from '../redux/slices/cartSlice';

const SingleCartRow = ({ product }) => {

  const { id, imgUrl, price, productName, quantity } = product;

  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(id));
  }

  return (
    <tr>
      <td><img src={imgUrl} alt={productName} /></td>
      <td>{productName}</td>
      <td>${price}</td>
      <td>{quantity} px</td>
      <td>
        <motion.i
          whileTap={{ scale: 1.2 }}
          className="ri-delete-bin-line"
          onClick={deleteProduct}
        ></motion.i>
      </td>
    </tr>
  )
}

export default SingleCartRow;
