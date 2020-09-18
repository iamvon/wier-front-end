import ky from 'ky';


const api = ky.create({prefixUrl: 'http://localhost:9873'});
// http://34.87.13.69:9873/para_search?query="quần áo"&order=desc&page=0&sortBy=sales/ctime

export default api