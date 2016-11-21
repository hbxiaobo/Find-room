var ret = document.getElementById('return');
ret.onclick = function(){
	history.go(-1);
};
var txt = document.getElementsByClassName('text');
txt[0 ].onclick = function(){
	document.getElementsByClassName("select-image")[0 ].style.display = 'block';
	document.getElementsByClassName("select-three")[0 ].onclick = function(){
		document.getElementsByClassName("select-image")[0 ].style.display = 'none';
	}
};
txt[2 ].onfocus = txt[2 ].onkeyup = function(){
	if(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(this.value)){
		var blank = this.nextElementSibling;
		blank.style.background = 'none';
		blank.innerText = '完成';
		blank.onclick = function(){
			blank.innerText = '';
			blank.style.background = 'url("../../src/img/content_list_right_icon@2x.png")no-repeat center';
			blank.style.backgroundSize = '8px';
		}
	}
};
for(var i = 4;i<txt.length;i++){
	txt[i ].onfocus = txt[i].onkeyup = function(){
		if(this.value.length == 11){
			var blank = this.nextElementSibling;
			blank.style.background = 'none';
			blank.innerText = '完成';
			blank.onclick = function(){
				blank.innerText = '';
				blank.style.background = 'url("../../src/img/content_list_right_icon@2x.png")no-repeat center';
				blank.style.backgroundSize = '8px';
			}
		}
	}

}