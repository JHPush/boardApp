import { useEffect, useState } from "react"
import { deleteArticle, getArticleDetail } from "../API/article.js"
import { useNavigate, useParams } from "react-router-dom";
import { Row, Col, Card, Button } from 'react-bootstrap'
import ResultModal from "./ResultModal.jsx";

const ArticleView = () => {
    const [article, setArticle] = useState({});
    const [result, setResult] = useState(null);
    const { id } = useParams();

    const navi = useNavigate();

    useEffect(() => {
        getArticleDetail(id).then((data) => {
            setArticle(data[0])
        }).catch((e) => {
            console.log('err in View : ', e)
        })
    }, [id])

    const handleClickModify = () => {
        navi({ pathname: `/modify/${id}` })
    }
    const handleClickDelete = () => {
        if (confirm('정말 삭제할?')) {
            deleteArticle(id).then((data) => {
                setResult('success')
            }).catch((e) => {
                console.log('err')
            })
        }
    }
    const closeModal = () => {
        setResult(null)
        navi('/list', { replace: true })
    }

    return (
        <div className="board-view">
            <Row className='my-5'>
                <Col className='px-5'>
                    <h1 className='my-5 text-center'>{article.id}번 게시글 정보</h1>
                    <div className='text-end my-2'>
                        <Button className='btn-sm mx-2' onClick={handleClickModify}>수정</Button>
                        <Button className='btn-sm' variant='danger' onClick={handleClickDelete} >삭제</Button>
                    </div>
                    <Card>
                        <Card.Body>
                            <h5>{article.title}</h5>
                            <hr />
                            <div className='cArea'>{article.contents}</div>
                        </Card.Body>
                        <Card.Footer>
                            Created on {article.date} by {article.writer}
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>

            {result == null ? <></> : <ResultModal title='삭제' contents='완료' callbackFn={closeModal} />}
        </div>
    );
}

export default ArticleView