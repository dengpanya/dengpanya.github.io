//头部链接跳转
function link() {
  var ul = document.getElementById("link_jump");
  document.getElementById("link").onclick = function() {
    var height = parseFloat(ul.style["height"]);
    if (height === 0) {
      ul.style.height = "4.5rem";
      document.getElementById("link_img").src = "./image/home/header/close.png";
    } else {
      document.getElementById("link_img").src = "./image/home/header/open.png";
      ul.style.height = "0rem";
    }
  };
}

//走马灯效果
function carousel() {
  var carousel = document.getElementById("carousel");
  var ul = carousel.getElementsByTagName("ul")[0];
  var aLi = carousel.getElementsByTagName("li");
  var aBtn = document.getElementById("pointArr").getElementsByTagName("span");
  var iw = aLi[0].offsetWidth;
  var len = aLi.length;
  var iNow = 0;
  var timer, _timer;

  // //鼠标移入进度条时颜色改变
  // for (var i = 0; i < aBtn.length; i++) {
  //     aBtn[i].index = i;
  //     aBtn[i].ontouchstart = function () {
  //         for (var j = 0; j < aBtn.length; j++) {
  //             aBtn[j].className = "";
  //         }
  //         this.className = "active";
  //         //图片也跟随到相应的位置
  //         move(ul, { left: -iw * (this.index) });
  //         iNow = this.index;
  //     }

  // }

  //最后面插入一张图片
  var li = aLi[0].cloneNode(true);
  ul.appendChild(li);
  ul.style.width = iw * aLi.length + "px";

  //动画原理
  function toImg() {
    move(ul, { left: -iw * iNow });
    for (var i = 0; i < aBtn.length; i++) {
      aBtn[i].className = "";
    }
    aBtn[iNow == aLi.length - 1 ? 0 : iNow].className = "active";
  }

  //无缝播放
  function autoPlay() {
    timer = setInterval(function() {
      if (iNow == aLi.length - 1) {
        iNow = 1;
        ul.style.left = 0 + "px";
      } else {
        iNow++;
      }
      toImg();
    }, 2000);
  }
  autoPlay();

  //当鼠标移入box时清除定时器
  carousel.ontouchstart = function() {
    clearInterval(timer);
  };
  //当鼠标移出box时再自动轮播
  carousel.ontouchend = function() {
    autoPlay();
  };
  //获取非行间样式
  function getStyle(obj, attr) {
    if (obj.currentStyle) {
      return obj.currentStyle[attr];
    } else {
      return getComputedStyle(obj, false)[attr];
    }
  }

  //一次图片运动框架
  function move(obj, json) {
    clearInterval(_timer);
    _timer = setInterval(function() {
      var bStop = true;
      for (var attr in json) {
        var iCur = parseInt(getStyle(obj, attr));
        //算速度
        var speed = (json[attr] - iCur) / 8;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if (json[attr] != iCur) bStop = false;
        obj.style[attr] = iCur + speed + "px";
      }
      if (bStop) clearInterval(_timer);
    }, 30);
  }

  //滑动事件处理
  var startX, endX, x, _left;
  carousel.ontouchstart = function(e) {
    startX = e.touches[0].pageX;
    _left = parseInt(ul.style["left"]);
    clearInterval(_timer);
    clearInterval(timer);
  };
  carousel.ontouchmove = function(e) {
    endX = e.touches[0].pageX;
    x = endX - startX + _left;
    if (x >= -2 * iw && x <= 0) ul.style.left = x + "px";
  };
}

//首页滑块效果
function swipe() {
  var slide = document.getElementById("slide");
  var rem = parseInt(
    document.getElementsByTagName("html")[0].style["font-size"]
  );
  var _left, x, startX;
  slide.ontouchstart = function(e) {
    startX = e.touches[0].pageX;
    _left = parseInt(slide.style["left"]) / rem;
  };
  slide.ontouchmove = function(e) {
    x = (e.touches[0].pageX - startX) / rem;
    var newLeft = _left + x;
    if (newLeft < 1 && newLeft > -7) {
      slide.style.left = newLeft + "rem";
    }
  };
}

