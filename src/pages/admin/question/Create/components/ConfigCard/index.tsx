import {
  ProCard,
  ProFormDigit,
  ProFormSegmented,
  ProFormSelect,
  ProFormText,
  ProList,
} from '@ant-design/pro-components';
import { Flex, Progress, Tag } from 'antd';
import React, { useState } from 'react';

const data = ['语雀的天空', 'Ant Design', '蚂蚁金服体验科技', 'TechUI 2.0'].map((item) => ({
  title: item,
  subTitle: <Tag color="#5BD8A6">N</Tag>,
  actions: [<a key="run">详情</a>, <a key="delete">删除</a>],
  avatar: 'https://gw.alipayobjects.com/zos/antfincdn/UCSiy1j6jx/xingzhuang.svg',
  content: (
    <div
      style={{
        flex: 1,
      }}
    >
      <div>
        <div>发布中</div>
        <Progress percent={80} />
      </div>
    </div>
  ),
}));

const ConfigCard: React.FC = () => {
  const [cardActionProps, setCardActionProps] = useState<'actions' | 'extra'>('actions');

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', data[newSelectedRowKeys]?.title);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <>
      <ProCard.Group ghost direction={'row'} gutter={16}>
        <ProCard title="难度" ghost>
          <ProFormDigit />
        </ProCard>
        <ProCard title="来源" ghost>
          <ProFormText />
        </ProCard>
      </ProCard.Group>
      <ProCard title="判题配置" ghost gutter={8} collapsible>
        <ProCard ghost>
          <Flex vertical gap={'small'}>
            <div>时间限制(ms)</div>
            <ProFormDigit />
          </Flex>
        </ProCard>
        <ProCard ghost>
          <Flex vertical gap={'small'}>
            <div>空间限制(mb)</div>
            <ProFormDigit />
          </Flex>
        </ProCard>
        <ProCard ghost>
          <Flex vertical gap={'small'}>
            <div>堆栈限制(mb)</div>
            <ProFormDigit />
          </Flex>
        </ProCard>
      </ProCard>
      <ProCard title="标签" ghost collapsible>
        <ProFormSelect />
      </ProCard>
      <ProCard.Group ghost direction={'row'} gutter={16}>
        <ProCard title="领域" ghost>
          <ProFormSelect />
        </ProCard>
        <ProCard title="类型" ghost>
          <ProFormSegmented
            name="type"
            request={async () => [
              { label: 'ACM', value: 'acm' },
              { label: 'IO', value: 'io' },
            ]}
          />
        </ProCard>
      </ProCard.Group>
      <ProCard.Group ghost direction={'row'} gutter={16}>
        <ProCard title="读写模式" ghost>
          <ProFormSegmented
            name="rwMode"
            request={async () => [
              { label: '标准IO', value: 'standard' },
              { label: '文件IO', value: 'file' },
            ]}
          />
        </ProCard>
        <ProCard title="判题模式" ghost>
          <ProFormSegmented
            name="judgeMode"
            request={async () => [
              { label: '普通', value: 'normal' },
              { label: '特殊', value: 'special' },
              { label: '交互', value: 'interactive' },
            ]}
          />
        </ProCard>
      </ProCard.Group>
      <ProCard title="语言设置" ghost>
        <ProList<any>
          ghost
          itemCardProps={{
            ghost: true,
          }}
          showActions="hover"
          rowSelection={{ type: 'radio', ...rowSelection }}
          grid={{ gutter: 16, column: 2 }}
          onItem={(record: any) => {
            return {
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
            actions: {
              cardActionProps,
            },
          }}
          tableAlertRender={() => <div>{'已选择：' + data[selectedRowKeys]?.title}</div>}
          dataSource={data}
        />
      </ProCard>
    </>
  );
};

export default ConfigCard;
