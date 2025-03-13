$(document).ready(function () {
    //aside();

	//Navigation
	$('.btn_menu').click(function(){
		$('.mask').css({'z-index':450}).addClass('navmask').stop(true,true).fadeIn(400);
		$('.wrp_nav').addClass('open').stop(true,true).fadeIn(400);
	});
	$('.close_menu').click(function(){
		$('.mask').removeClass('navmask').stop(true,true).fadeOut(1000, function(){
			$(this).css({'z-index':550});
		});
		$('.wrp_nav').removeClass('open').stop(true,true).fadeOut(1000);
		$('#navigation li.open').removeClass('on').find('> .subnav').css({'display':''});
	});
	$('.mask').click(function(){
		if($(this).hasClass('navmask')){
			$(this).removeClass('navmask').stop(true,true).fadeOut(1000, function(){
				$(this).css({'z-index':550});
			});
			$('.wrp_nav').removeClass('open').stop(true,true).fadeOut(1000);
			$('#navigation li.open').removeClass('on').find('> .subnav').css({'display':''});
		}
		if($(this).hasClass('layermask')){
			$(this).removeClass('layermask').stop(true,true).fadeOut(1000);
			$('.layerpop').stop(true,true).fadeOut(1000);
			$('#container').css({'min-height':''});
		}
	});

	$('#navigation li.open > a').click(function(){
		if(window.matchMedia('(max-width:1199px)').matches){
			//$(this).parent('li').toggleClass('on').find('> .subnav').stop(true,true).slideToggle();
			$('.mobile_multi').removeClass('on')
			$('.dep3_mb').stop().slideUp(300);
			if($(this).parent('li').is('.on')){
				$(this).parent('li').removeClass('on').find('>.subnav').stop().slideUp()
			} else {
				$(this).parent('li').addClass('on').find('>.subnav').stop().slideDown()
				$(this).parent('li').siblings('li').removeClass('on').find('>.subnav').stop().slideUp()
			}
			if($(this).is('.mobile_only')){
				
			} else {
				return false;
			}
		}
	});
	$(window).resize(function(){
		if(window.matchMedia('(min-width:1200px)').matches){
			$('.navmask').hide().css({'z-index':400});
			$('.wrp_nav').css({'display':''});
			$('#navigation li.open').removeClass('on').find('> .subnav').css({'display':''});
			
			$('.mobile_multi').removeClass('on')
			$('.dep3_mb').stop().slideUp(300);
			
		}
	});

    $('#navigation > ul > li').mouseenter(function () {
    	
        if (window.matchMedia('(min-width:1200px)').matches) {
            $('.mask').css({ 'z-index': 450 }).addClass('navmask').stop(true, true).fadeIn(100);
            $('#navigation li.open').removeClass('on').find('> .subnav').removeClass('hidden');
        }
    })
   $('#navigation') .mouseleave(function () {
        if (window.matchMedia('(min-width:1200px)').matches) {
            $('.navmask').hide().css({ 'z-index': 400 });
            $('#navigation li.open').removeClass('on').find('> .subnav').addClass('hidden');
        }
	});
    
    $('.mobile_multi').on('click' , function(){
    	if (window.matchMedia('(max-width:1199px)').matches) {
    		if($(this).is('.on')){
    			$(this).removeClass('on')
    			$(this).next('.dep3_mb').stop().slideUp(300);
    		} else {
    			$(this).addClass('on');
    			$(this).next('.dep3_mb').stop().slideDown(300);
    			$(this).parents('li').siblings('li').find('.mobile_multi').removeClass('on')
    			$(this).parents('li').siblings('li').find('.dep3_mb').stop().slideUp(300);
    		}
    	return false;
    	}
    })




    $('.fsite').click(function () {
        $('.familybx').slideToggle();
        $(this).toggleClass('on');
        if($(this).hasClass('on')){
        	//$('html, body').scrollTop($(document).height());
        	$('html, body').animate({ scrollTop: $(document).height()},800);
        }
    });

	//Custom Selectbox
	//$('.selectbox_custom').selectBox();
});

/* aside menu */
function aside() {

    $('aside > nav > ul > li > a').click(function () {
        if ($(this).parent().attr('class') != 'current') {
            $('aside > nav > ul > li > ul').slideUp();
            $(this).next().slideToggle();
            $('aside > nav > ul > li').removeClass('current');
            $(this).parent().addClass('current');
        }
    });

    $('aside > nav > ul > li > ul > li > a').click(function () {
        if ($(this).parent().attr('class') != 'current') {
            $('aside > nav > ul > li > ul > li > ul ').slideUp();
            $(this).next().slideToggle();
            $('aside > nav > ul > li > ul > li').removeClass('current');
            $(this).parent().addClass('current');
        }
    });

    $('aside > nav > ul > li > a').focus(function () {
        if ($(this).parent().attr('class') != 'current') {
            $('aside > nav > ul > li > ul').slideUp();
            $(this).next().slideToggle();
            $('aside > nav > ul > li').removeClass('current');
            $(this).parent().addClass('current');
        }
    });

    $('aside > nav > ul > li > ul > li > a').focus(function () {
        if ($(this).parent().attr('class') != 'current') {
            $('aside > nav > ul > li > ul > li > ul ').slideUp();
            $(this).next().slideToggle();
            $('aside > nav > ul > li > ul > li').removeClass('current');
            $(this).parent().addClass('current');
        }
    });
}

function tab(tabId) {
    var chkid = tabId;

    $('#' + chkid + ' .tabWrap > div.tabContents').hide();
    $('#' + chkid + ' .tabWrap > div.tabContents:first').show();

    $('#' + chkid + ' .tab_menu li:first').addClass('sel');

    $('#' + chkid + ' .tab_menu li a').click(function () {
        var currentTab = $(this).attr('href');

        if ($(this).parent().hasClass('sel')) {
            //$('.tab_menu li').removeClass('sel');
            //$(currentTab).hide();
        }
        else {
            $('#' + chkid + ' .tabWrap > div.tabContents').hide();
            $('#' + chkid + ' .tab_menu li').removeClass('sel');
            $(this).parent().addClass('sel');
            $(currentTab).show();

        }
        return false;
    });


}

//follow quick menu
$(window).scroll(function(){
	var scrollTop = $(document).scrollTop();
	
	if (scrollTop < 268) {
		scrollTop = 268;
	}else{
		scrollTop = scrollTop+50;
	}
	
	//$(".followquick").stop();
	//$(".followquick").animate( { "top" : scrollTop });
});