import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartProducts: [],
  totalAmount: 0,
  totalQuantity: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newProduct = action.payload;
      const existingProduct = state.cartProducts.find((product) => product.id === newProduct.id);
      state.totalQuantity++

      if(!existingProduct) {
        state.cartProducts.push({
          id: newProduct.id,
          productName: newProduct.productName,
          image: newProduct.imgUrl,
          price: newProduct.price,
          quantity: 1,
          totalPrice: newProduct.price
        })
      }
      else {
        existingProduct.quantity++
        existingProduct.totalPrice = Number(existingProduct.totalPrice) + Number(newProduct.price)
      }

      state.totalAmount = state.cartProducts.reduce(
        (total, product) => total + Number(product.price) * Number(product.quantity)
      )
    }
  }
})

export const cartActions = cartSlice.actions;

export default cartSlice.reducer
