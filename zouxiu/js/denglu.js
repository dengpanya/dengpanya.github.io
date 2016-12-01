/**
 * Created by Administrator on 2016/9/27.
 */$(function () {
    //登录页面JS
    var user = "";


    $('input[type="submit"]').click(function () {




        $('.login').addClass('test');
        setTimeout(function () {
            $('.login').addClass('testtwo');
        }, 300);
        setTimeout(function () {
            $('.authent').show().animate({right: -320}, {
                easing: 'easeOutQuint',
                duration: 600,
                queue: false
            });
            $('.authent').animate({opacity: 1}, {
                duration: 200,
                queue: false
            }).addClass('visible');
        }, 500);
        setTimeout(function () {
            $('.authent').show().animate({right: 90}, {
                easing: 'easeOutQuint',
                duration: 600,
                queue: false
            });
            $('.authent').animate({opacity: 0}, {
                duration: 200,
                queue: false
            }).addClass('visible');
            $('.login').removeClass('testtwo');
        }, 2500);
        setTimeout(function () {
            $('.login').removeClass('test');
            $('.login div').fadeOut(123);
        }, 2800);




        var name=[$.cookie('username').split(",")];
        var pas=[$.cookie('password').split(",")];
        var phone=[$.cookie('phone').split(",")];
        var email=[$.cookie('email').split(",")];


        console.log(typeof (pas[0][0]));
        console.log(typeof ($("#psd2").val()));
        console.log(phone);
        for(var i=0;i<name[0].length;i++) {
            if ($("#tx1").val() == name[0][i] || $("#tx1").val() == phone[0][i] || $("#tx1").val() == email[0][i]) {
                if ($("#psd2").val() == pas[0][i] ){
                    setTimeout(function () {
                        $('.yes').css({display: "block"});
                        $('.yes').fadeIn();
                    }, 3200);
                    user = $("#tx1").val();
                    setTimeout(function () {
                        $.ajax({
                            success: function fn() {
                                location.href = "../html/index.html";
                            }
                        });
                    }, 3600)
                }else {
                    setTimeout(function () {
                        $('.no').css({display: "block"});
                        $('.no').fadeIn();
                    }, 3200);
                }
            }
        }


    });


    $('input[type="text"],input[type="password"]').focus(function () {
        $(this).prev().animate({'opacity': '1'}, 200);
    });
    $('input[type="text"],input[type="password"]').blur(function () {
        $(this).prev().animate({'opacity': '.5'}, 200);
    });
    $('input[type="text"],input[type="password"]').keyup(function () {
        if (!$(this).val() == '') {
            $(this).next().animate({
                'opacity': '1',
                'right': '30'
            }, 200);
        } else {
            $(this).next().animate({
                'opacity': '0',
                'right': '20'
            }, 200);
        }
    });
})