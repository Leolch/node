var express=require('express');
var router=express.Router();

router.use(function (req,res,next) {
        if(!req.userInfo.isAdmin){
                //如果当前用户是非管理员
                res.send('对不起，只有管理员才可以进入创世界面');
                return;
        }
        next();
})

router.get('/', function (req,res,next) {
        res.send('创世界面首层');
})

module.exports=router;