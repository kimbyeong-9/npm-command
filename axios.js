import axios from 'axios';

axios.get('https://naver.com')
.then((response)=>{console.log(response)})
.catch((error)=>{console.log(error)})