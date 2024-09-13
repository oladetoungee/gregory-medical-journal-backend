const cron = require('node-cron');
const axios = require('axios');

const https = require('https');
const agent = new https.Agent({
  secureProtocol: 'TLSv1_2_method',
});

// Schedule the job to run every 5 minutes
cron.schedule('*/3 * * * *', async () => {
  try {
    await axios.get('https://gregory-medical-journal-backend.onrender.com/api/articles', { httpsAgent: agent });
    console.log('Ping successful!');
  } catch (error) {
    console.error('Ping failed:', error.message);
  }
});