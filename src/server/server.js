import express from 'express';
import mysql from 'mysql2'
import cors from 'cors'
import { jsonParser } from '../utils/JsonParser.js';

const app = express();
const PORT = 5000;

// 미들웨어 등록
app.use(cors());
app.use(jsonParser)

app.listen(PORT, ()=>{
    console.log(`Server Run on http://localhost:${PORT}`);
})

const db= mysql.createConnection({
    host: 'localhost',
    user: 'react',
    password: '1234',
    port:'3306',
    database:'db_board'
})

// db.connect((err)=>{
//     if(err){
//         console.log('error ! ', err)
//     }
//     else{
//         console.log('db 접속 ㄱ')
//     }
// })

// route 핸들러함수
app.get('/list', (req, res)=>{
    const sql = `SELECT id, title, contents, writer, reg_date 
                FROM article 
                ORDER BY id DESC`

    db.query(sql, (e, data)=>{
        if(e){
            console.log('error : ', e)
            res.status(500).json({message : 'db error'})
        }
            else{
            res.status(200).json(data)
        }
    })
})

app.post('/writer', (req,res)=>{
    const sq = `INSERT INTO article(title, contents, writer) 
            VALUES(?,?,?)`
            const writer = req.body.name
            console.log('ddd : ',writer)
    const params = [req.body.name, req.body.content, req.body.title]
    console.log('req body : ', req.body)
    db.query(sq, params, (e)=>{
        if(e){
            console.log('erro :',e)
        }
        else{
            console.log('succ')
        }
    })
})