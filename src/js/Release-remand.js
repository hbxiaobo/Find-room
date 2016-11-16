var text = document.getElementById('text');
text.onkeyup = function(){
	document.getElementsByClassName('describe')[0 ].style.display = 'none';
};
var t = document.getElementsByClassName('text')[0];
t.onclick = function(){
	text.focus();
};
var ret = document.getElementsByClassName('return')[0];
ret.onclick = function(){
	document.getElementsByClassName('release-situation')[0 ].style.display = 'block';
document.getElementsByClassName('release-cancel')[0 ].onclick = function(){
	document.getElementsByClassName('release-situation')[0 ].style.display = 'none';
}
};