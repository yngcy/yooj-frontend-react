import { PushpinTwoTone } from '@ant-design/icons';
import { ProList } from '@ant-design/pro-components';
import { Space, Tag, Typography } from 'antd';
import React, { useState } from 'react';

const defaultData = [
  {
    id: '1',
    name: '语雀的天空',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '我是一条测试的描述',
    type: 'top',
  },
  {
    id: '2',
    name: 'Ant Design',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '我是一条测试的描述',
    type: 'inline',
  },
  {
    id: '3',
    name: '蚂蚁金服体验科技',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '我是一条测试的描述',
    type: 'new',
  },
  {
    id: '4',
    name: 'TechUI',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '我是一条测试的描述',
  },
];

type DataItem = (typeof defaultData)[number];

const MustReadList: React.FC = () => {
  const [dataSource, setDataSource] = useState<DataItem[]>(defaultData);
  return (
    <ProList<DataItem>
      rowKey="id"
      dataSource={dataSource}
      showActions="hover"
      editable={{
        onSave: async (key, record, originRow) => {
          console.log(key, record, originRow);
          return true;
        },
      }}
      onDataSourceChange={setDataSource}
      metas={{
        title: {
          render: (_, row) => {
            return (
              <>
                <Typography.Text type="warning"> {row.id + '. '} </Typography.Text> {row.name}
              </>
            );
          },
        },
        avatar: {
          dataIndex: 'image',
          editable: false,
        },
        description: {
          dataIndex: 'desc',
        },
        type: {
          dataIndex: 'type',
        },
        subTitle: {
          render: () => {
            return (
              <Space size={0}>
                <Tag color="#5BD8A6">
                  <PushpinTwoTone twoToneColor="#eb2f96" />
                </Tag>
              </Space>
            );
          },
        },
      }}
    />
  );
};

export default MustReadList;
