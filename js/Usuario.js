$(document).on("ready",function(){

		$("#perfil").on("click",function(){
			if ($("#more-profile").css('display')=='block') {
				$("#more-profile").slideToggle("slow");
				$(this).css('background-color','#5D5E60');
			}else {
				$(".more").css("display","none");
				$(this).css('background-color','rgb(194, 194, 194)');
				$("#more-profile").slideToggle("slow");
			}

		});

		$("#edit-profile").click(function(){
			if ($("#more-edituser").css('display')=='block') {
				$("#more-edituser").slideToggle("slow");
			}else {
				$("#more-profile").css("display","none");
				$("#more-edituser").slideToggle("slow");
			}
		});

		$("#btoBuscar").click(function(){
			$(".more").css("display","none");
			$("#more-search").slideToggle("slow");
		});

		$("#historial").click(function(){
			if ($("#more-history").css('display')=='block') {
				$("#more-history").slideToggle("slow");
				$(this).css('background-color','#5D5E60');
			}else {
				$(".more").css("display","none");
				$(this).css('background-color','rgb(194, 194, 194)');
				$("#more-history").slideToggle("slow");
			}

		});

		$("#pedidos").click(function(){
			if ($("#more-pedidos").css('display')=='block') {
				$("#more-pedidos").slideToggle("slow");
			}else {
				$(".more").css("display","none");
				$(this).css('background-color','rgb(194, 194, 194)');
				$("#more-pedidos").slideToggle("slow");
			}

		});

		$("#favoritos").on("click",function(){
			if ($("#more-favs").css('display')=='block') {
				$("#more-favs").slideToggle("slow");
				$(this).css('background-color','#5D5E60');
			}else {
				$(".more").css("display","none");
				$(this).css('background-color','rgb(194, 194, 194)');
				$("#more-favs").slideToggle("slow");
			}

		});

});
