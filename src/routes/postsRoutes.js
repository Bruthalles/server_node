import express from "express";
import {listarPosts,pageBtc} from "../controllers/postsController.js";

const routes = (app) => {
    // permite o servidor interpretar requisições em formato json
    app.use(express.json());

    // rota para todos os posts
    app.get("/posts",listarPosts );

    //rota pro btc.html
    app.get("/btc",pageBtc); 
}
export default routes;