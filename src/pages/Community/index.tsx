import FilterGroup from '@/pages/Community/components/FilterGroup';
import MainView from '@/pages/Community/components/MainView';
import MustReadList from '@/pages/Community/components/MustReadList';
import { ProCard } from '@ant-design/pro-components';
import { Affix, Col, Row, Segmented, Space, Tag } from 'antd';
import React, { useState } from 'react';

const { CheckableTag } = Tag;

const tagsData = ['Movies', 'Books', 'Music', 'Sports'];

const CommunityPage: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>(['Books']);

  const handleChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    setSelectedTags(nextSelectedTags);
  };

  return (
    <>
      <Row
        style={{
          minWidth: '1110px',
          width: '77%',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        gutter={16}
      >
        <Col span={18}>
          <MainView />
        </Col>
        <Col span={6}>
          <Space direction="vertical" size={16} style={{ display: 'flex' }}>
            <FilterGroup />
            <Affix offsetTop={60}>
              <ProCard
                bordered
                boxShadow
                title={'必读榜单'}
                extra={<Segmented options={['日', '周', '月']} />}
                bodyStyle={{ paddingInline: 0 }}
              >
                <MustReadList />
              </ProCard>
            </Affix>
          </Space>
        </Col>
      </Row>
    </>
  );
};
export default CommunityPage;
