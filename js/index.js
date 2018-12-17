window.onload = function(){

// 导航栏下面的轮播图
let s1 = new Slider({
		$box:$(".article_middle_move"),
		width:620,
		height:330,
		imgs:["img/move1.jpg","img/move2.jpg","img/move3.jpg","img/move4.jpg","img/move5.jpg"],
	
		isXuShow:false,
		timeSpace:2000
	});
//实现图片的放大缩小问题
	//鼠标放上去以后
    imgToBig();
    hideToshow();
 	
 	// globleNews();

// $('.category li').mouseover(function() {
//             var currentIndex = $(this).index() +1;
//             hideAll();
//             hideAllTop();
//             $(this).css('background-color','#fff');
//             $('.allNews'+currentIndex).show();
//         });


// function hideAll() {
//      for (var i=1;i<11;i++){
//                 $('allNews_div'+i).hide();
//             }
//         }
// function hideAllTop(){
// 	for(var i=0;i<11;i++){
// 		$('.allNews').eq(i).css('display','#d5d5d5');
// 	}
// }
 


}

//导航栏下拉菜单显示

function imgToBig(){
		$('.items').children("a:first-child").mouseenter(function(){
		$(this).find("img").animate({
			width:'110%',
			height:"110%"
		},400)
	})
//鼠标离开以后
	$('.items').children("a:first-child").mouseleave(function(){           
		$(this).find("img").animate({
			width:'100%',
			height:"100%"

		},400);           
	})

	$(".shopping").children("li").children("a:first-child").mouseenter(function(){
		$(this).find("img").animate({
			width:'110%',
			height:"110%"
		})
	})

	$(".shopping").children("li").children("a:first-child").mouseleave(function(){
		$(this).find("img").animate({
			width:'100%',
			height:"100%"
		});
	})
}
function hideToshow(){
	$(".course_description li").mouseenter(function(){
		$(".money").css("display","none");
		$(this).find(".money").css("display","block");
	})
}



