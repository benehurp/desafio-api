const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authConfig = require("../config/auth");

const User = require("../models/user");

const router = express.Router();

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}

router.post("/signup", async (req, res) => {
  const { email } = req.body;

  try {
    if (await User.findOne({ email })) {
      return res.status(400).send({ error: "E-mail já existente." });
    }

    const user = await User.create(req.body);

    user.nome = undefined;
    user.email = undefined;
    user.senha = undefined;
    user.telefones = undefined;

    return res.send({
      user,
      token: generateToken({ id: user.id }),
    });
  } catch (err) {
    return res.status(400).send({ error: "Falha ao registrar" });
  }
});

router.post("/signin", async (req, res) => {
  const { email, senha } = req.body;

  const user = await User.findOne({ email }).select("+senha");

  if (!user) {
    return res.status(400).send({ error: "Usuário e/ou senha inválidos." });
  }

  if (!(await bcrypt.compare(senha, user.senha))) {
    return res.status(401).send({ error: "Usuário e/ou senha inválidos." });
  }

  user.senha = undefined;

  const token = res.send({ user, token: generateToken({ id: user.id }) });
});

module.exports = (app) => app.use("/auth", router);
