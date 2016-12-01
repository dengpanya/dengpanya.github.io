/**
 * Created by Administrator on 2016/9/27.
 */
$(function () {
    //注册页面JS
    var lph = $(".lph");
    var input = $(".ip");
    var ul = $(".phone ul");
    var p = $(".phone p");
    var list1 = $(".phone li");
    lph.click(function () {
        if (ul.css("display") == "none") {
            ul.css({display: "block"})
        } else {
            ul.css({display: "none"})
        }
        return false;

    });


    list1.click(function () {
        p.text($(this).text());
        ul.css({display: "none"});
        return false;
    });


    //账号
    var reg = /^[0-9]{4,20}$/;

    var reg1 = /^[u4e00-u9fa5A-Za-z0-9\_]{1,}$/;

    var btn = true;

    $("#tx").focus(function () {//获取焦点事件
            if ($(this).val() === this.defaultValue) {
                $(this).val("");
            }


            $(".tx p").css({display: "block"});
            $(".tx i").css({display: "block"});


            if (reg1.test($(this).val()) == true && $(this).val().length > 3 && reg.test($(this).val()) != true) {
                $(".yhm .i-status").css({display: "block"});
                $(".tx p").css({display: "none"});
                $(".tx i").css({display: "none"});
                $("#tx").bind("input", function () {
                    $(".yhm .i-status").css({display: "none"});
                })
            }


            $("#tx").bind("input", function () {
                if (reg1.test($(this).val()) == false) {
                    $(".yhm").css({borderColor: "red"});
                    $(".tx p").css({display: "block"});
                    $(".tx i").css({display: "block"});
                    $(".tx p").css({color: "red"});
                    $(".tx p").text("格式错误，仅支持汉字、字母、数字、“_”的组合");
                    $(".tx i").css({color: "red", backgroundPosition: "-17px -100px"});
                    btn = false;
                }
                if (reg1.test($(this).val()) == true || $(this).val() == "") {
                    btn = true;
                    $(".yhm").css({borderColor: "#c5c5c5"});
                    $(".tx p").css({color: "#c5c5c5"});
                    $(".tx p").text("支持中文、字母、数字、''_'的组合，4-20个字符");
                    $(".tx i").css({color: "#c5c5c5", backgroundPosition: "left -100px"});
                }
                //
            });
        }
    );


    $("#tx").blur(function () {//失去焦点事件
        if ($(this).val() === "") {
            $(this).val(this.defaultValue);
        }

        if (($(this).val().length < 4 && $(this).val().length > 0) && reg1.test($(this).val()) == true) {
            $(".tx p").css({display: "block"});
            $(".tx i").css({display: "block"});
            $(".yhm").css({borderColor: "red"});
            $(".tx p").css({color: "red"});
            $(".tx p").text("长度只能在4-20个字符之间");
            $(".tx i").css({color: "red", backgroundPosition: "-17px -100px"});
            $("#tx").bind("input", function () {
                $(".yhm").css({borderColor: "#c5c5c5"});
                $(".tx p").css({color: "#c5c5c5"});
                $(".tx p").text("支持中文、字母、数字、''_'的组合，4-20个字符");
                $(".tx i").css({color: "#c5c5c5", backgroundPosition: "left -100px"});
            })
        }

        else if (reg.test($(this).val()) == true) {
            $(".yhm").css({borderColor: "red"});
            $(".tx p").css({display: "block"});
            $(".tx i").css({display: "block"});
            $(".tx p").css({color: "red"});
            $(".tx p").text("用户名不能是纯数字，请重新输入！");
            $(".tx i").css({color: "red", backgroundPosition: "-17px -100px"});
            $("#tx").bind("input", function () {
                $(".yhm").css({borderColor: "#c5c5c5"});
                $(".tx p").css({color: "#c5c5c5"});
                $(".tx p").text("支持中文、字母、数字、''_'的组合，4-20个字符");
                $(".tx i").css({color: "#c5c5c5", backgroundPosition: "left -100px"});
            })
        }

        else if (btn == false) {
            $(".tx p").css({display: "block"});
            $(".tx i").css({display: "block"});
        }

        else if (reg1.test($(this).val()) == true && $(this).val().length > 3 && reg.test($(this).val()) != true) {
            $(".yhm .i-status").css({display: "block"});
            $(".tx p").css({display: "none"});
            $(".tx i").css({display: "none"});
        }

        else {
            console.log("1");
            $(".tx p").css({display: "none"});
            $(".tx i").css({display: "none"});
        }

    });


    //密码
    $("#psd").focus(function () {
            if ($(this).val() === this.defaultValue) {
                $(this).attr('placeholder', '');
            }
            $(".ps p").css({display: "block"});
            $(".ps i").css({display: "block"});
            $("#psd").bind("input", function () {
                if (reg2.test($(this).val()) == false && $(this).val().length > 5 && $(this).val() != "") {
                    btn = false;
                    $(".ps i").css({backgroundPosition: "-17px -134px"});
                    $(".ps p").css({color: "red"});
                    $(".ps p").text("有被盗风险,建议使用字母、数字和符号两种及以上组合");
                }
                if (reg2.test($(this).val()) == true && $(this).val().length > 5) {
                    btn = true;
                    $(".psd .i-status").css({display: "block"});
                    $(".psd").css({borderColor: "#c5c5c5"});
                    $(".ps i").css({backgroundPosition: "-34px -134px"});
                    $(".ps p").css({color: "#c5c5c5"});
                    $(".ps p").text("你的密码很安全");
                }
                if ($(this).val() == "") {
                    btn = true;
                    $(".psd").css({borderColor: "#c5c5c5"});
                    $(".ps p").css({color: "#c5c5c5"});
                    $(".ps p").text("建议使用字母、数字和符号两种及以上的组合，6-20个字符");
                    $(".ps i").css({backgroundPosition: "left -100px"});
                }
                if (($(this).val().length < 6 && $(this).val().length > 0 && $(this).val() != "") || $(this).val().length > 20) {
                    $(".psd .i-status").css({display: "none"});
                    $(".ps p").css({display: "none"});
                    $(".ps i").css({display: "none"})
                }

            })
        }
    );


    var reg2 = /^(?![0-9]+$)(?![a-zA-Z]+$)(?!([^(0-9a-zA-Z)]|[\(\)])+$)([^(0-9a-zA-Z)]|[\(\)]|[a-zA-Z]|[0-9]){6,}$/

    $("#psd").blur(function () {
        if ($(this).val() == "") {
            $(this).attr('placeholder', '建议至少使用两种组合');
        }

        if (($(this).val().length < 6 && $(this).val().length > 0 && $(this).val() != "") || $(this).val().length > 20) {
            $(".psd").css({borderColor: "red"});
            $(".ps p").css({display: "block", color: "red"});
            $(".ps p").text("长度只能在6-20个字符之间");
            $(".ps i").css({display: "block", color: "red", backgroundPosition: "-17px -100px"});
            $("#psd").bind("input", function () {
                $(".psd").css({borderColor: "#c5c5c5"});
                $(".ps p").css({color: "#c5c5c5"});
                $(".ps p").text("建议使用字母、数字和符号两种及以上的组合，6-20个字符");
                $(".ps i").css({backgroundPosition: "left -100px"});
            })
        }

        else if (btn == false) {
            $(".ps p").css({display: "block"});
            $(".ps i").css({display: "block"});
        }

        else if (reg2.test($(this).val()) == true && $(this).val().length > 6) {
            $(".psd .i-status").css({display: "block"});
            $(".ps p").css({display: "block"});
            $(".ps i").css({display: "block"});
        }

        else {
            $(".ps p").css({display: "none"});
            $(".ps i").css({display: "none"});
        }

    });


    //确认密码

    $("#psd1").focus(function () {
            if ($(this).val() === this.defaultValue) {
                $(this).attr('placeholder', '');
            }
            $(".ps1 p").css({display: "block"});
            $(".ps1 i").css({display: "block"});

            if ($("#psd1").val() == $("#psd").val() && $("#psd1").val() != "") {
                $(".psd1 .i-status").css({display: "block"});
                $(".psd1").css({borderColor: "#c5c5c5"});
                $(".ps1 p").css({display: "none", color: "#c5c5c5"});
                $(".ps1 p").text("请再次输入密码");
                $(".ps1 i").css({display: "none", color: "#c5c5c5", backgroundPosition: "left -100px"});
            }
        }
    );


    $("#psd1").blur(function () {

        if ($(this).val() == "") {
            $(this).attr('placeholder', '请再次输入密码');
        }

        if ($("#psd1").val() != $("#psd").val() && $("#psd1").val() != "") {
            $(".psd1").css({borderColor: "red"});
            $(".ps1 p").css({display: "block", color: "red"});
            $(".ps1 p").text("两次密码不一致");
            $(".ps1 i").css({display: "block", color: "red", backgroundPosition: "-17px -100px"});
        }

        if ($("#psd1").val() == $("#psd").val() && $("#psd1").val() != "") {
            $(".psd1 .i-status").css({display: "block"});
            $(".psd1").css({borderColor: "#c5c5c5"});
            $(".ps1 p").css({display: "none", color: "#c5c5c5"});
            $(".ps1 p").text("请再次输入密码");
            $(".ps1 i").css({display: "none", color: "#c5c5c5", backgroundPosition: "left -100px"});
        }

        else {
            $(".ps1 p").css({display: "none"});
            $(".ps1 i").css({display: "none"});

        }
    });


    //手机

    var reg3 = /^1[34578]\d{9}$/;

    $("#phone").focus(function () {
        if ($(this).val() === this.defaultValue) {
            $(this).val("");
        }
        $(".ph p").css({display: "block"});
        $(".ph i").css({display: "block"});


        if (reg3.test($("#phone").val()) == true) {
            $(".phone .i-status").css({display: "block"});
            $(".phone").css({borderColor: "#c5c5c5"});
            $(".ph p").css({display: "none", color: "#c5c5c5"});
            $(".ph p").text("完成验证后，可以使用该手机登录和找回密码");
            $(".ph i").css({display: "none", backgroundPosition: "left -100px"});
        }

        $("#phone").bind("input", function () {
            if ($("#phone").val() == "") {
                $(".phone").css({borderColor: "#c5c5c5"});
                $(".ph p").css({color: "#c5c5c5"});
                $(".ph p").text("完成验证后，可以使用该手机登录和找回密码");
                $(".ph i").css({backgroundPosition: "left -100px"});
            }

        })

    });


    $("#phone").blur(function () {
        if ($(this).val() === "") {
            $(this).val(this.defaultValue);
        }

        if (reg3.test($("#phone").val()) == false && $("#phone").val() != this.defaultValue) {
            $(".phone .i-status").css({display: "none"});
            $(".phone").css({borderColor: "red"});
            $(".ph p").css({display: "block", color: "red"});
            $(".ph p").text("格式有误");
            $(".ph i").css({display: "block", color: "red", backgroundPosition: "-17px -100px"});
        }

        else {
            $(".ph p").css({display: "none"});
            $(".ph i").css({display: "none"});
        }

        if (reg3.test($("#phone").val()) == true) {
            $(".phone .i-status").css({display: "block"});
            $(".phone").css({borderColor: "#c5c5c5"});
            $(".ph p").css({display: "none", color: "#c5c5c5"});
            $(".ph p").text("完成验证后，可以使用该手机登录和找回密码");
            $(".ph i").css({display: "none", backgroundPosition: "left -100px"});
        }


    });


    //邮箱

    $("#email").focus(function () {
        if ($(this).val() === this.defaultValue) {
            $(this).val("");
        }
        $(".email1 p").css({display: "block"});
        $(".email1 i").css({display: "block"});
    });


    $("#email").bind("input", function () {
        $(".email-suggest").css({display: "block"});
        $(".email-suggest .value").text("");
        $(".email-suggest .value").eq(0).prepend($("#email").val() + "@qq.com");
        $(".email-suggest .value").eq(1).prepend($("#email").val() + "@163.com");
        $(".email-suggest .value").eq(2).prepend($("#email").val() + "@126.com");
        $(".email-suggest .value").eq(3).prepend($("#email").val() + "@Sina.com");
        $(".email-suggest .value").eq(4).prepend($("#email").val() + "@Sohu.com");
        $(".email-suggest .value").eq(5).prepend($("#email").val() + "@Gmail.com");
    });
    var index = -1;
    $("#email").keydown(function (event) {
        if (event.keyCode == 40) {
            index++;
            if (index > $(".email-suggest li").length - 1) {
                index = 0;
            }
            $(".email-suggest li").css({background: "white"}).eq(index).css({background: "#eee"});
            $("#email").val($.trim($(".email-suggest li").eq(index).text()));
            return false;
        }
        if (event.keyCode == 38) {
            index--;
            if (index < 0) {
                index = $(".email-suggest li").length - 1;
            }
            $(".email-suggest li").css({background: "white"}).eq(index).css({background: "#eee"});
            $("#email").val($.trim($(".email-suggest li").eq(index).text()));
            return false;
        }
        if (event.keyCode == 13) {
            $(".email-suggest .value").text("");
            $(".email-suggest").css({display: "none"});
        }

        if ($("#email").val().length < 1) {
            $(".email-suggest .value").text("");
            $(".email-suggest").css({display: "none"});
        }
    });


    $("#email").blur(function () {
        if ($(this).val() === "") {
            $(this).val(this.defaultValue);
        }
        $(".email1 p").css({display: "none"});
        $(".email1 i").css({display: "none"});
        $(".email-suggest").css({display: "none"});
    });

    //验证码


    function yzm() {
        var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        var str = '';
        for (var i = 0; i < 4; i++)
            str += '' + arr[Math.floor(Math.random() * arr.length)];
        return str;
    }

    var i = $(".ma i");

    i.text(yzm());

    i.click(function () {
        i.text(yzm());
        return false;
    });


    $("#ma").focus(function () {
        if ($(this).val() === this.defaultValue) {
            $(this).val("");
        }

        $(".mm p").css({display: "block"});
        $(".mm i").css({display: "block"});
    });

    $("#ma").bind("input", function () {
        $(".ma").css({borderColor: "#c5c5c5"});
        $(".mm p").css({color: "#c5c5c5"});
        $(".mm p").text("看不清？点击图片更换验证码");
        $(".mm i").css({color: "#c5c5c5", backgroundPosition: "left -100px"});
    })


    $("#ma").blur(function () {
        if ($(this).val() === "") {
            $(this).val(this.defaultValue);
        }
        if ($("#ma").val() != i.text() && $("#ma").val() != this.defaultValue) {
            $(".ma").css({borderColor: "red"});
            $(".mm p").css({display: "block", color: "red"});
            $(".mm p").text("验证码错误");
            $(".mm i").css({display: "block", color: "red", backgroundPosition: "-17px -100px"});
        }else {
            $(".mm p").css({display: "none"});
            $(".mm i").css({display: "none"});
        }
    });


    if ($.cookie('username') != undefined) {
        var name = [$.cookie('username').split(",")];
        var pas = [$.cookie('password').split(",")];
        var phone = [$.cookie('phone').split(",")];
        var email = [$.cookie('email').split(",")];
    } else {
        var name = [];
        var pas = [];
        var phone = [];
        var email = [];
    }


    $(".btn-register").click(function () {
        if($("#ma").val()==""||$("#tx").val()==""||$("#psd").val()==""||$("#psd1").val()==""||$("#phone").val()==""){
            $(".zhuce").text("账号、密码、手机、验证码不能为空");
            $(".zhuce").show();
            setTimeout(function () {
                $(".zhuce").hide();
            }, 3000);
            return;
        }
        if (name.length == 0) {
            cun();
            $(".zhuce").show();
            setTimeout(function () {
                $(".zhuce").text("注册成功，3秒后跳转至登录页面！");
                $(".zhuce").hide();
                location.href = "../html/denglu.html"
            }, 3000);
        } else {
            for (var i = 0; i < name[0].length; i++) {
                if (name[0][i] != $("#tx").val() && phone[0][i] != $("#phone").val()) {
                    cun();
                    $(".zhuce").text("注册成功，3秒后跳转至登录页面!");
                    $(".zhuce").show();
                    setTimeout(function () {
                        $(".zhuce").hide();
                        location.href = "../html/denglu.html"
                    }, 3000)
                } else {
                    if (name[0][i] == $("#tx").val()) {
                        $(".zhuce").text("账号已经被注册！");
                        $(".zhuce").show();
                        setTimeout(function () {
                            $(".zhuce").hide();
                        }, 3000);
                        return;
                    }
                    if (phone[0][i] == $("#phone").val()) {
                        $(".zhuce").text("手机已经被注册！");
                        $(".zhuce").show();
                        setTimeout(function () {
                            $(".zhuce").hide();
                        }, 3000);
                        return;
                    }
                }
            }
        }

    });

    function cun() {
        name.push($("#tx").val());
        pas.push($("#psd").val());
        phone.push($("#phone").val());
        email.push($("#email").val());

        $.cookie('username', name.join(","), {path: "/", expires: 9999});
        $.cookie('password', pas.join(","), {path: "/", expires: 9999});
        $.cookie('phone', phone.join(","), {path: "/", expires: 9999});
        $.cookie('email', email.join(","), {path: "/", expires: 9999});
    }


    $(".protocol-button").click(function () {
        $(".ui-mask").css({display: "none"});
        $(".ui-dialog").css({display: "none"})
    });

    $(".ui-dialog-close").click(function () {
        $(".ui-mask").css({display: "none"});
        $(".ui-dialog").css({display: "none"})
    });

    $("#protocol").click(function () {
        $(".ui-mask").css({display: "block"});
        $(".ui-dialog").css({display: "block"})
    });

    $(".ui-mask").click(function () {
        $(".ui-mask").css({display: "none"});
        $(".ui-dialog").css({display: "none"})
    });


})