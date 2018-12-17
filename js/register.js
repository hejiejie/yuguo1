
$(".register_form input").each(function(){
	$(this).blur(function(){
		var reg = /^[a-zA-Z0-9]/i;
		var str=$(this).val();
		    if(!reg.test(str)){
				$(this).parent("li").find(".error1").css({
					"display":"block"
				})
			}else{
				$(this).parent("li").find(".error1").css({
					"display":"none"
				})
			}
        })
	})

$(".pho_2").blur(function(){

		var reg = /^1[3-9]\d{9}/i;
		var str=$(this).val();
		if(!reg.test(str)){
			$(".phone2").css({
				"display":"block"
			})
		}else{
			$(".phone2").css({
				"display":"none"
			})
		}
	}
)
	
