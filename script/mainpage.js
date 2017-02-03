/**
 * Created by Administrator on 2016/12/17/017.
 */
var banner = document.querySelector(".banner");
var slidebox = document.querySelector(".slidebox");
var slidebox_li = document.querySelectorAll(".slidebox_li");
var lunbo_firstimg = document.getElementById("lunbo_firstimg");
var ctrlPrev = document.querySelector(".Prev");
var ctrlNext = document.querySelector(".Next");
//高度自适应
window.onload = function () {
    slidebox.style.height = slidebox_li[0].clientHeight + "px";
}
window.onresize = function () {
    slidebox.style.height = slidebox_li[0].clientHeight + "px";
}
//轮播图控制
function show_banner(count) {
    for(var i=0;i<slidebox.children.length;i++) {
        slidebox_li[i].className = "slidebox_li";
    }
    slidebox_li[count].className = "slidebox_li active_slidebox";
}
var count_slide = 0;
var timer_slide = setInterval(function () {
    if(count_slide==2) count_slide=0;
    else count_slide++;
    show_banner(count_slide);
},3000)
banner.addEventListener("mouseenter",function () {
    clearInterval(timer_slide);
})
banner.addEventListener("mouseleave",function () {
    //鼠标离开轮播图立即切换下一张
    if(count_slide==2) count_slide=0;
    else count_slide++;
    show_banner(count_slide);
    timer_slide = setInterval(function () {
        if(count_slide==2) count_slide=0;
        else count_slide++;
        show_banner(count_slide);
    },3000)
})
ctrlPrev.addEventListener("click",function () {
    if(count_slide==0) count_slide=2;
    else count_slide--;
    show_banner(count_slide);
})
ctrlNext.addEventListener("click",function () {
    if(count_slide==2) count_slide=0;
    else count_slide++;
    show_banner(count_slide);
})