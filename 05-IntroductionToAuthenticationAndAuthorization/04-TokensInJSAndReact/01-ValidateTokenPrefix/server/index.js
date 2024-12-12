const express = require('express');
const app = express();
app.use(express.json());

const mockMissionData = { id: "xyz", status: "All systems go!" };
const validTokens = ['123ABC']; // This should be a more secure token storage mechanism

app.get('/api/mission-control', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token || !validTokens.includes(token)) {
    return res.status(401).send('Unauthorized: Invalid token');
  }

  res.status(200).json(mockMissionData);
});

app.listen(5000, () => {
  console.log('Server running on port 5000...');
});