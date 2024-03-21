import CodeView from '@/pages/Question/DoOnline/components/CodeView';
import DebugView from '@/pages/Question/DoOnline/components/DebugView';
import QuestionView from '@/pages/Question/DoOnline/components/QuestionView';
import { ResizeBox } from '@arco-design/web-react';
import React, { useEffect, useRef, useState } from 'react';
import './styles.css';

const useAreaControl = (key: string, minSize: string, initSize: number) => {
  const [size, setSizeState] = useState<number | string>(initSize);
  const sizeRef = useRef<number | string>(initSize);
  const [folded, setFolded] = useState<boolean>(false);
  const [fullScreen, setFullScreenState] = useState<boolean>(false);

  const isMinValue = (size: string | number): boolean => {
    let sizeValue;
    if (typeof size === 'string') {
      sizeValue = parseFloat(size?.replace('px', ''));
    }
    const minSizeValue = parseFloat(minSize.replace('px', ''));

    return Math.abs(sizeValue - minSizeValue) < 1e-6;
  };

  useEffect(() => {
    let sizeValue;
    if (typeof size === 'string') {
      sizeValue = parseFloat(size?.replace('px', ''));
    }
    const minSizeValue = parseFloat(minSize.replace('px', ''));

    if (Math.abs(sizeValue - minSizeValue) < 1e-6) {
      setFolded(true);
    } else {
      setFolded(false);
    }
  }, [sizeRef.current]);

  useEffect(() => {
    if (folded) {
      setSizeState(minSize);
    } else {
      if (isMinValue(sizeRef.current)) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        updateAreaSize('480px');
      } else {
        setSizeState(sizeRef.current);
      }
    }
  }, [folded]);

  const updateAreaSize = (newSize: number | string) => {
    sizeRef.current = newSize;
    setSizeState(newSize);
  };

  const updateFullScreen = (value: boolean) => {
    setFullScreenState(value);
  };

  const updateFolded = (value: boolean) => {
    setFolded(value);
  };

  return { size, updateAreaSize, updateFullScreen, updateFolded, fullScreen, folded, sizeRef };
};

const PresetLayout: React.FC = () => {
  const leftMinSize = '54px';
  const leftInitSize = 0.504;
  const leftAreaControl = useAreaControl('left', leftMinSize, leftInitSize);

  const topMinSize = '48px';
  const topInitSize = 0.68;
  const topAreaControl = useAreaControl('top', topMinSize, topInitSize);

  const bottomMinSize = '48px';
  const bottomInitSize = 1 - topInitSize;
  const bottomAreaControl = useAreaControl('bottom', bottomMinSize, bottomInitSize);

  const handleToggleTopFolded = () => {
    topAreaControl.updateFolded(!topAreaControl.folded);
    if (!topAreaControl.folded && bottomAreaControl.folded) {
      bottomAreaControl.updateFolded(false); // Ensure only one can be true
    }
  };

  const handleToggleBottomFolded = () => {
    bottomAreaControl.updateFolded(!bottomAreaControl.folded);
    if (!bottomAreaControl.folded && topAreaControl.folded) {
      topAreaControl.updateFolded(false); // Ensure only one can be true
    }
  };

  if (leftAreaControl.fullScreen) {
    return (
      <QuestionView
        updateFullScreen={leftAreaControl.updateFullScreen}
        fullScreen={leftAreaControl.fullScreen}
      />
    );
  }

  if (topAreaControl.fullScreen) {
    return (
      <CodeView
        updateFullScreen={topAreaControl.updateFullScreen}
        fullScreen={topAreaControl.fullScreen}
      />
    );
  }

  if (bottomAreaControl.fullScreen) {
    return (
      <DebugView
        updateFullScreen={bottomAreaControl.updateFullScreen}
        fullScreen={bottomAreaControl.fullScreen}
      />
    );
  }

  return (
    <ResizeBox.SplitGroup
      style={{ width: '100%', height: '100%' }}
      panes={[
        {
          content: (
            <QuestionView
              updateFullScreen={leftAreaControl.updateFullScreen}
              updateFolded={leftAreaControl.updateFolded}
              folded={leftAreaControl.folded}
              fullScreen={leftAreaControl.fullScreen}
            />
          ),
          size: leftAreaControl.size,
          min: leftMinSize,
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
                  content: (
                    <CodeView
                      updateFolded={handleToggleTopFolded}
                      updateFullScreen={topAreaControl.updateFullScreen}
                      fullScreen={topAreaControl.fullScreen}
                      folded={topAreaControl.folded}
                    />
                  ),
                  min: topMinSize,
                  size:
                    topAreaControl.folded && !topAreaControl.folded
                      ? topMinSize
                      : topAreaControl.size === '480px' && bottomAreaControl.size !== bottomMinSize
                      ? '480px'
                      : bottomMinSize === bottomAreaControl.size
                      ? undefined
                      : topAreaControl.size,
                  trigger: () => {
                    return (
                      <div className="resizebox-split-group-horizontal-trigger">
                        <div className="resizebox-split-group-horizontal-trigger-icon"></div>
                      </div>
                    );
                  },
                },
                {
                  content: (
                    <DebugView
                      updateFolded={handleToggleBottomFolded}
                      updateFullScreen={bottomAreaControl.updateFullScreen}
                      fullScreen={bottomAreaControl.fullScreen}
                      folded={bottomAreaControl.folded}
                    />
                  ),
                  min: bottomMinSize,
                  size:
                    bottomAreaControl.folded && !topAreaControl.folded
                      ? bottomMinSize
                      : bottomAreaControl.size === '480px' && topAreaControl.size !== topMinSize
                      ? '480px'
                      : undefined,
                  trigger: () => {
                    return (
                      <div className="resizebox-split-group-horizontal-trigger">
                        <div className="resizebox-split-group-horizontal-trigger-icon"></div>
                      </div>
                    );
                  },
                },
              ]}
              onMoving={(e, size, activeIndex) => {
                topAreaControl.sizeRef.current = size[activeIndex];
                bottomAreaControl.sizeRef.current = size[activeIndex + 1];
              }}
              onMovingEnd={() => {
                topAreaControl.updateAreaSize(topAreaControl.sizeRef.current);
                bottomAreaControl.updateAreaSize(bottomAreaControl.sizeRef.current);
              }}
              key={'right'}
            ></ResizeBox.SplitGroup>
          ),
        },
      ]}
      onMoving={(e, size, activeIndex) => {
        leftAreaControl.sizeRef.current = size[activeIndex];
      }}
      onMovingEnd={() => {
        leftAreaControl.updateAreaSize(leftAreaControl.sizeRef.current);
      }}
    ></ResizeBox.SplitGroup>
  );
};

export default PresetLayout;
