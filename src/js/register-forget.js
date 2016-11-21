var ret = document.getElementById('return');
ret.onclick = function(){
	history.go(-1);
};
var codeGet = document.getElementsByClassName('code-get')[0];
codeGet.onclick = function(){
	this.setAttribute('disabled','disabled');
	this.style.backgroundColor = '#dbdbdb';
	var i = 59;
	codeGet.innerText = i + 's后重新获取';
var time = setInterval(function(){
	i--;
	codeGet.innerText = i + 's后重新获取';
if(i == 55){
	codeGet.innerText = '获取验证码';codeGet.style.backgroundColor = '#ea5404';clearInterval(time);
	codeGet.removeAttribute('disabled');
}
},1000);
};
var tel = $("input[type='tel']");
console.log(tel);
tel.keyup(function(){
	$(this).val($(this).val().replace(/[^\d]/,''));
});
var ipt = $('input');
console.log( ipt );
for(var i =0;i<ipt.length;i++){
$(ipt[i] ).keyup(function(){
for(var j =0;j<ipt.length;j++){
if($(ipt[j]).val() == ""){
	$('.login' ).css('background-color','#979797');
	return false;
}else{
	 $('.login' ).css('background-color','#ea5404');
$('.login' ).click(function(){
	$('.reg-success' ).show();
});
}
}
});
}
var btn = $('.login');
btn.click(function(){
	window.location.href = '../homepage/index.html';
});