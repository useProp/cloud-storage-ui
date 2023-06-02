const extColor: {
  [key: string]: string
} = {
  pdf: 'purple',
  xls: 'green',
  doc: 'blue',
  txt: 'blue',
  png: 'orange',
  jpeg: 'orange',
  jpg: 'orange',
  zip: 'red',
}

export type Ext = keyof typeof extColor;
export type Color = typeof extColor[Ext];

export const getColorByExt = (ext: Ext): Color => {
  return extColor[ext];
}