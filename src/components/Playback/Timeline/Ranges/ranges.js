const createRange = (type, start, end = start) => ({
  end,
  start,
  type,
});

export default (events) => {
  const ranges = [createRange('break', 0)];

  events.forEach((event) => {
    const interval = 10000;
    const last = ranges[ranges.length - 1];

    if (last.type === 'break') {
      last.end = event.ts;
      ranges.push(createRange(event.type, event.ts));
      return;
    }

    if (last.end + interval < event.ts) {
      last.end += interval;
      ranges.push(createRange('break', last.end, event.ts));
      ranges.push(createRange(event.type, event.ts));
      return;
    }

    last.end = event.ts;
    if (last.type !== event.type) {
      ranges.push(createRange(event.type, event.ts));
    }
  });
  console.log('Ranges', ranges);

  return ranges;
};