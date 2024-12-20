import axios from 'axios';
const API_SERVER_HOST = 'http://localhost:5000'

// API 요청 - 게시글 목록 조회 요청
export const getArticleList = async()=>{
    return (await axios.get(`${API_SERVER_HOST}/list`)).data;
}// Promise 객체 반환

export const getArticleDetail = async(id)=>{
    return (await axios.get(`${API_SERVER_HOST}/view/${id}`)).data;
}

export const postArticle = async(form)=>{
    return (await axios.post(`${API_SERVER_HOST}/writer`,form)).data;
}

export const postModify = async(form)=>{
    return (await axios.post(`${API_SERVER_HOST}/modify/${form.id}`,form)).data;
}

export const deleteArticle = async(id)=>{
    return (await axios.get(`${API_SERVER_HOST}/delete/${id}`)).data;
}
