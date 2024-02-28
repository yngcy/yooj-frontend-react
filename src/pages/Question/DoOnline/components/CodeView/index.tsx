import { ProCard } from '@ant-design/pro-components';
import { Tabs } from '@arco-design/web-react';
import TabPane from '@arco-design/web-react/es/Tabs/tab-pane';
import { IconExpand, IconUp } from '@arco-design/web-react/icon';
import { Button, Space, Tooltip } from 'antd';
import React from 'react';

const CodeView: React.FC = () => {
  return (
    <>
      <div style={{ margin: '0 0 4px 4px', height: 'calc(100% - 4px)' }}>
        <ProCard
          title={
            <Tabs style={{ borderRadius: 5 }} type={'capsule'}>
              <TabPane key="1" title="代码" />
              <TabPane key="2" title="代码2" />
              <TabPane key="3" title="代码3" />
              <TabPane key="4" title="代码4" />
            </Tabs>
          }
          extra={
            <>
              <Space>
                <Tooltip title="全屏" placement={'bottom'} arrow={false}>
                  <Button type="text" icon={<IconExpand />}></Button>
                </Tooltip>
                <Tooltip title="折叠 " placement={'bottom'} arrow={false}>
                  <Button type="text" icon={<IconUp />}></Button>
                </Tooltip>
              </Space>
            </>
          }
          style={{ height: '100%', width: '100%' }}
          headStyle={{ padding: 4 }}
          bodyStyle={{ padding: 4 }}
          bordered={true}
        >
          代码
        </ProCard>
      </div>
    </>
  );
};

export default CodeView;
