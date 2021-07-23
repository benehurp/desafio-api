const express = require("express");

const User = require("../models/user");

const router = express.Router();

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

    return res.send({ user });
  } catch (err) {
    return res.status(400).send({ error: "Falha ao registrar" });
  }
});

router.post("/signin", async (req, res) => {});

module.exports = (app) => app.use("/auth", router);
