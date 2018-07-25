layui.use(['layer', 'element','table','form'], function(){
    var layer = layui.layer
        ,$ = layui.$;
    //触发事件
    var active = {
        newClass: function(){
            var pick_type=$("input[name=pick_type]:checked").attr("id");
            if(pick_type==0){
                window.location="./knowLib.html?";//知识库
            }else{
                layer.open({
                    type: 2
                    ,content: './openPage/newKnow.html?m=0'//新建知识点
                    ,area: ['900px', '480px']
                    ,maxmin: true
                }); 
            }
        }
    }
    $('.demo').on('click', function(){
        var type = $(this).data('type');
        active[type] ? active[type].call(this) : '';
      });
    // logout
    var logoutEl=$('#logout');
    logoutEl.on('click',function(){
        $.ajax({
            url:base_url+'/research/v1/backstageuser/logout',
            type:'post',
            dataType:'json',
            success:function(data){
                if(data.code == 0){
                    //退出成功的提示与跳转
                    layer.msg(data.msg, {
                        offset: '180px'
                        ,icon: 1
                        ,time: 1000
                    }, function(){
                        location.href = '../login.html'; //后台主页
                    });
                }else{
                    layer.msg('退出失败', {
                        offset: '180px'
                        ,icon: 1
                        ,time: 1000
                    });
                }
            }
        })
    }) 
    // add module
    $("#addModule").on("click",function(){
        $(".shape").removeClass("hide");
    })
    $("#m_type_sure").click(function(){
        var pick_m=$("input[name=pick_m]:checked").attr("id");
        if(pick_m==0||pick_m==1){//知识点
            $("#m_type").addClass("hide");
            $("#m_add_way").removeClass("hide");
        }else if(pick_m==3){
            layer.open({
                type: 2
                ,content: './openPage/newKnow.html?m=3'//新建文本阐述
                ,area: ['900px', '480px']
                ,maxmin: true
            }); 
        }
    })
    
});