const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(publicPath));

app.set('view engine', 'ejs');

console.log(__dirname + '/../public');
console.log(publicPath);


// app.get('/', (req, res) => {
//   res.sendFile('index.html');
// })



app.listen(port, () => {
  console.log(`Connected on port ${port} succeed`);
});
