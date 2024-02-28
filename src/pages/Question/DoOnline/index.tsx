import { AvatarDropdown } from '@/components/RightContent/AvatarDropdown';
import MainContent from '@/pages/Question/DoOnline/components/MainContent';
import { useParams } from '@@/exports';
import {
  CaretLeftOutlined,
  CaretRightOutlined,
  FireTwoTone,
  LayoutOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Button, Divider, Drawer, Flex, Layout, Row, Space, Tooltip } from 'antd';
import React, { useEffect, useState } from 'react';

const DoOnlinePage: React.FC = () => {
  const { Header, Content, Footer } = Layout;
  const [open, setOpen] = useState(false);

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const contentHeight = windowHeight - 60;

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const params = useParams();

  const RandomIcon = (
    <svg
      t="1708769850912"
      className="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="31122"
      width="16"
      height="16"
      style={{ marginTop: '3px' }}
    >
      <path
        d="M768 763.008V682.666667l213.333333 128-213.333333 128v-89.173334a384 384 0 0 1-298.538667-228.906666L469.333333 620.373333l-0.128 0.256A384 384 0 0 1 116.266667 853.333333H85.333333v-85.333333h30.933334a298.666667 298.666667 0 0 0 274.517333-181.034667L422.912 512l-32.128-74.965333A298.666667 298.666667 0 0 0 116.266667 256H85.333333V170.666667h30.933334a384 384 0 0 1 352.938666 232.746666L469.333333 403.626667l0.128-0.256A384 384 0 0 1 768 174.506667V85.333333l213.333333 128-213.333333 128V260.992a298.666667 298.666667 0 0 0-220.117333 176.042667L515.754667 512l32.128 74.965333A298.666667 298.666667 0 0 0 768 763.008z"
        p-id="31123"
        fill="#000000"
      ></path>
    </svg>
  );

  const FireIcon = (
    <svg
      t="1709058868804"
      className="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="23167"
      width="16"
      height="16"
    >
      <path
        d="M398.155294 68.367059a40.176941 40.176941 0 0 1 42.586353 5.180235c5.240471 4.336941 11.324235 9.095529 17.889882 14.336 39.875765 31.442824 100.833882 79.631059 147.094589 147.395765 28.310588 41.502118 50.718118 94.991059 65.837176 137.938823 1.987765 5.421176 3.794824 10.842353 5.541647 16.022589 9.035294-15.239529 16.504471-34.816 19.516235-59.873883a40.176941 40.176941 0 0 1 74.752-15.119059c12.047059 21.082353 20.239059 35.659294 28.310589 54.031059 7.830588 18.010353 15.179294 39.032471 26.624 73.306353 24.636235 74.089412 26.985412 122.88 26.985411 167.032471 0 190.945882-154.383059 339.365647-341.293176 339.365647-185.765647 0-341.353412-140.890353-341.353412-332.980706 0-42.405647 4.457412-108.363294 36.623059-160.647529 21.925647-35.599059 37.767529-52.645647 57.103059-73.366589 5.722353-6.144 11.745882-12.589176 18.311529-19.937882l13.914353-15.420235c7.589647-8.372706 12.107294-13.372235 16.805647-19.395765 6.023529-7.890824 12.167529-17.648941 24.274824-40.478118 9.818353-18.371765 19.395765-48.609882 26.503529-83.546353a516.457412 516.457412 0 0 0 10.962824-97.581176c0-15.480471 8.975059-29.575529 22.949647-36.261647z m50.898824 115.169882a669.214118 669.214118 0 0 1-6.144 34.755765c-7.770353 37.948235-19.275294 76.860235-34.334118 105.170823-12.649412 23.913412-21.263059 38.369882-31.503059 51.681883-6.746353 8.794353-14.456471 17.287529-23.491765 27.226353l-10.962823 12.167529m106.435765-231.002353c30.840471 26.142118 63.367529 57.524706 90.352941 97.039059 22.467765 32.888471 42.164706 78.667294 56.44047 119.265882 7.047529 19.998118 12.528941 37.948235 16.203295 51.440942a339.666824 339.666824 0 0 1 4.698352 19.395764 40.176941 40.176941 0 0 0 64.451765 28.912941l3.011765-2.228705c10.721882-7.951059 35.117176-26.142118 56.44047-58.428236l9.456942 28.009412c21.082353 63.488 22.889412 103.183059 22.889411 141.673412 0 145.408-117.278118 259.011765-260.999529 259.011764-144.926118 0-260.999529-108.303059-260.999529-252.626823 0-40.116706 4.999529-86.497882 24.69647-118.543059 17.468235-28.370824 27.587765-39.273412 45.296941-58.368 6.144-6.505412 13.131294-14.034824 21.684706-23.552"
        fill="#FA8C16"
        p-id="23168"
      ></path>
      <path
        d="M442.910118 218.292706c2.349176-11.444706 4.397176-23.070118 6.144-34.755765 30.840471 26.142118 63.367529 57.524706 90.352941 97.039059 22.467765 32.888471 42.164706 78.667294 56.44047 119.265882 7.047529 19.998118 12.528941 37.948235 16.203295 51.380706a339.666824 339.666824 0 0 1 4.698352 19.456 40.176941 40.176941 0 0 0 64.512 28.912941l2.95153-2.228705c10.721882-7.951059 35.177412-26.142118 56.44047-58.428236l9.456942 28.009412c21.082353 63.488 22.889412 103.183059 22.889411 141.673412 0 145.408-117.217882 259.011765-260.999529 259.011764-144.926118 0-260.999529-108.303059-260.999529-252.626823 0-40.116706 4.999529-86.497882 24.69647-118.543059 17.468235-28.370824 27.587765-39.273412 45.357177-58.368 6.023529-6.505412 13.071059-14.034824 21.564235-23.552l10.962823-12.167529c9.035294-9.938824 16.745412-18.432 23.491765-27.226353 10.24-13.312 18.853647-27.768471 31.563294-51.681883 15.058824-28.310588 26.503529-67.222588 34.273883-105.170823z"
        fill="#FFE7BA"
        p-id="23169"
      ></path>
    </svg>
  );

  return (
    <>
      <Layout>
        <Content style={{ padding: '0 8px' }}>
          <Space direction="vertical" size={2} style={{ display: 'flex' }}>
            <Row style={{ margin: '8px 0' }}>
              <Flex style={{ width: '100%' }} justify={'space-between'} align={'center'}>
                <div>
                  <Button style={{ padding: 0, height: '68%' }} type="link" href={'/'}>
                    <img
                      alt={'logo'}
                      style={{ width: 30 }}
                      src={'https://bu.dusays.com/2024/02/22/65d708bbafd2a.png'}
                    />
                  </Button>
                  <Divider type="vertical" />
                  <Space>
                    <Button
                      style={{ height: '68%', fontSize: 16 }}
                      type="text"
                      icon={<MenuUnfoldOutlined />}
                      onClick={showDrawer}
                    >
                      题库
                    </Button>
                    <Drawer title="Basic Drawer" onClose={onClose} open={open} placement={'left'}>
                      <p>Some contents...</p>
                      <p>Some contents...</p>
                      <p>Some contents...</p>
                    </Drawer>
                    <Space.Compact block>
                      <Tooltip title="上一题" placement={'bottom'} arrow={false}>
                        <Button
                          style={{ height: '68%', fontSize: 16 }}
                          type="text"
                          icon={<CaretLeftOutlined />}
                        />
                      </Tooltip>
                      <Tooltip title="下一题" placement={'bottom'} arrow={false}>
                        <Button
                          style={{ height: '68%', fontSize: 16 }}
                          type="text"
                          icon={<CaretRightOutlined />}
                        />
                      </Tooltip>
                    </Space.Compact>
                    <Tooltip title="随机一题" placement={'bottom'} arrow={false}>
                      <Button style={{ height: '68%' }} type="text" icon={RandomIcon} />
                    </Tooltip>
                  </Space>
                </div>
                <Button type="primary">Primary</Button>
                <div>
                  <Space align={'center'}>
                    <Tooltip title="布局" placement={'bottom'} arrow={false}>
                      <Button style={{ height: '68%' }} type="text" icon={<LayoutOutlined />} />
                    </Tooltip>
                    <Tooltip title="设置" placement={'bottom'} arrow={false}>
                      <Button style={{ height: '68%' }} type="text" icon={<SettingOutlined />} />
                    </Tooltip>
                    <Tooltip title="今日打卡" placement={'bottom'} arrow={false}>
                      <Button
                        style={{ height: '68%' }}
                        type="text"
                        icon={<FireTwoTone twoToneColor="#F88A16" />}
                      />
                    </Tooltip>
                    <Button type="text" style={{ height: '68%' }}>
                      <AvatarDropdown menu={true} />
                    </Button>
                  </Space>
                </div>
              </Flex>
            </Row>
            <Row style={{ height: contentHeight }}>
              <MainContent />
            </Row>
          </Space>
        </Content>
      </Layout>
    </>
  );
};

export default DoOnlinePage;
