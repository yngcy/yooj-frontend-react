import { logo } from '@/assets/logo.png';
import Footer from '@/components/Footer';
import MarketDropDown from '@/components/MarketDropDown';
import MessageDropDown from '@/components/MessageDropDown';
import SearchInput from '@/components/SearchInput';
import { getLoginUserUsingGET } from '@/services/yooj-user/userController';
import '@arco-design/web-react/dist/css/arco.css';
import type { RunTimeLayoutConfig } from '@umijs/max';
import { history } from '@umijs/max';
import 'bytemd/dist/index.css';
import defaultSettings from '../config/defaultSettings';
import { AvatarDropdown } from './components/RightContent/AvatarDropdown';
import { requestConfig } from './requestConfig';

const loginPath = '/user/login';

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<InitialState> {
  const initialState: InitialState = {
    currentUser: undefined,
  };
  // 如果不是登录页面，执行
  const { location } = history;
  if (location.pathname !== loginPath) {
    try {
      const res = await getLoginUserUsingGET();
      initialState.currentUser = res.data;
    } catch (error: any) {
      // 如果未登录
    }

    // 模拟登录用户
    // const mockUser: API.LoginUserVO = {
    //   userAvatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
    //   userName: 'youngcy',
    //   userRole: 'admin',
    // };
    // initialState.currentUser = mockUser;
  }
  return initialState;
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
// @ts-ignore
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    logo,
    avatarProps: {
      render: () => {
        return <AvatarDropdown menu={true} />;
      },
    },
    waterMarkProps: {
      content: initialState?.currentUser?.userName,
    },
    footerRender: () => <Footer />,
    menuHeaderRender: undefined,
    actionsRender: (props) => {
      if (props.isMobile) return [];
      if (typeof window === 'undefined') return [];
      return [
        <SearchInput key="SearchInput" />,
        <MarketDropDown key="MarketDropDown" />,
        <MessageDropDown key="MessageDropDown" />,
      ];
    },
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    ...defaultSettings,
  };
};

/**
 * @name request 配置，可以配置错误处理
 * 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
 * @doc https://umijs.org/docs/max/request#配置
 */
export const request = requestConfig;
