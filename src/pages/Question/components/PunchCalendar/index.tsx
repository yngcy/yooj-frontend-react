import { Calendar, CalendarProps, Col, Progress, Row, Select, Typography } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/zh-cn';
import dayLocaleData from 'dayjs/plugin/localeData';
import React from 'react';

dayjs.extend(dayLocaleData);

const PunchCalendar: React.FC = () => {
  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  return (
    <>
      <Calendar
        fullscreen={false}
        onPanelChange={onPanelChange}
        headerRender={({ value, type, onChange, onTypeChange }) => {
          const start = 0;
          const end = 12;
          const monthOptions = [];

          let current = value.clone();
          const localeData = value.localeData();
          const months = [];
          for (let i = 0; i < 12; i++) {
            current = current.month(i);
            months.push(localeData.monthsShort(current));
          }

          for (let i = start; i < end; i++) {
            monthOptions.push(
              <Select.Option key={i} value={i} className="month-item">
                {months[i]}
              </Select.Option>,
            );
          }
          const month = value.month();

          return (
            <>
              <Row align="middle" gutter={8}>
                <Col>
                  <Typography.Title level={4}>每日打卡</Typography.Title>
                </Col>
                <Col>
                  <Select
                    size="small"
                    dropdownMatchSelectWidth={false}
                    value={month}
                    onChange={(newMonth) => {
                      const now = value.clone().month(newMonth);
                      onChange(now);
                    }}
                  >
                    {monthOptions}
                  </Select>
                </Col>
                <Col style={{ marginLeft: 'auto', marginRight: 0 }}>
                  <Progress
                    type="circle"
                    percent={75}
                    size={20}
                    strokeWidth={20}
                    format={(percent) => `已连续打卡 ${percent} 天，继续加油~`}
                  />
                </Col>
              </Row>
            </>
          );
        }}
      />
    </>
  );
};

export default PunchCalendar;
