var btn = document.getElementById('btn-one');
btn.onclick = function(){
	document.getElementsByClassName('Release-cancel')[0 ].style.display = 'block';
};
var rtn = document.getElementsByClassName('return')[0];
rtn.onclick = function(){
	document.getElementsByClassName('bespeak-situation')[0 ].style.display = 'block';
document.getElementsByClassName('bespeak-cancel')[0 ].onclick = function(){
	document.getElementsByClassName('bespeak-situation')[0 ].style.display = 'none';
};
document.getElementsByClassName('bespeak-confirm')[0 ].onclick = function(){
	window.location.href = '../homepage/index.html';
}
};
var add = document.getElementsByClassName('add')[0];
add.onclick = function(){
	var clist = document.getElementsByClassName( 'content' )[ 0 ].children;
for(var i = 0;i<clist.length;i++){
	clist[i ].style.display = 'none';
}
document.getElementsByClassName('add-situation' )[0].style.display = 'block';
}