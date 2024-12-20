<<<<<<< HEAD
// 게시글 등록할떄 사용
=======
// 요청이 있을때 무조건 미들웨어 함수를 거치고 라우트핸들러 호출
>>>>>>> 7038447 (게시판 중간단계)
export const jsonParser = (req, res, next)=>{
    let data = '';
    //클라 요청이 들어왔을때
    req.on("data", (chunk)=>{
        data += chunk;
    })
    // 클라이언트 요청 수신이 완료되었을때
    req.on("end", ()=>{
        try{
            req.body= JSON.parse(data)
            console.log('jsonParser', req.body)
        }catch(e){
            console.log('err : ', e)
            req.body = {};
        }
<<<<<<< HEAD
        next(); // 미들웨어 호출 or route() 호출   
=======
        next(); // 미들웨어 호출 or 라우트핸들러 호출   
>>>>>>> 7038447 (게시판 중간단계)
    })
}