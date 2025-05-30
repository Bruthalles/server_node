//import routes from "./src/routes/postsRoutes.js";
/* testando objetos locais
import posts from "./local-posts.cjs";
*/
const express = require("express");
const cors    = require("cors");
const fetch   = require("node-fetch");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
// const porta = 3000;
// const urlBase = "localhost:" + porta ;

app.use(cors());
app.options("*",cors());
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // permite qualquer origem
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  });
  


//routes(app);

// app.listen(porta, ()=> {
//     console.log("servidor escutando em ", urlBase);
// })

app.post("/send",async (req , res)=>{
    const {name,email} = req.body;

    if (!name || !email){
        return res.status(400).json({message:"Nome e email são obrigatórios"})
    }

    const htmlContent = `
        <h2>Olá ${name}!</h2> 
        <p>Obrigado por adquirir nosso produto. Aqui está o link para o E-book no google drive:</p>
        <a href="link do e-book">Baixar E-Book</a>
    `;

    try{
        
        const response = await fetch("https://api.brevo.com/v3/smtp/email",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "api-key": process.env.BREVO_API_KEY
            },
            body: JSON.stringify({
                sender: {name: "Thalles Brumatti", email: "thallesgmkr@gmail.com"},
                to: [{email:email,name:name}],
                subject: "Seu E-book Chegou!",
                htmlContent: htmlContent
            })
        });

        const data = await response.json();

        if(response.ok){
            res.json({message: "email enviado com sucesso"});
        } 
        else{
            res.status(500).json({message: "erro ao enviar o email", detalhes: data});
        }

    } catch (err){
        console.error(err);
        res.status(500).json({message: "erro interno no sevidor"});
    }
});

app.listen(PORT, ()=> console.log("servidor rodando na porta ${PORT}"));
