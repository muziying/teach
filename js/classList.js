layui.use(['layer', 'element','table','form'], function(){
    var element = layui.element
    ,table = layui.table
    ,$ = layui.$
    ,form = layui.form;
    // logout
    var logoutEl=$('#logout');
    logoutEl.on('click',function(){
        $.ajax({
            url:'http://192.168.10.131:8082/research/v1/backstageuser/logout',
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

    // 学段、版本、教材数据
    var getchaptersinfo = (type,elem) => {
        $.ajax({
            url:base_url + '/research/v1/course/getchaptersinfo',
            type:'post',
            dataType:'json',
            data:{
                type:type
            },
            success:function(data){
                if(data.code == 0){
                    var li='';
                    for (var i in data.result){
                        li+='<option value="'+i+'">'+data.result[i].name+'</option>';
                    }
                    elem.append(li);
                    form.render('select');
                }
            }
        })
    }


    getchaptersinfo(1,$("#xueduan"));
    getchaptersinfo(2,$("#xueke"));
    getchaptersinfo(3,$("#version"));
    getchaptersinfo(4,$("#jiaocai"));

    // 获取班型列表
    var getallclasstype = () => {
        $.ajax({
            url:base_url + '/research/v1/course/getallclasstype',
            type:'post',
            dataType:'json',
            success:function(data){
                if(data.code == 0){
                    var li='';
                    for (var i in data.data){
                        li+='<option value="'+i+'">'+data.data[i].name+'</option>';
                    }
                    $("#banxing").append(li);
                    form.render('select');
                }
            }
        })
    }
    getallclasstype();

    // 根据班型返回课次列表
    var getclassescount = () => {
        $.ajax({
            url:base_url + '/research/v1/course/getclassescount',
            type:'post',
            dataType:'json',
            success:function(data){
                console.log(data);
            }
        })
    }
    getclassescount();



    table.render({
        elem: '#class-list'
        ,cols: [[ //标题栏
        {LAY_CHECKED: false}
        ,{field: 'id', title: 'ID', width: 60, sort: true}
        ,{field: 'classname', title: '课程名称', width: 150}
        ,{field: 'email', title: '适用范围', width: 90}
        ,{field: 'sign', title: '章', width: 150}
        ,{field: 'sex', title: '节', width: 150}
        ,{field: 'button', title: '操作', width: 180}
        ]],
        data:[{
            'id':1
            ,'classname':'二次函数'
            ,'email':'高中'
            ,'sign':'第一章'
            ,'sex':'第一节'
            ,'button':'<a href="classDetail.html" class="layui-btn" style="height:26px;line-height:26px;">进入课程</a>'
        }]
        ,skin: 'row' //表格风格
        ,even: true
        ,page: true //是否显示分页
        ,limits: [3,5,10]
        ,limit: 3 //每页默认显示的数量
    });
});

