
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
};

// 返回顶部 和 在顶部一直显示的js代码
window.onscroll=()=>{
    var st=document.documentElement.scrollTop || document.body.scrollTop
//    console.log(st)
//    返回顶部标签 首页 id head、b1
   if(st>head1.offsetHeight){
    b1.style.display="block"
   }else{
    b1.style.display="none"
   }

   //    返回顶部标签 新品 id head2、b2 fixed
   if(st>head2.offsetHeight){
    b2.style.display="block"
    fixed.style.position="fixed";
    fixed.style.backgroundColor="rgb(242, 242, 255)";
    fixed.style.top=0;
   }else{
    b2.style.display="none"
    fixed.style.position=""
   }

   //    返回顶部标签 逛 id head3、b3 fixed2
    if(st>head3.offsetHeight){
    b3.style.display="block"
    fixed2.style.position="fixed";
    fixed2.style.backgroundColor="rgb(255, 255, 255)";
    fixed.style.top=-2;
   }else{
    b3.style.display="none"
    fixed2.style.position=""
   }

}