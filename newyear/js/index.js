/**
 * Created by mac on 2016/12/29.
 */


$(function(){
    //昵称的样式
    var namewidth=$(".name").width();
    var nameheight=$(".name").height();
    if (namewidth>=nameheight*4){
        $(".name").css({width:nameheight*4});
        $(".news").css({marginLeft:"-.15rem"})
  
    }

    //随机出图片
    var num=Math.ceil(Math.random()*13);
    $(".box1 img").attr("src","img/"+num+".png");

  
  
  
  var  id=getQueryString("id");
  
  
$.ajax({
         url:"http://www.chic-tech.cn/appService/homepage/getwxuser",
         data:{id:1},
         success:function(res){
         	console.log(res);
	        $("#headpic").attr("src",res.headpic);
	        $("#nickname").html(res.nickname);
         }
         });
//$.post("http://www.chic-tech.cn/appService/homepage/getwxuser",{id:1},function(res){
//	console.log(res);
//	$("#headpic").attr("src",res.headpic);
//	$("#nickname").text(res.nickname);
//},"json")
  
    function getQueryString(str2) {

        var str = location.href;

        var arr = str.split(str2);
  
        return arr[1]==null? null : arr[1].substring(1,arr[1].length);
    }

  $(".again").click(function(){
                    location.href="index.html?id=1";
                    });
  });



