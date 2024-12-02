import express from "express";
import connectDB from "./src/config/dbconfig.js";

//await connectDB(process.env.STRING_CONEXAO);

const app = express();
const porta = 3000;


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
    console.log("servidor escutando...");
})

app.get("/posts",(req,res)=>{
    res.status(200).json(posts);
});

app.get("/btc",(req,res)=>{
    res.status(200).sendFile("/btc.html");
});

app.get("/posts/:id",(req,res)=>{
    const index = buscapostid(req.params.id);
    res.status(200).json(posts[index]);
});