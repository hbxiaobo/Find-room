var btn = $('.login');
btn.click(function(){
	window.location.href = '../homepage/index.html';
});
$( "input[type='password']" ).keyup(function(){
if($("[type='password']" ).val()!= ''&&$("[type='text']" ).val()!= ''){
	btn.css('background-color','#ea5404');
}
});
var tel = $("input[type='tel']");
console.log(tel);
tel.keyup(function(){
	$(this).val($(this).val().replace(/[^\d]/,''));
});