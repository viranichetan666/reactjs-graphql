import React, { FunctionComponent, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from 'react-redux'
import { Button, Checkbox, Form, Input } from 'antd';
import { useQuery, gql } from '@apollo/client';
import { registerMutation } from "apollo/mutation/auth";
import { useLazyQuery, useMutation } from "@apollo/client";
import { setAuthData } from 'redux/reducers/auth'

const RegisterWrapper = styled.div`
  max-width: 300px;
`;

interface RegisterProps {

}

const Register: FunctionComponent<RegisterProps> = () => {
  // const [callRegisteruery, { data }] = useLazyQuery(
  //   RegisterQuery,
  //   {
  //     fetchPolicy: "no-cache"
  //   }
  // );
  const [callUpdateUser] = useMutation(registerMutation);

  const dispatch = useDispatch();

  // console.log("data++++", data)

  // useEffect(() => {
  //   if(data && data.Register) { 
  //     dispatch(setAuthData(data.Register))
  //   }
  // }, [data])

  const onFinish = (values: any) => {
    console.log('Success:', values);
    callUpdateUser({
      variables: {
        ...values,
      }
    })
    // callRegisteruery({variables: values})
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <RegisterWrapper>
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
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
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
    </RegisterWrapper>
  )
};

Register.propTypes = {

};

Register.defaultProps = {

};

export default Register;
