import React, { useState } from 'react';
import { Form, Formik, Field, FormikProps } from 'formik';
import { FormGroup, Input, Label, Button } from 'reactstrap';
import * as Yup from 'yup';
import { Credentials } from '../../api/Auth';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

const LoginForm = ({ attemptLogin }: { attemptLogin: (values: Credentials) => Promise<boolean | void> }) => {
  const [httpError, setHttpError] = useState('');

  const submitHandle = (values: Credentials) => {
    attemptLogin(values).catch((error) => {
      // alert(error.message);
      setHttpError(error.message);
    });
  };

  return (
    <Formik initialValues={{ username: '', password: '' }} onSubmit={submitHandle} validationSchema={validationSchema}>
      {({ errors, touched }: FormikProps<Credentials>) => (
        <Form className="text-center">
          <FormGroup floating>
            <Input data-testid="username-input" tag={Field} id="username" name="username" placeholder="Username" type="text" className="mb-1" />
            <Label for="username">Username</Label>
            {errors.username && touched.username ? <div className="error">{errors.username}</div> : <div style={{height: '25px'}}></div>}
          </FormGroup>{' '}
          <FormGroup floating>
            <Input data-testid="password-input" tag={Field} id="password" name="password" placeholder="Password" type="password" autoComplete="off" className='mb-1' />
            <Label for="password">Password</Label>
            {errors.password && touched.password ? <div className="error">{errors.password}</div> : <div style={{height: '25px'}}></div>}
          </FormGroup>{' '}
          <FormGroup floating>{httpError && <div className="error">{httpError}</div>}</FormGroup>
          <Button data-testid="button-submit" type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
