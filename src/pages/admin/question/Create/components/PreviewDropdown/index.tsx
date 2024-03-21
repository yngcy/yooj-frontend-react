import { Button, Dropdown, MenuProps } from 'antd';
import React from 'react';

const items: MenuProps['items'] = [
  {
    label: <a href="https://www.antgroup.com">在 HTML 中预览</a>,
    key: '0',
  },
  {
    type: 'divider',
  },
  {
    label: <a href="https://www.aliyun.com">在 PDF 中预览</a>,
    key: '1',
  },
];

const PreviewDropdown: React.FC = () => {
  return (
    <>
      <Dropdown menu={{ items }} trigger={['click']}>
        <Button type={'text'} onClick={(e) => e.preventDefault()}>
          预 览
        </Button>
      </Dropdown>
    </>
  );
};

export default PreviewDropdown;
