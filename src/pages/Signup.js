import React, { useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import styles from '../styles/login.module.css';
import { Link } from 'react-router-dom';

const Signup = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);

  return (
    <Helmet title='Signup'>
      <section>
        <Container>
          <Row>
            <Col lg='6' className={`m-auto text-center`}>
              <h3 className='fw-bold mb-4'>Signup</h3>

              <Form className={styles.authForm}>
                <FormGroup className={styles.formGroup}>
                  <input
                    type="text"
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className={styles.formGroup}>
                  <input
                    type="email"
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className={styles.formGroup}>
                  <input 
                    type="password" 
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className={styles.formGroup}>
                  <input 
                    type="file" 
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </FormGroup>

                <button
                  type='submit'
                  className={`${styles.buyBtn} ${styles.authBtn}`}
                >
                  Sign up
                </button>
                <p>Already have an account <Link to='/login'>Login</Link> </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Signup;
