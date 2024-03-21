import { QuestionData } from '@/pages/Question/DoOnline';
import {
  CalendarTwoTone,
  CarryOutTwoTone,
  FileTextTwoTone,
  FundTwoTone,
  LikeOutlined,
  MessageOutlined,
  QuestionCircleOutlined,
  ShareAltOutlined,
  StarOutlined,
} from '@ant-design/icons';
import { ProCard } from '@ant-design/pro-components';
import { Tabs } from '@arco-design/web-react';
import { IconExpand, IconLeft, IconRight, IconShrink } from '@arco-design/web-react/icon';
import { TabPaneProps } from '@arco-design/web-react/lib/Tabs';
import { Button, Divider, Space, Tooltip } from 'antd';
import type { Identifier, XYCoord } from 'dnd-core';
import React, { useContext, useRef, useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import '../styles.css';
import QuestionContent from './components/QuestionContent';

interface Props {
  updateFullScreen: (value: boolean) => void;
  updateFolded?: (value: boolean) => void;
  folded?: boolean;
  fullScreen: boolean;
}

const { TabPane } = Tabs;

interface DragItem {
  index: number;
}

interface WrapTabNodeProps {
  index: number;
  moveTabNode: (dragIndex: number, hoverIndex: number) => void;
  children: React.ReactNode;
}

const initTabs: (TabPaneProps & { key: React.Key })[] = [
  {
    key: 'question',
    title: (
      <>
        <FileTextTwoTone twoToneColor={'#165DFF'} /> {' 题目'}
      </>
    ),
  },
  {
    key: 'answer',
    title: (
      <>
        <CarryOutTwoTone twoToneColor={'#165DFF'} />
        {' 题解'}
      </>
    ),
  },
  {
    key: 'rank',
    title: (
      <>
        <FundTwoTone twoToneColor={'#165DFF'} />
        {' 排行'}
      </>
    ),
  },
  {
    key: 'submit',
    title: (
      <>
        <CalendarTwoTone twoToneColor={'#165DFF'} />
        {' 提交记录'}
      </>
    ),
  },
];

const WrapTabNode = (props: WrapTabNodeProps) => {
  const { index, moveTabNode, children, ...elseProps } = props;

  const ref = useRef<HTMLDivElement>(null);

  const [{ handlerId }, drop] = useDrop<DragItem, void, { handlerId: Identifier | null }>({
    accept: 'DND_NODE',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;

      const clientOffset = monitor.getClientOffset();
      const hoverClientX = (clientOffset as XYCoord).x - hoverBoundingRect.left;

      if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
        return;
      }

      moveTabNode(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [, drag] = useDrag({
    type: 'DND_NODE',
    item: () => {
      return { index };
    },
  });

  drag(drop(ref));

  return (
    <div ref={ref} data-handler-id={handlerId} {...elseProps}>
      {children}
    </div>
  );
};

const QuestionView: React.FC<Props> = (props) => {
  const { data, loading } = useContext(QuestionData);
  const { updateFullScreen, updateFolded, folded, fullScreen } = props;

  const [tabs, setTabs] = useState(initTabs);

  const [activeTab, setActiveTab] = useState(initTabs[0].key);

  const moveTabNode = (dragIndex: number, hoverIndex: number) =>
    setTabs((prevTabs) => {
      const newCards = [...prevTabs];
      newCards.splice(hoverIndex, 0, ...newCards.splice(dragIndex, 1));

      return newCards;
    });

  const foldLeftView = () => {
    updateFolded?.(true);
  };

  const expendLeftView = () => {
    updateFolded?.(false);
  };

  const openFullScreen = () => {
    updateFullScreen(true);
  };

  const closeFullScreen = () => {
    updateFullScreen(false);
  };

  return (
    <>
      <div style={fullScreen ? { height: '100%' } : { margin: '0 4px 0 0', height: '100%' }}>
        <ProCard
          title={
            !folded || fullScreen ? (
              <DndProvider backend={HTML5Backend}>
                <Tabs
                  style={{ borderRadius: 5 }}
                  type={'capsule'}
                  defaultActiveTab={activeTab as string}
                  onClickTab={(key) => {
                    setActiveTab(key);
                  }}
                >
                  {tabs.map((tabPane, index) => (
                    <TabPane
                      key={tabPane.key}
                      title={
                        <WrapTabNode key={index} index={index} moveTabNode={moveTabNode}>
                          {tabPane.title}
                        </WrapTabNode>
                      }
                    ></TabPane>
                  ))}
                </Tabs>
              </DndProvider>
            ) : (
              <></>
            )
          }
          extra={
            !fullScreen && !folded ? (
              <Space>
                <Tooltip title="全屏" placement="bottom" arrow={false}>
                  <Button type="text" icon={<IconExpand />} onClick={openFullScreen} />
                </Tooltip>
                <Tooltip title="折叠" placement="bottom" arrow={false}>
                  <Button type="text" icon={<IconLeft />} onClick={foldLeftView} />
                </Tooltip>
              </Space>
            ) : (
              fullScreen && (
                <Tooltip title="还原" placement="bottom" arrow={false}>
                  <Button type="text" icon={<IconShrink />} onClick={closeFullScreen} />
                </Tooltip>
              )
            )
          }
          actions={
            !folded || fullScreen
              ? [
                  <>
                    <Button
                      style={{
                        margin: 4,
                        color: 'rgb(128,128,128)',
                        fontFamily: 'var(--content-font-family)',
                        fontSize: 16,
                      }}
                      type={'text'}
                      icon={<LikeOutlined />}
                    >
                      {' ' + data?.thumbNum}
                    </Button>
                    <Button
                      style={{
                        margin: 4,
                        color: 'rgb(128,128,128)',
                        fontSize: 16,
                      }}
                      type={'text'}
                      icon={<MessageOutlined />}
                    >
                      {' ' + 114.5 + 'K'}
                    </Button>
                    <Divider type={'vertical'} />
                    <Button
                      style={{
                        margin: 4,
                        color: 'rgb(128,128,128)',
                        fontSize: 16,
                      }}
                      type={'text'}
                      icon={<StarOutlined />}
                    ></Button>
                    <Button
                      style={{
                        margin: 4,
                        color: 'rgb(128,128,128)',
                        fontSize: 16,
                      }}
                      type={'text'}
                      icon={<ShareAltOutlined />}
                    ></Button>
                    <Button
                      style={{
                        margin: 4,
                        color: 'rgb(128,128,128)',
                        fontSize: 16,
                      }}
                      type={'text'}
                      icon={<QuestionCircleOutlined />}
                    ></Button>
                  </>,
                ]
              : null
          }
          style={{
            height: '100%',
            width: '100%',
            overflow: 'hidden',
          }}
          headStyle={{
            padding: folded ? 0 : 4,
            fontFamily: 'var(--heading-font-family)',
          }}
          bodyStyle={
            !folded
              ? {
                  padding: 4,
                  overflowY: 'auto',
                  fontFamily: 'var(--content-font-family)',
                }
              : {
                  padding: '4px 0',
                  display: 'flex',
                  flexDirection: 'column',
                  fontFamily: 'var(--content-font-family)',
                }
          }
          bordered={true}
          loading={loading}
        >
          {folded && !fullScreen ? (
            <>
              <DndProvider backend={HTML5Backend}>
                <Tabs
                  id={'vertical-tab-pane'}
                  tabPosition={'left'}
                  style={{ borderRadius: 5, width: '100%', margin: '0 auto' }}
                  type={'capsule'}
                  defaultActiveTab={activeTab as string}
                  onClickTab={(key) => {
                    setActiveTab(key);
                  }}
                >
                  {tabs.map((tabPane, index) => (
                    <TabPane
                      key={tabPane.key}
                      title={
                        <WrapTabNode key={index} index={index} moveTabNode={moveTabNode}>
                          <div style={{ writingMode: 'vertical-rl' }}>{tabPane.title}</div>
                        </WrapTabNode>
                      }
                      style={{ width: '100%' }}
                    ></TabPane>
                  ))}
                </Tabs>
              </DndProvider>
              <div style={{ textAlign: 'center', marginTop: 'auto' }}>
                <Space direction={'vertical'}>
                  <Tooltip title="全屏" placement={'right'} arrow={false}>
                    <Button type="text" icon={<IconExpand />} onClick={openFullScreen}></Button>
                  </Tooltip>
                  <Tooltip title="展开" placement={'right'} arrow={false}>
                    <Button type="text" icon={<IconRight />} onClick={expendLeftView}></Button>
                  </Tooltip>
                </Space>
              </div>
            </>
          ) : (
            <>
              <QuestionContent question={data as API.QuestionVO} />
            </>
          )}
        </ProCard>
      </div>
    </>
  );
};

export default QuestionView;
