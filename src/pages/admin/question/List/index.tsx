import {
  deleteQuestionUsingPost,
  listQuestionByPageUsingPost,
} from '@/services/yooj-question/questionController';
import { PlusOutlined } from '@ant-design/icons';
import {
  ActionType,
  PageContainer,
  ProCard,
  ProColumns,
  ProTable,
} from '@ant-design/pro-components';
import { Button, message, Space, Tag, Typography } from 'antd';
import React, { useRef, useState } from 'react';

const ListPage: React.FC = () => {
  const actionRef = useRef<ActionType>();
  // 当前用户点击的数据
  const [currentRow, setCurrentRow] = useState<API.User>();

  /**
   * 删除节点
   *
   * @param row
   */
  const handleDelete = async (row: API.Question) => {
    const hide = message.loading('正在删除');
    if (!row) return true;
    try {
      await deleteQuestionUsingPost({
        id: row.id as any,
      });
      hide();
      message.success('删除成功');
      actionRef?.current?.reload();
      return true;
    } catch (error: any) {
      hide();
      message.error('删除失败，' + error.message);
      return false;
    }
  };

  /**
   * 表格列配置
   */
  const columns: ProColumns<API.Question>[] = [
    {
      title: 'id',
      dataIndex: 'id',
      valueType: 'text',
      hideInForm: true,
    },
    {
      title: '题目',
      dataIndex: 'title',
      valueType: 'text',
      ellipsis: true,
    },
    {
      title: '内容预览',
      dataIndex: 'content',
      valueType: 'text',
      renderText: (str) => {
        if (str.length > 50) {
          return str.substring(0, 50 - 3) + '…';
        }
        return str;
      },
    },
    {
      title: '难度',
      dataIndex: 'difficulty',
      valueType: 'text',
    },
    {
      title: '标签',
      dataIndex: 'tags',
      valueType: 'checkbox',
      valueEnum: {
        all: { text: '全部', disabled: true, status: 'Default' },
        open: {
          text: '未解决',
          status: 'Error',
        },
        closed: {
          text: '已解决',
          status: 'Success',
        },
        processing: {
          text: '解决中',
          status: 'Processing',
        },
      },
      render: (_, record) => (
        <>
          <Space size={[2, 8]} wrap>
            {JSON.parse(record.tags).map((tag) => {
              return <Tag key={tag}>{tag}</Tag>;
            })}
          </Space>
        </>
      ),
    },
    {
      title: '作者',
      dataIndex: 'userId',
      valueType: 'text',
    },
    {
      title: '创建时间',
      sorter: true,
      dataIndex: 'createTime',
      valueType: 'dateTime',
      hideInSearch: true,
      hideInForm: true,
    },
    {
      title: '更新时间',
      sorter: true,
      dataIndex: 'updateTime',
      valueType: 'dateTime',
      hideInSearch: true,
      hideInForm: true,
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => (
        <Space size="middle">
          <Typography.Link href={'/admin/question/update/' + record.id}>修改</Typography.Link>
          <Typography.Link type="danger" onClick={() => handleDelete(record)}>
            删除
          </Typography.Link>
        </Space>
      ),
    },
  ];
  return (
    <>
      <PageContainer>
        <ProCard boxShadow={true} style={{ minWidth: 834 }}>
          <ProTable<API.Question>
            headerTitle={'查询表格'}
            actionRef={actionRef}
            rowKey="key"
            search={{
              labelWidth: 120,
            }}
            toolBarRender={() => [
              <Button type="primary" key="primary" href={'/admin/question/create'}>
                <PlusOutlined /> 新建
              </Button>,
            ]}
            request={async (params, sort, filter) => {
              const sortField = Object.keys(sort)?.[0];
              const sortOrder = sort?.[sortField] ?? undefined;

              const { data, code } = await listQuestionByPageUsingPost({
                ...params,
                sortField,
                sortOrder,
                ...filter,
              } as API.QuestionQueryRequest);

              return {
                success: code === 0,
                data: data?.records || [],
                total: Number(data?.total) || 0,
              };
            }}
            columns={columns}
          />
        </ProCard>
      </PageContainer>
    </>
  );
};

export default ListPage;
