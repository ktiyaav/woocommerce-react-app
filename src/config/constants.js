import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const instance = new WooCommerceRestApi({
  url: "https://jufy.shaktisaurav.com/",
  consumerKey: "ck_e2bd3129c7dc1e1f2d10f80ee55771943d217fdb",
  consumerSecret: "cs_e0c7143ec22e9bb1c9bfaf1c3efa75ffcd0b17f2",
  version: "wc/v3",
  queryStringAuth: true
});
export default instance; 


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