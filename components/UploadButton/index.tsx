import React from 'react';
import { Button, Upload, UploadFile, notification } from 'antd';
import { CloudUploadOutlined } from '@ant-design/icons';
import styles from '@/styles/Home.module.scss';
import * as Api from '@/api';

export const UploadButton: React.FC = () => {
  const [fileList, setFileList] = React.useState<UploadFile[]>([]);

  const onUploadSuccess = async (options: any) => {
    try {

      const file = await Api.files.uploadFile(options);

      setFileList([]);
      window.location.reload();
    } catch (e) {
      console.log(e);
      notification.error({
        message: 'Error',
        description: 'File upload error',
        duration: 2,
      })
    }
  }

  return (
    <Upload
      customRequest={onUploadSuccess}
      className={styles.upload}
      fileList={fileList}
      onChange={({ fileList }) => setFileList(fileList)}
    >
      <Button type={'primary'} icon={<CloudUploadOutlined/>} size={'large'}>
        Upload File
      </Button>
    </Upload>
  );
};
