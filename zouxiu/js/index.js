/**
 * Created by Administrator on 2016/9/20.
 */
(function ($) {
    $(
        function () {
            var li2 = $(".li2");
            var li3 = $(".li3");
            var tx = $(".tx");
            var nav2 = $(".nav2");
            var wrap = $("#wrap");
            $(window).scroll(function () {
                if ($(document).scrollTop() > 136) {
                    nav2.css({
                        position: "fixed",
                        width: "100%",
                        minWidth: "1263px",
                        left: 0,
                        top: 0,
                        margin: 0,
                        background: "rgba(40,40,40,0.9)"
                    });
                    wrap.css({position: "fixed", left: 0, top: 41, background: "rgba(255,255,255,0.9)"})
                } else {
                    nav2.css({position: "", width: "1200", minWidth: "", marginTop: 10, background: ""});
                    wrap.css({position: "", background: ""})
                }
            });
            li2.mouseenter(function () {
                $(".li2 a").css({
                    background: "#fff url('../img/background.png') no-repeat -215px -75px",
                    color: "red"
                });
                $(".li2 div").css({display: "block"})
            });
            li2.mouseleave(function () {
                $(".li2 a").css({
                    background: "#333 url('../img/background.png') no-repeat -215px -40px",
                    color: "#eee"
                });
                $(".li2 div").css({display: "none"})
            });
            li3.mouseenter(function () {
                $(".li3 .a1").css({
                    background: "#fff url('../img/background.png') no-repeat right -143px",
                    color: "red"
                });
                $(".li3 div").css({display: "block"})
            });
            li3.mouseleave(function () {
                $(".li3 .a1").css({
                    background: "#333 url('../img/background.png') no-repeat right -108px",
                    color: "#eee"
                });
                $(".li3 div").css({display: "none"})
            });
            tx.focus(function () {
                    var txt = $(this).val();
                    if (txt == this.defaultValue) {
                        $(this).val("");
                    }
                }
            );
            tx.blur(function () {
                    var txt = $(this).val();
                    if (txt == "") {
                        $(this).val(this.defaultValue);
                    }
                }
            );
            var list = $("#wrap li");
            var submenu = $(".submenu");
            submenu.each(function (i) {
                if (i > 2) {
                    submenu.eq(i).css({left: -(43 + (i - 3) * 71)})
                }

            });
            list.mouseenter(function () {
                var index = $(this).index();
                submenu.css({display: "none"});
                submenu.eq(index).css({display: "block"});
                $(this).css({background: "white"}).css({border: "1px solid #d7d7d7", borderBottom: "1px solid #fff"});
                if (index == 0) {
                    submenu.eq(0).css({height: 436, opacity: 1});
                }
                if (index == 1) {
                    submenu.eq(1).css({height: 817, opacity: 1});
                }
                if (index == 2) {
                    submenu.eq(2).css({height: 546, opacity: 1});
                }
                if (index == 3) {
                    submenu.eq(3).css({height: 458, opacity: 1});
                }
                if (index == 4) {
                    submenu.eq(4).css({height: 304, opacity: 1});
                }
                if (index == 5) {
                    submenu.eq(5).css({height: 437, opacity: 1});
                }
                if (index == 6) {
                    submenu.eq(6).css({height: 480, opacity: 1});
                }
                if (index == 7) {
                    submenu.eq(7).css({height: 437, opacity: 1});
                }
                if (index == 8) {
                    submenu.eq(8).css({height: 332, opacity: 1});
                }
            });
            list.mouseleave(function () {
                var index = $(this).index();
                submenu.eq(index).css({height: 0, opacity: 0, display: "none"});
                $(this).css({border: "1px solid #f7f7f7", background: ""});
            });

            var alis = $("#top a");
            alis.mouseenter(function () {
                $(this).stop().animate({left: -20}, 300);
            });
            alis.mouseleave(function () {
                $(this).stop().animate({left: 0}, 300);
            });
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
            });

            $("#menu img").click(function () {
                $("#fly-shutter").show();
            })
            $(".pic_dome img").click(function () {
                $("#fly-shutter").hide();
            })


        })
})(jQuery)