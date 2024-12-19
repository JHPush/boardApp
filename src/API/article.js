import axios from 'axios';
const API_SERVER_HOST = 'http://localhost:5000'

// API 요청 - 게시글 목록 조회 요청
export const getArticleList = async()=>{
    const response = await axios.get(`${API_SERVER_HOST}/list`)
    // console.log('on GetArti : ',response);
    // console.log('on GetArti : ',response.data);

    return response.data;
}// Promise 객체 반환

export const postArticle = async(form)=>{
    console.log('post form : ', form)
    const params = new URLSearchParams();
    params.append('title', form.title)
    params.append('writer', form.name)
    params.append('contents', form.contnet)
    const request = await axios.post(`${API_SERVER_HOST}/writer`,form)
    console.log('request : ',request);
    console.log('data : ', request.data);

    return request.data;
}
