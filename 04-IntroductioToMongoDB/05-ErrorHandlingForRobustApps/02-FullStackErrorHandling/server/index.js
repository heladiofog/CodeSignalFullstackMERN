const express = require('express');
const app = express();
const PORT = 5000;

app.get('/api/robotics', (req, res) => {
  // TODO: add a try/catch block
  // TODO: inside the 'try' block, call 'performRoboticsOperation()' and return a successful response afterward
  // In the catch block: handle any error that can appear, return HTTP 500 status code with an error message

  // Solution:
  // try {
  //   // TODO: inside the 'try' block, call 'performRoboticsOperation()' and return a successful response afterward
  //   const result = performRoboticsOperation();
  //   throw new Error("Error test!");
  //   res.status(200).send({ message: `Operation result: ${result}` });
  // } catch(error) {
  //   // In the catch block: handle any error that can appear, return HTTP 500 status code with an error message
  //   res.status(500).json({ message: "Error perfoming robot operation." });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

function performRoboticsOperation() {
  // Fake function to simulate an action in a robotics scenario
  // For education purposes, we just always return "active"
  return 'active';
}
