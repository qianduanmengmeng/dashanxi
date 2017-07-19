// JavaScript Document

$(document).ready(function () {
	//网页初始化
	$('.leftclick').eq(0).siblings().addClass('disn');
	$('.lefthover').eq(0).siblings().addClass('disn');
	$('.page5_nav li').last().removeClass('mr110');
	
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
		paginationClickable: true,
        direction: 'vertical',
		speed:500,
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        mousewheelControl: true,
	 
      
	onInit: function(swiper){
    swiperAnimateCache(swiper); //隐藏动画元素 
    swiperAnimate(swiper); //初始化完成开始动画
  }, 
  onSlideChangeEnd: function(swiper){ 
    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
  } 
    });

	$('.swiper2 .swiper-slide:nth-child(4n-1)').css("margin-top","30px");
	$('.swiper2 .swiper-slide:nth-child(4n-2)').css("margin-top","30px");
	$('.swiper3 .swiper-slide:nth-child(4n-1)').css("margin-top","30px");
	$('.swiper3 .swiper-slide:nth-child(4n-2)').css("margin-top","30px");
	$('.swiper4 .swiper-slide:nth-child(4n-1)').css("margin-top","30px");
	$('.swiper4 .swiper-slide:nth-child(4n-2)').css("margin-top","30px");
	$('.swiper5 .swiper-slide:nth-child(4n-1)').css("margin-top","30px");
	$('.swiper5 .swiper-slide:nth-child(4n-2)').css("margin-top","30px");
	$('.swiper6 .swiper-slide:nth-child(4n-1)').css("margin-top","30px");
	$('.swiper6 .swiper-slide:nth-child(4n-2)').css("margin-top","30px");
	$('.swiper7 .swiper-slide:nth-child(4n-1)').css("margin-top","30px");
	$('.swiper7 .swiper-slide:nth-child(4n-2)').css("margin-top","30px");
	$('.swiper8 .swiper-slide:nth-child(4n-1)').css("margin-top","30px");
	$('.swiper8 .swiper-slide:nth-child(4n-2)').css("margin-top","30px");
	$('.swiper9 .swiper-slide:nth-child(4n-1)').css("margin-top","30px");
	$('.swiper9 .swiper-slide:nth-child(4n-2)').css("margin-top","30px");
	$('.swiper10 .swiper-slide:nth-child(4n-1)').css("margin-top","30px");
	$('.swiper10 .swiper-slide:nth-child(4n-2)').css("margin-top","30px");
	$('.swiper11 .swiper-slide:nth-child(4n-1)').css("margin-top","30px");
	$('.swiper11 .swiper-slide:nth-child(4n-2)').css("margin-top","30px");
	$('.swiper12 .swiper-slide:nth-child(4n-1)').css("margin-top","30px");
	$('.swiper12 .swiper-slide:nth-child(4n-2)').css("margin-top","30px");
	$('.swiper13 .swiper-slide:nth-child(4n-1)').css("margin-top","30px");
	$('.swiper13 .swiper-slide:nth-child(4n-2)').css("margin-top","30px");
	$('.page3leftbody li').each(function(){
		$(this).click(function(){
			$(this).addClass('active').siblings().removeClass('active');
			$('.leftclick').eq($(this).index()).removeClass('disn').siblings().addClass('disn');
			})
		});
	$('.page4topbody li').each(function(){
		$(this).hover(
		function(){
			$(this).addClass('active').siblings().removeClass('active');
			$('.lefthover').eq($(this).index()).removeClass('disn').siblings().addClass('disn');
			})
		});
});
$(document).ready(function () {
var swiper1 = new Swiper('.swiper1', {
	pagination: '.swiper-pagination1',
	paginationClickable: true,
	spaceBetween: 30,
	autoplay : 3000,    //可选选项，自动滑动
	autoplayDisableOnInteraction : false,    //注意此参数，默认为true
});
});
var swiper2 = new Swiper('.swiper2', {
	scrollbarHide: false,
	slidesPerView: 'auto',
	centeredSlides: false,
	spaceBetween: 30,
	grabCursor: true,
	paginationClickable: true,
	prevButton:'.swiper-button-prev2',
	nextButton:'.swiper-button-next2',
});
var swiper3 = new Swiper('.swiper3', {
	scrollbarHide: false,
	slidesPerView: 'auto',
	centeredSlides: false,
	spaceBetween: 30,
	grabCursor: true,
	paginationClickable: true,
	prevButton:'.swiper-button-prev3',
	nextButton:'.swiper-button-next3',
});	
var swiper4 = new Swiper('.swiper4', {
	scrollbarHide: false,
	slidesPerView: 'auto',
	centeredSlides: false,
	spaceBetween: 30,
	grabCursor: true,
	paginationClickable: true,
	prevButton:'.swiper-button-prev4',
	nextButton:'.swiper-button-next4',
});	
var swiper5 = new Swiper('.swiper5', {
	scrollbarHide: false,
	slidesPerView: 'auto',
	centeredSlides: false,
	spaceBetween: 30,
	grabCursor: true,
	paginationClickable: true,
	prevButton:'.swiper-button-prev5',
	nextButton:'.swiper-button-next5',
});	
var swiper6 = new Swiper('.swiper6', {
	scrollbarHide: false,
	slidesPerView: 'auto',
	centeredSlides: false,
	spaceBetween: 30,
	grabCursor: true,
	prevButton:'.swiper-button-prev6',
	nextButton:'.swiper-button-next6',
});	
var swiper7 = new Swiper('.swiper7', {
	scrollbarHide: false,
	slidesPerView: 'auto',
	centeredSlides: false,
	spaceBetween: 30,
	grabCursor: true,
	prevButton:'.swiper-button-prev7',
	nextButton:'.swiper-button-next7',
});	
var swiper8 = new Swiper('.swiper8', {
	scrollbarHide: false,
	slidesPerView: 'auto',
	centeredSlides: false,
	spaceBetween: 30,
	grabCursor: true,
	prevButton:'.swiper-button-prev8',
	nextButton:'.swiper-button-next8',
});	
var swiper9 = new Swiper('.swiper9', {
	scrollbarHide: false,
	slidesPerView: 'auto',
	centeredSlides: false,
	spaceBetween: 30,
	grabCursor: true,
	prevButton:'.swiper-button-prev9',
	nextButton:'.swiper-button-next9',
});	
var swiper10 = new Swiper('.swiper10', {
	scrollbarHide: false,
	slidesPerView: 'auto',
	centeredSlides: false,
	spaceBetween: 30,
	grabCursor: true,
	prevButton:'.swiper-button-prev10',
	nextButton:'.swiper-button-next10',
});	
var swiper11 = new Swiper('.swiper11', {
	scrollbarHide: false,
	slidesPerView: 'auto',
	centeredSlides: false,
	spaceBetween: 30,
	grabCursor: true,
	prevButton:'.swiper-button-prev11',
	nextButton:'.swiper-button-next11',
});	
var swiper12 = new Swiper('.swiper12', {
	scrollbarHide: false,
	slidesPerView: 'auto',
	centeredSlides: false,
	spaceBetween: 30,
	grabCursor: true,
	prevButton:'.swiper-button-prev12',
	nextButton:'.swiper-button-next12',
});	
var swiper13 = new Swiper('.swiper13', {
	scrollbarHide: false,
	slidesPerView: 'auto',
	centeredSlides: false,
	spaceBetween: 30,
	grabCursor: true,
	prevButton:'.swiper-button-prev13',
	nextButton:'.swiper-button-next13',
});

