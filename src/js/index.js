(function(){
	var mySwiper = new Swiper('.swiper-container', {
		autoplay: 2000,//可选选项，自动滑动
		speed:300,
		pagination : '.swiper-pagination'
	})}());
var region = $("#region");
var area = $('#area');
var price = $('#price');
var more = $('#more');
var money = $('#money');
//	//点击区域时
//	region.click(function(){
//		if($(this).children().hasClass('list-others')){
//		$(this ).css('color','#eb642b');pso();
//		$(this ).find('.list-others').attr('class','list-others-clk');
//		}else{
//			$(this ).css('color','#646464');ypso();
//			$(this ).find('.list-others-clk').attr('class','list-others');
//		}
//		$('.search-region' ).toggle();
//	});
//	//点击面积时
//	area.click(function(){
//		$('.search-area' ).toggle();pso();
//		if($(this).children().hasClass('list-others')){
//			$(this ).css('color','#eb642b');
//			$(this ).find('.list-others').attr('class','list-others-clk');
//		}else{
//			$(this ).css('color','#646464');ypso();
//			$(this ).find('.list-others-clk').attr('class','list-others');
//		}
//	});
//	//点击单价时
//	price.click(function(){
//		$('.search-price' ).toggle();pso();
//		if($(this).children().hasClass('list-others')){
//			$(this ).css('color','#eb642b');
//			$(this ).find('.list-others').attr('class','list-others-clk');
//		}else{
//			$(this ).css('color','#646464');ypso();
//			$(this ).find('.list-others-clk').attr('class','list-others');
//		}
//	});
//	//点击更多时
//	more.click(function(){
//		$('.search-more' ).toggle();pso();
//		if($(this).children().hasClass('list-others')){
//			$(this ).css('color','#eb642b');
//			$(this ).find('.list-others').attr('class','list-others-clk');
//		}else{
//			$(this ).css('color','#646464');ypso();
//			$(this ).find('.list-others-clk').attr('class','list-others');
//		}
//	});
//点击钱图时
money.click(function(){
	$('.swiper-container' ).toggle();
	$('.search-money' ).toggle();
	console.log( $( '.search-money' ).css( 'display' ) );
	if($('.search-money' ).css('display')=='block'){
		pso();$('#list-one' ).css({'margin-top':'160px'});
		$(this ).css({'background':'url("../assets/img/content_icon01_litre@2x.png") no-repeat center','background-size': 'contain'});
	}else{
		ypso();
		console.log('sb');
		$('#list-one' ).attr('style',"margin-top:0");
		$(this ).css({'background':'url("../assets/img/content_icon01_nor@2x.png") no-repeat center','background-size': 'contain'});
	}
});
//点击某个选项时其他选项没效果
var list = $('.list-tabs li');
for(var k = 0;k<list.length-1;k++){
	$(list[k ]).click(function(){
		var name = $( this ).attr( 'id' );
		$('.search-'+name ).toggle();
		$( '.search-' + name ).siblings().hide();
		$( this ).siblings().css('color','#646464');
		$( this ).siblings().children().removeClass('list-others-clk');
		$( this ).siblings().children().addClass('list-others');
		//			var ot = $( this ).siblings();
		//			for(var j = 0;j<ot.length-1;j++){
		//				$(ot[ j ]).children().removeClass('list-others-clk');
		//				$(ot[ j ]).children().addClass('list-others');
		//			}
		if($('.search-'+name ).css('display')=='block'){
			$(this ).css('color','#eb642b');pso();
			$(this ).find('.list-others').attr('class','list-others-clk');
		}else{
			$(this ).css('color','#646464');
			$(this ).find('.list-others-clk').attr('class','list-others');
		}
	})
}
//屏幕滚动时
$('.container').scroll(function()
{
	var scrollTop = $('.container').scrollTop();
	if( scrollTop > 320 )
	{
		$('#money' ).css({'background':'url("../../src/img/content_icon01_nor@2x.png") no-repeat center','background-size': 'contain'});
		$('.swiper-container' ).show();
		$('#list-one' ).attr('style',"margin-top:0");
		pso();
		hid();
	}else{
		ypso();
	}
});
//上海及输入框的效果
var pso = function(){
	$( '.city-select' ).css( {
		'position':'fixed',
		'top':'0',
		'left':'0',
		'right':'0',
		'height':'30px',
		'padding':'10px',
		'background':'#000',
		'line-height': '30px'
	} );
	$(".search-container" ).css({
		'position':'fixed',
		'top':'5px',
		'left':'25%',
		'right':'25%',
		'width':'50%'
	});
	$('.list-tabs' ).css({
		'position':'fixed',
		'top':'50px',
		'left':'0',
		'right':'0',
		'background':'#fff',
		'z-index':'999'
	})
};
//去掉该效果
var ypso = function(){
	$( '.city-select' ).css({
		'position':'absolute',
		'top':'35px',
		'background':"none",
		'right':'auto',
		'padding':'0 15px'
	});
	$(".search-container" ).css({
		'position':'absolute',
		'top':'69px',
		'left':'15px',
		'right':'15px',
		'width':'92%'
	});
	$('.list-tabs' ).css({
		'position':'static',
		'top':'330px',
		'z-index':'0'
	});
};
//恢复list效果
var hid = function(){
	$('.list-tabs li').css('color','#646464');
	$('.list-tabs li').find('.list-others-clk').attr('class','list-others');
	$('.search-region').hide();
	$('.search-area').hide();
	$('.search-price').hide();
	$('.search-more').hide();
	$('.search-money').hide();
};
//点击区域里面选项的效果
var regionli = $('.region-left li');
for(var i = 1;i<regionli.length;i++){
	$(regionli[i]).click(function(){
		console.log( 'sb' );
		$(this ).addClass('active');
		$(this ).siblings().removeClass('active');
	})
}
//点击更多里面选项的效果
var moreli = $('.more-left li');
for(var j = 0;j<moreli.length;j++){
	$(moreli[j]).click(function(){
		console.log( 'sb' );
		$(this ).addClass('active');
		$(this ).siblings().removeClass('active');
	})
}