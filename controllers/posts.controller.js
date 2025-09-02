// Express에서 파일 전송하기

const path = require('path');
function getPost(req, res) {
    res.render('post', {
        templateName: 'post'
    })
    // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'Hopetoun_falls.jpg'));
    // res.send('<div><h1>Post Title</h1><p>This is a post</p></div>');
}

module.exports = {
    getPost
}