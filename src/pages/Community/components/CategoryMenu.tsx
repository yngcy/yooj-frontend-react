import { ProCard } from '@ant-design/pro-components';
import { Col, Row, Space } from 'antd';
import React from 'react';

const CategoryMenu: React.FC = () => {
  return (
    <>
      <Row gutter={8}>
        <Col span={6}>
          <ProCard
            title={'题目交流'}
            style={{ backgroundColor: 'rgba(245,187,63,0.5)', height: 103 }}
            onClick={(event) => {
              console.log(event);
              console.log('clicked!');
            }}
            bordered
            hoverable
          >
            题解、题目相关问题
          </ProCard>
        </Col>
        <Col span={6}>
          <ProCard
            title={'技术交流'}
            style={{ backgroundColor: 'rgba(245,187,63,0.5)', height: 103 }}
            onClick={(event) => {
              console.log(event);
              console.log('clicked!');
            }}
            bordered
            hoverable
          >
            实战技巧、工具分享
          </ProCard>
        </Col>
        <Col span={6}>
          <ProCard
            title={'学习分享'}
            style={{ backgroundColor: 'rgba(245,187,63,0.5)', height: 103 }}
            onClick={(event) => {
              console.log(event);
              console.log('clicked!');
            }}
            bordered
            hoverable
          >
            理论知识、学习心得
          </ProCard>
        </Col>
        <Col span={6}>
          <Space direction="vertical" size={8} style={{ display: 'flex' }}>
            <Row gutter={8}>
              <Col span={12}>
                <ProCard
                  size={'small'}
                  style={{ backgroundColor: 'rgba(245,187,63,0.5)', fontWeight: 1000 }}
                  onClick={(event) => {
                    console.log(event);
                    console.log('clicked!');
                  }}
                  bordered
                  hoverable
                >
                  求助
                </ProCard>
              </Col>
              <Col span={12}>
                <ProCard
                  size={'small'}
                  style={{
                    backgroundColor: 'rgba(245,187,63,0.5)',
                    fontWeight: 1000,
                  }}
                  onClick={(event) => {
                    console.log(event);
                    console.log('clicked!');
                  }}
                  bordered
                  hoverable
                >
                  反馈
                </ProCard>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <ProCard
                  size={'small'}
                  style={{ backgroundColor: 'rgba(245,187,63,0.5)', fontWeight: 1000 }}
                  onClick={(event) => {
                    console.log(event);
                    console.log('clicked!');
                  }}
                  bordered
                  hoverable
                >
                  其他
                </ProCard>
              </Col>
            </Row>
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default CategoryMenu;
