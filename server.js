import express from "express";
import connectDB from "./src/config/dbconfig.js";
import pageHome from "./pages/home/news-btc.js";
/* testando modulos locais
import posts from "./local-posts.cjs";
*/
const conexao = await connectDB(process.env.STRING_CONEXAO);

const app = express();
const porta = 3000;
const urlBase = "localhost:" + porta ;



app.use(express.json());

function buscapostid(id){
    return posts.findIndex((post)=>{
        return post.id === Number(id);
    });
}
async function getAllPosts() {
  const db = conexao.db("imersao-beckend");
  const colecao = db.collection("posts");
  return colecao.find().toArray();
  
}
app.listen(porta, ()=> {
    console.log("servidor escutando em ", urlBase);
})

app.get("/posts", async(req,res)=>{
  const posts = await getAllPosts();
  res.status(200).json(posts);
});

pageHome();

/*app.get("/posts/:id",(req,res)=>{
    const index = buscapostid(req.params.id);
    res.status(200).json(posts[index]);
});*/