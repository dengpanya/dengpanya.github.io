/**
 * Created by Administrator on 2016/9/24.
 */
window.onload = function () {

    //判断是否有商品 DIV转换 并创建
    if ($.cookie('type') != '' && $.cookie('type') != undefined) {
        $("#checkCountNum").text($.cookie("count"));
        $('.boxx').show();
        $('#shoppingCart').hide();
        var countprice = 0;
        var type = [$.cookie('type').split(",")];
        var img = [$.cookie('img').split(",")];
        var price = [$.cookie('price').split(",")];
        var log = [$.cookie('log').split(",")];
        var color = [$.cookie('color').split(",")];
        var size = [$.cookie('size').split(",")];
        var numb = [$.cookie('num').split(",")];
        for (var i = 0; i < type[0].length; i++) {
            $('.neirong').append(
                "<tr id='en_prd_tr' class='goodsitemb item_checked'> " +
                "<td class='chebox'> " +
                "<input type='checkbox' checked='true' class='goodschek '> " +
                "</td> " +
                "<td class='tx_img'> " +
                "<a href=''> " +
                "<img src='" + img[0][i] + "' alt='' style='border:#DFDFDF solid 1px;width: 60px;height: 80px'> " +
                "</a> </td> " +
                "<td class='txtl' valign='top'> " +
                "<table cellpadding='0' border='0' cellspacing='0' width='100%' style='text-align: left;padding: 0px;margin: 0px;'> " +
                "<tbody> <tr> " +
                "<td colspan='2' style='text-align: left;margin: 0px;padding: 0px;color:black;'>" + log[0][i] + "</td> " +
                "<td> </td> " +
                "</tr> <tr> " +
                "<td style='text-align: left;margin: 0px;padding: 0px;'> " +
                "<a target='_blank' class='wer_span wer_span_a' style='color:black;' href=''> " + type[0][i] + " </a> " +
                "</td> " +
                "<td style='text-align: left;margin: 0px;padding: 0px;width: 80px;vertical-align: top;' class=''></td> " +
                "</tr> <tr> <td colspan='2' style='text-align: left;margin: 0px;padding: 0px;'> " + color[0][i] + "　" + size[0][i] + " </td>" +
                " </tr> </tbody> </table> </td> " +
                "<td class='pricetd'> <p class='dol'>¥" + price[0][i] + "</p> </td> <td> " +
                "<font class='' style='float:left;width:30px;'>&nbsp;</font> " +
                "<font name='xiuPrice' class='xiuPrice' style='text-align:left;float:left;'>¥" + price[0][i] * numb[0][i] + " </font> " +
                "</td> <td> " +
                "<a class='at del' href='javascript:;' onselectstart='return false'>-</a>" +
                "<input type='text' id='45365792_45365793' value='" + numb[0][i] + "' class='war_txt'> " +
                "<span style='cursor: pointer;' class='at' onselectstart='return false'> " +
                "<small class='add'>+</small> </span> </td> <td> " +
                "<span> " +
                "<a href='javascript:;' id='intest_742796430001' onselectstart='return false'>移至收藏夹</a> " +
                "</span> <br> " +
                "<span> <a class='butG' style='padding:2px 10px 2px 10px;' href='javascript:;'>删除</a> </span> " +
                "</td> </tr>");
            if ($(".goodsitemb").eq(i).class != "goodsitemb") {
                countprice += numb[0][i] * price[0][i];
                $("#totalAmoutPrice").text(countprice);
            }
        }
    }
    else {
        $('.boxx').hide();
        $('#shoppingCart').show();
    }


    //点击增加商品
    $('.add').click(function () {
        var index = $(".add").index($(this));
        var number = parseInt($('.war_txt').eq(index).val()) + 1;
        if ($('.war_txt').eq(index).val() >= 4) {
            number = 4;
            $("#xiuTipBox").show();
            $(".M_infocontents").eq(index).text("你每次最多买4件");
            setTimeout(function () {
                $("#xiuTipBox").eq(index).hide();
                $(".M_infocontents").eq(index).text("数量修改成功!");
            }, 2000);
            return false;
        }
        $('.war_txt').eq(index).val(number);//数量
        numb[0][index] = number;
        var price1 = price[0][index];
        $("#xiuTipBox").eq(index).show();
        setTimeout(function () {
            $("#xiuTipBox").eq(index).hide();
        }, 2000);
        $('.xiuPrice').eq(index).text("¥" + number * price1);
        $.cookie('num', numb.join(","), {path: '/', expires: 9999});
        if ($(this).parents("tr").attr("class") != "goodsitemb") {
            $('#totalAmoutPrice').text(parseInt($('#totalAmoutPrice').text()) + parseInt(price[0][index]));
            $("#checkCountNum").text(parseInt($("#checkCountNum").text()) + 1);
            $.cookie("count", $("#checkCountNum").text(), {path: "/", expires: 9999})
        }
    });


    //减少商品
    $('.del').click(function () {
        var index = $(".del").index($(this));
        var number = parseInt($('.war_txt').eq(index).val()) - 1;
        if ($('.war_txt').eq(index).val() < 2) {
            number = 1;
            $("#xiuTipBox").show();
            $(".M_infocontents").text("商品数量最少为1件");
            setTimeout(function () {
                $("#xiuTipBox").eq(index).hide();
                $(".M_infocontents").text("数量修改成功!");
            }, 2000);
            return false;
        }
        $('.war_txt').eq(index).val(number);//数量
        numb[0][index] = number;
        var price1 = price[0][index];
        $("#xiuTipBox").show();
        setTimeout(function () {
            $("#xiuTipBox").hide();
        }, 2000);
        $('.xiuPrice').eq(index).text("¥" + number * price1);
        $.cookie('num', numb.join(","), {path: '/', expires: 9999});
        if ($(this).parents("tr").attr("class") != "goodsitemb") {//判断是否被选中
            $('#totalAmoutPrice').text(parseInt($('#totalAmoutPrice').text()) - price[0][index]);
            $("#checkCountNum").text(parseInt($("#checkCountNum").text()) - 1);
            $.cookie("count", $("#checkCountNum").text(), {path: "/", expires: 9999})
        }
    });


    //输入数量
    $('.war_txt').blur(function () {
        var index=$('.war_txt').index($(this));
        var number=$('.war_txt').eq(index).val();
        if($('.war_txt').eq(index).val()<1){
            $('.war_txt').eq(index).val(1);
        }
        if($('.war_txt').eq(index).val()>4){
            $('.war_txt').eq(index).val(4);
        }
        numb[0][index]=parseInt($('.war_txt').eq(index).val());
        $.cookie("num", numb.join(","), {path: "/", expires: 9999});
        $('.xiuPrice').eq(index).text("¥" + numb[0][index] * price[0][index]);
        if(numb[0].length>1){
            if($('.goodschek').eq(index).attr('checked') != undefined){
                $('#totalAmoutPrice').text(parseInt($('#totalAmoutPrice').text())-(number-parseInt($('.war_txt').eq(index).val())*price[0][index]));
                $('#checkCountNum').text(parseInt($("#checkCountNum").text())-(number-parseInt($('.war_txt').eq(index).val())));
                $.cookie("count", $("#checkCountNum").text(), {path: "/", expires: 9999})
            }
        }else{
            if($('.goodschek').eq(index).attr('checked') != undefined){
                $('#totalAmoutPrice').text(number*price[0][index]);
                $('#checkCountNum').text(number);
                $.cookie("count", $("#checkCountNum").text(), {path: "/", expires: 9999})
            }
        }

    });


    //删除
    $('.butG').click(function () {
        var index = $('.butG').index($(this));
        var he = 0;
        var he1 = 0;
        type[0].splice(index, 1);
        img[0].splice(index, 1);
        price[0].splice(index, 1);
        log[0].splice(index, 1);
        color[0].splice(index, 1);
        size[0].splice(index, 1);
        numb[0].splice(index, 1);
        cun()
        $(this).parents("tr").remove();
        $(".war_txt").each(function (i) {
            he += parseInt($(".war_txt").eq(i).val())
        });
        $(".xiuPrice").each(function (i) {
            he1 += parseInt(numb[0][i] * price[0][i])
        });
        $('#totalAmoutPrice').text(he1);
        $("#checkCountNum").text(he);
        $.cookie("count", $("#checkCountNum").text(), {path: "/", expires: 9999})
        if ($(".boxx .goodsitemb").length == 0) {
            $('.boxx').hide();
            $('#shoppingCart').show();
        }
    });


    $("#delgoods").click(function () {
        $.cookie("type","" , {path: "/", expires: 9999});
        $.cookie("img","" , {path: "/", expires: 9999});
        $.cookie("price","" , {path: "/", expires: 9999});
        $.cookie("num", "", {path: "/", expires: 9999});
        $.cookie("log", "", {path: "/", expires: 9999});
        $.cookie("color","" , {path: "/", expires: 9999});
        $.cookie("size","" , {path: "/", expires: 9999});
        $.cookie("count", "", {path: "/", expires: 9999});
        $.cookie("jiesuan","",{path: "/", expires: 9999})
    })

    //复选框

    $('.checkall').click(function () {
        var he = 0;
        var he1 = 0;
        if ($('.checkall').attr('checked') == undefined) {
            $('.goodschek').removeAttr('checked');
            $('.goodsitemb').removeClass("item_checked");
            $('.checkall').removeAttr('checked');
            $('#totalAmoutPrice').text(0.00);
            $("#checkCountNum").text(0);
        } else {
            $('.goodschek').attr('checked', true);
            $('.goodsitemb').addClass("item_checked");
            $('.checkall').attr('checked', true);
            $(".war_txt").each(function (i) {
                he += parseInt($(".war_txt").eq(i).val())
            });
            $(".xiuPrice").each(function (i) {
                he1 += parseInt(numb[0][i] * price[0][i])
            });
            $('#totalAmoutPrice').text(he1);
            $("#checkCountNum").text(he);
        }
    });

    $('.goodschek ').click(function () {
        var index = $('.goodschek').index($(this));
        var btn = true;
        if ($('.goodschek').eq(index).attr('checked') == undefined) {
            $('.goodsitemb').eq(index).removeClass("item_checked");
            for (var i = 0; i < $('.goodsitemb').length; i++) {
                if ($('.goodsitemb').eq(i).attr("class") == "goodsitemb") {
                    btn = false
                }
            }
            if (btn == false) {
                $('.checkall').removeAttr('checked');
            }
            $('#totalAmoutPrice').text(parseInt($('#totalAmoutPrice').text()) - numb[0][index] * price[0][index]);
            $("#checkCountNum").text(parseInt($("#checkCountNum").text()) - $(".war_txt").eq(index).val());

        } else {
            $('.goodsitemb').eq(index).addClass("item_checked");
            for (var i = 0; i < $('.goodsitemb').length; i++) {
                if ($('.goodsitemb').eq(i).attr("class") == "goodsitemb") {
                    btn = false
                }
            }
            if (btn == true) {
                $('.checkall').attr('checked', true);
            }
            $('#totalAmoutPrice').text(parseInt($('#totalAmoutPrice').text()) + numb[0][index] * price[0][index]);
            $("#checkCountNum").text(parseInt($("#checkCountNum").text()) + parseInt($(".war_txt").eq(index).val()));
        }
        //{
        //
        //    $('.goodsitemb').eq(index).addClass("item_checked");
        //
        //    $('.goodsitemb').each(function (i) {
        //        if($('.goodsitemb').eq(i).attr("class")!="goodsitemb"){
        //            he+=he+parseInt($.cookie("price")*$.cookie("num"));
        //            $('#totalAmoutPrice').text(he);
        //        }
        //    })
        //}
    })


    //存入cookie
    function cun(){
        $.cookie("type", type.join(","), {path: "/", expires: 9999});
        $.cookie("img", img.join(","), {path: "/", expires: 9999});
        $.cookie("price", price.join(","), {path: "/", expires: 9999});
        $.cookie("num", numb.join(","), {path: "/", expires: 9999});
        $.cookie("log", log.join(","), {path: "/", expires: 9999});
        $.cookie("color", color.join(","), {path: "/", expires: 9999});
        $.cookie("size", size.join(","), {path: "/", expires: 9999});
    }
    var jiesuan=[];

    //结算
    $("#toBalanceLink").click(function () {
        $('.goodsitemb').each(function (i) {
            if ($('.goodsitemb').eq(i).attr("class") != "goodsitemb") {
                jiesuan.push(i);
            }
        });
        $.cookie("jiesuan", jiesuan.join(","), {path: "/", expires: 9999});
        location.href="../html/dangdan.html"
    })
};