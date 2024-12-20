import { Table } from "react-bootstrap";
import { getArticleList } from "../API/article.js";
import { useEffect, useState } from "react";
<<<<<<< HEAD
=======
import { Link } from "react-router-dom";
>>>>>>> 7038447 (게시판 중간단계)

const ArticleList = () => {
    const [articles, setArticles]= useState([]);
    // 컴포넌트가 마운트될때
    useEffect(()=>{
        getArticleList().then((data)=>{
            setArticles(data)
        }).catch((e)=>{
            console.log('ee', e)
        })
    },[])

    return (
        <div className='board-list'>
            <h3>게시글 목록</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                {
                        articles.map((article)=>{
                        return(
                        <tr key={article.id}>
<<<<<<< HEAD
                            <td>{article.title}</td>
=======
                            <td><Link to = {`/view/${article.id}`}>{article.title}</Link></td>
>>>>>>> 7038447 (게시판 중간단계)
                            <td>{article.writer}</td>
                            <td>{new Date(article.reg_date).toString()}</td>
                        </tr>
                        )
                    })
                }
                </tbody>
            </Table>
        </div>
    )
}


export default ArticleList;