import React from 'react';
import { GetServerSidePropsContext, NextPage } from 'next';
import { checkAuth } from '@/utils/checAuth';
import { Layout } from '@/layouts/Layout';
import { FileItem } from '@/api/dto/file.dto';
import { FileList } from '@/components/FileList';
import * as Api from '@/api';
import { DashboardLayout } from '@/layouts/DashboardLayout';
import { FileActions } from '@/components/FileActions';
import { Files } from '@/modules/Files';

interface DashboardPageProps {
  files: FileItem[];
}

const DashboardPage: NextPage<DashboardPageProps> = ({ files }) => {
  return (
    <DashboardLayout>
      <Files items={files} withActions/>
    </DashboardLayout>
  );
};

// @ts-ignore
DashboardPage.getLayout = (page: React.ReactNode) => {
  return <Layout title={'Dashboard | Home'}>{page}</Layout>
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx);

  if ('redirect' in authProps) {
    return authProps;
  }

  const files = await Api.files.getAll();

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
export default DashboardPage;