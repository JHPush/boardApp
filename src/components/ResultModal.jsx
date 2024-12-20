import React from 'react';
import '../ResultModal.css'; // CSS 파일 import

<<<<<<< HEAD
const ResultModal = ({title, content, callbackFn}) => {
=======
const ResultModal = ({title, contents, callbackFn}) => {
>>>>>>> 7038447 (게시판 중간단계)
    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="modal-header">
                    <h2>{title}</h2>
                </div>
<<<<<<< HEAD
                <div className="modal-content">
                    <p>{content}</p>
=======
                <div className="modal-contents">
                    <h2>{contents}</h2>
>>>>>>> 7038447 (게시판 중간단계)
                </div>
                <div className="modal-footer">
                    <button className="close-button" onClick={ ()=>{if(callbackFn) callbackFn()}}>
                        닫기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ResultModal;
