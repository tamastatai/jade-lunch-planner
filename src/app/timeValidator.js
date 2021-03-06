export const timezoneOffset = () => {
  const date = new Date();
  return date.getTimezoneOffset();
};

export const toLocalTime = (time, tzOffset) => {
  const formatOptions = { minute: '2-digit', hour: '2-digit' },
        localOffset = timezoneOffset();

  const today = new Date(),
        year = 1900 + today.getYear(),
        month = today.getMonth(),
        day = today.getDate();

  const planHour = time.split(':', 1)[0],
        planMin = time.split(':', 2)[1];

  const newDate = new Date(year, month, day, planHour, planMin),
        newUTS = newDate.getTime();

  const validTime = new Date(newUTS + (tzOffset * 60000) - (localOffset * 60000)).toLocaleTimeString('en-GB', formatOptions);

  const hour = validTime.split(':', 1)[0],
        minute = validTime.split(':', 2)[1];

  return `${hour}:${minute}`;
};
