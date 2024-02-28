import { ProCard } from '@ant-design/pro-components';
import { Tabs } from '@arco-design/web-react';
import TabPane from '@arco-design/web-react/es/Tabs/tab-pane';
import { IconDown, IconExpand } from '@arco-design/web-react/icon';
import { Button, Space, Tooltip } from 'antd';
import React from 'react';

const DebugView: React.FC = () => {
  return (
    <>
      <div style={{ margin: '4px 0 0 4px', height: 'calc(100% - 4px)' }}>
        <ProCard
          title={
            <Tabs style={{ borderRadius: 5 }} type={'capsule'}>
              <TabPane key="1" title="测试用例" />
              <TabPane key="2" title="测试结果" />
              <TabPane key="3" title="Tab 3" />
              <TabPane key="4" title="Tab 4" />
            </Tabs>
          }
          extra={
            <>
              <Space>
                <Tooltip title="全屏" placement={'bottom'} arrow={false}>
                  <Button type="text" icon={<IconExpand />}></Button>
                </Tooltip>
                <Tooltip title="折叠 " placement={'bottom'} arrow={false}>
                  <Button type="text" icon={<IconDown />}></Button>
                </Tooltip>
              </Space>
            </>
          }
          style={{ height: '100%', width: '100%' }}
          headStyle={{ padding: 4 }}
          bodyStyle={{ padding: 4 }}
          bordered={true}
        >
          测试
        </ProCard>
      </div>
    </>
  );
};

export default DebugView;
