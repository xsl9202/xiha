			//			鼠标经过全部导航菜单,显示子导航
			$(".all_nav").mouseover(function() {
				$(".sub_nav").addClass("show");
			})
			$(".all_nav").mouseout(function() {
				$(".sub_nav").removeClass("show").addClass("hide");
			})
			//			鼠标经过头像,显示菜单
			$(".head_img").mouseover(function() {
				$(this).find(".personal_nav").removeClass("hide").addClass("show");
			})
			$(".head_img").mouseout(function() {
				$(this).find(".personal_nav").removeClass("show").addClass("hide");
			})
			//			鼠标经过子导航菜单,显示三级导航
			$(".sub_nav li").hover(function() {
				$(this).children("ul").removeClass("hide").addClass("show");
			})
//			鼠标经过显示二维码
			$(".app_download").mouseover(function() {
				$(this).find("#app_code").removeClass("hide").addClass("show");
			});
			$(".app_download").mouseout(function() {
				$(this).find("#app_code").removeClass("show").addClass("hide");
			})
			
			//			鼠标经过显示二维码
			$(".code").mouseover(function() {
				$(this).siblings("img").removeClass("hide").addClass("show");
			});
			$(".code").mouseout(function() {
				$(this).siblings("img").removeClass("show").addClass("hide");
			})