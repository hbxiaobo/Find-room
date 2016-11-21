/**
 * Created by Administrator on 2016/11/15.
 */
var tel = $('.man-tel');
tel.click(function(){
	$('.tel-situation' ).toggle();
});
var telCencel = $('.tel-cancel');
telCencel.click(function(){
	$('.tel-situation' ).toggle();
});
//点击取消效果
var cancel = $('#cancel');
cancel.click(function(){
	$(".top" ).text('取消预订') ;
	$('.reason' ).show();
	$('.reason-content' ).show();
	var reason = $('input[type=checkbox]');
	for(var i = 0;i<reason.length;i++){
		$(reason[i] ).click(function(){
			console.log( $( this ).css( 'background-color' )=='rgba(0, 0, 0, 0)' );
			if( $( this ).css( 'background-color' )=='rgba(0, 0, 0, 0)'){
				$(this ).css('background','#ffffff url("../../src/img/content_list_icon_right@2x.png")');
			}
			else{
				$(this ).css('background','none');
			}
			console.log( $( this ).css( 'background-color' ) );
		});
		$(reason[reason.length-1] ).click(function(){
			$('.specific' ).toggle();
		});
	}
	$('.btn' ).show();
	$('.btn' ).click(function(){
		$('.Order-cancel' ).show();
		$('.Order-confirm' ).click(function(){
			$('.Order-cancel' ).hide();
			$('.reason' ).hide();
			$('.reason-content' ).hide();
			$('.btn' ).hide();
			cancel.parent().show();
		});
	});
	$(this ).parent().hide();
});
//点击改期效果
var changeTime = $('#changeTime');
changeTime.click(function(){
	$(".top" ).text('预约改期') ;
	$('.changeTime' ).show();
	$('.changeTime-content' ).show();
	$(this ).parent().hide();
	$('.bespeak-situation' ).show();
	$('.bespeak-cancel' ).click(function(){
		$('.changeTime' ).hide();
		$('.bespeak-situation' ).hide();
		$('.changeTime-content' ).hide();
		changeTime.parent().show();
	});
	$('.bespeak-confirm' ).click(function(){
		$('.changeTime' ).show();
		$('.changeTime-content' ).show();
		$('.bespeak-situation' ).hide();
		$('#changeDate' ).keyup(function(){
			$(this ).val($(this ).val().replace(/[^\d\/]/,''));
			if($(this ).val().length == 10){
				$('.change-success' ).show();
				$('.success-confirm' ).click(function(){
					$('.change-success' ).hide();
				});
			}
		});
	});
});