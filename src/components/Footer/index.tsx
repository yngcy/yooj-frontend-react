import { BuildFilled, GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';

const Footer: React.FC = () => {
  const defaultMessage = 'YounGCY';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'blog',
          title: (
            <>
              <BuildFilled /> 我的博客
            </>
          ),
          href: 'https://yocy.top',
          blankTarget: true,
        },
        {
          key: 'github',
          title: (
            <>
              <GithubOutlined /> GitHub
            </>
          ),
          href: 'https://github.com/yngcy',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
