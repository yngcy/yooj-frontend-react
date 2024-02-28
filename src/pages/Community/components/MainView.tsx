import CategoryMenu from '@/pages/Community/components/CategoryMenu';
import { Outlet } from '@@/exports';
import { EditOutlined } from '@ant-design/icons';
import { Button, Space, Tabs, Tag } from 'antd';
import Search from 'antd/es/input/Search';
import React, { useState } from 'react';

const { CheckableTag } = Tag;

const tagsData = ['Movies', 'Books', 'Music', 'Sports'];

const MainView: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>(['Books']);

  const handleChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    setSelectedTags(nextSelectedTags);
  };

  return (
    <Space direction="vertical" size={16} style={{ display: 'flex' }}>
      <CategoryMenu />
      <Tabs
        defaultActiveKey="hottest"
        items={[
          {
            key: 'newest',
            label: '最新',
          },
          {
            key: 'hottest',
            label: '最热',
          },
          {
            key: 'recommend',
            label: '推荐',
          },
        ]}
        onChange={(key: string) => {
          console.log(key);
        }}
        tabBarExtraContent={
          <>
            <Search
              placeholder="搜索"
              allowClear
              onSearch={(value) => {
                console.log(value);
              }}
              style={{ width: 200, marginRight: 8 }}
            />
            <Button
              type="primary"
              shape="round"
              icon={<EditOutlined />}
              style={{ background: 'rgba(0, 180, 23)' }}
            >
              发个帖子
            </Button>
          </>
        }
        style={{
          marginBottom: -16,
        }}
      />
      <Space size={[0, 8]} wrap>
        {tagsData.map((tag) => (
          <CheckableTag
            key={tag}
            checked={selectedTags.includes(tag)}
            onChange={(checked) => handleChange(tag, checked)}
          >
            {tag}
          </CheckableTag>
        ))}
      </Space>
      <Outlet />
    </Space>
  );
};

export default MainView;