var swiper14 = new Swiper('.swiper14', {
	slidesPerView: 4,
	slidesPerColumn: 2,
	paginationClickable: true,
	spaceBetween: 0,
	prevButton:'.swiper-button-prev14',
	nextButton:'.swiper-button-next14',
});
var swiper15 = new Swiper('.swiper15', {
	slidesPerView: 4,
	slidesPerColumn: 2,
	paginationClickable: true,
	spaceBetween: 0,
	prevButton:'.swiper-button-prev15',
	nextButton:'.swiper-button-next15',
});
var swiper16 = new Swiper('.swiper16', {
	slidesPerView: 4,
	slidesPerColumn: 2,
	paginationClickable: true,
	spaceBetween: 0,
	prevButton:'.swiper-button-prev16',
	nextButton:'.swiper-button-next16',
});
var swiper17 = new Swiper('.swiper17', {
	slidesPerView: 4,
	slidesPerColumn: 2,
	paginationClickable: true,
	spaceBetween: 0,
	prevButton:'.swiper-button-prev17',
	nextButton:'.swiper-button-next17',
});
var swiper18 = new Swiper('.swiper18', {
	slidesPerView: 4,
	slidesPerColumn: 2,
	paginationClickable: true,
	spaceBetween: 0,
	prevButton:'.swiper-button-prev18',
	nextButton:'.swiper-button-next18',
});
var swiper19 = new Swiper('.swiper19', {
	slidesPerView: 4,
	slidesPerColumn: 2,
	paginationClickable: true,
	spaceBetween: 0,
	prevButton:'.swiper-button-prev19',
	nextButton:'.swiper-button-next19',
});
var swiper20 = new Swiper('.swiper20', {
	slidesPerView: 4,
	slidesPerColumn: 2,
	paginationClickable: true,
	spaceBetween: 0,
	prevButton:'.swiper-button-prev20',
	nextButton:'.swiper-button-next20',
});
var swiper21 = new Swiper('.swiper21', {
	slidesPerView: 4,
	slidesPerColumn: 2,
	paginationClickable: true,
	spaceBetween: 0,
	prevButton:'.swiper-button-prev21',
	nextButton:'.swiper-button-next21',
});
var swiper22 = new Swiper('.swiper22', {
	slidesPerView: 4,
	slidesPerColumn: 2,
	paginationClickable: true,
	spaceBetween: 0,
	prevButton:'.swiper-button-prev22',
	nextButton:'.swiper-button-next22',
});
var swiper23 = new Swiper('.swiper23', {
	slidesPerView: 4,
	slidesPerColumn: 2,
	paginationClickable: true,
	spaceBetween: 0,
	prevButton:'.swiper-button-prev23',
	nextButton:'.swiper-button-next23',
});
var swiper24 = new Swiper('.swiper24', {
	slidesPerView: 4,
	slidesPerColumn: 2,
	paginationClickable: true,
	spaceBetween: 0,
	prevButton:'.swiper-button-prev24',
	nextButton:'.swiper-button-next24',
});
var swiper25 = new Swiper('.swiper25', {
	slidesPerView: 4,
	slidesPerColumn: 2,
	paginationClickable: true,
	spaceBetween: 0,
	prevButton:'.swiper-button-prev25',
	nextButton:'.swiper-button-next25',
});
//隐藏导航
$('.navan').click(function(){
		if($('.swiper-container-vertical>.swiper-pagination-bullets').css("height")==='94px'){
			$('.swiper-container-vertical>.swiper-pagination-bullets').stop(true,true).animate({height:"0px"},400);
			}else{
			$('.swiper-container-vertical>.swiper-pagination-bullets').stop(true,true).animate({height:"94px"},400);	
				}
})
//page3点击弹图
$('.page3right .btn_a').each(function(index){
	$(this).click(function(){
		$('.leftbtn1').attr('number',index);
		$('.rightbtn1').attr('number',index);
		var $thisSrc = $(this).find('img').attr("src");
		$('.shade1').removeClass('disn');
		$('.shade1').append("<img class=\"addpic\" src="+$thisSrc+" />");
		});
	})
