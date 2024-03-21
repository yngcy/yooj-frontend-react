import PunchCalendar from '@/pages/Question/components/PunchCalendar';
import QuestionSubmitStatusChart from '@/pages/Question/components/QuestionSubmitStatusChart';
import { listQuestionVoByPageUsingPost } from '@/services/yooj-question/questionController';
import { SearchOutlined, SettingOutlined } from '@ant-design/icons';
import {
  LightFilter,
  ProCard,
  ProFormDigitRange,
  ProFormSegmented,
  ProFormSelect,
} from '@ant-design/pro-components';
import { ProFormSwitch } from '@ant-design/pro-form';
import {
  Affix,
  Button,
  Col,
  Input,
  message,
  Popover,
  Progress,
  Row,
  Space,
  Table,
  TableProps,
  Tag,
  Tooltip,
} from 'antd';
import React, { useEffect, useState } from 'react';

type ColumnsType<T> = TableProps<T>['columns'];

/**
 * 默认分页参数
 */
const DEFAULT_PAGE_PARAMS: PageRequest = {
  current: 1,
  pageSize: 10,
};

const QuestionPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<API.QuestionVO[]>([]);
  const [total, setTotal] = useState<number>(0);

  const [searchParams, setSearchParams] = useState<API.QuestionQueryRequest>({
    ...DEFAULT_PAGE_PARAMS,
  });

  // 当前用户点击的数据
  const [currentRow, setCurrentRow] = useState<API.QuestionVO>();

  const [isHovering, setIsHovering] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

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
      const res = await listQuestionVoByPageUsingPost(searchParams);
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

  /**
   * 表格列配置
   */
  const columns: ColumnsType<API.QuestionVO> = [
    {
      title: '',
      dataIndex: 'status',
      key: 'status',
      width: '5%',
    },
    {
      title: '题号',
      dataIndex: 'id',
      key: 'id',
      width: '20%',
      ellipsis: {
        showTitle: false,
      },
      render: (text) => (
        <Tooltip placement="top" title={text}>
          {text}
        </Tooltip>
      ),
    },
    {
      title: '题目',
      dataIndex: 'title',
      key: 'title',
      ellipsis: {
        showTitle: false,
      },
      render: (_, record) => (
        <Tooltip placement="topLeft" title={record.title}>
          <a href={'/question/' + record.id}>{record.title}</a>
        </Tooltip>
      ),
    },
    {
      title: '难度',
      dataIndex: 'difficulty',
      key: 'difficulty',
      sorter: {
        compare: (a, b) => a.difficulty - b.difficulty,
        multiple: 2,
      },
      width: '10%',
    },
    {
      title: '标签',
      dataIndex: 'tags',
      key: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            return <Tag key={tag}>{tag}</Tag>;
          })}
        </>
      ),
    },
    {
      title: '通过率',
      dataIndex: 'acceptedRate',
      key: 'acceptedRate',
      sorter: {
        compare: (a, b) => {
          const rateA = a.submitNum ? Number(((a.acceptedNum / a.submitNum) * 100).toFixed(2)) : 0;
          const rateB = b.submitNum ? Number(((b.acceptedNum / b.submitNum) * 100).toFixed(2)) : 0;
          return rateA - rateB;
        },
        multiple: 1,
      },
      render: (_, record) => {
        const rate = `${
          record.submitNum ? ((record.acceptedNum / record.submitNum) * 100).toFixed(2) : '0'
        }`;
        const conicColors = ['#b7b7b7', '#FF0000', '#FFCC00', '#B3E42B', '#0A0'];

        return (
          <>
            <Tooltip
              placement="top"
              title={`${
                record.submitNum ? ((record.acceptedNum / record.submitNum) * 100).toFixed(2) : '0'
              }% (${record.acceptedNum}/${record.submitNum})`}
            >
              <Progress
                percent={rate}
                size={['100%', 14]}
                strokeColor={conicColors[(Number(rate) / 25).toFixed(0)]}
                showInfo={false}
              />
              {}
            </Tooltip>
          </>
        );
      },
      width: '15%',
    },
  ];
  return (
    <>
      <Row
        style={{ minWidth: '1110px', width: '77%', marginLeft: 'auto', marginRight: 'auto' }}
        gutter={16}
      >
        <Col span={18}>
          <ProCard
            title={'题目列表'}
            bordered
            boxShadow
            extra={
              <Button type="primary" style={{ backgroundColor: '#1BAA5E' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg
                    t="1708769850912"
                    className="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="31122"
                    width="16"
                    height="16"
                    style={{ marginRight: '5px' }}
                  >
                    <path
                      d="M768 763.008V682.666667l213.333333 128-213.333333 128v-89.173334a384 384 0 0 1-298.538667-228.906666L469.333333 620.373333l-0.128 0.256A384 384 0 0 1 116.266667 853.333333H85.333333v-85.333333h30.933334a298.666667 298.666667 0 0 0 274.517333-181.034667L422.912 512l-32.128-74.965333A298.666667 298.666667 0 0 0 116.266667 256H85.333333V170.666667h30.933334a384 384 0 0 1 352.938666 232.746666L469.333333 403.626667l0.128-0.256A384 384 0 0 1 768 174.506667V85.333333l213.333333 128-213.333333 128V260.992a298.666667 298.666667 0 0 0-220.117333 176.042667L515.754667 512l32.128 74.965333A298.666667 298.666667 0 0 0 768 763.008z"
                      p-id="31123"
                      fill="#ffffff"
                    ></path>
                  </svg>
                  随机一题
                </div>
              </Button>
            }
          >
            <LightFilter
              style={{ marginBottom: '8px' }}
              onFinish={async (values) => console.log(values)}
            >
              <ProFormSegmented
                name="source"
                label="来源"
                request={async () => [
                  { label: '全部', value: 'all' },
                  { label: 'Codeforces', value: 'codeforces' },
                  { label: 'SCPC-OJ', value: 'scpcoj' },
                  { label: 'ATC', value: 'atc' },
                ]}
              />
            </LightFilter>
            <LightFilter
              style={{ marginBottom: '16px', width: '100%' }}
              onFinish={async (values) => console.log(values)}
            >
              <ProFormSelect
                name="status"
                valueEnum={{
                  done: '已完成',
                  undone: '尝试过',
                  none: '未开始',
                  locked: '无法查看',
                }}
                placeholder="状态"
              />
              <ProFormSelect
                name="tags"
                label="标签"
                mode="multiple"
                valueEnum={{
                  map: 'Map',
                  binarySearch: '二分搜索',
                  my: '我的',
                  easy: '简单',
                }}
                showSearch
              />
              <ProFormDigitRange
                label="难度范围"
                name="difficultyRange"
                separator="-"
                placeholder={['最小值', '最大值']}
                separatorWidth={50}
                fieldProps={{ precision: 0 }}
              />
              <Input addonBefore={<SearchOutlined />} placeholder="请输入题号、题目或内容" />
              <Popover
                content={
                  <>
                    <ProFormSwitch name="showTags" label="显示标签" />
                  </>
                }
                title=""
                trigger="click"
                arrow={false}
                onOpenChange={(event) => {
                  setIsOpened(event);
                  handleMouseOut();
                }}
              >
                <Button
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  type="text"
                  icon={<SettingOutlined spin={isHovering} />}
                />
              </Popover>
            </LightFilter>
            <Table
              rowKey={'id'}
              columns={columns}
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
              onRow={(record) => {
                return {
                  onMouseEnter: (event) => {
                    setCurrentRow(record);
                  }, // 鼠标移入行
                  onMouseLeave: (event) => {},
                };
              }}
            />
          </ProCard>
        </Col>
        <Col span={6}>
          <Space direction="vertical" size={16} style={{ display: 'flex' }}>
            <ProCard bordered boxShadow>
              <PunchCalendar />
            </ProCard>
            <Affix offsetTop={60}>
              <ProCard style={{ height: '300px' }} bordered boxShadow>
                <QuestionSubmitStatusChart style={{ height: '78%' }} question={currentRow} />
              </ProCard>
            </Affix>
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default QuestionPage;
