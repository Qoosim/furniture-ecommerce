import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import products from '../assets/data/products';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';

const ProductDetails = () => {

  const { id } = useParams();

  const product = products.find((product) => product.id === id);

  const { imgUrl, productName, price, review, avgRating, description } = product;

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
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default ProductDetails;
