import React, { useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import styles from '../styles/shop.module.css';
import products from '../assets/data/products';
import ProductsList from '../components/UI/ProductsList';

const Shop = () => {

  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {

    const filteredValue = e.target.value;

    if (filteredValue === 'sofa') {
      const filteredProducts = productsData.filter(
        (product) => product.category === 'sofa'
      );
      setProductsData(filteredProducts);
    }

    if (filteredValue === 'mobile') {
      const filteredProducts = productsData.filter(
        (product) => product.category === 'mobile'
      );
      setProductsData(filteredProducts);
    }

    if (filteredValue === 'watch') {
      const filteredProducts = productsData.filter(
        (product) => product.category === 'watch'
      );
      setProductsData(filteredProducts);
    }

    if (filteredValue === 'wireless') {
      const filteredProducts = productsData.filter(
        (product) => product.category === 'wireless'
      );
      setProductsData(filteredProducts);
    }
    
    if (filteredValue === 'chair') {
      const filteredProducts = products.filter(
        (product) => product.category === 'chair'
      );
      setProductsData(filteredProducts);
    }
  }

  const handleSearch = (e) => {

    const searchTerm = e.target.value;

    const searchProducts = products.filter(
      (product) => product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProductsData(searchProducts);
  }

  return (
    <Helmet title="Shop">
      <CommonSection title="Product" />

      <section>
        <Container>
          <Row>
            <Col lg='3' md='3'>
              <div className={styles.filterWidget}>
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='3'>
              <div className={styles.filterWidget}>
                <select>
                  <option>Filter By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className={styles.searchBox}>
                <input type="text" placeholder='Search...' onChange={handleSearch} />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={`pt-0`}>
        <Container>
          <Row>
            { productsData.length === 0 ? (
                <h1 className={`text-center fs-4`}>No products are found!</h1>
            ) : (
                <ProductsList products={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Shop;
