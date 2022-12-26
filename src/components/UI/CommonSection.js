import React from 'react';
import { Container } from 'reactstrap';
import styles from './css/commonSection.module.css';

const CommonSection = ({ title }) => {
  return (
    <section className={styles.commonSection}>
      <Container className={`text-center`}>
        <h1>{title}</h1>
      </Container>
    </section>
  )
}

export default CommonSection;
