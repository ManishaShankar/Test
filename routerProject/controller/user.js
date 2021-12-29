const axios = require('axios');
const { response } = require('express');

module.exports = {
    async getUrl(a) {
        try {
            const response = await axios.get(a);
            //console.log(response);
            return response.data;
        }
        catch(error){
            console.log(error);
        }
        
    }
}