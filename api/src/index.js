import db from './db.js';
import express from 'express'
import cors from 'cors'
const app = express();
app.use(cors());
app.use(express.json());

app.get('/matricula', async (req, resp) => {
    try {
        let alunos = await db.tb_matricula.findAll()
    } catch (e) {
        resp.send( { erro: e.toString ()} )
    }
        
})


app.listen(process.env.PORT,

x => console.log(`Server up at port ${process.env.PORT}`))