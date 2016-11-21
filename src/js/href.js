/**
 * Created by user on 2016/11/13.
 */
var first = document.getElementsByClassName('first')[0];
var apm = document.getElementsByClassName('apm')[0];
var other = document.getElementsByClassName('other')[0];
var ifm = document.getElementsByClassName('ifm')[0];
var me = document.getElementsByClassName('me')[0];
first.onclick = function(){
	window.location.href = '../../views/homepage/index.html';
};
apm.onclick = function(){
	window.location.href = '../../views/bespeak/index.html';
};
other.onclick = function(){
	window.location.href = '../../views/Release/index.html';
};
ifm.onclick = function(){
	window.location.href = '../../views/news/index.html';
};
me.onclick = function(){
	window.location.href = '../../views/me/index.html';
};