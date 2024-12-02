import express from "express";
import path from 'path';
import { fileURLToPath } from "url";
import connectDB from "./src/config/dbconfig.js";

//await connectDB(process.env.STRING_CONEXAO);
const __filename = fileURLToPath(import.meta.url);
const app = express();
const porta = 3000;
const urlBase = "localhost:" + porta ;


const posts = [
    {
      id:1,
      descricao: "gato voador",
      imagem: "https://placecats.com/300/300"
    },
    {
      id:2,
      descricao: "gato ninja",
      imagem: "https://placecats.com/300/300"
    },
    {
      id:3,
      descricao: "gato presidente",
      imagem: "https://placecats.com/300/300"
    }
  ];

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

app.get("/",(req,res)=>{
    const filePath = path.join(__dirname,'public','btc.html');
    res.sendFile(__dirname + "/btc.html");
});

app.get("/posts/:id",(req,res)=>{
    const index = buscapostid(req.params.id);
    res.status(200).json(posts[index]);
});