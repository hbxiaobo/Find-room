//点击后退效果
var ret = document.getElementById('return');
ret.onclick = function(){
	history.go(-1);
};

//验证码倒计时效果
  var codeGet = document.getElementsByClassName('code-get')[0];
codeGet.onclick = function(){
	this.setAttribute('disabled','disabled');
	this.style.backgroundColor = '#dbdbdb';
	var i = 59;
	codeGet.innerText = i + 's后重新获取';
var time = setInterval(function(){
	i--;
	codeGet.innerText = i + 's后重新获取';
if(i == 0){
	codeGet.innerText = '获取验证码';codeGet.style.backgroundColor = '#ea5404';clearInterval(time);
	codeGet.removeAttribute('disabled');
}
},1000);

};
//身份下拉
  var ident = document.getElementsByClassName('identity-type')[0];
var identContent = document.getElementsByClassName('identity-content')[0];
ident.onclick = function(){
if(getComputedStyle( ident, null ).getPropertyValue('transform')== 'none'){
	this.style.transform = 'rotate(180deg)';
	identContent.style.display = 'block';
}else{
	 this.style.transform = 'none';
	 identContent.style.display = 'none';
 }
};

var li = document.getElementsByTagName('li');
console.log(li.length);
for(var i=0;i<li.length;i++){
	li[i ].onclick = function(){
		document.getElementById('ident' ).value = this.innerText;
		ident.style.transform = 'none';
		identContent.style.display = 'none';
	}
}
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

