import React from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import styles from './css/addProducts.module.css';

const AddProducts = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <h4>Add Product</h4>
            <Form>
              <FormGroup className={styles.formGroup}>
                <span>Product title</span>
                <input type="text" placeholder="Title" /> 
              </FormGroup>
              <FormGroup className={styles.formGroup}>
                <span>Short Description</span>
                <input type="text" placeholder="Lorem..." /> 
              </FormGroup>
              <FormGroup className={styles.formGroup}>
                <span>Description</span>
                <input type="text" placeholder="Description..." /> 
              </FormGroup>
              <FormGroup className={styles.formGroup}>
                <span>Price</span>
                <input type="text" placeholder="$100" /> 
              </FormGroup>
              <FormGroup className={styles.formGroup}>
                <span>Category</span>
                <input type="text" placeholder="Title" /> 
              </FormGroup>

            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AddProducts;
