getlist();

$("#txtQuery").on("keydown",function (e){
    if(e.keyCode==13){
        getlist();
    }
});

function getlist(){
    var query=$("#txtQuery").val();

    $.ajax(
        {
            type:"get",
            url:url,
            headers:{"Authorization":"KakaoAK "},
            data:{"query":query, "size":size},
            dataType:"json",
            success:function(data){
                var temp=Handlebars.compile($("#temp").html());
                $("#list").html(temp(data)).listview("refresh");
            }
        }
    );
}

$("#btn").on("click",function (e){
    size=size+5;
    getlist();
})


