import dayjs from 'dayjs';

const beautifyDay = (data:string)=>{
  const day = dayjs(data)
  const now = dayjs()
  if (day.isSame(now, 'day')) {
    return '今天';
  } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
    return '昨天';
  } else if (day.isSame(now.subtract(2, 'day'), 'day')) {
    return '前天';
  } else if (day.isSame(now, 'year')) {
    return day.format('M月D日');
  } else {
    return day.format('YYYY年M月D日');
  }
}

export {beautifyDay}