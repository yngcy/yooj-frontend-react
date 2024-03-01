import PresetLayout from '@/pages/Question/DoOnline/components/PresetLayout';
import { getQuestionByIdUsingGET } from '@/services/yooj-question/questionController';
import { useParams } from '@@/exports';
import { message } from 'antd';
import React, { useEffect, useState } from 'react';

const MainContent: React.FC = () => {
  const params = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<API.QuestionVO>();

  const loadData = async () => {
    setLoading(true);
    const res = await getQuestionByIdUsingGET(params);
    if (res.code === 0) {
      setData(res.data);
    } else {
      message.error('加载失败，' + res.message);
    }
    // todo 模拟加载效果，完成后记得删除
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <PresetLayout question={data as API.QuestionVO} questionLoading={loading} />
    </>
  );
};

export default MainContent;
