//require('dotenv').config();
const server = require("./server");

const port = process.env.PORT || 3001;
server.listen(port, () =>
  console.log(`Chat bot server started on port: ${port}`)
);
