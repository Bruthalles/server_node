import express from "express";
import path from 'path';
import { fileURLToPath } from "url";
import connectDB from "./src/config/dbconfig.js";
import posts from "./local-posts.cjs";

await connectDB(process.env.STRING_CONEXAO);

//configuração necessária pro servidor responder com arquivos 
//usado para teste de debug com o btc.html 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const porta = 3000;
const urlBase = "localhost:" + porta ;



app.use(express.json());

function buscapostid(id){
    return posts.findIndex((post)=>{
        return post.id === Number(id);
    });
}

app.listen(porta, ()=> {
    console.log("servidor escutando em ", urlBase);
})

app.get("/posts",(req,res)=>{
    res.status(200).json(posts);
});

app.get("/btc",(req,res)=>{
    const filePath = path.join(__dirname,'public','./src/btc.html');
    res.sendFile(__dirname + "/btc.html");
});

app.get("/posts/:id",(req,res)=>{
    const index = buscapostid(req.params.id);
    res.status(200).json(posts[index]);
});