import { CodeData } from '@/pages/Question/DoOnline';
import LanguageDropdown from '@/pages/Question/DoOnline/components/CodeView/components/LanguageDropdown';
import ModePopover from '@/pages/Question/DoOnline/components/CodeView/components/ModePopover';
import {
  IconBrush,
  IconHistory,
  IconLaunch,
  IconSettings,
  IconUndo,
} from '@arco-design/web-react/icon';
import { Button, Col, Row, Space, Tooltip } from 'antd';
import React, { useContext } from 'react';

const ToolBar: React.FC = () => {
  const { language: globalLanguage, updateLanguage } = useContext(CodeData);

  return (
    <>
      <Row
        style={{
          padding: '4px 2px',
          width: '100%',
          background: 'rgba(255, 255,255, 0.5)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <Col span={12}>
          <Space>
            <LanguageDropdown language={globalLanguage} changeLanguage={updateLanguage} />
            <ModePopover />
          </Space>
        </Col>
        <Col span={12} style={{ display: 'flex', justifyContent: 'right' }}>
          <Space>
            <Tooltip placement={'bottom'} arrow={false} title={'代码格式化'}>
              <Button type={'text'} icon={<IconBrush />} />
            </Tooltip>
            <Tooltip placement={'bottom'} arrow={false} title={'获取历史代码'}>
              <Button type={'text'} icon={<IconHistory />} />
            </Tooltip>
            <Tooltip placement={'bottom'} arrow={false} title={'还原默认代码'}>
              <Button type={'text'} icon={<IconUndo />} />
            </Tooltip>
            <Tooltip placement={'bottom'} arrow={false} title={'分享当前快照'}>
              <Button type={'text'} icon={<IconLaunch />} />
            </Tooltip>
            <Tooltip placement={'bottom'} arrow={false} title={'编辑器设置'}>
              <Button type={'text'} icon={<IconSettings />} />
            </Tooltip>
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default ToolBar;
