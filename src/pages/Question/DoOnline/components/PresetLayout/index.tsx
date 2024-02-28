import CodeView from '@/pages/Question/DoOnline/components/CodeView';
import DebugView from '@/pages/Question/DoOnline/components/DebugView';
import QuestionView from '@/pages/Question/DoOnline/components/QuestionView';
import { useParams } from '@@/exports';
import { ResizeBox } from '@arco-design/web-react';
import React, { useEffect, useRef, useState } from 'react';
import './styles.css';

const PresetLayout: React.FC = () => {
  const params = useParams();
  const minLeftSize = '54px';
  const initLeftSize = 0.504;
  const [leftSize, setLeftSize] = useState<number | string>(initLeftSize);
  const leftSizeRef = useRef<number | string>(initLeftSize);
  const [leftFolded, setLeftFolded] = useState<boolean>(false);

  const updateLeftSize = (newSize: number | string) => {
    leftSizeRef.current = newSize;
    setLeftSize(newSize);
  };

  useEffect(() => {
    let leftSizeValue;
    if (typeof leftSize === 'string') {
      leftSizeValue = parseFloat(leftSize?.replace('px', ''));
    }
    const minSizeValue = parseFloat(minLeftSize.replace('px', ''));

    if (Math.abs(leftSizeValue - minSizeValue) < 1e-6) {
      setLeftFolded(true);
    } else {
      setLeftFolded(false);
    }
  }, [leftSizeRef.current]);

  return (
    <ResizeBox.SplitGroup
      style={{ width: '100%', height: '99%' }}
      panes={[
        {
          content: (
            <QuestionView
              updateLeftSize={updateLeftSize}
              minLeftSize={minLeftSize}
              initLeftSize={initLeftSize}
              folded={leftFolded}
            />
          ),
          size: leftSize,
          min: minLeftSize,
          collapsible: {
            prev: true,
          },
          trigger: () => {
            return (
              <div className="resizebox-split-group-vertical-trigger">
                <div className="resizebox-split-group-vertical-trigger-icon"></div>
              </div>
            );
          },
        },
        {
          content: (
            <ResizeBox.SplitGroup
              direction="vertical"
              style={{ height: '100%' }}
              panes={[
                {
                  content: <CodeView />,
                  min: '64px',
                  trigger: () => {
                    return (
                      <div className="resizebox-split-group-horizontal-trigger">
                        <div className="resizebox-split-group-horizontal-trigger-icon"></div>
                      </div>
                    );
                  },
                },
                {
                  content: <DebugView />,
                  min: '64px',
                  trigger: () => {
                    return (
                      <div className="resizebox-split-group-horizontal-trigger">
                        <div className="resizebox-split-group-horizontal-trigger-icon"></div>
                      </div>
                    );
                  },
                },
              ]}
              key={'right'}
            ></ResizeBox.SplitGroup>
          ),
        },
      ]}
      onMoving={(e, size, activeIndex) => {
        leftSizeRef.current = size[activeIndex];
      }}
      onMovingEnd={() => {
        setLeftSize(leftSizeRef.current);
      }}
    ></ResizeBox.SplitGroup>
  );
};

export default PresetLayout;
