
import path from 'path';
import { fileURLToPath } from "url";
import getAllPosts from '../models/postsModels.js';
//configuração necessária pro servidor responder com arquivos 
//usado para teste de debug com o btc.html 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function listarPosts(req,res){
    const posts = await getAllPosts();
    res.status(200).json(posts);
}

export function pageBtc(req,res){
    const filePath = path.join(__dirname,'public','./btc.html');
    res.sendFile(__dirname + "/btc.html");
}