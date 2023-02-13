import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState, useRef } from 'react';
import Alert from 'react-bootstrap/Alert';
import { registerAPI } from '../api';
import { useMutation } from 'react-query';
import Card from 'react-bootstrap/Card';
import { useForm } from 'react-hook-form';

function RegisterForm() {
  const { register, handleSubmit, watch } = useForm();
  const [res, setRes] = useState({});
  const password = useRef({});
  password.current = watch('password', '');
  const mutation = useMutation(registerAPI, {
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
            <Form.Control
              className='passwordControl'
              type='password'
              {...register('password')}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPasswordComfirm'>
            <Form.Label>Comfirm Password</Form.Label>
            <Form.Control
              {...register('confirmPwd', {
                validate: (value) => {
                  if (value !== password.current) {
                    setRes({
                      status: false,
                      message: 'The passwords do not match',
                    });
                    return 'The passwords do not match';
                  }
                },
              })}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Register
          </Button>
          <Alert className='mt-3' variant='danger'>
            <div>{res.message}</div>
          </Alert>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default RegisterForm;
