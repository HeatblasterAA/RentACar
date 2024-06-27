const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const dbconnection = require('./db')
app.use(express.json())


app.use('/api/cars/' , require('./routes/carRoute'))
app.use('/api/users/' , require('./routes/usersRoute'))


app.get('/', (req, res) => {
  //console.log('Received a GET request on /');
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Node Js Server Started in Port  ${port}`);
});
