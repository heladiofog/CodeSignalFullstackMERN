const express = require('express');
const app = express();

app.get('/api/robot/status', (req, res) => {
  try {
    // Simulate retrieving robot status
    const status = getRobotStatus(); // Assume this function is defined
    res.json({ status });
  } catch (err) {
    // Send an HTTP 500 response for unexpected errors
    res.status(500).json({ message: 'Error retrieving robot status' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));

function getRobotStatus() {
  // Implementation details
  // Solution:
  // throw new Error("Error at getting Robot Status!");
}
