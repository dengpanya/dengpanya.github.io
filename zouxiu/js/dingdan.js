/**
 * Created by Administrator on 2016/9/28.
 */
window.onload = function () {
    $(function () {
        var type = [$.cookie('type').split(",")];
        var img = [$.cookie('img').split(",")];
        var price = [$.cookie('price').split(",")];
        var log = [$.cookie('log').split(",")];
        var color = [$.cookie('color').split(",")];
        var size = [$.cookie('size').split(",")];
        var numb = [$.cookie('num').split(",")];
        var jiesuan = [$.cookie('jiesuan').split(",")];
        for(var i = 0; i < jiesuan[0].length; i++) {
            $(".jia").append("<tr> ' + " +
                "<td style='border-left:1px solid #D6D3D3; ' class='tx_img'> " +
                "<a href=''><img src='" +
                img[0][i] +
                "'></a> " +
                "</td> " +
                "<td class='txtl'> " +
                "<table cellspacing='0' cellpadding='0' border='0' width='100%' style='text-align: left;'> " +
                "<tbody>" +
                " <tr> " +
                "<td style='color:black;border-bottom: 0px;text-align: left;margin: 0px;padding: 0px;border-bottom: 0px;'colspan='2'> " +
                log[0][i] +
                "</td>" +
                " </tr> <tr>" +
                " <td style='color:black;text-align: left;margin: 0px;padding: 0px;border-bottom: 0px;'>" +
                " <a class='wer_span wer_span_a' href='' style='color:black;'>" +
                type[0][i] +
                "</a> " +
                "</td> " +
                "<td style='color:black;text-align: right;margin: 0px;padding: 0px;border-bottom: 0px;width:100px;vertical-align: top;'></td> " +
                "</tr> <tr> " +
                "<td style='color:black;border-bottom: 0px;text-align: left;margin: 0px;padding: 0px;border-bottom: 0px;'colspan='2'> " +
                + color[0][i]  + size[0][i] +
                "</td> " +
                "</tr> <tr> " +
                "<td style='color:#999;border-bottom: 0px;text-align: left;margin: 0px;padding: 0px;border-bottom: 0px;'colspan='2'> 本商品退货需承担国际配送费，请勿拒收，以免影响返款时效 </td> " +
                "</tr> </tbody> </table> </td> <td id='54000'> " +
                "￥"+price[0][i]  +
                "</td> " +
                "<td> <font class='promotion' style='float:left;width:30px;'>&nbsp;</font> " +
                "<span style='font-weight:bold;text-align:left;float:left;'>￥<b>" +
                price[0][i] +
                "</b></span> " +
                "</td> <td>" +
                numb[0][i] +
                "</td> " +
                "<td style='border-right:1px solid #D6D3D3; color:#FF6633;'>￥<b><font class='f_weight'>" +
                price[0][i]*numb[0][i] +
                "</font></b> " +
                "</td> </tr>")
        }
        var he=0;
        $(".f_weight").each(function (i) {
            he+=parseInt($(".f_weight").eq(i).text());
        });
        $("#show_price_now").text(he)
        $("#totalAmount_str_id").text(he)
    })
}