//product页滑块事件
function swiper() {
  var slide = document.getElementById("pro_slide");
  var rem = parseInt(
    document.getElementsByTagName("html")[0].style["font-size"]
  );
  var startX, endX, x, _left;
  slide.ontouchstart = function(e) {
    startX = e.touches[0].pageX;
  };
  slide.ontouchmove = function(e) {
    endX = e.touches[0].pageX;
    x = (endX - startX) / rem;
    _left = parseInt(slide.style["left"]);
    var newLeft = _left + 2 * x;
    var _x = Math.abs(x);
    if (newLeft < 1 && newLeft > -40.3 && _x > 0.4) {
      slide.style.left = newLeft + "rem";
      startX = e.touches[0].pageX;
    }
  };
}

//tab转换实现
function tabs() {
  var apply = document.getElementById("apply");
  var important = document.getElementById("important");
  var modules = document.getElementById("modules");
  var _apply = document.getElementById("apply_list");
  var _important = document.getElementById("important_list");
  var _modules = document.getElementById("modules_list");
  var applyImg = document.getElementById("apply_img");
  var importantImg = document.getElementById("important_img");
  var modulesImg = document.getElementById("modules_img");

  //初始化时默认选择apply
  apply.style.backgroundColor = "#fe8a00";
  apply.style.color = "#ffffff";

  apply.onclick = function() {
    this.style.backgroundColor = "#fe8a00";
    _important.style.display = "none";
    _modules.style.display = "none";
    _apply.style.display = "block";
    applyImg.src = "./image/home/section/11_03.png";
    importantImg.src = "./image/home/section/11_04.png";
    modulesImg.src = "./image/home/section/11_05.png";
    this.style.color = "#ffffff";
    important.style.color = "#000000";
    modules.style.color = "#000000";
  };
  important.onclick = function() {
    apply.style.backgroundColor = "#ffffff";
    _modules.style.display = "none";
    _apply.style.display = "none";
    _important.style.display = "block";
    applyImg.src = "./image/home/section/11_06.png";
    importantImg.src = "./image/home/section/11_02.png";
    modulesImg.src = "./image/home/section/11_05.png";
    apply.style.color = "#000000";
    this.style.color = "#ffffff";
    modules.style.color = "#000000";
  };
  modules.onclick = function() {
    apply.style.backgroundColor = "#ffffff";
    _important.style.display = "none";
    _apply.style.display = "none";
    _modules.style.display = "block";
    applyImg.src = "./image/home/section/11_06.png";
    importantImg.src = "./image/home/section/11_04.png";
    modulesImg.src = "./image/home/section/11_01.png";
    apply.style.color = "#000000";
    important.style.color = "#000000";
    this.style.color = "#ffffff";
  };
}

//查看更多处理这个方法在analyze页
function seeMore() {
  var content = document.getElementById("text_content");
  var btn = document.getElementById("btn");
  var more = document.getElementById("more");
  btn.onclick = function(e) {
    var height = parseInt(content.style["height"]);
    if (height === 8) {
      content.style.height = "5rem";
      more.innerText = "......";
    } else {
      content.style.height = "8rem";
      more.innerText =
        "以尊宝比萨杭州区域为例，自S.I.K系统接入后短短半年内，经由使用第三方外送平台缴纳的整体手续费下降38.74%；充值总金额达777488.00元，并正以平均每月61.23%的比例继续快速增长；关注官方微信并通过S.I.K建设的自有平台下单用户数达到29.73%；通过员工分享充值成为尊宝比萨会员人数占会员总数的32.12%；员工在基础工资基础上获得分享收益人数占员工总人数的60.4%。";
    }
  };
}

//根据当前页初始化需要的方法
function init() {
  var arr = [
    ["analyze.html", "案例分析", seeMore],
    ["call.html", "联系我们"],
    ["desrcibe.html", "公司简介"],
    ["join.html", "加入我们"],
    ["mobile.html", "杭州神集控股有限公司", carousel, swipe, tabs],
    ["product.html", "核心产品", swiper]
  ];
  var urlArr = this.location.pathname.split("/");
  var thisName = urlArr[urlArr.length - 1];
  for (var i of arr) {
    if (thisName === i[0]) {
      for (var n = 2; n < i.length; n++) {
        i[n]();
      }
      var companyName = document.getElementById("companyName");
      companyName.innerText = i[1];
    }
  }
}

window.onload = function() {
  init();
  link();
};
