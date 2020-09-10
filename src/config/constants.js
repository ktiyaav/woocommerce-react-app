
import axios from 'axios';


const instance = axios.create({
  baseURL:  'https://9dna9.com/wp-json/wc/v1/',
}); 

instance.interceptors.request.use(config => {
  config.params = {
   consumer_key: 'ck_ae4e3193083fba843761745dca63594aa6bd741a',
   consumer_secret: 'cs_03a2b3cdd5934456175c06d4b5b480e1ac3e1bb5',

    ...config.params,
  };
  return config;
});

export default instance; 