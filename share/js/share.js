/**
 * Created by mac on 2017/2/15.
 */
$(function(){
    var jobImageBox=$(".jobImages");
    var jobImage=$(".jobImages .image");
    var headpic=$(".photo img");
    //给图片设置成正方形的
    //jobImage.css({"height":jobImage.width()});
    //当图片只有一张时，给图片设置样式
    //if (jobImage.length==1){
    //    jobImage.css({"height":"162","width":"124"});
    //}
    var str=window.location.search;
    var array=str.split("=");
    var jobid=array[1];


    $.ajax({
        url:"http://192.168.1.150:8080/appService/wxjob/jobInfo",
        type:"POST",
        data:JSON.stringify({
            jobId:243
        }),
        dataType:"json",
        contentType:"application/json",
        success:function(data){
            console.log(data);
            headpic.attr("src",data.userimage);
            $(".name").text(data.username);
            $(".jobcontain").text(data.description);
            $(".date").text(data.date);

            //console.log(data.jobimages.length);
            if (data.jobimages.length<1){
                jobImageBox.css({"display":"none"});
            }
            if (data.jobimages.length==1){
				jobImageBox.append('<div class="image" style="width: 124px;height: 162px">' +
                    '<img src="'+
                    data.jobimages[0].url
                    +'" class="img img-one" data-image="0"></div>'
                );

				//$(".jobImages .image").css({"height":"162","width":"124"});
                console.log($(".jobImages .image").width());
                console.log($(".jobImages .image").height());
            }
            if(data.jobimages.length>1){
            	for (var i=0;i<data.jobimages.length;i++){
                    jobImageBox.append('<div class="'+'image'+'"><img src="'+
                        data.jobimages[i].url
                        +'" class="img" data-image="0"></div>'
                );

                $(".jobImages .image").eq(i).css({"height":$(".jobImages .image").eq(i).width()});

                if (i==data.jobimages.length-1){
                    var imges1=$(".ig0 .img");
                    var img1Length=imges1.length;
                    console.log(imges1);
                    console.log(img1Length);
                    for (var a=0;a<img1Length;a++){
                        if (imges1.eq(a).height()<imges1.eq(a).width()){
                            imges1.eq(a).css({"height":"100%"});
                            imges1.eq(a).css({"width":imges1.eq(a).height()});
                        }
                    }
                }

            }

            }



        }
    });

    $.ajax({
        url:"http://192.168.1.150:8080/wxservice/wxjob/recommendjobs",
        type:"POST",
        dataType:"json",
        contentType:"application/json",
        success:function(data) {
            console.log(data);
            console.log(data.jobList.length);
            console.log(data.jobList[0]);

            for (var k=0;k<data.jobList.length;k++){
                var num = k+1;
                $(".box").append('<div class="jobDetails"><div class="photo"><img src="' +
                    data.jobList[k].userimage +
                    '" alt=""></div><div class="jobDetails-box"><div class="name">' +
                    data.jobList[k].username +
                    '</div><div class="jobcontain">' +
                    data.jobList[k].description +
                    '</div><div class="jobImages ig'+ num +'"></div><div class="date">' +
                    data.jobList[k].date +
                    '</div></div><a href="#" class="signup">报名</a></div>'
                )
                console.log(data.jobList[k].jobimages.length);
                //if (data.jobList[k].jobimages.length < 1){
                //    $(".jobImages").css({"display":"none"})
                //}
                if (data.jobList[k].jobimages.length == 1){
                    $(".jobImages").eq(k+1).append('<div class="'+'image'+'" style="width: 124px;height: 162px">' +
                        '<img src="'+
                        data.jobList[k].jobimages[0].url
                        +'" class="img img-one" data-image="'+ num +'"></div>'
                    );

                    var imges=$(".jobImages").eq(k+1).children(".image").children(".img");
                    var imgLength=imges.length;
                    var proportion= imges.eq(0).width()/imges.eq(0).height();

                    if (imges.eq(0).height()<imges.eq(0).width()){
                        imges.eq(0).css({"height":"100%"});
                        imges.eq(0).css({"width":""});
                    }
                    //console.log($(".jobImages .image"));
                    //$(".jobImages .image")[k+1].css({"height":"162","width":"124"});

                }
                if (data.jobList[k].jobimages.length > 1){
                    for (m=0;m<data.jobList[k].jobimages.length;m++){
                        $(".jobImages").eq(k+1).append('<div class="'+'image'+'"><img src="'+
                            data.jobList[k].jobimages[m].url
                            +'" class="img" data-image="'+ num +'"></div>'
                        )
                    }

                    $(".jobImages").eq(k+1).children(".image").css({"height":$(".jobImages").eq(k+1).children(".image").width()});

                    var imges=$(".jobImages").eq(k+1).children(".image").children(".img");
                    var imgLength=imges.length;
                    console.log(imgLength +'111');

                    for (var a=0;a<imgLength;a++){
                        if (imges.eq(a).height()<imges.eq(a).width()){
                            imges.eq(a).css({"height":"100%"});
                            imges.eq(a).css({"width":imges.eq(a).height()});
                        }
                    }


                }

            }

        }

    });


    //具有.img类名的图片 点击可出现大图
    $(document).on("click",".img",function(){
        var attr = $(this).attr("data-image");
        console.log(attr);
        var index = $(".ig"+ attr +" .img").index($(this));//点击图片下标 设置swiper初始索引
        console.log(index);
        $(".swiper").append('<div class="swiper-container"><div class="swiper-wrapper"></div></div>')
        $(".swiper-container").show();

        for(var j = 0;j<$(".ig"+ attr +" .img").length;j++){
            var img = $(".ig"+ attr +" .img").eq(j).attr("src");
            $(".swiper-wrapper").append('<div class="swiper-slide"><img src="'+ img +'"/><span></span></div>')
                    }
        var mySwiper = new Swiper('.swiper-container', {
            //pagination : '.swiper-pagination',
            //loop : true,
            initialSlide :index
        })
    });
    //点击隐藏
    $(".swiper").click(function(){
        $(".swiper").empty();
    });

});