# Accenture Desafio Backend

Eu desenvolvi esse projeto usando Express, MongoDB, Mongoose, Bcryptjs, JsonWebToken, Fs Path e Eslint com Prettier.

Este sou eu apresentando a minha solução:
https://www.youtube.com/watch?v=HJfgRm2QfbE

## Proposta

Crie um aplicativo backend que irá expor uma API RESTful de criação de sing up/sign
in.

Todos os endpoints devem somente aceitar e somente enviar JSONs. O servidor
deverá retornar JSON para os casos de endpoint não encontrado também.
O aplicativo deverá persistir os dados (ver detalhes em requisitos).
Todas as respostas de erro devem retornar o objeto:

```json
{
  "mensagem": "mensagem de erro"
}
```

## Prazo

- 3 dias corridos.

## **Sign up**

Este endpoint deverá receber um usuário com os seguintes campos: nome,
email, senha e uma lista de objetos telefone. Seguem os modelos:

```json
{
  "nome": "string",
  "email": "string",
  "senha": "senha",
  "telefones": [
    {
      "numero": "123456789",
      "ddd": "11"
    }
  ]
}
```

- [x] Usar status codes de acordo
- [x] Em caso de sucesso irá retornar um usuário mais os campos:
  - [x] id: id do usuário (pode ser o próprio gerado pelo banco, porém seria interessante
        se fosse um GUID)
  - [x] data_criacao: data da criação do usuário
  - [x] data_atualizacao: data da última atualização do usuário
  - [x] ultimo_login: data do último login (no caso da criação, será a mesma que a
        criação)
  - [x] token: token de acesso da API (pode ser um GUID ou um JWT)
  - [x] Caso o e-mail já exista, deverá retornar erro com a mensagem "E-mail já
        existente".
  - [x] O token deverá ser persistido junto com o usuário

## Sign in

- [x] Este endpoint irá receber um objeto com e-mail e senha.
- [x] Caso o e-mail exista e a senha seja a mesma que a senha persistida, retornar
      igual ao endpoint de sign_up.
- [x] Caso o e-mail não exista, retornar erro com status apropriado mais a mensagem
      "Usuário e/ou senha inválidos"
- [x] Caso o e-mail exista mas a senha não bata, retornar o status apropriado 401
      mais a mensagem "Usuário e/ou senha inválidos"

## Buscar usuário

- [x] Chamadas para este endpoint devem conter um header na requisição de
      Authentication com o valor "Bearer {token}" onde {token} é o valor do token
      passado na criação ou sign in de um usuário.
- [x] Caso o token não exista, retornar erro com status apropriado com a mensagem
      "Não autorizado".
- [x] Caso o token exista, buscar o usuário pelo user_id passado no path e comparar
      se o token no modelo é igual ao token passado no header.
- [x] Caso não seja o mesmo token, retornar erro com status apropriado e mensagem
      "Não autorizado"
- [x] Caso seja o mesmo token, verificar se o último login foi a MENOS que 30
      minutos atrás.
- [x] Caso não seja a MENOS que 30 minutos atrás, retornar erro com status
      apropriado com mensagem "Sessão inválida".
- [x] Caso tudo esteja ok, retornar o usuário.

## Requisitos

- [x] Persistência de dados
- [x] Gestão de dependências via gerenciador de pacotes (npm)
- [x] Utilização de Eslint
- [x] API: Express, Hapi ou similares.
- [x] Utilizar banco nosql

## Requisitos desejáveis

- [x] JWT como token
- [ ] Testes unitários
- [x] Criptografia não reversível (hash) na senha e no token
- [x] Mongo
- [x] Utilização de sintaxe de JS ES6
- [x] Utilização de padrões de projeto para organização do código (arquitetura
      hexagonal, Domain Driven Design, etc.)

## Submissão

- [x] O desafio deve ser entregue pelo GitHub/Bitbucket.
