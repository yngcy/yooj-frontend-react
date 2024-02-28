import { ShopTwoTone } from '@ant-design/icons';
import { ConfigProvider, Dropdown, MenuProps } from 'antd';
import React from 'react';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        兑换中心
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        集市
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        会员小镇
      </a>
    ),
  },
];

const MessageDropDown: React.FC = () => {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorText: '#ffa116',
          },
        }}
      >
        <Dropdown menu={{ items }} placement="bottom">
          <ShopTwoTone key="ShopTowTone" twoToneColor="#ffa116" />
        </Dropdown>
      </ConfigProvider>
    </>
  );
};

export default MessageDropDown;
