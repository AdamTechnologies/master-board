const axios = require('axios');

const fetchSweatData = async () => {
  try {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NGU2ZjI5YjNlODliYzQwOGQ1NmQzYTQiLCJlbWFpbCI6IjIwMDRhYWRpdGgrMkBnbWFpbC5jb20iLCJhY2Nlc3NfdG9rZW4iOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZJalkwWlRabU1XWXhaRGRrTlRZd016QTJOamN3WmpRd09DSXNJbVZ0WVdsc0lqb2lNakF3TkdGaFpHbDBhQ3N5UUdkdFlXbHNMbU52YlNJc0ltbHVabThpT25zaWNtOXNaU0k2SWpZMFlqRmpPV0l6TkRJM05tRmlOek0wTUdKbFpHTTVOU0o5TENKcFlYUWlPakUyT1RJNE5UZzNNellzSW1WNGNDSTZNVGN5TkRNNU5EY3pObjAudkQwS09uMElJTGlKZ0k2cS14cm9FRVNrYkF0M0JINHNLc0FOSXd1UDk1ZyIsImlhdCI6MTY5Mjg1ODczNn0.LaC-WFDPn3yVoPnnsI6Fh5_rJ5FaTfuf1KY7F0xnMAw'; // Replace with your actual token
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.get('http://3.6.123.80:3001/api/tickets/get-numbers', { headers });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

module.exports =   fetchSweatData
