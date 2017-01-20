var express = require('express');
var router = express.Router();
var fs = require('fs');
var shortid = require('shortid');
var Path = './public/data';



router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Headers" , "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getmsg',function(req,res){

    fs.readFile(Path + '/msg.json',function(err,data){
        if(err)console.log(err);
        // console.log(data.toString())
        res.send(data.toString());
    })

})

router.post('/addmsg',function(req,res){

      var file = req.files[0];
      console.log('文件名：' + file.filename)

      fs.readFile(Path + "/msg.json",function(err,data){
          if(err){
            console.log(err)
            return;
          }else{

            var data = data.toString();
            console.log(data)
            var news = req.body.news;
            var imgurl = "";
            if(req.files[0]){
                imgurl = 'http://localhost:3000/upload/' + req.files[0].filename;
            }

            var obj =  {
                  "id":shortid.generate(),
                  "name":"xiao wang",
                  "avatar":"http://localhost:3000/images/wbicon1_03.png",
                  "img":imgurl,
                  "news":news
              }

              var MsgJson = JSON.parse(data);
              var MsgArr = MsgJson.data;
              MsgArr.unshift(obj);

              var MsgStr = JSON.stringify(MsgJson);

              fs.writeFile(Path + "/msg.json",MsgStr,function(err){
                  if(err) console.log(err)
                  console.log('数据保存成功！！')
              })
          }

      })

})

module.exports = router;
