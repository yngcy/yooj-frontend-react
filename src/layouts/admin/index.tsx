import Footer from '@/components/Footer';
import { IconMap } from '@/utils/IconMap';
import { useModel } from '@@/exports';
import { GithubFilled, InfoCircleFilled, QuestionCircleFilled } from '@ant-design/icons';
import { MenuDataItem, ProLayout } from '@ant-design/pro-layout';
import { Link, useLocation } from '@umijs/max';
import React, { useEffect } from 'react';
import { Outlet } from 'umi';
import Settings from '../../../config/defaultSettings';
import routes from '../../../config/routes';

const AdminLayout: React.FC = () => {
  // @ts-ignore
  const adminRoutes = routes.find((route) => route.path === '/admin').routes.slice(1);
  const { initialState, setInitialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};

  const location = useLocation();

  // 监听路由变化，强制重新渲染页面，解决点击菜单项后菜单和内容不一致的问题
  useEffect(() => {}, [location]);

  const loopMenuItem = (menus: MenuDataItem[]): MenuDataItem[] =>
    menus.map(({ icon, children, ...item }) => ({
      ...item,
      icon: icon && IconMap[icon as string],
      children: children && loopMenuItem(children),
    }));

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        title={Settings.title + ' 后台'}
        logo={Settings.logo}
        siderWidth={216}
        bgLayoutImgList={[
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            left: 85,
            bottom: 100,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            bottom: -68,
            right: -45,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
            bottom: 0,
            left: 0,
            width: '331px',
          },
        ]}
        avatarProps={{
          src: currentUser.userAvatar,
          title: currentUser.userName,
          size: 'small',
        }}
        actionsRender={(props) => {
          if (props.isMobile) return [];
          return [
            <InfoCircleFilled key="InfoCircleFilled" />,
            <QuestionCircleFilled key="QuestionCircleFilled" />,
            <GithubFilled key="GithubFilled" />,
          ];
        }}
        onMenuHeaderClick={() => {
          window.open('/');
        }}
        route={{
          routes: adminRoutes,
        }}
        menuDataRender={() => loopMenuItem(adminRoutes)}
        menuItemRender={(menuItemProps, defaultDom) => {
          if (menuItemProps.isUrl || !menuItemProps.path) {
            return defaultDom;
          }
          return <Link to={menuItemProps.path}>{defaultDom}</Link>;
        }}
        footerRender={() => <Footer />}
      >
        <Outlet />
      </ProLayout>
    </div>
  );
};
export default AdminLayout;
