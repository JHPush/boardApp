import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import ResultModal from "./ResultModal"
import { postArticle } from "../API/article"
import { Row, Col, Form, Button } from 'react-bootstrap'

const initArticle = {
    writer: '',
    title: '',
    contents: ''
}

const ArticleWrite = () => {
    const [form, setForm] = useState({ ...initArticle })
    const [result, setResult] = useState(null)
    const navi = useNavigate()

    const writerRef = useRef()
    const titleRef = useRef()
    const contentsRef = useRef()

    const handleOnChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleOnClick = () => {

        if (!form.title) {
            alert('제목을 입력')
            titleRef.current.focus()
        }
        else if (!form.writer) {
            alert('사용자 이름을 입력하시오')
            writerRef.current.focus()
        }
        else if (!form.contents) {
            alert('내용을 입력')
            contentsRef.current.focus()
        }
        else {
            if (confirm('게시글을 등록하겠슴까?')) {
                postArticle(form).then((data) => {
                    console.log('Success')
                }).catch((e) => {
                    console.log('request Error :', e)
                })
                setResult('Go')
            }
        }
    }

    const handleOnReset = () => {
        setForm({
            writer: '',
            title: '',
            contents: ''
        })

        // navi('/list')
    }

    const closeModal = () => {
        setResult(null)
        navi('/list', { replace: true })
    }

    return (
        <>
            <Row className='my-5'>
                <Col className='p-5'>
                    <h1 className='text-center my-5'>게시글 작성</h1>
                    <Form>
                        <h4>제목</h4>
                        <Form.Control ref={titleRef} placeholder='제목을 입력하세요.' className='my-3' value={form.title} name='title' onChange={handleOnChange} />
                        <h4>작성자</h4>
                        <Form.Control ref={writerRef} placeholder='작성자를 입력하세요.' className='my-3' value={form.writer} name='writer' onChange={handleOnChange} />
                        <h4>내용</h4>
                        <Form.Control as='textarea' rows={10} ref={contentsRef} placeholder='내용을 입력하세요.' value={form.contents} className='my-3' name='contents' onChange={handleOnChange} />
                        <div className='text-center'>
                            <Button className='mx-2 px-3 btn-sm' onClick={handleOnClick}>저장</Button>
                            <Button className='mx-2 px-3 btn-sm' onClick={handleOnReset} variant='secondary'>초기화</Button>
                        </div>
                    </Form>

                </Col>
            </Row>
            {result == null ? <></> : <ResultModal title={'게시글'} contents={'작성완료'} callbackFn={closeModal} />}
        </>
    )
}

export default ArticleWrite