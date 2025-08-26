// module.exports = {
//     request: require('./request'),
//     response: require('./response')
// }

const request = require('./request');
const response = require('./response');

module.exports = {
 send: request.send,
 read: response.read
}