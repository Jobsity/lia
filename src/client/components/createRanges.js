const createRange = (type, dataArray, start, end = start) => ({
  dataArray,
  end,
  start,
  type
});

export default (events) => {
  if (events.length === 0) {
    return [];
  }

  const ranges = [createRange(events[0].type, [events[0].data], events[0].ts)];

  events.slice(1).forEach((event) => {
    const interval = 10000;
    const last = ranges[ranges.length - 1];

    if (
      event.type === 'editor' &&
      last.type === event.type &&
      event.ts < last.end + interval
    ) {
      last.end = event.ts;
      last.dataArray.push(event.data);
      return;
    }

    ranges.push(createRange(event.type, [event.data], event.ts));
  });

  return ranges;
};
