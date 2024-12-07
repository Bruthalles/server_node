import connectDB from "../config/dbconfig.js";

const conexao = await connectDB(process.env.STRING_CONEXAO);

export default async function getAllPosts() {
  const db = conexao.db("imersao-beckend");
  const colecao = db.collection("posts");
  return colecao.find().toArray();
  
}