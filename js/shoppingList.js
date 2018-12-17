
$(function(){
	//鼠标离开的效果
	$(".header-search").focus(function(){
		$(".sug-init").css({
			"display":"block"
		})
		$(".icon-sousu").css({
			"color":"#ff6d00"
		})
	})

	$(".header-search").blur(function(){
		$(".sug-init").css({
			"display":"none"
		})
		$(".icon-sousu").css({
			"color":"#666666"
		})
	})
}

$(function(){
    //动态获取后端数据
    //ajax获取后台数据
    $.ajax({
        type:"post",
        url:"../php/getGoodsList.php",
        async:true,
        data:{},
        success:function(data){
            //请求成功执行函数
            console.log(data.length);
            console.log(data);
            let length = data.length;
            for(i=1;i<length;i++){
                //动态创建小盒子
                 let str = "<li><a class='recommed-img' href='#'><img src='"+ data[0].goodsImg +"'></a><h2><a href='#'>"+data[i].goodsType+"</a></h2><p><a href='#'>"+data[i].beiyong1+"</a></p></li>";
                 $(".recommed").append(str);
				// if(i%2 == 0){
				//     $(".con_small_createNew").addClass("removeMR");
				                // }
            }
        },
        dataType:"json"
    })
});
// $(function(){
//     //点击每一个商品，获取他的值，将其加入数据库，在商品详情页面ajax获取到，没点击一次进行一次判断
//     $(".recommed").on("click",".con_small_createNew",function(){
//         //需要判断点击的是哪个
//         let index = $(this).index()+1;//获取下标，以获取对应的data[i].goodsId值，
//         // alert(index);
//         $.ajax({
//             type:"post",
//             url:"../php/getGoodsList.php",
//             async:true,
//             data:{},
//             success:function(data){
//                 for(let i=1;i<data.length;i++){
//                     if(index == i){
//                         let goodsId = data[i].goodsId;
//                         setCookie("goodsId",goodsId,7);//这边存cookie，另一个页面获取
//                         location.href = "ProductInfo.html";
//                     }
//                 }
//             },
//             dataType:"json"
//         })
//     })
// })
