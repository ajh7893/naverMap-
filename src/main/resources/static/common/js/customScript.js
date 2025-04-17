$(document).ready(function () {

    //GNB 임시 스크립트
    $("#nav").on("mouseenter focus", function () {
        $("#nav").addClass("active");
        $(".mask").addClass("active");
        $(".gnb_bg").addClass("active");
      });
    
    $("#nav").on("mouseleave", function () {
        $("#nav").removeClass("active");
        $(".mask").removeClass("active");
        $(".gnb_bg").removeClass("active");
    });


    //상단 검색 토글버튼
    $("#topSearchBtn").click(function(){
      $(this).toggleClass("active");
      $("#searchArea").toggleClass("active");
      //$(".mask").toggleClass("active");
    });


    //모바일 메뉴 토글버튼
    $("#mobileMenuBtn").click(function(){
      $(this).toggleClass("active");
      $("body").toggleClass("fixed");
      $("#mobileNav").toggleClass("active");
    });


    // 모바일 GNB 작동
    var mNavList = document.querySelectorAll('#mobileNav > ul > li');
  
    for(var i = 0; i < mNavList.length; i++){
      mNavList[i].querySelector('.depth1 > a').addEventListener('click', function(e){
        e.preventDefault();
        for(var j = 0; j < mNavList.length; j++){
          mNavList[j].classList.remove('on');
        }
        this.parentNode.classList.add('on');
      });
    }


    $(".subnav > ul > li > a").click(function(){
			$(this).parent().toggleClass("on");
		});

	

    //메인 슬라이드
    var $status = $('.custom_paging'); //paging 이 들어갈 div 혹은 p 혹은 어떠한 영역
    var $slickElement = $('.main_slide'); //slide가 되어야하는 div

    $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + ' / ' + slick.slideCount);
    });

    $slickElement.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
    })

   // 메인 슬라이드 일시정지 기능
    $(document).on("click", ".btn_pause", function(){
        $(".main_slide").slick("slickPause");
        $(this).removeClass("btn_pause").addClass("btn_play");
        $(this).parent().attr("title", "재생");
    });


    // 메인 슬라이드 재생 기능
    $(document).on("click", ".btn_play", function(){
        $(".main_slide").slick("slickPlay");
        $(this).removeClass("btn_play").addClass("btn_pause");
        $(this).parent().attr("title", "일시정지");
    });


    // 팝업 슬라이드
    var $popStatus = $('.pop_custom_paging');
    var $popSlickElement = $('.popSlider');

    $popSlickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        var i = (currentSlide ? currentSlide : 0) + 1;
        $popStatus.text(i + ' / ' + slick.slideCount);
    });

    $popSlickElement.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
    })


    // 탭
    var tabItem = document.querySelectorAll(".tab_item");
    var tabContent = document.querySelectorAll(".tab_con");

    tabItem.forEach((item, index) => {
      item.addEventListener("click", (e) => {
      e.preventDefault(); // a 
      
      tabContent.forEach((content) => {
        content.classList.remove("active");
      });

      tabItem.forEach((content) => {
        content.classList.remove("active");
      });

      tabItem[index].classList.add("active");
        tabContent[index].classList.add("active");
      });
    });
    
    

    // 팔당
    $('.tour_slide').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      infinite: false,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
          }
        },
      ]
    });


    //
    $('.eco_wrap button').click(function(){
      if($(this).is('.on')){
        $('.eco_wrap .eco_drop').hide()
      } else {
        $('.eco_wrap .eco_drop').show()
      }
    })
    
    $(".eco_drop li").on("click", function(e){
      colorChangeOnClick(e);
      $('.eco_wrap button').text('')
      $('.eco_wrap button').text($(this).text())

      $(".fade").css('display','none');

      if(!$('.eco_wrap button').is(':hidden')){
        $('.eco_wrap .eco_drop').hide()
      }
    });

      

});

  
//
function colorChangeOnClick(e){
	var curLi = e.currentTarget;
	var curLiClass = curLi.classList.value;
	if(curLiClass != "active"){
		$(".eco_drop li").removeClass('active');
		curLi.classList.add('active');

	}
}