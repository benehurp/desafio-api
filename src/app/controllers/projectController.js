const express = require('express');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();

const User = require('../models/user');

router.use(authMiddleware);

router.get('/', (req, res) => {
  User.findById(req.userId, (error, data) => {
    if (error) {
      res.send({ error: 'Usuário inválido' });
    } else {
      res.send(data);
    }
  });
});

module.exports = (app) => app.use('/usersearch', router);
