import { doc, deleteDoc } from 'firebase/firestore'
import React from "react"
import { Col, Container, Row } from "reactstrap"
import { db } from '../firebase.config'
import useGetData from "../custom-hooks/useGetData"
import styles from "./css/allProduct.module.css"
import { toast } from 'react-toastify'

const AllProducts = () => {
  const { data: productsData, loading } = useGetData("product")

  if (loading) {
    return <div className="py-5">Loading...</div>
  }

  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, "products", id))
    toast.success('Product deleted successfully')
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {productsData.map((item) => (
                  <tr className={styles.productRow} key={item.id}>
                    <td>
                      <img src={item.imgUrl} alt={item.title} />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.category}</td>
                    <td>${item.price}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {deleteProduct(item.id)}}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AllProducts
