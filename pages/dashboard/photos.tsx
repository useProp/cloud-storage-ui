import React from 'react';
import { GetServerSidePropsContext, NextPage } from 'next';
import { checkAuth } from '@/utils/checAuth';
import { Layout } from '@/layouts/Layout';
import styles from '@/styles/Home.module.scss';
import { Menu } from 'antd';
import { useRouter } from 'next/router';
import { DeleteOutlined, FileImageOutlined, FileOutlined } from '@ant-design/icons';
import { UploadButton } from '@/components/UploadButton';
import { FileItem } from '@/api/dto/file.dto';
import { FileList } from '@/components/FileList';
import * as Api from '@/api';
import { DashboardLayout } from '@/layouts/DashboardLayout';
import { Files } from '@/modules/Files';

interface PhotosPageProps {
  files: FileItem[];
}

const PhotosPage: NextPage<PhotosPageProps> = ({ files }) => {
  return (
    <DashboardLayout>
      <Files items={files} withActions/>
    </DashboardLayout>
  );
};

// @ts-ignore
PhotosPage.getLayout = (page: React.ReactNode) => {
  return <Layout title={'Dashboard | Photos'}>{page}</Layout>
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx);

  if ('redirect' in authProps) {
    return authProps;
  }

  const files = await Api.files.getAll('photos');

  return {
    props: {
      files
    }
  }

  return {
    props: {
      files: []
    }
  }
}
export default PhotosPage;