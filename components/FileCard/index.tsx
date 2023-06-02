import React from 'react';
import styles from './FileCard.module.scss';
import { getExtFromFileName } from '@/utils/getExtFromFileName';
import { isImg } from '@/utils/isImg';
import { getColorByExt } from '@/utils/getColorByExt';
import { FileTextOutlined } from '@ant-design/icons';


interface FileCardProps {
  filename: string;
  originalName: string;
}

export const FileCard: React.FC<FileCardProps> = ({ filename, originalName }) => {
  const ext = getExtFromFileName(filename);
  const imgUrl = ext && isImg(ext) ? `http://localhost:5000/${filename}` : '';

  const color = getColorByExt(ext);
  const classColor = styles[color];

  return (
    <div className={styles.root}>
      <div className={styles.icon}>
        <i className={classColor}>{ext}</i>
        {isImg(ext) ? (
          <img className={styles.image} src={imgUrl} alt={'img'}/>
        ) : (
          <FileTextOutlined/>
        )}
      </div>
      <span>{originalName}</span>
    </div>
  );
};