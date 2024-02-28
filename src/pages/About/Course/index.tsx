import { Tag } from 'antd';
import TweenOne from 'rc-tween-one';
import React from 'react';

// 定义 CoursePage 组件
const CoursePage: React.FC = () => {
  return (
    <div>
      <h1>Course Page</h1>
      <TweenOne
        animation={{
          x: 80,
          scale: 0.5,
          rotate: 120,
          repeat: -1, // demo 演示需要
          duration: 10000,
        }}
        style={{ transform: 'translateX(80px)' }}
        className="code-box-shape"
      >
        <Tag>123</Tag>
      </TweenOne>
    </div>
  );
};
export default CoursePage;
