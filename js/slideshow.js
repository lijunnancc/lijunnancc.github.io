/* 代码整理：李俊南自媒体 www.lijunnan.cc */
function SlideShow(c) {
    var a = document.getElementById("slideContainer"), f = document.getElementById("slidesImgs").getElementsByTagName("li"), h = document.getElementById("slideBar"), n = h.getElementsByTagName("li"), d = f.length, c = c || 3000, e = lastI = 0, j, m;
    function b() {
        m = setInterval(function () {
            e = e + 1 >= d ? e + 1 - d : e + 1;
            g()
        }, c)
    }
    function k() {
        clearInterval(m)
    }
    function g() {
        f[lastI].style.display = "none";
        n[lastI].className = "";
        f[e].style.display = "block";
        n[e].className = "on";
        lastI = e
    }
    f[e].style.display = "block";
    a.onmouseover = k;
    a.onmouseout = b;
    h.onmouseover = function (i) {
        j = i ? i.target : window.event.srcElement;
        if (j.nodeName === "LI") {
            e = parseInt(j.innerHTML, 10) - 1;
            g()
        }
    };
    b()
}
;

$(function(){
  $("#guanggao1").click(function()
  {
    document.location.href = "http://u.lijunnan.cc";
  })
    $("#guanggao2").click(function()
  {
    document.location.href = "http://www.lijunnan.cc/posts/applepaihang.html";
  })
  $("#guanggao3").click(function()
  {
    document.location.href = "http://www.lijunnan.cc";
  })
  $("#guanggao4").click(function()
  {
    document.location.href = "http://www.lijunnan.cc";
  })

});
/* 代码整理：李俊南自媒体 www.lijunnan.cc */