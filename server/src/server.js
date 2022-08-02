var cors = require('cors');
const connect = require('./configs/db');
const router = require('./index');

const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);



const port =  process.env.PORT || 5000;
app.listen(port, async () => {
  try {
    await connect();
    console.log(`connecting on port ${port}`);
  } catch (error) {
    console.log(error);
    console.log("errghor")
  }
});
