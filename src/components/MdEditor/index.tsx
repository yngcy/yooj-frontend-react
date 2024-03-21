import zhHans from '@/locales/bytemd/zhHans.json';
import breaks from '@bytemd/plugin-breaks';
import frontmatter from '@bytemd/plugin-frontmatter';
import gemoji from '@bytemd/plugin-gemoji';
import gfm from '@bytemd/plugin-gfm';
import highlight from '@bytemd/plugin-highlight';
import math from '@bytemd/plugin-math';
import medium from '@bytemd/plugin-medium-zoom';
import mermaid from '@bytemd/plugin-mermaid';
import { Editor } from '@bytemd/react';
import React from 'react';

interface Props {
  value: string;
  mode?: string;
  handleChange: (v: string) => void;
  locale?: any;
}

const plugins = [
  breaks(),
  gfm({ locale: zhHans }),
  math({ locale: zhHans }),
  highlight(),
  gemoji(),
  medium(),
  frontmatter(),
  mermaid({ locale: zhHans }),
  // Add more plugins here
];

const uploadImage = async (file: any) => {
  console.log('file:', file);
  // todo: 完成图片上传功能
};

const MdEditor: React.FC<Props> = ({
  value = '',
  mode = 'split',
  handleChange = (v: string) => {
    console.log(v);
  },
  locale = zhHans,
}) => {
  return (
    <>
      <Editor
        value={value}
        mode={mode}
        plugins={plugins}
        onChange={handleChange}
        uploadImages={uploadImage}
        locale={locale}
      />
    </>
  );
};

export default MdEditor;
