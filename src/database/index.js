/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose
  .connect('mongodb://localhost:27017/api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('Conexão com MongoDB iniciada.');
  })
  .catch((err) => {
    console.log(`Houve um erro ao conectar ao MongoDB: ' + ${err}`);
  });

module.exports = mongoose;
