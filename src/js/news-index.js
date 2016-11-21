/**
 * Created by Administrator on 2016/11/15.
 */
var tabli = $('.tabs li');
for(var i=0;i<tabli.length;i++){
	$(tabli[i] ).click(function(){
		$(this ).addClass('active');
		$(this ).siblings().removeClass('active');
		var name = $(this ).attr('id');
		$('.content-'+name).show();
		$('.content-'+name).siblings().hide();

	})
}