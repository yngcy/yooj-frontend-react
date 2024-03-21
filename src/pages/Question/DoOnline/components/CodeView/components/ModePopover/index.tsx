import { Button, Popover } from 'antd';
import React from 'react';

const ModePopover: React.FC = () => {
  return (
    <>
      <Popover
        placement="bottomLeft"
        title={'当前模式'}
        content={'努力开发中，尽情期待~😘'}
        arrow={false}
      >
        <Button type={'text'}>模式</Button>
      </Popover>
    </>
  );
};

export default ModePopover;
