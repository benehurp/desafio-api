module.exports = (app) => {
  app.get("/signup", (req, res) => res.send("Área de inscrição"));

  app.post("/signup", (req, res) => {
    console.log(req.body);

    res.send("Rota de entrada de dados");
  });
};
