import React from 'react';
import styles from './Auth.module.scss';
import { Button, Form, Input, notification } from 'antd';
import { LoginFormDto } from '@/api/dto/auth.dto';
import * as Api from '@/api';
import { setCookie } from 'nookies';

const LoginForm: React.FC = () => {
  const onSubmit = async (values: LoginFormDto) => {

    try {
      const { token } = await Api.auth.login(values);

      notification.success({
        message: 'Login successful',
        description: 'You are logged in',
        duration: 2,
      });

      setCookie(null, '_token', token , {
        path: '/',
      });

      location.href = '/dashboard';

    } catch (e) {
      console.log(e);

      notification.error({
        message: 'Wrong credentials',
        description: 'Try again',
        duration: 2,
      });
    }

  }

  return (
    <div className={styles.formBlock}>

      <Form
        name={'login'}
        labelCol={{
          span: 8,
        }}
        onFinish={onSubmit}
      >

        <Form.Item
          label={'E-mail'}
          name={'email'}
          rules={[
            {
              required: true,
              message: 'Enter an email'
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={'Password'}
          name={'password'}
          rules={[
            {
              required: true,
              message: 'Enter a password'
            }
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type={'primary'} htmlType={'submit'}>
            Login
          </Button>
        </Form.Item>

      </Form>

    </div>
  );
};

export default LoginForm;