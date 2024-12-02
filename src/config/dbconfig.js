import { MongoClient } from "mongodb";

export default async function connectDB(stringConexao){
    let mongoClient;

    try{
        mongoClient = new MongoClient(stringConexao);
        console.log("conectando ao banco de dados...");
        await mongoClient.connect();
        console.log("conexao Estabelecida com sucesso!");

        return mongoClient;
    }
    catch(erro){
        console.error("erro de conexao ao banco", erro);
        process.exit();
    }
};
