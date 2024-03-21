import { ProCard, ProForm, ProFormList, ProFormTextArea } from '@ant-design/pro-components';
import { Button, Flex } from 'antd';
import React from 'react';

const CaseFormList: React.FC = () => {
  return (
    <>
      <div style={{ marginTop: 8 }}>
        <ProForm submitter={false}>
          <ProFormList
            name={['input', 'output']}
            itemContainerRender={(doms) => {
              return <ProForm.Group>{doms}</ProForm.Group>;
            }}
            alwaysShowItemLabel
            itemRender={({ listDom, action }, { index }) => {
              console.log(listDom);
              return (
                <ProCard
                  title={`Case ${index}`}
                  bordered
                  collapsible
                  extra={action}
                  style={{ marginBlockEnd: 8 }}
                  bodyStyle={{ paddingBlockEnd: 0 }}
                >
                  {listDom}
                </ProCard>
              );
            }}
          >
            {(f, index, action) => {
              console.log(f, index, action);
              return (
                <>
                  <Flex justify={'space-between'} align={'center'}>
                    <ProFormTextArea
                      fieldProps={{ style: { width: '20vw' } }}
                      name="input"
                      label="Input"
                    />
                    <ProFormTextArea
                      fieldProps={{ style: { width: '20vw' } }}
                      name="output"
                      label="Output"
                    />

                    <Button
                      type="dashed"
                      key="clear"
                      onClick={() => {
                        action.setCurrentRowData({
                          input: undefined,
                          output: undefined,
                        });
                      }}
                    >
                      清空此项
                    </Button>
                  </Flex>
                </>
              );
            }}
          </ProFormList>
        </ProForm>
      </div>
    </>
  );
};

export default CaseFormList;
