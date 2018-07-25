layui.use(['layer', 'form'], function(){
    var $ = layui.$
    layer = layui.layer
    ,setter = layui.setter
    ,admin = layui.admin
    ,form = layui.form
    ,router = layui.router()
    ,search = router.search;
    form.render();
    //提交
    form.on('submit(LAY-user-login-submit)', function(obj){
      //请求登入接口
      $.ajax({
        url: base_url + '/research/v1/backstageuser/login'
        ,type: 'post'
        ,dataType:'json'
        ,data: {
            "userAccount":"123",
            "backPassword":"123"
        }
        ,success:function(data){
            console.log(data);
            if(data.code == 0){
                //登入成功的提示与跳转
                layer.msg(data.msg, {
                    offset: '180px'
                    ,icon: 1
                    ,time: 1000
                }, function(){
                    location.href = './page/classList.html'; //后台主页
                });
            }else{
                layer.msg('登录失败', {
                    offset: '180px'
                    ,icon: 1
                    ,time: 1000
                });
            }
        },error:function(){
            layer.msg('登录失败，请稍后再试', {
                offset: '180px'
                ,icon: 1
                ,time: 1000
            });
        }
      });
    });
  });