import ClockIcon from '@/assets/icons/ClockIcon';
import RandomIcon from '@/assets/icons/RandomIcon';
import TipOffIcon from '@/assets/icons/TipOffIcon';
import TipOnIcon from '@/assets/icons/TipOnIcon';
import { AvatarDropdown } from '@/components/RightContent/AvatarDropdown';
import MainContent from '@/pages/Question/DoOnline/components/MainContent';
import QuestionListDrawer from '@/pages/Question/DoOnline/components/QuestionListDrawer';
import {
  doQuestionSubmitUsingPost,
  getQuestionVoByIdUsingGet,
} from '@/services/yooj-question/questionController';
import { useParams } from '@@/exports';
import {
  BugTwoTone,
  CaretLeftOutlined,
  CaretRightOutlined,
  FireTwoTone,
  LayoutOutlined,
  MenuUnfoldOutlined,
  PlayCircleTwoTone,
  RocketTwoTone,
  SettingOutlined,
} from '@ant-design/icons';
import { Button, Divider, Flex, Layout, message, Row, Space, Tooltip } from 'antd';
import React, { createContext, useEffect, useState } from 'react';

export const QuestionData = createContext<{ data: API.QuestionVO | null; loading: boolean }>({
  data: null,
  loading: false,
});

export const CodeData = createContext({
  code: '',
  language: 'java',
  updateCode: (v: string) => {},
  updateLanguage: (v: string) => {},
});

const DoOnlinePage: React.FC = () => {
  const { Header, Content, Footer } = Layout;
  const [open, setOpen] = useState(false);

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const params = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [questionData, setQuestionData] = useState<API.QuestionVO>();
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('java');

  const updateCode = (newValue) => {
    setCode(newValue);
  };

  const updateLanguage = (newValue) => {
    setLanguage(newValue);
  };

  const loadData = async () => {
    setLoading(true);
    const res = await getQuestionVoByIdUsingGet(params);
    if (res.code === 0) {
      setQuestionData(res.data);
    } else {
      message.error('加载失败，' + res.message);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const contentHeight = windowHeight - 60;

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const [tipHover, setTipHover] = useState(false);

  /**
   * 提交代码
   */
  const doSubmit = async () => {
    if (!questionData?.id) {
      return;
    }
    const res = await doQuestionSubmitUsingPost({
      language: language,
      code: code,
      questionId: questionData.id,
    });
    if (res.code === 0) {
      message.success('提交成功');
    } else {
      message.error('提交失败');
    }
  };

  /**
   * 进行调试
   */
  const doDebug = () => {
    message.warning('等待开发中，敬请期待~');
  };

  /**
   * 进行测试
   */
  const doTest = () => {
    message.warning('正在开发中……');
  };

  return (
    <>
      <Layout>
        <Content style={{ padding: '0 8px' }}>
          <Space direction="vertical" size={2} style={{ display: 'flex' }}>
            <Row style={{ margin: '8px 0' }}>
              <Flex style={{ width: '100%' }} justify={'space-between'} align={'center'}>
                <div>
                  <Button style={{ padding: 0, height: '68%' }} type="link" href={'/'}>
                    <img
                      alt={'logo'}
                      style={{ width: 30 }}
                      src={'https://bu.dusays.com/2024/02/22/65d708bbafd2a.png'}
                    />
                  </Button>
                  <Divider type="vertical" />
                  <Space>
                    <Button
                      style={{ height: '68%', fontSize: 16 }}
                      type="text"
                      icon={<MenuUnfoldOutlined />}
                      onClick={showDrawer}
                    >
                      题库
                    </Button>
                    <QuestionListDrawer open={open} onClose={onClose} />
                    <Space.Compact block>
                      <Tooltip title="上一题" placement={'bottom'} arrow={false}>
                        <Button
                          style={{ height: '68%', fontSize: 16 }}
                          type="text"
                          icon={<CaretLeftOutlined />}
                        />
                      </Tooltip>
                      <Tooltip title="下一题" placement={'bottom'} arrow={false}>
                        <Button
                          style={{ height: '68%', fontSize: 16 }}
                          type="text"
                          icon={<CaretRightOutlined />}
                        />
                      </Tooltip>
                    </Space.Compact>
                    <Tooltip title="随机一题" placement={'bottom'} arrow={false}>
                      <Button
                        style={{ height: '68%' }}
                        type="text"
                        icon={<RandomIcon style={{ marginTop: '3px' }} />}
                      />
                    </Tooltip>
                  </Space>
                </div>
                <div>
                  <Space>
                    <Button
                      type="text"
                      icon={<BugTwoTone twoToneColor={'rgb(227,111,16)'} />}
                      onClick={doDebug}
                    ></Button>
                    <Button
                      style={{
                        backgroundColor: 'rgba(217,217,217,0.68)',
                        color: 'rgb(0,0,0)',
                      }}
                      type="primary"
                      icon={<PlayCircleTwoTone twoToneColor={'rgb(164,164,164)'} />}
                      onClick={doTest}
                    >
                      测试
                    </Button>
                    <Button
                      style={{
                        backgroundColor: 'rgba(45, 181, 93 ,1)',
                        color: 'rgb(255,255,255)',
                      }}
                      icon={<RocketTwoTone twoToneColor={'rgb(136,255,178)'} />}
                      type="primary"
                      onClick={doSubmit}
                    >
                      提交
                    </Button>
                    <Button type="text" icon={<ClockIcon />}></Button>
                    <Button
                      type="text"
                      icon={
                        tipHover ? (
                          <TipOnIcon style={{ marginTop: 1 }} />
                        ) : (
                          <TipOffIcon style={{ marginTop: 1 }} />
                        )
                      }
                      onMouseEnter={() => setTipHover(true)}
                      onMouseLeave={() => setTipHover(false)}
                    ></Button>
                  </Space>
                </div>
                <div>
                  <Space align={'center'}>
                    <Tooltip title="布局" placement={'bottom'} arrow={false}>
                      <Button style={{ height: '68%' }} type="text" icon={<LayoutOutlined />} />
                    </Tooltip>
                    <Tooltip title="设置" placement={'bottom'} arrow={false}>
                      <Button style={{ height: '68%' }} type="text" icon={<SettingOutlined />} />
                    </Tooltip>
                    <Tooltip title="今日打卡" placement={'bottom'} arrow={false}>
                      <Button
                        style={{ height: '68%' }}
                        type="text"
                        icon={<FireTwoTone twoToneColor="#F88A16" />}
                      />
                    </Tooltip>
                    <Button type="text" style={{ height: '68%' }}>
                      <AvatarDropdown menu={true} />
                    </Button>
                  </Space>
                </div>
              </Flex>
            </Row>
            <Row style={{ height: contentHeight }}>
              <QuestionData.Provider value={{ data: questionData, loading: loading }}>
                <CodeData.Provider
                  value={{ code: code, language: language, updateCode, updateLanguage }}
                >
                  <MainContent />
                </CodeData.Provider>
              </QuestionData.Provider>
            </Row>
          </Space>
        </Content>
      </Layout>
    </>
  );
};

export default DoOnlinePage;
