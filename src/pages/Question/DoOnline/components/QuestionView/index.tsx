import { ProCard } from '@ant-design/pro-components';
import { Tabs } from '@arco-design/web-react';
import { IconExpand, IconLeft, IconRight } from '@arco-design/web-react/icon';
import { TabPaneProps } from '@arco-design/web-react/lib/Tabs';
import { Button, Space, Tooltip } from 'antd';
import type { Identifier, XYCoord } from 'dnd-core';
import React, { useRef, useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './styles.css';

interface Props {
  updateLeftSize: (newSize: number | string) => void;
  minLeftSize: string;
  initLeftSize: number;
  folded: boolean;
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
  { key: 'question', title: '题目' },
  { key: 'answer', title: '题解' },
  { key: 'comment', title: '评论' },
  { key: 'rank', title: '排行' },
  { key: 'submit', title: '提交记录' },
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
  const { updateLeftSize, minLeftSize, initLeftSize, folded } = props;

  const [tabs, setTabs] = useState(initTabs);
  const moveTabNode = (dragIndex: number, hoverIndex: number) =>
    setTabs((prevTabs) => {
      const newCards = [...prevTabs];
      newCards.splice(hoverIndex, 0, ...newCards.splice(dragIndex, 1));

      return newCards;
    });

  const foldLeftView = () => {
    updateLeftSize(minLeftSize);
  };

  const expendLeftView = () => {
    updateLeftSize(initLeftSize);
  };

  return (
    <>
      <div style={{ margin: '0 4px 0 0', height: '100%' }}>
        <ProCard
          title={
            !folded ? (
              <DndProvider backend={HTML5Backend}>
                <Tabs style={{ borderRadius: 5 }} type={'capsule'} defaultActiveTab={'question'}>
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
            !folded ? (
              <>
                <Space>
                  <Tooltip title="全屏" placement={'bottom'} arrow={false}>
                    <Button type="text" icon={<IconExpand />}></Button>
                  </Tooltip>
                  <Tooltip title="折叠" placement={'bottom'} arrow={false}>
                    <Button type="text" icon={<IconLeft />} onClick={foldLeftView}></Button>
                  </Tooltip>
                </Space>
              </>
            ) : (
              <></>
            )
          }
          style={{ height: '100%', width: '100%', overflowX: 'hidden' }}
          headStyle={{
            padding: folded ? 0 : 4,
          }}
          bodyStyle={
            !folded
              ? {
                  padding: 4,
                  overflowY: 'auto',
                }
              : {
                  padding: '4px 0',
                  display: 'flex',
                  flexDirection: 'column',
                }
          }
          bordered={true}
        >
          {folded ? (
            <>
              <DndProvider backend={HTML5Backend}>
                <Tabs
                  id={'vertical-tab-pane'}
                  tabPosition={'left'}
                  style={{ borderRadius: 5, width: '100%', margin: '0 auto' }}
                  type={'capsule'}
                  defaultActiveTab={'question'}
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
                    <Button type="text" icon={<IconExpand />}></Button>
                  </Tooltip>
                  <Tooltip title="展开" placement={'right'} arrow={false}>
                    <Button type="text" icon={<IconRight />} onClick={expendLeftView}></Button>
                  </Tooltip>
                </Space>
              </div>
            </>
          ) : (
            <>
              <Button style={{ height: 200 }} />
              <Button style={{ height: 200 }} />
              <Button style={{ height: 1200 }} />
              <Button style={{ height: 1200 }} />
              <Button style={{ height: 1200 }} />
              <Button style={{ height: 1200 }} />
              <Button style={{ height: 1200 }} />
              <Button style={{ height: 1200 }} />
              <Button style={{ height: 1200 }} />
              <Button type={'primary'} style={{ height: 1200 }} />
              <Button type={'primary'} style={{ height: 1200 }} />
              <Button type={'primary'} style={{ height: 1200 }} />
              <Button type={'primary'} style={{ height: 1200 }} />
              <Button type={'primary'} style={{ height: 1200 }} />
              <Button style={{ height: 1200 }} />
            </>
          )}
        </ProCard>
      </div>
    </>
  );
};

export default QuestionView;
