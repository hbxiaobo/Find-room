$("#remand").click(function(){$(this).addClass(" active"),$("#source").removeClass("active"),$(".content").show(),$(".container-content").hide()}),$("#source").click(function(){$(this).addClass(" active"),$("#remand").removeClass("active"),$(".content").hide(),$(".container-content").show()});for(var content=document.getElementsByClassName("container-content"),i=0;i<content.length;i++){var t=content[i];$(t).click(function(){this.style.left=0});var x,x1;t.addEventListener("touchstart",function(){x=getComputedStyle(this,null).getPropertyValue("left")}),t.addEventListener("touchmove",function(){this.style.left="-100px"}),t.addEventListener("touchend",function(){x1=getComputedStyle(this,null).getPropertyValue("left"),console.log(x1)})}for(var del=$(".content-delect"),j=0;j<del.length;j++)$(del[j]).click(function(){$(this).parent(".container-content").hide()});