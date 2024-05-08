import React from 'react';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

const CustomRangePicker = () => {
  return (
    <RangePicker
      showTime={{
        format: 'HH:mm',
        minuteStep: 30,
        use12Hours: true,
      }}
    />
  );
};

export default CustomRangePicker;
