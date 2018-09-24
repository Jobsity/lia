// Internal functions (not exported)

const strTwoDigits = value => `${value < 10 ? '0' : ''}${value}`;

const formatMinsSecs = (timeInSecs) => {
  const mins = parseInt(timeInSecs / 60, 10);
  const secs = parseInt(timeInSecs % 60, 10);

  return `${strTwoDigits(mins)}:${strTwoDigits(secs)}`;
};

const formatHoursMinSecs = (timeInSecs) => {
  const hours = parseInt(timeInSecs / 3600, 10);

  return `${hours}:${formatMinsSecs(timeInSecs % 3600)}`;
};

const getFormattingFcn = (timeInSecs) => {
  if (timeInSecs < 3600) {
    return formatMinsSecs;
  }

  return formatHoursMinSecs;
};


// Exported functions

export const formatStartEnd = (start, end) => {
  const format = getFormattingFcn(end);

  return `${format(start)} / ${format(end)}`;
};
