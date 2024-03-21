import { ProCard } from '@ant-design/pro-components';
import { Tabs } from '@arco-design/web-react';
import TabPane from '@arco-design/web-react/es/Tabs/tab-pane';
import { IconCode, IconDown, IconExpand, IconShrink, IconUp } from '@arco-design/web-react/icon';
import { Button, Divider, Space, Tooltip } from 'antd';
import React, { useState } from 'react';

import DebugContent from '@/pages/Question/DoOnline/components/DebugView/components/DebugContent';
import '../styles.css';

interface Props {
  updateFolded?: () => void;
  updateFullScreen: (value: boolean) => void;
  folded?: boolean;
  fullScreen: boolean;
}

const DebugView: React.FC<Props> = (props) => {
  const { updateFolded, updateFullScreen, folded, fullScreen } = props;
  const [value, setValue] = useState('');

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
            : { margin: '4px 0 0 4px', height: 'calc(100% - 4px)' }
        }
      >
        <ProCard
          title={
            <Tabs style={{ borderRadius: 5 }} type={'capsule'}>
              <TabPane key="1" title="测试用例" />
              <TabPane key="2" title="测试结果" />
              <TabPane key="3" title="提交结果" />
              <TabPane key="4" title="调试区" />
            </Tabs>
          }
          extra={
            !fullScreen ? (
              <>
                <Space>
                  <Tooltip title="全屏" placement={'top'} arrow={false}>
                    <Button type="text" icon={<IconExpand />} onClick={openFullScreen}></Button>
                  </Tooltip>
                  {!folded ? (
                    <Tooltip title="折叠" placement={'top'} arrow={false}>
                      <Button type="text" icon={<IconDown />} onClick={updateFolded}></Button>
                    </Tooltip>
                  ) : (
                    <Tooltip title="展开" placement={'top'} arrow={false}>
                      <Button type="text" icon={<IconUp />} onClick={updateFolded}></Button>
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
          actions={[
            <>
              <Tooltip placement={'left'} title={'在代码中编辑数据'} arrow={false}>
                <Button
                  style={{
                    margin: 4,
                    color: 'rgb(128,128,128)',
                    fontFamily: 'var(--content-font-family)',
                    fontSize: 16,
                  }}
                  type="text"
                  icon={<IconCode />}
                >
                  Source
                </Button>
              </Tooltip>
              <Divider type={'vertical'} />
            </>,
          ]}
          style={{ height: '100%', width: '100%', overflow: 'hidden' }}
          headStyle={{ padding: 4 }}
          bodyStyle={{ padding: 4, overflowY: 'auto' }}
          bordered={true}
        >
          <DebugContent />
        </ProCard>
      </div>
    </>
  );
};

export default DebugView;
