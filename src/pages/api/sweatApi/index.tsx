const axios = require('axios');

const fetchSweatData = async () => {

    const token = window.localStorage.getItem('access_token');  
      try {
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const response = await axios.get(`http://54.238.10.51:3001/api/recipe/recipe-request`, { headers });
        return response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
};

const fetchnoOfRecipies = async () => {
  // Get the access token from localStorage or wherever you store it
  const token = window.localStorage.getItem('access_token'); 
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      // Replace the URL and any other parameters as needed for your API
      const response = await axios.get(`http://54.238.10.51:3001/api/recipe/get-request-count`, { headers });      
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
};

const acceptRecipe = async (acceptRecipeId) => { // Change the parameter name to avoid conflicts
  const token = window.localStorage.getItem('access_token');
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    // Replace the URL and any other parameters as needed for your API
    const response = await axios.get(`http://54.238.10.51:3001/api/recipe/accept-request?id=${acceptRecipeId}`, { headers });
    console.log("response*", response)
    return response; // Return the response data
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};


module.exports = {fetchSweatData,fetchnoOfRecipies, acceptRecipe}
