import { Ext } from '@/utils/getColorByExt';

export const isImg = (ext: Ext) => {
  return ['jpg', 'jpeg', 'png', 'gif '].includes(ext as string);
}