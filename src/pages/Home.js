import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
//import products from "../assets/data/products";
import serviceData from "../assets/data/serviceData";
import counterImg from "../assets/images/counter-timer-img.png";
import heroImg from "../assets/images/hero-img.png";
import Helmet from "../components/Helmet/Helmet";
import Services from "../components/Services/Services";
import Clock from "../components/UI/Clock";
import ProductsList from "../components/UI/ProductsList";
import styles from "../styles/home.module.css";
import useGetData from "../custom-hooks/useGetData";

const Home = () => {
  const { data: products, loading } = useGetData("products");
  console.log(products);
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const filteredTrendingProducts = products.filter((item) => item.category === "chair");
    const filteredBestProducts = products.filter((item) => item.category === "sofa");
    const filteredMobileProducts = products.filter((item) => item.category === "mobile");
    const filteredWirelessProducts = products.filter((item) => item.category === "wireless");
    const filteredPopularProducts = products.filter((item) => item.category === "watch");

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, [products])
  // TODO: Extract filtering into util function
  // const [trendingProducts, setTrendingProducts] = useState(
  //   products.filter((item) => item.category === "chair")
  // );
  // const [bestSalesProducts, setBestSalesProducts] = useState(
  //   products.filter((item) => item.category === "sofa")
  // );
  // const [mobileProducts, setMobileProducts] = useState(
  //   products.filter((item) => item.category === "mobile")
  // );
  // const [wirelessProducts, setWirelessProducts] = useState(
  //   products.filter((item) => item.category === "wireless")
  // );
  // const [popularProducts, setPopularProducts] = useState(
  //   products.filter((item) => item.category === "watch")
  // );

  const year = new Date().getFullYear();

  return (
    <Helmet title="Home">
      <section className={styles.heroSection}>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className={styles.heroContent}>
                <p className={styles.homeHeroSubtitle}>
                  Trending product in {year}
                </p>
                <h2>We help turn your house into a home</h2>
                <p>
                  Lorem in doloremque in placeat repudiandae! Totam reiciendis
                  commodi facilis adipisci necessitatibus. Voluptatem nulla
                  nihil culpa soluta animi harum?.
                </p>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className={styles.buyBtn}
                >
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className={styles.heroImg}>
                <img src={heroImg} alt="Hero Img" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services serviceData={serviceData} />
      <section className={styles.trendingProducts}>
        <Container>
          <Row>
            <Col lg="12" className={`text-center`}>
              <h2 className={styles.sectionTitle}>Trending Products</h2>
            </Col>
            {loading ? (
              <h5 className="fw-bold">Loading...</h5>
            ) : (
              <ProductsList products={trendingProducts} />
            )}
          </Row>
        </Container>
      </section>
      <section className={styles.bestSales}>
        <Container>
          <Row>
            <Col lg="12" className={`text-center`}>
              <h2 className={styles.sectionTitle}>Best Sales</h2>
            </Col>
            {loading ? (
              <h5 className="fw-bold">Loading...</h5>
            ) : (
              <ProductsList products={bestSalesProducts} />
            )}
          </Row>
        </Container>
      </section>
      <section className={styles.timerCount}>
        <Container>
          <Row>
            <Col lg="6" md="12" className={styles.countDownCol}>
              <div className={styles.clockTopContent}>
                <h4 className={`text-white fs-6 mb-2`}>Limited Offers</h4>
                <h3 className={`text-white fs-5 mb-3`}>Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.2 }}
                className={`${styles.buyBtn} ${styles.storeBtn}`}
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="12" className={`text-end ${styles.counterImg}`}>
              <img src={counterImg} alt="Counter" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.newArrival}>
        <Container>
          <Row>
            <Col lg="12" className={`text-center mb-5`}>
              <h2 className={styles.sectionTitle}>New Arrival</h2>
            </Col>
            {loading ? (
              <h5 className="fw-bold">Loading...</h5>
            ) : (
              <ProductsList products={mobileProducts} />
            )}
            {loading ? (
              <h5 className="fw-bold">Loading...</h5>
            ) : (
              <ProductsList products={wirelessProducts} />
            )}
          </Row>
        </Container>
      </section>
      <section className={styles.popularCategory}>
        <Container>
          <Row>
            <Col lg="12" className={`text-center mb-5`}>
              <h2 className={styles.sectionTitle}>Popular in Category</h2>
            </Col>
            {loading ? (
              <h5 className="fw-bold">Loading...</h5>
            ) : (
              <ProductsList products={popularProducts} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
