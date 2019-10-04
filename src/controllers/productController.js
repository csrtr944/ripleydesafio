const axios = require('axios');

module.exports = {

    getProducts(){
      try{
          return axios
          .get('https://simple.ripley.cl/api/v2/products?partNumbers=2000371305368,2000375900484,MPM00001628735,188411,MPM00001486023,187679&format=json');       
        }catch(err){
            console.log('Error: ',err);
      }
    },

    getProduct(id){
      try{
        return axios.get(`https://simple.ripley.cl/api/v2/products/${id}`);
      }catch(err){
        console.log('Error: ',err);
      }
    }
}

