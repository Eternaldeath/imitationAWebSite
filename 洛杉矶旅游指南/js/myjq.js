
		// 简单的下拉菜单实现
		 // 可做之事
            $(".doing").mouseenter(function () {
                $(".ex_1").stop().animate({width: 'toggle'});  
            });

            $(".doing").mouseleave(function(){
            	$(".ex_1").stop().animate({width: 'toggle'});  
            })

		 // 旅行指南
            $(".doing2").mouseenter(function () {
                $(".ex_2").stop().animate({width: 'toggle'});  
            });

            $(".doing2").mouseleave(function(){
            	$(".ex_2").stop().animate({width: 'toggle'});  
            });


    // 标题动态边框

  $(".headTwo").mouseover(function(){
    $(this).find(".topLine,.bottomLine").stop().animate({"width":"400px"});
    $(this).find(".rightLine,.leftLine").stop().animate({"height":"80px"});
    $(this).css("background","lightgrey")
  });

$(".headTwo").mouseout(function(){
  $(this).find(".topLine,.bottomLine").stop().animate({"width":"0px"});
  $(this).find(".rightLine,.leftLine").stop().animate({"height":"0px"});
  $(this).css("background","#fff");
  })
