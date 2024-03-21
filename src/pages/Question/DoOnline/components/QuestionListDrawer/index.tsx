import { listQuestionSimpleByPageUsingPost } from '@/services/yooj-question/questionController';
import { Button, Drawer, List, message, Tag } from 'antd';
import React, { useEffect, useState } from 'react';

interface Props {
  open: boolean;
  onClose: any;
}

const QuestionListDrawer: React.FC<Props> = (props) => {
  const { open, onClose } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const [questionList, setQuestionList] = useState<API.QuestionSimple[]>([]);

  const loadData = async () => {
    setLoading(true);
    const res = await listQuestionSimpleByPageUsingPost({ current: 1, pageSize: 10 });
    if (res.code === 0) {
      setQuestionList(res.data?.records);
    } else {
      message.error('题目列表加载失败，' + res.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Drawer
        title="题目列表"
        onClose={onClose}
        open={open}
        placement={'left'}
        extra={
          <Button type="link" href={'/question'}>
            前往题库
          </Button>
        }
      >
        <List
          loading={loading}
          itemLayout="horizontal"
          dataSource={questionList}
          renderItem={(item, index) => (
            <List.Item extra={<Tag>{item.difficulty}</Tag>}>
              <List.Item.Meta title={<a href={'/question/' + item.id}>{item.title}</a>} />
            </List.Item>
          )}
        />
      </Drawer>
    </>
  );
};

export default QuestionListDrawer;
