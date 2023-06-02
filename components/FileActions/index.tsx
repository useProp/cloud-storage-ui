import React from 'react';
import styles from './FileActions.module.scss';
import { Button, Popconfirm } from 'antd';

interface FileActionsProps {
  onClickRemove: VoidFunction,
  onClickShare: VoidFunction,
  isActive: boolean,
}
export const FileActions: React.FC<FileActionsProps> = ({ isActive, onClickRemove, onClickShare }) => {
  return (
    <div className={styles.root}>
      <Button
        onClick={onClickShare}
      >
        Share
      </Button>

      <Popconfirm
        title={'Delete files'}
        description={'Files will be deleted'}
        okText={'Yes'}
        cancelText={'No'}
        disabled={!isActive}
        onConfirm={onClickRemove}
      >
        <Button
          disabled={!isActive}
          type={'primary'}
          danger
        >
          Delete
        </Button>
      </Popconfirm>
    </div>
  );
};