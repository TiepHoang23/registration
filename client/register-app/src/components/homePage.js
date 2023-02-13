import React, { Suspense } from 'react';
// import RegisterForm from './registerForm';
// import LoginForm from './loginForm';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout';
const RegisterForm = React.lazy(() => import('./registerForm'));
const LoginForm = React.lazy(() => import('./loginForm'));
export default function HomePage() {
  return (
    <Container className='d-flex justify-content-center'>
      <div>
        <Router>
          <h1 className='text-center'> Registration</h1>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path='/' element={<Layout />} />a
              <Route path='/register' element={<RegisterForm />} />
              <Route path='/login' element={<LoginForm />} />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </Container>
  );
}
