import express from "express";
import path from 'path';
import { fileURLToPath } from "url";


//configuração necessária pro servidor responder com arquivos 
//usado para teste de debug com o btc.html 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const porta = 3000;
const urlBase = "localhost:" + porta ;

app.listen(porta, ()=> {
    console.log("servidor home em ", urlBase);
})
export default function pageHome(){
    app.get("/home",(req,res)=>{
        const filePath = path.join(__dirname,'public','./pages/home/btc.html');
        res.sendFile(__dirname + "/btc.html");
    });
}
