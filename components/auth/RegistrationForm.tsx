import React from 'react';
import styles from './Auth.module.scss';
import { Button, Form, Input, notification } from 'antd';
import * as Api from '@/api';
import { RegistrationFormDto } from '@/api/dto/auth.dto';
import { setCookie } from 'nookies';

const RegistrationForm: React.FC = () => {
  const onSubmit = async (values: RegistrationFormDto) => {

    try {

      const { token } = await Api.auth.registration(values);

      notification.success({
        message: 'Registration successful',
        description: 'User created',
        duration: 2,
      });

      setCookie(null, '_token', token , {
        path: '/',
      });

      location.href = '/dashboard';

    } catch (e) {
      console.log(e);
      notification.error({
        message: 'Registration error',
        description: 'Something wrong',
        duration: 2,
      });
    }

  }

  return (
    <div className={styles.formBlock}>

      <Form
        name={'registration'}
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
          label={'Full Name'}
          name={'fullName'}
          rules={[
            {
              required: true,
              message: 'Enter your full name'
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >

          <Button type={'primary'} htmlType={'submit'}>
            Registration
          </Button>
        </Form.Item>

      </Form>

    </div>
  );
};

export default RegistrationForm;