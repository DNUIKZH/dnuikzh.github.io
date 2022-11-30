
window.onload = function(){
    var tabitem = document.getElementsByClassName("itemz");
    var itemz = tabitem[0].querySelectorAll("a");
    
    var tabContent = document.getElementsByClassName("tab-content");
    var content = tabContent[0].querySelectorAll(".fy");

    //给三个选项添加点击事件
    for(let i = 0; i < itemz.length; i++){

        //记录当前下标
        itemz[i].index = i;
        itemz[i].onclick = function(){
            //alert(this);
            
            //清除其他的样式
            for(let j = 0; j < itemz.length; j++){
                itemz[j].className ='';
                content[j].style.display = "none";
            }
            content [itemz[i].index].style.display = "block";
        }
    }
}