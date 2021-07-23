module.exports = (app) => {
  app.get("/searchuser", (req, res) => res.send("Rota de listar usuário"));

  app.post("/searchuser", (req, res) => res.send("Rota de buscar usuário"));
};
