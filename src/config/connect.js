import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
const DB_HOST = process.env.DB_HOST;

const conectaNaDatabase = () => {
  mongoose.connect(`mongodb+srv://tenorio:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Conectado ao banco de dados com sucesso!");
  })
  .catch(erro => {
    console.error("Erro ao conectar ao banco de dados:", erro);
  });
};

export default conectaNaDatabase;
