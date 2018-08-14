export const createTime = () => new Date().getTime();

export const createTimestamp = startTime => createTime() - startTime;
