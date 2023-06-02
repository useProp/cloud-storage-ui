import { Ext } from '@/utils/getColorByExt';

export const getExtFromFileName = (filename: string): Ext => {
  console.log(filename)
  return `${filename}`.split('.').pop() as Ext;
}