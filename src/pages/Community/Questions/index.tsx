import { ProList } from '@ant-design/pro-components';
import { Button, Progress, Space, Tag } from 'antd';
import React from 'react';

const QuestionsCardList: React.FC = () => {
  const data = [
    '语雀的天空',
    'Ant Design',
    '蚂蚁金服体验科技',
    'TechUI',
    'TechUI 2.0',
    'Bigfish',
    'Umi',
    'Ant Design Pro',
  ].map((item) => ({
    title: item,
    subTitle: <Tag color="#5BD8A6">语雀专栏</Tag>,
    actions: [
      <Button type={'text'} style={{ marginLeft: 8 }} key={'1'}>
        什么效果
      </Button>,
      <Button type={'text'} key={'2'}>
        什么效果
      </Button>,
      <Button type={'text'} key={'3'}>
        什么效果
      </Button>,
    ],
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/UCSiy1j6jx/xingzhuang.svg',
    content: (
      <div
        style={{
          width: 200,
        }}
      >
        <Space style={{ marginBottom: 16 }}>
          <Tag>标签</Tag>
          <Tag>标签</Tag>
          <Tag>标签</Tag>
        </Space>
        <div>发布中</div>
        <Progress percent={80} />
      </div>
    ),
  }));
  return (
    <>
      <ProList<any>
        ghost={true}
        itemCardProps={{
          ghost: true,
          bodyStyle: { padding: '0 16px' },
        }}
        pagination={{
          defaultPageSize: 8,
          showSizeChanger: false,
        }}
        showActions="hover"
        showExtra="hover"
        // rowSelection={{}}
        grid={{ gutter: 16, column: 2 }}
        onItem={(record: any) => {
          return {
            onMouseEnter: () => {
              console.log(record);
            },
            onClick: () => {
              console.log(record);
            },
          };
        }}
        metas={{
          title: {},
          subTitle: {},
          type: {},
          avatar: {},
          content: {},
          actions: { cardActionProps: 'actions' },
        }}
        dataSource={data}
        // style={{ padding: 16 }}
      />
    </>
  );
};

export default QuestionsCardList;
