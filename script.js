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
            headers:{"Authorization":"KakaoAK 83241b51b26798a25aa23b3f331ba439"},
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


