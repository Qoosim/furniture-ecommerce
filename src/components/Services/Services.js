import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'reactstrap';
import styles from './services.module.css';

const Services = ({ serviceData }) => {
  return (
    <section className={styles.services}>
      <Container>
        <Row>
          {
            serviceData.map((service, index) => (
              <Col lg='3' md='4' key={index}>
                <motion.div
                  whileHover={{ scale: 0.9 }}
                  className={styles.serviceItem}
                  style={{ background: `${service.bg}`}}
                >
                  <span><i className={service.icon}></i></span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.subtitle}</p>
                  </div>
                </motion.div>
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  )
}

export default Services;
