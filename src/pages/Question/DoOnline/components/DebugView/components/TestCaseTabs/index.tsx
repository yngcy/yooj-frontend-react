import { Input, Tabs } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

const initValues = [
  { key: '1', value: 'Case 1' },
  { key: '2', value: 'Case 2' },
  { key: '3', value: 'Case 3' },
];

const initialItems = [
  {
    label: 'Case 1',
    key: '1',
    closable: false,
  },
  {
    label: 'Case 2',
    key: '2',
  },
  {
    label: 'Case 3',
    key: '3',
  },
];

const TestCaseTabs: React.FC = () => {
  const [activeKey, setActiveKey] = useState(initialItems[0].key);
  const [currentValue, setCurrentValue] = useState(initValues[0].value);
  const [items, setItems] = useState(initialItems);
  const [values, setValues] = useState(initValues);
  const newTabIndex = useRef(items.length);

  useEffect(() => {
    console.log(activeKey);
  }, [activeKey]);

  const onChange = (newActiveKey: string) => {
    // 先保存数据到数组
    setValues((prevValues) =>
      prevValues.map((item) => (item.key === activeKey ? { ...item, value: currentValue } : item)),
    );

    setActiveKey(newActiveKey);
    const item = values.find((item) => item.key === newActiveKey);
    if (item) {
      setCurrentValue(item.value);
    } else {
      console.log('No item found for key:', newActiveKey);
    }
  };

  const add = () => {
    const newActiveKey = `${++newTabIndex.current}`;
    const newPanes = [...items];
    const newValues = [...values];
    const newValue = { key: newTabIndex.current + '', value: '' };
    newValues.push(newValue);
    newPanes.push({
      label: 'Case ' + newTabIndex.current,
      key: newTabIndex.current + '',
    });
    setItems(newPanes);
    setValues(newValues);
    setActiveKey(newActiveKey);
    setCurrentValue(newValue.value);
  };

  const remove = (targetKey: TargetKey) => {
    let newActiveKey = activeKey;
    let lastIndex = -1;
    items.forEach((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = items.filter((item) => item.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setItems(newPanes);

    values.forEach((value, i) => {
      if (value.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newValues = values.filter((value) => value.key !== targetKey);
    setValues(newValues);
    setActiveKey(newActiveKey);
  };

  const onEdit = (
    targetKey: React.MouseEvent | React.KeyboardEvent | string,
    action: 'add' | 'remove',
  ) => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey);
    }
  };

  return (
    <>
      <Tabs
        type="editable-card"
        onChange={(newActiveKey) => onChange(newActiveKey, currentValue)}
        activeKey={activeKey}
        onEdit={onEdit}
        items={items}
      />
      <Input.TextArea
        value={currentValue}
        onChange={(e) => setCurrentValue(e.target.value)}
        placeholder="请输入测试用例"
        autoSize={{ minRows: 1, maxRows: 5 }}
      />
    </>
  );
};

export default TestCaseTabs;
