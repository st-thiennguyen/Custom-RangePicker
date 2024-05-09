import React, { useState } from 'react';
import DatePicker from 'antd/es/date-picker';
import ConfigProvider from 'antd/es/config-provider';
import Dropdown from 'antd/es/dropdown';
import locale from 'antd/lib/locale/ja_JP';
// import moment from 'moment';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';

const { RangePicker } = DatePicker;

dayjs.locale('ja');

const TimeInputItems = ({ title, onClick }) => {
  return <p onClick={() => onClick(title)}>{title}</p>;
};

const CustomRangePicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [isChooseStartTime, setIsChooseStartTime] = useState(true);
  const [startTime, setStartTime] = useState('00:00');
  const [endTime, setEndTime] = useState('00:00');

  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current >= dayjs().endOf('day');
  };

  const items = [
    {
      label: (
        <TimeInputItems
          onClick={isChooseStartTime ? setStartTime : setEndTime}
          title='00:00'
        />
      ),
      value: '00:00',
      key: 1,
    },
    {
      label: (
        <TimeInputItems
          onClick={isChooseStartTime ? setStartTime : setEndTime}
          title='00:30'
        />
      ),
      key: 2,
    },
    {
      label: (
        <TimeInputItems
          onClick={isChooseStartTime ? setStartTime : setEndTime}
          title='01:00'
        />
      ),
      key: 3,
    },
    {
      label: (
        <TimeInputItems
          onClick={isChooseStartTime ? setStartTime : setEndTime}
          title='01:30'
        />
      ),
      key: 4,
    },
  ];

  return (
    <>
      <ConfigProvider locale={locale}>
        <RangePicker
          onClick={() => setIsOpen(true)}
          open={isOpen}
          value={value}
          format='YYYY-MM-DD'
          disabledDate={disabledDate}
          renderExtraFooter={() => (
            <div className='flex flex-col'>
              <div className='flex justify-between items-center gap-9'>
                <div className='flex-1 px-8 py-4'>
                  <div
                    className='flex justify-center gap-3'
                    onClick={() => setIsChooseStartTime(true)}
                  >
                    <span>開始日の時間</span>
                    <Dropdown
                      className='w-fit border px-3 rounded-sm'
                      menu={{ items }}
                      trigger={['click']}
                      placement='bottom'
                    >
                      <div>{startTime}</div>
                    </Dropdown>
                  </div>
                </div>
                <div className='flex-1 px-8 py-4'>
                  <div
                    className='flex justify-center gap-3'
                    onClick={() => setIsChooseStartTime(false)}
                  >
                    <span>終了日時</span>
                    <Dropdown
                      className='w-fit border px-3 rounded-sm'
                      menu={{ items }}
                      trigger={['click']}
                      placement='bottom'
                    >
                      <div>{endTime}</div>
                    </Dropdown>
                  </div>
                </div>
              </div>
              <div className='flex justify-end px-8 py-4 gap-6'>
                <button className='text-[#2196F3]'>キャンセル</button>
                <button
                  className='text-[#2196F3]'
                  onClick={() => setIsOpen(false)}
                >
                  OK
                </button>
              </div>
            </div>
          )}
          onChange={(value) => {
            setValue(value);
          }}
          onOk={() => {
            setIsOpen(false);
          }}
        />
      </ConfigProvider>
    </>
  );
};

export default CustomRangePicker;
