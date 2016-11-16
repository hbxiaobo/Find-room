var content = document.getElementsByClassName('container-content');
for (var i = 0;i<content.length;i++){
	var t = content[i];
	t.onclick = function(){
		console.log( parseInt(this.style.left));
		if(isNaN(parseInt(this.style.left))|| parseInt(this.style.left)==0){
			window.location.href = 'details.html';
		}
		this.style.left = 0;
	};
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
	});
}
var del = document.getElementsByClassName('content-delect');
for(var j=0;j<del.length;j++){
	del[j ].onclick = function(){
		console.log( 'sb' );
		this.parentNode.style.display = 'none';
	}
}