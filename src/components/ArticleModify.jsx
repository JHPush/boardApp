import { useEffect, useState } from "react"
import { Form, Col, Row, Button } from 'react-bootstrap'
import { getArticleDetail, postModify } from "../API/article.js"
import { useNavigate, useParams } from "react-router-dom"
import ResultModal from "./ResultModal.jsx"

const ArticleModify = () => {
    const [article, setArticle] = useState({})
    const [result, setResult] = useState(null)
    const { id } = useParams();
    const navi = useNavigate();

    useEffect(() => {
        getArticleDetail(id).then((data) => {
            setArticle(data[0])
        }).catch((e) => {
            console.log('err in View : ', e)
        })
    }, [id])

    const onChanageArticle = (e) => {
        setArticle({
            ...article,
            [e.target.name]: e.target.value
        })
    }
    const handleOnReset = () => {
        setArticle({
            id: id,
            title: '',
            contents: '',
            writer: ''
        })
    }
    const handleOnClickModify = () => {
        if (!article.title)
            alert('이름입력')
        else if (!article.writer)
            alert('작성자 입력')
        else if (!article.contents)
            alert('내용 입력')
        else {
            if (confirm('수정할래요?')) {
                postModify(article).then((data) => {
                    setResult('success')
                }).catch((e) => {
                    console.log('err in article Modify', e)
                })
                setResult('success')
            }
        }
    }
    const closeModal = () => {
        setResult(null)
        navi('/list', { replace: true })
    }

    return (
        <>
            <Row className='my-5'>
                <Col className='p-5'>
                    <h2 className='text-center my-5'>게시글 수정</h2>
                    <Form>
                        <h4>제목</h4>
                        <Form.Control value={article.title || ''} onChange={onChanageArticle} className='my-3' name='title' />
                        <h4>작성자</h4>
                        <Form.Control value={article.writer || ''} onChange={onChanageArticle} className='my-3' name='writer' />
                        <h4>내용</h4>
                        <Form.Control as='textarea' rows={10} value={article.contents || ''} onChange={onChanageArticle} className='my-3' name='contents' />
                        <div className='text-center'>
                            <Button className='mx-2 px-3 btn-sm' onClick={handleOnClickModify} >수정</Button>
                            <Button className='mx-2 px-3 btn-sm' variant='secondary' onClick={handleOnReset}>초기화</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
            {result == null ? <></> : <ResultModal title={'게시글을'} contents={'수정완료'} callbackFn={closeModal} />}
        </>
    )
}

export default ArticleModify