import express from "express";
import routes from "./src/routes/postsRoutes.js";
/* testando objetos locais
import posts from "./local-posts.cjs";
*/
const app = express();
const porta = 3000;
const urlBase = "localhost:" + porta ;

routes(app);

app.listen(porta, ()=> {
    console.log("servidor escutando em ", urlBase);
})