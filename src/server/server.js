import express from 'express';
import mysql from 'mysql2'
import cors from 'cors'
import { jsonParser } from '../utils/JsonParser.js';

const app = express();
const PORT = 5000;

// 미들웨어 등록
app.use(cors());
app.use(jsonParser)

<<<<<<< HEAD
app.listen(PORT, ()=>{
    console.log(`Server Run on http://localhost:${PORT}`);
})

const db= mysql.createConnection({
    host: 'localhost',
    user: 'react',
    password: '1234',
    port:'3306',
    database:'db_board'
=======
app.listen(PORT, () => {
    console.log(`Server Run on http://localhost:${PORT}`);
})

const db = mysql.createConnection({
    host: 'localhost',
    user: 'react',
    password: '1234',
    port: '3306',
    database: 'db_board'
>>>>>>> 7038447 (게시판 중간단계)
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
<<<<<<< HEAD
app.get('/list', (req, res)=>{
=======
// 자동으로 호출되는 콜백함수임
app.get('/list', (req, res) => {
>>>>>>> 7038447 (게시판 중간단계)
    const sql = `SELECT id, title, contents, writer, reg_date 
                FROM article 
                ORDER BY id DESC`

<<<<<<< HEAD
    db.query(sql, (e, data)=>{
        if(e){
            console.log('error : ', e)
            res.status(500).json({message : 'db error'})
        }
            else{
=======
    db.query(sql, (e, data) => {
        if (e) {
            console.log('error : ', e)
            res.status(500).json({ message: 'db error' })
        }
        else {
>>>>>>> 7038447 (게시판 중간단계)
            res.status(200).json(data)
        }
    })
})

<<<<<<< HEAD
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
=======
app.get(`/view/:id`, (req, res) => {
    const idParam = req.params.id;
    const sql = `SELECT id, title, contents, writer, reg_date 
                FROM article WHERE id = ?`

    db.query(sql, [idParam], (e, data) => {
        if (e) {
            console.log('error : ', e)
            res.status(500).json({ message: 'db error' })
        }
        else {
            res.status(200).json(data)
        }
    })
})

app.post('/writer', (req, res) => {
    const sq = `INSERT INTO article(title, contents, writer) 
            VALUES(?,?,?)`
    const params = [req.body.title, req.body.contents, req.body.writer]
    db.query(sq, params, (e) => {
        if (e) {
            res.status(500).json({ message: 'db error' })
        }
        else {
            res.status(200).json({ message: 'Success' })
        }
    })
})

app.post('/modify/:id', (req,res)=>{
    const sq = `UPDATE article 
    SET title = ?, contents = ?, writer= ?, reg_date = NOW()
    WHERE id = ?`
    
    db.query(sq, [req.body.title, req.body.contents, req.body.writer, req.body.id], (e,data)=>{
        if(e) res.status(500).json({message : 'db error'})
        else res.status(200).json({ message: 'Success' })
    })
})

app.get('/delete/:id', (req,res)=>{
    const sq = `DELETE FROM article WHERE id = ?`
    
    db.query(sq, [req.params.id], (e,data)=>{
        if(e) res.status(500).json({message : 'db error'})
        else res.status(200).json({ message: 'Success' })
    })
>>>>>>> 7038447 (게시판 중간단계)
})