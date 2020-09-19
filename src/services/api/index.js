import ky from 'ky';


const api = ky.create({prefixUrl: 'http://34.87.13.69:9873', hearders:{
        'Access-Control-Allow-Origin': '*',

 'Access-Control-Max-Age': 3600,
'Access-Control-Expose-Headers ':'Content-Length',
'Access-Control-Allow-Headers' :'Range',

}});

export default api