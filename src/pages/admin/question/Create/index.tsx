import MdEditor from '@/components/MdEditor';
import CaseFormList from '@/pages/admin/question/Create/components/CaseFormList';
import ConfigCard from '@/pages/admin/question/Create/components/ConfigCard';
import HistoryDialog from '@/pages/admin/question/Create/components/HistoryDialog';
import PreviewDropdown from '@/pages/admin/question/Create/components/PreviewDropdown';
import {
  ProCard,
  ProFormRadio,
  ProFormUploadButton,
  ProFormUploadDragger,
} from '@ant-design/pro-components';
import { Button, Divider, Flex, Input, Radio, Space, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './styles.css';

const CreatePage: React.FC = () => {
  const { id } = useParams();
  const isUpdate = window.location.pathname.includes('update');
  const title = isUpdate && id ? '更新题目' : '创建题目';
  const [content, setContent] = useState<string>('');
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [note, setNote] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');

  const [caseUploadMode, setCaseUploadMode] = useState('manual');

  const handleCaseUploadModeChange = (v) => {
    setCaseUploadMode(v);
  };

  useEffect(() => {
    console.log(caseUploadMode);
  }, [caseUploadMode]);

  return (
    <>
      <ProCard
        title={
          <>
            {title}
            {id && (
              <>
                <br />
                <Space>
                  {'id: '}
                  {id}
                  <Divider
                    type={'vertical'}
                    style={{ marginInline: 0, borderInlineStart: '4px solid rgba(5,5,5,0.1)' }}
                  />
                  <HistoryDialog />
                </Space>
              </>
            )}
          </>
        }
        extra={
          <>
            <Space>
              <PreviewDropdown />
              <Button type={'primary'}>保存</Button>
            </Space>
          </>
        }
        headerBordered
        split={'vertical'}
        bordered
        hoverable
        style={{ minWidth: 845 }}
      >
        <ProCard>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            <ProCard ghost>
              <Flex>
                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    fontFamily: 'var(--heading-font-family)',
                    width: 60,
                  }}
                >
                  {'标题'}
                </div>
                <Input />
              </Flex>
            </ProCard>
            <ProCard
              ghost
              tabs={{
                type: 'line',
              }}
            >
              <ProCard.TabPane key="content" tab="题目描述">
                <MdEditor value={content} handleChange={(v) => setContent(v)} />
              </ProCard.TabPane>
              <ProCard.TabPane key="input" tab="输入描述">
                <MdEditor value={input} handleChange={(v) => setContent(v)} />
              </ProCard.TabPane>
              <ProCard.TabPane key="output" tab="输出描述">
                <MdEditor value={output} handleChange={(v) => setContent(v)} />
              </ProCard.TabPane>
              <ProCard.TabPane
                key="sample"
                tab="样例"
                style={{
                  maxHeight: 480,
                  overflow: 'auto',
                }}
              >
                <CaseFormList />
              </ProCard.TabPane>
              <ProCard.TabPane key="note" tab="提示">
                <MdEditor value={note} handleChange={(v) => setContent(v)} />
              </ProCard.TabPane>
              <ProCard.TabPane key="answer" tab="题解">
                <MdEditor value={answer} handleChange={(v) => setAnswer(v)} />
              </ProCard.TabPane>
            </ProCard>
            <ProCard title="评测设置" ghost tabs={{ type: 'line' }}>
              <ProCard.TabPane key="data" tab="评测数据">
                <ProFormRadio.Group
                  name="mechanism"
                  label="评测机制"
                  options={[
                    {
                      label: '全量评测',
                      value: 'full',
                    },
                    {
                      label: '即时中断评测',
                      value: 'immediate',
                    },
                    {
                      label: '抽样评测',
                      value: 'sample',
                    },
                  ]}
                />
                <Tabs
                  activeKey={caseUploadMode}
                  items={[
                    {
                      key: 'manual',
                      label: '手动添加',
                      children: (
                        <>
                          <CaseFormList />
                        </>
                      ),
                    },
                    {
                      key: 'file',
                      label: '文件上传',
                      children: (
                        <>
                          <div style={{ marginTop: 8 }}>
                            <ProFormUploadDragger
                              max={4}
                              name="caseFile"
                              description="请上传 zip 或 rar 格式文件"
                            />
                          </div>
                        </>
                      ),
                    },
                  ]}
                  renderTabBar={(props) => {
                    return (
                      <>
                        <Radio.Group
                          value={props.activeKey}
                          onChange={(e) => handleCaseUploadModeChange(e.target.value)}
                        >
                          <Radio.Button value="manual">手动添加</Radio.Button>
                          <Radio.Button value="file">文件上传</Radio.Button>
                        </Radio.Group>
                      </>
                    );
                  }}
                />
              </ProCard.TabPane>
              <ProCard.TabPane key="file" tab="额外文件">
                <ProCard.Group ghost direction={'row'} gutter={16}>
                  <ProCard title="调用库" ghost>
                    <ProFormUploadButton
                      name="sdk"
                      max={5}
                      fieldProps={{
                        name: 'file',
                      }}
                      action="/upload.do"
                      extra="最多上传 5 份文件，单份文件大小不超过 8 MB"
                    />
                  </ProCard>
                  <ProCard title="验证器" ghost>
                    <ProFormUploadButton
                      name="validator"
                      max={5}
                      fieldProps={{
                        name: 'file',
                      }}
                      action="/upload.do"
                      extra="最多上传 5 份文件，单份文件大小不超过 8 MB"
                    />
                  </ProCard>
                  <ProCard title="交互器" ghost>
                    <ProFormUploadButton
                      name="interactor"
                      max={5}
                      fieldProps={{
                        name: 'file',
                      }}
                      action="/upload.do"
                      extra="最多上传 5 份文件，单份文件大小不超过 8 MB"
                    />
                  </ProCard>
                </ProCard.Group>
              </ProCard.TabPane>
            </ProCard>
          </div>
        </ProCard>
        <ProCard colSpan="30%" wrap>
          <ConfigCard />
        </ProCard>
      </ProCard>
    </>
  );
};

export default CreatePage;
