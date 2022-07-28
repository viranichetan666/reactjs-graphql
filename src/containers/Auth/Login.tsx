import React, { FunctionComponent, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from 'react-redux'
import { Button, Form, Input } from 'antd';
import { loginQuery } from "apollo/query/auth";
import { useLazyQuery } from "@apollo/client";
import { setAuthData } from 'redux/reducers/auth'

const LoginWrapper = styled.div`
  max-width: 300px;
`;

interface LoginProps {

}

const Login: FunctionComponent<LoginProps> = () => {
  const [callLoginuery, { data }] = useLazyQuery(
    loginQuery,
    {
      fetchPolicy: "no-cache"
    }
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if(data && data.login) { 
      dispatch(setAuthData(data.login))
    }
  }, [data])

  const onFinish = (values: any) => {
    console.log('Success:', values);
    callLoginuery({variables: values})
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <LoginWrapper>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input type={'email'}/>
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </LoginWrapper>
  )
};

Login.propTypes = {

};

Login.defaultProps = {

};

export default Login;
