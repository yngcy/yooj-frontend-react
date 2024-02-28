import { Button, Popover } from 'antd';
import Title from 'antd/es/typography/Title';
import React, { useState } from 'react';

interface Props {
  judgeInfo: any;
}

const JudgeInfo: React.FC<Props> = (props) => {
  const { judgeInfo } = props;

  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleHoverChange = (open: boolean) => {
    setHovered(open);
    setClicked(false);
  };

  const handleClickChange = (open: boolean) => {
    setHovered(false);
    setClicked(open);
  };

  const hoverContent = <div>查看运行信息</div>;
  const clickContent = (
    <div>
      执行时间：{judgeInfo.time} ms
      <br />
      消耗内存：{judgeInfo.memory} MB
    </div>
  );

  const customColor = (result: string) => {
    switch (result) {
      case 'Accepted':
        return '#00b42a';
      case 'Wrong Answer':
        return '#f62727';
      case 'Compile Error':
        return '#ffb400';
      case 'Memory Limit Exceeded':
        return '#b71de8';
      case 'Presentation Error':
        return '#165dff';
      case 'Time Limit Exceeded':
        return '#ff7d00';
      case 'Output Limit Exceeded':
        return '#eb0aa4';
      case 'Dangerous Operation':
        return '#000000';
      case 'Runtime Error':
        return '#0fc6c2';
      case 'System Error':
        return '#86909c';
      case 'Judging':
        return '#168cff';
      default:
        return 'gray';
    }
  };

  return judgeInfo.result ? (
    <>
      <Popover
        style={{ width: 500 }}
        content={judgeInfo.result ? hoverContent : null}
        trigger="hover"
        open={hovered}
        onOpenChange={handleHoverChange}
        arrow={false}
        title={!judgeInfo.result ? '' : null}
      >
        <Popover
          content={
            <div>
              <Title level={5}>运行信息</Title>
              {clickContent}
            </div>
          }
          trigger="click"
          open={clicked}
          onOpenChange={handleClickChange}
        >
          <Button
            type={'primary'}
            style={{
              backgroundColor: customColor(judgeInfo.result),
              display: 'flex',
              alignItems: 'center',
              fontSize: '16px',
              fontWeight: '600',
            }}
          >
            {judgeInfo.result}
          </Button>
        </Popover>
      </Popover>
    </>
  ) : (
    <></>
  );
};

export default JudgeInfo;
