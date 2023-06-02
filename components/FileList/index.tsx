import React from 'react';
import { FileItem } from '@/api/dto/file.dto';
import styles from './FileList.module.scss';
import { FileCard } from '@/components/FileCard';
import Selecto from 'react-selecto';

export type FileSelectType = 'select' | 'unselect';

interface FileListProps {
  files: FileItem[];
  onFileSelect: (id: number, type: FileSelectType) => void;
}

export const FileList: React.FC<FileListProps> = ({ files, onFileSelect }) => {
  return (
    <div className={styles.root}>
      {files.map((file) => (
        <div data-id={file.id} key={file.id} className={'file'}>
          <FileCard filename={file.fileName} originalName={file.originalName}/>
        </div>
      ))}

      <Selecto
        container={'.files'}
        selectableTargets={['.file']}
        selectByClick
        hitRate={10}
        selectFromInside
        toggleContinueSelect={['shift']}
        continueSelect={false}
        onSelect={(e) => {
          e.added.forEach(el => {
            el.classList.add('active');
            onFileSelect(Number(el.dataset['id']), 'select');
          });
          e.removed.forEach(el => {
            el.classList.remove('active');
            onFileSelect(Number(el.dataset['id']), 'unselect');
          });
        }}
      />
    </div>
  );
};