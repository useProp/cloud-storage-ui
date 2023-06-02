import styles from './Header.module.scss';
import React from 'react';
import { Layout, Avatar, Menu, Popover, Button } from 'antd';
import { CloudOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import * as Api from '@/api';

const Header: React.FC = () => {
  const router = useRouter();
  const selectedMenu = router.pathname;

  const onClickLogout = () => {
    if (window.confirm('Confirm logout')) {
      Api.auth.logout();
      location.href = '/';
    }
  }

  return (
    <Layout.Header className={styles.root}>
      <div className={styles.headerInner}>
        <div className={styles.headerLeft}>
          <h2>
            <CloudOutlined/>
            Cloud Storage
          </h2>

          <Menu
            className={styles.topMenu}
            theme={'dark'}
            mode={'horizontal'}
            defaultSelectedKeys={[selectedMenu]}
            onSelect={({ key }) => router.push(key)}
            items={[
              { key: '/dashboard', label: 'Home' },
              { key: '/dashboard/profile', label: 'Profile' },
            ]}
          />
        </div>

        <div className={styles.headerRight}>
          <Popover
            trigger={'click'}
            content={
              <Button
                type={'primary'}
                onClick={onClickLogout}
                danger>
                Logout
              </Button>
            }
          >
            <Avatar>
              A
            </Avatar>
          </Popover>
        </div>
      </div>
    </Layout.Header>
  );
};

export default Header;