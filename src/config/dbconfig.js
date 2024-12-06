import { MongoClient } from "mongodb";

export default async function connectDB(stringConexao){
    let mongoClient;

    try{
        mongoClient = new MongoClient(stringConexao);
        console.log("conectando ao banco de dados, aguarde um momento...");
        await mongoClient.connect();
        console.log("conexao Estabelecida com sucesso!");

        return mongoClient;
    }
    catch(erro){
        console.error("ERRO DE CONEXÃO AO BANCO !", erro);
        process.exit();
        return 0;
    }
};
