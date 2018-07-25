layui.use(['layer', 'element','table','form'], function(){
    var element = layui.element
    ,$ = layui.jquery, layer = layui.layer
    ,table = layui.table;
    // class data
    table.render({
        elem: '#class-list'
        ,cols: [[ //标题栏
        {LAY_CHECKED: false}
        ,{field: 'id', title: '难度', width: 100}
        ,{field: 'classname', title: '导学案', width: 180}
        ,{field: 'email', title: '讲义', width: 180}
        ,{field: 'sign', title: '课件', width: 180}
        ,{field: 'sex', title: '课后作业', width: 180}
        ,{field: 'button', title: '操作', width: 150}
        ]]
        ,data:[{
            'id':1
            ,'classname':'<div><p>导学案</p><button class="layui-btn" >查看</button><button class="layui-btn" >复制链接</button></div>'
            ,'email':'高中'
            ,'sign':'第一章'
            ,'sex':'第一节'
            ,'button':'<a href="classDetail.html" class="layui-btn" style="height:26px;line-height:26px;">进入课程</a>'
        }]
        ,skin: 'row' //表格风格
        ,even: true
        ,page: true //是否显示分页
        ,limits: 10
        ,limit: 10 //每页默认显示的数量
    });

    //   根据课次id，查询该课次列表（按难度）
    $.ajax({
        url:base_url+"/research/v1/course/getclassesdifficult",
        type:"post",
        dataType:"json",
        data:{
            id:1
        },
        success:function(data){
            console.log(data);
        }
    })
})