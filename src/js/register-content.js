var btn = $('.login');
btn.click(function(){
	window.location.href = '../homepage/index.html';
});
$( "input[type='password']" ).keyup(function(){
if($("[type='password']" ).val()!= ''&&$("[type='text']" ).val()!= ''){
	btn.css('background-color','#ea5404');
}
});