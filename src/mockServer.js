import { create } from 'apisauce';
import MockAdapter from 'axios-mock-adapter';

const api = create({ baseURL: 'http://dev-jtalent-api.jobsity.com' }).axiosInstance;

const mock = new MockAdapter(api);
mock.onGet('/challenge').reply(200, {
  data: {
    instructions: 'These are mocked instructions',
  },
});

export { api };
