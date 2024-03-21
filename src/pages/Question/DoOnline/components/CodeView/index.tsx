import CodeEditor from '@/components/CodeEditor';
import ToolBar from '@/pages/Question/DoOnline/components/CodeView/components/ToolBar';
import { ProCard } from '@ant-design/pro-components';
import { Tabs } from '@arco-design/web-react';
import TabPane from '@arco-design/web-react/es/Tabs/tab-pane';
import { IconDown, IconExpand, IconShrink, IconUp } from '@arco-design/web-react/icon';
import { Button, Row, Space, Tooltip } from 'antd';
import React from 'react';
import '../styles.css';

interface Props {
  updateFolded?: () => void;
  updateFullScreen: (value: boolean) => void;
  folded?: boolean;
  fullScreen: boolean;
}

const CodeView: React.FC<Props> = (props) => {
  const { updateFolded, updateFullScreen, folded, fullScreen } = props;

  const openFullScreen = () => {
    updateFullScreen(true);
  };

  const closeFullScreen = () => {
    updateFullScreen(false);
  };

  return (
    <>
      <div
        style={
          fullScreen
            ? { height: '100%', width: '100%' }
            : { margin: '0 0 4px 4px', height: 'calc(100% - 4px)' }
        }
      >
        <ProCard
          title={
            <>
              <Space direction={'vertical'}>
                <Row>
                  <Tabs style={{ borderRadius: 5 }} type={'capsule'}>
                    <TabPane key="1" title="代码" />
                    <TabPane key="2" title="笔记" />
                  </Tabs>
                </Row>
                <Row style={{ width: 'calc(100% - 12px)', position: 'absolute', top: 40 }}>
                  <ToolBar />
                </Row>
              </Space>
            </>
          }
          extra={
            !fullScreen ? (
              <>
                <Space>
                  <Tooltip title="全屏" placement={'bottom'} arrow={false}>
                    <Button type="text" icon={<IconExpand />} onClick={openFullScreen}></Button>
                  </Tooltip>
                  {!folded ? (
                    <Tooltip title="折叠" placement={'bottom'} arrow={false}>
                      <Button type="text" icon={<IconUp />} onClick={updateFolded}></Button>
                    </Tooltip>
                  ) : (
                    <Tooltip title="展开" placement={'bottom'} arrow={false}>
                      <Button type="text" icon={<IconDown />} onClick={updateFolded}></Button>
                    </Tooltip>
                  )}
                </Space>
              </>
            ) : (
              <Tooltip title="还原" placement="bottom" arrow={false}>
                <Button type="text" icon={<IconShrink />} onClick={closeFullScreen} />
              </Tooltip>
            )
          }
          style={{ height: '100%', width: '100%', overflow: 'hidden' }}
          headStyle={{ padding: 4 }}
          bodyStyle={{ padding: 4, overflowY: 'auto' }}
          bordered={true}
        >
          <CodeEditor />
        </ProCard>
      </div>
    </>
  );
};

export default CodeView;
