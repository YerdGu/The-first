/**
 * Created by Administrator on 2016/12/16/016.
 */
var changeItem = document.getElementById("changeItem");
var item_list = document.getElementById("item_list");
var item_gary = document.getElementById("item_gary");
var item_green = document.getElementById("item_green");
var item_red = document.getElementById("item_red");
item_list.style.height = "0px";
function list_slidedown() {
    item_list.showHeight = (function () {
        var temp_height = 0;
        for(var i=0;i<item_list.children.length;i++){
            temp_height += item_list.children[i].offsetHeight;
        }
        return temp_height;
    })()
    item_list.style.height = item_list.showHeight+"px";
}
changeItem.addEventListener("mouseenter",function () {
    list_slidedown();
})
changeItem.addEventListener("mouseleave",function () {
    item_list.style.height = "0px";
})
document.body.className = "body-item1";
item_list.className = "body-item1";
item_gary.addEventListener("click",function () {
    document.body.className = "body-item1";
    item_list.className = "body-item1";
    list_slidedown();
})
item_green.addEventListener("click",function () {
    document.body.className = "body-item2";
    item_list.className = "body-item2";
    list_slidedown();
})
item_red.addEventListener("click",function () {
    document.body.className = "body-item3";
    item_list.className = "body-item3";
    list_slidedown();
})
var clickCount = 0;
var itemArray = new Array("body-item1","body-item2","body-item3");
