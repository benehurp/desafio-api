module.exports = (app) => {
  app.get("/signin", (req, res) => res.send("Área de entrada"));

  app.post("/signin", (req, res) => res.send("Rota de entrada de dados"));
};
