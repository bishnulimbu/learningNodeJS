const express = require("express");
const app = express();
app.get('/', (req, res) => {
  res.send("hello")
})
app.get('/user', (req, res) => {
  res.send("user");
})



app.listen(3000, () => {
  console.log("serve running at port 3000");

});
