const express = require('express');
const cors = require('cors');
const  {sendEmail}  = require('./email');
const app = express();
const requestIp = require('request-ip');
 
// 使用 cors 中间件
app.use(cors());
app.post('/sendemail',(req,res)=>{
  const ip = requestIp.getClientIp(req);
  console.log(ip)
    sendEmail('1793252644@qq.com', '1793252644@qq.com', '1793252644@qq.com', 'fehdhmjiggobjdda', `ip:${ip}  访问时间：${new Date().toLocaleString()} `,) 
  res.send('ok')
})
// 其他路由和中间件设置

app.listen(8084, () => {
  console.log('Server is running on port 8085');
});
 