const bcrypt = require('bcryptjs');
const mongoose = require('../../database');

const UserSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    lowercase: true,
  },
  senha: {
    type: String,
    require: true,
    select: false,
  },
  telefones: {
    numero: {
      type: Number,
      require: true,
    },
    ddd: {
      type: Number,
      require: true,
    },
  },
  data_criacao: {
    type: Date,
    default: Date.now,
  },
  data_atualizacao: {
    type: Date,
    default: Date.now,
  },
  ultimo_login: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre('save', async function save(next) {
  const hash = await bcrypt.hash(this.senha, 10);
  this.senha = hash;

  next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
