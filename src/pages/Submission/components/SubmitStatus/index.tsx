import { CheckCircleOutlined, CloseCircleOutlined, LoadingOutlined } from '@ant-design/icons';
import { message, Popconfirm, Tag } from 'antd';
import React, { useState } from 'react';

interface Props {
  status: number;
}

const SubmitStatus: React.FC<Props> = (props) => {
  const { status } = props;
  const [open, setOpen] = useState(false);
  const [condition, setCondition] = useState(status !== 3);

  const tagColor = ['rgba(255,144,92,0.54)', '#1192ff', '#61d505', '#ff4a4a'];
  const content = ['队列中', '判题中', '已完成', '已失败'];
  const tagIcon = [
    <LoadingOutlined />,
    <LoadingOutlined />,
    <CheckCircleOutlined />,
    <CloseCircleOutlined />,
  ];

  const confirm = () => {
    setOpen(false);
    switch (status) {
      case 0:
        message.info(content[status]);
        break;
      case 1:
        message.loading(content[status]);
        break;
      case 2:
        message.success(content[status]);
        break;
      case 3:
        // todo 重新执行
        message.error(content[status] + '，尝试重新执行！');
        break;
    }
  };

  const cancel = () => {
    setOpen(false);
    message.info('已取消重新执行操作');
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      setOpen(newOpen);
      return;
    }
    // Determining condition before show the popconfirm.
    console.log(condition);
    if (condition) {
      confirm(); // next step
    } else {
      setOpen(newOpen);
    }
  };

  return (
    <>
      <Popconfirm
        title="操作"
        description="是否重新执行这条提交？"
        open={open}
        onOpenChange={handleOpenChange}
        onConfirm={confirm}
        onCancel={cancel}
        okText="执行"
        cancelText="取消"
        arrow={false}
      >
        <Tag color={tagColor[status]} icon={tagIcon[status]} />
      </Popconfirm>
    </>
  );
};

export default SubmitStatus;