//page3关闭弹图
$('.shade1 .close').click(function(){
	$('.addpic').remove("img");
	$('.shade1').addClass('disn');
	});
//page3弹图左右切换	
$('.leftbtn1').click(function(){
	var $thisNumb = $(this).attr('number');
	if($thisNumb == 0){
		$thisNumb = $('.page3right img').length;
		}
	var $prevSrc = $('.page3right img').eq($thisNumb-1).attr("src");
	$('.leftbtn1').attr('number',$thisNumb-1);
	$('.rightbtn1').attr('number',$thisNumb-1);
	$('.shade1').find('img').attr("src",$prevSrc);
	});
$('.rightbtn1').click(function(){
	var $thisNumb = parseInt($(this).attr('number'));
	if($thisNumb == $('.page3right img').length -1){
		$thisNumb = -1;
		}
	var $nextSrc = $('.page3right img').eq($thisNumb+1).attr("src");
	$('.leftbtn1').attr('number',$thisNumb+1);
	$('.rightbtn1').attr('number',$thisNumb+1);
	$('.shade1').find('img').attr("src",$nextSrc);
	});
//page4点击弹图
$('.page4bottom .btn_a').each(function(index){
	$(this).click(function(){
		$('.leftbtn2').attr('number',index);
		$('.rightbtn2').attr('number',index);
		var $thisSrc = $(this).find('img').attr("src");
		var $thisP = $(this).find('input').val();
		$('.shade2').removeClass('disn');
		$('.shade2').append("<img class=\"addpic\" src="+$thisSrc+" />");
		$('.shade2').append("<p class='f14'>"+$thisP+"</p>");
		});
	})
//page4关闭弹图
$('.shade2 .close').click(function(){
	$('.addpic').remove("img");
	$('.shade2').addClass('disn');
	});
//page4弹图左右切换	
$('.leftbtn2').click(function(){
	var $thisNumb = $(this).attr('number');
	if($thisNumb == 0){
		$thisNumb = $('.page4bottom img').length;
		}
	var $thisP = $('.page4bottom input').eq($thisNumb-1).val();
	var $prevSrc = $('.page4bottom img').eq($thisNumb-1).attr("src");
	$('.leftbtn2').attr('number',$thisNumb-1);
	$('.rightbtn2').attr('number',$thisNumb-1);
	$('.shade2').find('img').attr("src",$prevSrc);
	$('.shade2').find('p').html($thisP);  
	});
$('.rightbtn2').click(function(){
	var $thisNumb = parseInt($(this).attr('number'));
	if($thisNumb == $('.page4bottom img').length -1){
		$thisNumb = -1;
		}
	var $thisP = $('.page4bottom input').eq($thisNumb+1).val();
	var $nextSrc = $('.page4bottom img').eq($thisNumb+1).attr("src");
	$('.leftbtn2').attr('number',$thisNumb+1);
	$('.rightbtn2').attr('number',$thisNumb+1);
	$('.shade2').find('img').attr("src",$nextSrc);
	$('.shade2').find('p').html($thisP);  
	});