import JudgeInfo from '@/pages/Submission/components/JudgeInfo';
import SubmitStatus from '@/pages/Submission/components/SubmitStatus';
import { listQuestionSubmitByPageUsingPost } from '@/services/yooj-question/questionController';
import { SettingOutlined } from '@ant-design/icons';
import {
  LightFilter,
  ProCard,
  ProFormSegmented,
  ProFormSelect,
  ProFormText,
  QueryFilter,
} from '@ant-design/pro-components';
import { Affix, Button, message, Popover, Space, Switch, Table, Tooltip } from 'antd';
import { ColumnsType } from 'antd/es/table';
import moment from 'moment';
import React, { useEffect, useState } from 'react';

/**
 * 默认分页参数
 */
const DEFAULT_PAGE_PARAMS: PageRequest = {
  current: 1,
  pageSize: 10,
  sortField: 'createTime',
  sortOrder: 'descend',
};

const SubmissionPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<API.QuestionSubmitVO[]>([]);
  const [total, setTotal] = useState<number>(0);

  const [searchParams, setSearchParams] = useState<API.QuestionSubmitQueryRequest>({
    ...DEFAULT_PAGE_PARAMS,
  });

  const [isHovering, setIsHovering] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const [isAffixed, setIsAffixed] = useState(false);

  const [showTimeCol, setShowTimeCol] = useState(false);
  const [showMemoryCol, setShowMemoryCol] = useState(false);

  const handleMouseOver = () => {
    if (isOpened) return;
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  /**
   * 搜索
   */
  const doSearch = async () => {
    setLoading(true);
    try {
      const res = await listQuestionSubmitByPageUsingPost(searchParams);
      setData(res.data?.records ?? []);
      setTotal(Number(res.data?.total) ?? 0);
    } catch (error: any) {
      message.error('获取数据失败，' + error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    doSearch();
  }, [searchParams]);

  const onChangeTimeCol = (checked: boolean) => {
    setShowTimeCol(checked);
  };

  const onChangeMemoryCol = (checked: boolean) => {
    setShowMemoryCol(checked);
  };

  /**
   * 表格列配置
   */
  const columns: ColumnsType<API.QuestionSubmitVO> = [
    {
      title: '',
      dataIndex: 'status',
      key: 'status',
      width: '4%',
      render: (status) => <SubmitStatus status={status} />,
      filters: [
        {
          text: '队列中',
          value: 0,
        },
        {
          text: '判题中',
          value: 1,
        },
        {
          text: '已完成',
          value: 2,
        },
        {
          text: '已失败',
          value: 3,
        },
      ],
    },
    {
      title: '提交ID',
      dataIndex: 'id',
      key: 'id',
      width: '9%',
      ellipsis: {
        showTitle: false,
      },
      render: (text) => (
        <Tooltip placement="topLeft" title={text}>
          {text}
        </Tooltip>
      ),
    },
    {
      title: '题目',
      dataIndex: 'questionVO',
      key: 'questionVO',
      ellipsis: {
        showTitle: false,
      },
      render: (questionVO) => (
        <Tooltip placement="topLeft" title={questionVO.title}>
          <a href={'/question/' + questionVO.id}>{questionVO.title}</a>
        </Tooltip>
      ),
    },

    {
      title: '判题信息',
      dataIndex: 'judgeInfo',
      key: 'judgeInfo',
      render: (judgeInfo) => <JudgeInfo judgeInfo={judgeInfo} />,
    },
    {
      title: '执行时间',
      dataIndex: 'judgeInfo',
      key: 'time',
      width: '8%',
      render: (judgeInfo) => {
        if (judgeInfo.time === null || judgeInfo.time <= 0) {
          return '';
        }
        return judgeInfo.time + ' ms';
      },
      sorter: {
        compare: (a, b) => a.judgeInfo?.time - b.judgeInfo?.time,
        multiple: 4,
      },
    },
    {
      title: '消耗空间',
      dataIndex: 'judgeInfo',
      key: 'memory',
      width: '8%',
      render: (judgeInfo) => {
        const getMemorySize = (lengthInBytes: number): string => {
          const KB_THRESHOLD = 1024;
          const MB_THRESHOLD = KB_THRESHOLD * 1024;

          if (lengthInBytes === null || lengthInBytes <= 0) {
            return '';
          }

          if (lengthInBytes < KB_THRESHOLD) {
            return lengthInBytes + ' B';
          } else if (lengthInBytes < MB_THRESHOLD) {
            //console.log((lengthInBytes / KB_THRESHOLD).toFixed(2));
            return Math.round(lengthInBytes / KB_THRESHOLD) + ' KB';
          } else {
            return Math.round(lengthInBytes / MB_THRESHOLD) + ' MB';
          }
        };

        return getMemorySize(judgeInfo.memory);
      },
      sorter: {
        compare: (a, b) => a.judgeInfo?.memory - b.judgeInfo?.memory,
        multiple: 3,
      },
    },
    {
      title: '编程语言',
      dataIndex: 'language',
      key: 'language',
      width: '8%',
      render: (language) => (
        <Tooltip title={'查看提交详情'}>
          <Button type="link">{language}</Button>
        </Tooltip>
      ),
    },
    {
      title: '代码长度',
      dataIndex: 'codeLength',
      key: 'codeLength',
      width: '8%',
      render: (codeLength) => {
        const calculateCodeLength = (lengthInBytes: number): string => {
          const KB_THRESHOLD = 1024;
          const MB_THRESHOLD = KB_THRESHOLD * 1024;

          if (lengthInBytes < KB_THRESHOLD) {
            return lengthInBytes + ' B';
          } else if (lengthInBytes < MB_THRESHOLD) {
            //console.log((lengthInBytes / KB_THRESHOLD).toFixed(2));
            return Math.round(lengthInBytes / KB_THRESHOLD) + ' KB';
          } else {
            return Math.round(lengthInBytes / MB_THRESHOLD) + ' MB';
          }
        };

        return calculateCodeLength(codeLength);
      },
      sorter: {
        compare: (a, b) => a.codeLength - b.codeLength,
        multiple: 1,
      },
    },
    {
      title: '提交用户',
      dataIndex: 'userVO',
      key: 'userVO',
      width: '10%',
      render: (record) => (
        <Tooltip placement="topLeft" title={record.userName}>
          <a>{record.userName}</a>
        </Tooltip>
      ),
    },
    {
      title: '提交时间',
      dataIndex: 'createTime',
      key: 'createTime',
      width: '15%',
      render: (time) => <>{moment(time).format('YYYY-MM-DD HH:mm:ss')}</>,
      sorter: {
        compare: (a, b) => new Date(a.createTime) - new Date(b.createTime),
        multiple: 2,
      },
      sortDirections: ['ascend', 'descend', 'ascend'],
    },
  ];

  let newColumn = columns.filter((column) => {
    return (
      (column.key !== 'memory' && column.key !== 'time') ||
      (column.key === 'memory' && showMemoryCol) ||
      (column.key === 'time' && showTimeCol)
    );
  });

  useEffect(() => {
    newColumn = columns.filter((column) => {
      return (
        (column.key !== 'memory' && column.key !== 'time') ||
        (column.key === 'memory' && showMemoryCol) ||
        (column.key === 'time' && showTimeCol)
      );
    });
  }, [showMemoryCol, showTimeCol]);

  return (
    <>
      <ProCard
        title={'提交列表'}
        bordered
        boxShadow
        style={{ minWidth: '1100px', width: '77%', marginLeft: 'auto', marginRight: 'auto' }}
        extra={
          <LightFilter
            style={{ marginBottom: '8px' }}
            onFinish={async (values) => console.log(values)}
          >
            <ProFormSegmented
              name="userRange"
              valueEnum={{
                all: '全部',
                my: '我的',
                friend: '好友的',
              }}
            />
            <Popover
              content={
                <>
                  <Space direction="vertical">
                    <div>
                      {'执行时间 '}
                      <Switch defaultChecked={showTimeCol} onChange={onChangeTimeCol} />
                    </div>
                    <div>
                      {'消耗空间 '}
                      <Switch defaultChecked={showMemoryCol} onChange={onChangeMemoryCol} />
                    </div>
                  </Space>
                </>
              }
              title=""
              trigger="click"
              arrow={false}
              onOpenChange={(event) => {
                setIsOpened(event);
                handleMouseOut();
              }}
              placement={'bottom'}
            >
              <Button
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                type="text"
                icon={<SettingOutlined spin={isHovering} />}
              />
            </Popover>
          </LightFilter>
        }
      >
        <Affix
          offsetTop={60}
          onChange={(affixed) => {
            setIsAffixed(affixed);
          }}
        >
          <ProCard
            style={{ background: 'rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(10px)' }}
            boxShadow={isAffixed}
            hoverable={isAffixed}
          >
            <QueryFilter style={{ padding: 0 }} labelWidth={'auto'}>
              <ProFormText name="question" placeholder={'题目ID/名称'} />
              <ProFormText name="user" placeholder={'用户ID/账号/昵称'} />
              <ProFormSelect
                name="result"
                valueEnum={{
                  accepted: 'Accepted',
                  wrongAnswer: 'Wrong Answer',
                  memoryLimitExceeded: 'Memory Limit Exceeded',
                  presentationError: 'Presentation Error',
                  timeLimitExceeded: 'Time Limit Exceeded',
                  outputLimitExceeded: 'Output Limit Exceeded',
                  dangerousOperation: 'Dangerous Operation',
                  runtimeError: 'Runtime Error',
                  systemError: 'System Error',
                }}
                fieldProps={{
                  mode: 'multiple',
                }}
                placeholder={'执行结果'}
              />
              <ProFormSelect
                name="language"
                valueEnum={{
                  java: 'Java',
                  python: 'Python',
                  cplusplus: 'C++',
                  golang: 'Go',
                }}
                fieldProps={{
                  mode: 'multiple',
                }}
                placeholder={'编程语言'}
              />
            </QueryFilter>
          </ProCard>
        </Affix>
        <Table
          rowKey={'id'}
          columns={newColumn}
          dataSource={data}
          pagination={{
            current: searchParams.current,
            pageSize: searchParams.pageSize,
            total,
            onChange(current: number, pageSize: number) {
              setSearchParams({
                ...searchParams,
                current,
                pageSize,
              });
            },
          }}
          loading={loading}
        />
      </ProCard>
    </>
  );
};

export default SubmissionPage;
