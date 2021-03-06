import axios from 'axios';
//node_modules 밑에 설치된 library 가져온다.

//1. HTTP Request & Response 관련된 기본 설정
const config = {
    baseUrl : 'https://api.hnpwa.com/v0/'
}

// 2. API 함수들을 정리
function fetchNewsList(){
    //return axios.get(config.baseUrl+'news/1.json');
    return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchJobsList(){
    return axios.get(`${config.baseUrl}jobs/1.json`);
}


function fetchAskList(){
    return axios.get(`${config.baseUrl}ask/1.json`);
}
function fetchUserInfo(username){
    //코딩컨벤션
    return axios.get(`${config.baseUrl}user/${username}.json`);
}
//fetchNewsList().then().catch()
function fetchItemInfo(number){
    return axios.get(`${config.baseUrl}item/${number}.json`);
}
export {
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
    fetchUserInfo,
    fetchItemInfo
}

