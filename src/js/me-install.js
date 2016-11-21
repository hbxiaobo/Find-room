var ret = document.getElementById('return');
ret.onclick = function(){
	history.go(-1);
};
var three = document.getElementsByClassName('line-three')[0];
three.onclick = function(){
	document.getElementsByClassName('upload-inquiry')[0 ].style.display = 'block';
document.getElementsByClassName('upload-cancel')[0 ].onclick = function(){
	document.getElementsByClassName('upload-inquiry')[0 ].style.display = 'none';
};
document.getElementsByClassName('upload-confirm')[0 ].onclick = function(){
	document.getElementsByClassName('upload-inquiry')[0 ].style.display = 'none';
	document.getElementById('Cache-value' ).innerText = '0.00';
};
};
var leave = document.getElementById('leave');
leave.onclick = function(){
	window.location.href = '../register/content.html';
};