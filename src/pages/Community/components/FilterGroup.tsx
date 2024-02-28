import { HeartFilled, LikeFilled, SmileFilled, StarFilled } from '@ant-design/icons';
import { Button, Flex, Tooltip } from 'antd';
import React from 'react';

const FilterGroup: React.FC = () => {
  return (
    <>
      <Flex justify={'space-between'}>
        <Tooltip title="收藏" arrow={false} placement={'right'}>
          <Button
            type={'text'}
            icon={<StarFilled style={{ fontSize: 28, color: 'rgba(38, 38, 38, 0.75)' }} />}
            size={'large'}
          />
        </Tooltip>
        <Tooltip title="点赞" arrow={false} placement={'right'}>
          <Button
            type={'text'}
            icon={<LikeFilled style={{ fontSize: 28, color: 'rgba(38, 38, 38, 0.75)' }} />}
            size={'large'}
          />
        </Tooltip>
        <Tooltip title="订阅" arrow={false} placement={'left'}>
          <Button
            type={'text'}
            icon={<HeartFilled style={{ fontSize: 28, color: 'rgba(38, 38, 38, 0.75)' }} />}
            size={'large'}
          />
        </Tooltip>
        <Tooltip title="我的" arrow={false} placement={'left'}>
          <Button
            type={'text'}
            icon={<SmileFilled style={{ fontSize: 28, color: 'rgba(38, 38, 38, 0.75)' }} />}
            size={'large'}
          />
        </Tooltip>
      </Flex>
    </>
  );
};

export default FilterGroup;
