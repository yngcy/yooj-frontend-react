import { CaretDownOutlined } from '@ant-design/icons';
import { Button, Dropdown, MenuProps, Space } from 'antd';
import TweenOne from 'rc-tween-one';
import React, { useState } from 'react';

interface Props {
  language: string;
  changeLanguage: (v: string) => void;
}

const items: MenuProps['items'] = [
  {
    label: 'Java',
    key: 'java',
  },
  {
    label: 'C++',
    key: 'cpp',
  },
  {
    label: 'Golang',
    key: 'golang',
    danger: true,
  },
  {
    label: 'Python',
    key: 'python',
    danger: true,
    disabled: true,
  },
];

const LanguageDropdown: React.FC<Props> = (props) => {
  const { language, changeLanguage } = props;
  const [selectValue, setSelectValue] = useState<string | null>(language);
  const [opened, setOpened] = useState(false);

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    setSelectValue(e.key);
    changeLanguage(e.key);
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <>
      <Dropdown
        menu={menuProps}
        trigger={['click']}
        onOpenChange={(open) => {
          setOpened(open);
        }}
      >
        <Button>
          <Space>
            {selectValue ? items.find((item) => item.key === selectValue).label : '语言'}
            <TweenOne
              animation={{
                rotate: opened ? 180 : 0,
                duration: 300,
              }}
            >
              <CaretDownOutlined />
            </TweenOne>
          </Space>
        </Button>
      </Dropdown>
    </>
  );
};

export default LanguageDropdown;
