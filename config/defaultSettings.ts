import { ProLayoutProps } from '@ant-design/pro-components';

/**
 * 默认设置
 */
const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  colorPrimary: '#2f54eb',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  splitMenus: true,
  colorWeak: false,
  title: '阳曦 OJ',
  pwa: true,
  logo: 'https://bu.dusays.com/2024/02/22/65d708bbafd2a.png',
  iconfontUrl: '',
  token: {
    // 参见ts声明，demo 见文档，通过token 修改样式 004FD9
    //https://procomponents.ant.design/components/layout#%E9%80%9A%E8%BF%87-token-%E4%BF%AE%E6%94%B9%E6%A0%B7%E5%BC%8F
    bgLayout: `rgba(245, 245, 245, 0.6)`,
    colorBgAppListIconHover: 'rgba(0,0,0,0.06)',
    colorTextAppListIconHover: 'rgba(255,255,255,0.95)',
    colorTextAppListIcon: 'rgba(255,255,255,0.85)',
    sider: {
      colorBgCollapsedButton: '#fff',
      colorTextCollapsedButtonHover: 'rgba(0,0,0,0.65)',
      colorTextCollapsedButton: 'rgba(0,0,0,0.45)',
      colorMenuBackground: 'rgba(240, 242, 245, 0.4)',
      colorBgMenuItemCollapsedElevated: 'rgba(0,0,0,0.85)',
      colorMenuItemDivider: 'rgba(255,255,255,0.15)',
      colorBgMenuItemHover: 'rgba(47,84,235,0.38)',
      colorBgMenuItemSelected: '#2F54EB',
      colorTextMenuSelected: '#fff',
      colorTextMenuItemHover: 'rgba(255,255,255,0.75)',
      colorTextMenu: 'rgba(107,107,107,0.9)',
      colorTextMenuSecondary: 'rgba(255,255,255,0.65)',
      colorTextMenuTitle: 'rgba(255,255,255,0.95)',
      colorTextMenuActive: 'rgba(255,255,255,0.95)',
      colorTextSubMenuSelected: '#fff',
    },
    header: {
      colorBgHeader: 'rgba(240, 242, 245, 0.4)',
      colorBgRightActionsItemHover: 'rgba(0, 0, 0, 0.03)',
      colorTextRightActionsItem: 'rgba(0,0,0,0.65)',
      colorHeaderTitle: 'rgba(0,0,0,0.65)',
      colorBgMenuItemHover: 'rgba(0,0,0,0.06)',
      colorBgMenuItemSelected: '#2F54EB',
      colorTextMenuSelected: 'rgb(255,255,255)',
      colorTextMenu: 'rgba(107,107,107,0.9)',
      colorTextMenuSecondary: 'rgb(255,255,255)',
      colorTextMenuActive: '#2F54EB',
    },
  },
};

export default Settings;
