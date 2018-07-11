import axios from 'axios';

/**
 * example of creating a custom axios instance that we can configure and then import into our modules where needed
 * @type {AxiosInstance}
 */

const instance = axios.create({
    baseURL: 'https://vue-stock-application.firebaseio.com/'
});

//instance.defaults.headers.common['SOMETHING'] = 'something';

export default instance;