import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
//import products from '../assets/data/products';
import ProductsList from "../components/UI/ProductsList";
import { cartActions } from "../redux/slices/cartSlice";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import styles from "../styles/productDetails.module.css";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { db } from "../firebase.config";
import { doc, getDoc } from "firebase/firestore";
import useGetData from "../custom-hooks/useGetData";

const ProductDetails = () => {
  const { data: products } = useGetData("products");
  console.log(products);

  const [product, setProduct] = useState({});
  const [tab, setTab] = useState("desc");
  const [setRating] = useState(null);
  const [ loading, setLoading] = useState(true);

  const reviewUser = useRef("");
  const reviewMsg = useRef("");

  const dispatch = useDispatch();

  const { id } = useParams();

  // const product = products.find((product) => product.id === id);
  const docRef = doc(db, "products", id);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProduct(docSnap.data());
        setLoading(false);
      } else {
        console.log("No product!");
      }
    };
    getProduct();
  }, []);

  const {
    imgUrl,
    productName,
    price,
    // reviews,
    // avgRating,
    description,
    shortDesc,
    category,
  } = product;

  const relatedProducts = products.filter((item) => item.category === category);

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Review submitted");
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        imgUrl,
        productName,
        price,
      })
    );
    toast.success("Product added successfully");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  if (loading) {
    return <h4>loading</h4>
  }

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />

      <section className={`pt-0`}>
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt={productName} />
            </Col>
            <Col lg="6">
              <div className={styles.productDetails}>
                <h2>{productName}</h2>
                <div className={styles.productRating}>
                  <div>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-half-s-line"></i>
                    </span>
                  </div>
                  <p>
                    {/* (<span>{avgRating}</span> ratings) */}
                  </p>
                </div>
                <div className="d-flex align-items-center gap-5">
                  <span className={styles.productPrice}>${price}</span>
                  <span>Category: {category.toUpperCase()}</span>
                </div>
                <p className={`mt-3`}>{shortDesc}</p>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className={styles.buyBtn}
                  onClick={addToCart}
                >
                  Add to cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div
                className={`${styles.tabWrapper} d-flex align-items-center gap-5`}
              >
                <h6
                  className={`${tab === "desc" ? `${styles.activeTab}` : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? `${styles.activeTab}` : ""}`}
                  onClick={() => setTab("rev")}
                >
                  {/* Review ({reviews.length}) */}
                </h6>
              </div>
              {tab === "desc" ? (
                <div className={`${styles.tabContent} mt-5`}>
                  <p>{description}</p>
                </div>
              ) : (
                <div className={`${styles.productReview} mt-5`}>
                  <div className={styles.reviewWrapper}>
                    {/* <ul>
                      {reviews?.map((item, index) => (
                        <li key={index} className="mb-4">
                          <h6>Qoosim Abdul</h6>
                          <span>{item.rating} (averge rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul> */}
                    <div className={styles.reviewForm}>
                      <form action="" onSubmit={handleSubmit}>
                        <h4>Leave your experience</h4>
                        <div className={styles.formGroup}>
                          <input
                            ref={reviewUser}
                            type="text"
                            placeholder="Enter name"
                            required
                          />
                        </div>
                        <div
                          className={`${styles.formGroup} ${styles.ratingGroup}
                          d-flex align-items-center gap-4`}
                        >
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(1)}
                          >
                            1<i className="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(2)}
                          >
                            2<i className="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(3)}
                          >
                            3<i className="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(4)}
                          >
                            4<i className="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(5)}
                          >
                            5<i className="ri-star-s-fill"></i>
                          </motion.span>
                        </div>
                        <div className={styles.formGroup}>
                          <textarea
                            ref={reviewMsg}
                            rows={4}
                            type="text"
                            placeholder="Review Message..."
                            required
                          />
                        </div>
                        <motion.button
                          whileTap={{ scale: 1.2 }}
                          type="submit"
                          className={styles.buyBtn}
                        >
                          Submit
                        </motion.button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>
            <Col lg="12" className="mt-5">
              <h2 className={styles.relatedTitle}>You might also like</h2>
            </Col>
            <ProductsList products={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
