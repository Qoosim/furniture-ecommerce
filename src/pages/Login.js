import React, { useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import styles from '../styles/login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.config';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true)

    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      
      setLoading(false);
      toast.success('Logged in successfully');
      navigate('/');
    } catch (error) {
      setLoading(true);
      toast.error(error.message);
    }
  }

  return (
    <Helmet title='Login'>
      <section>
        <Container>
          <Row>
            {
              loading ? (
                <Col lg='12' className='text-center'>
                  <h5 className='fw-bold'>Loading...</h5>
                </Col>
              ) : (
                <Col lg='6' className={`m-auto text-center`}>
                  <h3 className='fw-bold mb-4'>Login</h3>
                  <Form className={styles.authForm} onSubmit={signIn}>
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

                    <button
                      type='submit'
                      className={`${styles.buyBtn} ${styles.authBtn}`}
                    >
                      Login
                    </button>
                    <p>Don't have an account <Link to='/signup'>Sign up</Link> </p>
                  </Form>
                </Col>
              )
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Login;
