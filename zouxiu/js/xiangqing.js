/**
 * Created by Administrator on 2016/9/26.
 */
window.onload = $(function () {
//购物袋初始化
    if ($.cookie("count") == undefined || $.cookie("count") == "") {
        $("#num1").text("0");
    } else {
        $("#num1").text($.cookie("count"));
    }


//放大镜
    $("#imgPicDiv").mouseenter(function () {
        $("#showimg").show();
        $("#bigPicDiv").show();
        $(document).mousemove(function (evt) {
            var ex = evt.pageX - $("#imgPicDiv").offset().left;
            var ey = evt.pageY - $("#imgPicDiv").offset().top;
            var x = ex - $("#showimg").height() / 2;
            var y = ey - $("#showimg").width() / 2;
            if (x < 0) {
                x = 0
            }
            if (x > 201) {
                x = 201
            }
            if (y < 0) {
                y = 0
            }
            if (y > 268) {
                y = 268
            }
            $("#showimg").css({left: x + "px", top: y + "px"});
            $("#bigPic").css({left: -2 * x + "px", top: -2 * y + "px"});
            $("#imgPicDiv").mouseleave(function () {
                $("#showimg").hide();
                $("#bigPicDiv").hide();
            })
        })
    });

//商品数量加减
    $("#jian").click(function () {
        if ($("#num").val() == 1) {
            $("#num").val(1);
            return;
        }
        var a = $("#num").val();
        a--;
        $("#num").val(a);
    });
    $("#plus").click(function () {
        var a = $("#num").val();
        a++;
        $("#num").val(a);
    });

//滚动监听
    $(window).scroll(function () {
        var topoff = 500;
        var scrollTop = $(window).scrollTop();
        if (scrollTop > topoff) {
            $(".fly_zcode").show();
            $("#menu").addClass("float_active");
        }
        else {
            $(".fly_zcode").hide();
            $("#menu").removeClass("float_active");
        }

        if ($(document).scrollTop() >= 888) {
            $(".cpmx").css({position: "fixed", top: 0})
        } else {
            $(".cpmx").css({position: "relative"})
        }
    });

//选项卡
    $("#container_ul li").click(function () {
        var index = $(this).index();
        $("#container_ul li").removeClass("on").eq(index).addClass("on");
        $("#container_ul a").css({color: "#000"}).eq(index).css({color: "#fff"});
        $(".container").hide().eq(index).show()
    });

//回到顶部
    $("#backtop .closed").click(function () {
        $("#backtop").hide();
    });

    $(".backtop").click(function () {
        $("html,body").animate({scrollTop: 0}, 1000);
    });


    //加入购物车
    if ($.cookie('type') != undefined) {
        var type = [$.cookie('type').split(",")];
        var img = [$.cookie('img').split(",")];
        var price = [$.cookie('price').split(",")];
        var log = [$.cookie('log').split(",")];
        var color = [$.cookie('color').split(",")];
        var size = [$.cookie('size').split(",")];
        var numb = [$.cookie('num').split(",")];
    } else {
        var type = [];
        var img = [];
        var price = [];
        var log = [];
        var color = [];
        var size = [];
        var numb = [];
    }


    $("#user_buy_btn").click(function () {
        var btn = true;
        if ($.cookie('type') != undefined) {
            var type = [$.cookie('type').split(",")];
            var img = [$.cookie('img').split(",")];
            var price = [$.cookie('price').split(",")];
            var log = [$.cookie('log').split(",")];
            var color = [$.cookie('color').split(",")];
            var size = [$.cookie('size').split(",")];
            var numb = [$.cookie('num').split(",")];
        } else {
            var type = [];
            var img = [];
            var price = [];
            var log = [];
            var color = [];
            var size = [];
            var numb = [];
        }
        if (type == "") {
            cun();
            $("#num1").text($("#num").val());
            $.cookie("count", $("#num1").text(), {path: "/", expires: 9999});
        }
        else {
            console.log(type[0].length);


            for (var i = 0; i < type[0].length; i++) {
                console.log(typeof ($("#pai").text()));
                console.log($("#pai").text());
                console.log(typeof (type[0][i]));
                console.log(type[0][i]);

                if (type[0][i] == $("#pai").text()) {
                    $("#num1").text(parseInt($("#num1").text()) - parseInt(numb[0][i]));
                    numb[0][i] = parseInt(numb[0][i]) + parseInt($("#num").val());
                    if (numb[0][i] > 4) {
                        numb[0][i] = 4;
                        $.cookie("num", numb.join(","), {path: "/", expires: 9999})
                    } else {
                        $.cookie("num", numb.join(","), {path: "/", expires: 9999})
                    }
                    $("#num1").text(parseInt($("#num1").text()) + parseInt(numb[0][i]));
                    $.cookie("count", $("#num1").text(), {path: "/", expires: 9999})
                    btn = false;
                }
            }
                if (btn == true) {
                    cun();
                    $("#num1").text(parseInt($("#num1").text()) + parseInt($("#num").val()));
                    $.cookie("count", $("#num1").text(), {path: "/", expires: 9999});
                    return;
                }

        }
    });

    $(".buy").click(function () {
        location.href = "../html/gouwuche.html";
    });

    function cun() {
        type.push($("#pai").text());
        img.push($("#bigPic").attr("src"));
        price.push($(".style3").text());
        log.push($(".log").text());
        color.push($("#colorsArea .xsxm").text() + $("#colorsArea .selected").text());
        size.push($("#sizesArea .xsxm").text() + $("#sizesArea .selected").text());
        numb.push($("#num").val());
        if ($("#num").val() > 4) {
            $.cookie("num", 4, {path: "/", expires: 9999});
        } else {
            $.cookie("num", numb.join(","), {path: "/", expires: 9999})
        }
        $.cookie("type", type.join(","), {path: "/", expires: 9999});
        $.cookie("img", img.join(","), {path: "/", expires: 9999});
        $.cookie("price", price.join(","), {path: "/", expires: 9999});
        $.cookie("log", log.join(","), {path: "/", expires: 9999});
        $.cookie("color", color.join(","), {path: "/", expires: 9999});
        $.cookie("size", size.join(","), {path: "/", expires: 9999});
    }
});