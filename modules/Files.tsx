import React from 'react';
import { FileItem } from '@/api/dto/file.dto';
import { Empty } from 'antd';
import { FileActions } from '@/components/FileActions';
import { FileList, FileSelectType } from '@/components/FileList';
import * as Api from '@/api';

interface FilesProps {
  items: FileItem[];
  withActions?: boolean;
}

export const Files: React.FC<FilesProps> = ({ items, withActions }) => {
  const [files, setFiles] = React.useState(items || []);
  const [selectedIds, setSelectedIds] = React.useState<number[]>([]);

  const onFileSelect = (id: number, type: FileSelectType) => {
    console.log(selectedIds)
    if (type === 'select') {
      setSelectedIds(prev => [...prev, id]);
    } else {
      setSelectedIds(prev => prev.filter(_id => _id !== id));
    }
  }

  const onClickRemove = () => {
    setSelectedIds([]);
    setFiles(prev => prev.filter(file => !selectedIds.includes(file.id)));
    Api.files.remove(selectedIds);
  }

  const onClickShare = () => {
    alert('share');
  }

  return (
    <div>
      {files.length ? (
        <>
          {withActions && (
            <FileActions
              isActive={selectedIds.length > 0}
              onClickRemove={onClickRemove}
              onClickShare={onClickShare}
            />
          )}
          <FileList
            files={files}
            onFileSelect={onFileSelect}
          />
        </>
      ) : (
        <Empty className={'empty-block'} description={'File list is empty'}/>
      )}
    </div>
  );
};