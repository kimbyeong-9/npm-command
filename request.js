function encrypt(data) {
    return "encrypted data";
  }
  
  function send(url, data) {
    const encryptedDate = encrypt(data);
    console.log(`${encryptedDate} is being sent to ${url}`);
  }
  
  module.exports = {
    send
  }