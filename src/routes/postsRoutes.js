import express from "express";

const routes = (app) => {
    // permite o servidor interpretar requisições em formato json
    app.use(express.json());

    // rota para todos os posts
    app.get("/posts", async(req,res)=>{
        const posts = await getAllPosts();
        res.status(200).json(posts);
    });
    //rota pro btc.html
    app.get("/btc",(req,res)=>{
      const filePath = path.join(__dirname,'public','./src/btc.html');
      res.sendFile(__dirname + "/btc.html");
    }); 
}
export default routes;