import axios from 'axios';

/**
 * example of creating a custom axios instance that we can configure and then import into our modules where needed
 * @type {AxiosInstance}
 */

const instance = axios.create({
  baseURL: 'https://vuejs-http-c8a12.firebaseio.com'
});

instance.defaults.headers.common['SOMETHING'] = 'something';

export default instance;
