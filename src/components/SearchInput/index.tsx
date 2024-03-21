import { SearchOutlined } from '@ant-design/icons';
import { Input, Popover } from 'antd';
import React, { useState } from 'react';
import styles from './MyPopover.module.css';

const SearchInput: React.FC = () => {
  const [showInput, setShowInput] = useState<boolean>(false);
  return (
    <>
      <Popover
        id={styles.SearchInput}
        placement="left"
        title={null}
        content={<Input prefix={<SearchOutlined />} />}
        arrow={false}
        trigger="click"
        onOpenChange={(event) => {
          setShowInput(event);
        }}
      >
        {!showInput ? <SearchOutlined key="SearchOutlined" /> : <></>}
      </Popover>
    </>
  );
};

export default SearchInput;
