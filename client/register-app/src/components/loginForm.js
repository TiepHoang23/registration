import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import { loginAPI } from '../api';
import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';
function LoginForm() {
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});

  const mutation = useMutation(loginAPI, {
    onSuccess: (data) => {
      setRes(data.data);
    },
  });
  const handleRes = async ({ username, password }) => {
    await mutation.mutate({ username, password });
  };

  return mutation.isLoading ? (
    <div>Loading...</div>
  ) : mutation.isError ? (
    <div>An error occurred: {mutation.error.message}</div>
  ) : res.status ? (
    <div>
      <Alert variant='success'>{res.message}</Alert>
    </div>
  ) : (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Form onSubmit={handleSubmit(handleRes)}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Username</Form.Label>
            <Form.Control {...register('username')} />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' {...register('password')} />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Login
          </Button>
          <Alert className='mt-3' variant='danger'>
            <div>{res.message}</div>
          </Alert>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default LoginForm;
