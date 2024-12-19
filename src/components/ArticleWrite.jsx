import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import ResultModal from "./ResultModal"
import { postArticle } from "../API/article"

const initArticle = {
    name: '',
    title: '',
    content: ''
}

const ArticleWrite = () => {
    const [form, setForm] = useState({ ...initArticle })
    const [result, setResult] = useState(null)
    const navi = useNavigate()

    const nameRef = useRef()
    const titleRef = useRef()
    const contentRef = useRef()

    const handleOnChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleOnClick = () => {
        if (!form.name) {
            alert('사용자 이름을 입력하시오')
            nameRef.current.focus()
        }
        else if (!form.title) {
            alert('제목을 입력')
            titleRef.current.focus()
        }
        else if (!form.content) {
            alert('내용을 입력')
            contentRef.current.focus()
        }
        else {
            postArticle(form).then((data)=>{
                console.log('Success')
            }).catch((e)=>{
                console.log('request Error')
            })
            setResult('Go')
        }

    }
    const closeModal = () => {
        setResult(null)
        navi('/list', {replace:true})
    }

    return (
        <>
            <div>
                <h1>게시글 쓰기</h1>
                <div>
                    <span>제목 : </span>
                    <input type="text" ref={titleRef} name='title' placeholder="제목입력" onChange={handleOnChange}/>
                </div>
                <div>
                    <span>글쓴이 : </span>
                    <input type="text" ref={nameRef} name='name' placeholder="제목입력" onChange={handleOnChange}/>
                </div>
                <div>
                    <textarea ref = {contentRef} name="content" onChange={handleOnChange} />
                </div>
            </div>
            <button onClick={handleOnClick}>등록</button>
            {result == null? <></> : <ResultModal title={'게시글'}  content={'작성완료'} callbackFn={closeModal}/>}
        </>
    )
}

export default ArticleWrite