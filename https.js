// import { send } from './request.mjs';
// import { read } from './response.mjs';

// function makeRequest(url, data) {
// // 요청을 보내기
//   send(url, data);
// // 데이터 return 하기
// return read();
// }

// const responseData = makeRequest('https://naver.com','any data');
// console.log(responseData);




// const { send } = require('./request');
// const { read } = require('./response');
// const { decrypt } = require('./response');

const lib = require('./lib');

function makeRequest(url, data) {
// 요청을 보내기

lib.request.send(url, data);
  // send(url, data);
// 데이터 return 하기
return lib.response.read();
// return read();
}

const responseData = makeRequest('https://naver.com','any data');
// console.log(responseData);

console.log(require.cache);