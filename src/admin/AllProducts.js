import React from "react"
import { Col, Container, Row } from "reactstrap"
import useGetData from "../custom-hooks/useGetData"
import styles from "./css/allProduct.module.css"

const AllProducts = () => {
  const { data: productsData, loading } = useGetData("product")

  if (loading) {
    return <div>Loading...</div>
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
                      <button className="btn btn-danger">Delete</button>
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
