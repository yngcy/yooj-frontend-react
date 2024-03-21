import MdViewer from '@/components/MdViewer';
import { CaretRightOutlined, CopyrightOutlined } from '@ant-design/icons';
import { IconTags } from '@arco-design/web-react/icon';
import {
  Button,
  Collapse,
  Descriptions,
  DescriptionsProps,
  Divider,
  Popover,
  Space,
  Statistic,
  Tag,
  Tooltip,
  Typography,
} from 'antd';
import React, { useEffect, useState } from 'react';

interface Props {
  question: API.QuestionVO;
}

const { Title, Paragraph, Text, Link } = Typography;

const defaultJudgeConfig: DescriptionsProps['items'] = [
  {
    key: 'timeLimit',
    label: '时间限制',
    children: '1000 ms',
  },
  {
    key: 'memoryLimit',
    label: '空间限制',
    children: '256 MB',
  },
  {
    key: 'stackLimit',
    label: '堆栈限制',
    children: '256 MB',
  },
];

const QuestionContent: React.FC<Props> = (props) => {
  const { question } = props;
  const [judgeConfig, setJudgeConfig] = useState<DescriptionsProps['item']>(defaultJudgeConfig);

  useEffect(() => {
    if (question !== null && typeof question !== 'undefined') {
      const judgeConfig = defaultJudgeConfig.map((item) => {
        return {
          ...item,
          children: (
            <Tag
              style={{
                border: 0,
                background: 'rgb(224 224 224)',
                color: 'rgb(87,87,87)',
                fontWeight: 600,
                fontSize: 14,
                fontFamily: 'Roboto',
              }}
            >
              {question?.judgeConfig[item.key]} {item.children.split(' ')[1]}
            </Tag>
          ), // 使用 item.key 获取后端数据中的对应值
        };
      });
      setJudgeConfig(judgeConfig);
    }
  }, [question]);

  return (
    <>
      <div style={{ padding: 4 }}>
        <Space direction={'vertical'} style={{ width: '100%' }}>
          <Title level={3}>{question?.title}</Title>
          <Space>
            <Tooltip
              title={question?.difficulty}
              placement={'bottom'}
              arrow={false}
              color={'cyan'}
              key={'cyan'}
            >
              <Button size={'small'}>难度</Button>
            </Tooltip>
            <Popover
              content={
                <Space size={[0, 8]} wrap>
                  {question &&
                    question.tags &&
                    question.tags.map((tag) => (
                      <Tag
                        style={{
                          borderRadius: 10,
                          border: 0,
                          color: '#595959',
                          background: '#F2F2F2',
                        }}
                        key={tag}
                      >
                        {tag}
                      </Tag>
                    ))}
                </Space>
              }
              title={<>{<IconTags />} 标签</>}
              trigger="click"
              arrow={false}
              placement={'right'}
            >
              <Button size={'small'}>标签</Button>
            </Popover>
          </Space>
          <Descriptions items={judgeConfig} />
          <MdViewer value={question?.content as string} />
          <Divider orientation="left" orientationMargin="0">
            过题统计
          </Divider>
          <Space>
            <Statistic
              title="通过数"
              value={question?.acceptedNum}
              valueStyle={{
                fontSize: 16,
                fontWeight: 600,
                fontFamily: 'Roboto',
              }}
            />
            <Divider type="vertical" />
            <Statistic
              title="提交数"
              value={question?.submitNum}
              valueStyle={{
                fontSize: 16,
                fontWeight: 600,
                fontFamily: 'Roboto',
              }}
            />
            <Divider type="vertical" />
            <Statistic
              title="通过率"
              value={`${
                question?.submitNum
                  ? ((question?.acceptedNum / question?.submitNum) * 100).toFixed(2)
                  : '0'
              }`}
              suffix="%"
              valueStyle={{
                fontSize: 16,
                fontWeight: 600,
                fontFamily: 'Roboto',
              }}
            />
          </Space>
          <Collapse
            size="small"
            bordered={false}
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            items={[{ key: '1', label: '贡献者', children: <p>{question?.userId}</p> }]}
          />
          <Text type="secondary">
            <CopyrightOutlined /> {new Date().getFullYear()} 阳曦 OJ
          </Text>
        </Space>
      </div>
    </>
  );
};

export default QuestionContent;
