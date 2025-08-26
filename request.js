const { read } = require('./response');

module.exports.A = 1;

function encrypt(data) {
    return "encrypted data";
  }

  // exports하는 다른방법들
//   module.exports.encrypt = function encrypt(data) {
//     return "encrypted data";
//   }

//   exports.encrypt = function encrypt(data) {
//     return "encrypted data";
//   }

//   module.exports = function encrypt(data) {
   
//   }
  
  function send(url, data) {
    const encryptedDate = encrypt(data);
    console.log(`${encryptedDate} is being sent to ${url}`);
  }
  

  // export {
  //   send
  // }

  // exports 하기 가장 좋은 방법은 아래와 같이 하는 것이다.
  module.exports = {
    send
  }