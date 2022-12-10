import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { BASEURL, CONSUMER_KEY, CONSUMER_SECRET } from "../config/constants";

const WOOAPI = new WooCommerceRestApi({
    url: BASEURL,
    consumerKey: CONSUMER_KEY,
    consumerSecret: CONSUMER_SECRET,
    version: "wc/v2",
    queryStringAuth: true
  });
export default WOOAPI; 
  

// import axios from 'axios';
// const instance = axios.create({
//   baseURL:  'https://jufy.shaktisaurav.com/wp-json/wc/v1/',
// }); 
// instance.interceptors.request.use(config => {
//   config.params = {
//    consumer_key: 'ck_e2bd3129c7dc1e1f2d10f80ee55771943d217fdb',
//    consumer_secret: 'cs_e0c7143ec22e9bb1c9bfaf1c3efa75ffcd0b17f2',
//     ...config.params,
//   };
//   return config;
// });
// export default instance; 