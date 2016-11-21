var content = document.getElementsByClassName('container-content');
for (var i = 0;i<content.length;i++){
	var t = content[i];
	$(t ).click(function(){
		this.style.left = 0;
	});
	var x,x1;
	t.addEventListener('touchstart',function(){
		//			console.log(getComputedStyle(this, null).getPropertyValue('left'));
		x = getComputedStyle(this, null).getPropertyValue('left') ;
	});
	t.addEventListener('touchmove',function(){
		this.style.left = -100+'px';
	});
	t.addEventListener('touchend',function(){
		x1 = getComputedStyle(this, null).getPropertyValue('left') ;
		console.log( x1 );
	});
}
var del = $('.content-delect');
for(var j=0;j<del.length;j++){
	$(del[j ]).click(function(){
		$(this).parent('.container-content').hide();
	})
}