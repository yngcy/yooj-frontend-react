import { Line } from '@ant-design/charts';
import { Typography } from 'antd';
import React from 'react';

interface Props {
  question: API.QuestionVO;
}

const QuestionSubmitStatusChart: React.FC<Props> = (currentRow) => {
  const { question } = currentRow;

  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 4 },
    { year: '1997', value: 4 },
    { year: '1998', value: 3 },
    { year: '1999', value: 3 },
  ];

  const props = {
    data,
    xField: 'year',
    yField: 'value',
  };

  return (
    <>
      <Typography.Title level={4}>
        {question?.title ?? '请悬停鼠标至题目行查看提交状态'}
      </Typography.Title>
      <Line {...props} />
    </>
  );
};

export default QuestionSubmitStatusChart;
