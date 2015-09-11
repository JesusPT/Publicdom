$(document).on("ready",function(){
		$("#perfil").click(function(){
			$(".more").css("display","none");
			$("#more-profile").slideToggle("slow");
			
		});

		$("#edit-profile").click(function(){
			$(".more").css("display","none");
			$("#more-edituser").slideToggle("slow");
		});

		$("#btoBuscar").click(function(){
			$(".more").css("display","none");
			$("#more-search").slideToggle("slow");
		});

		$("#historial").click(function(){
			$(".more").css("display","none");
			$("#more-history").slideToggle("slow");
		});

		$("#pedidos").click(function(){
			$(".more").css("display","none");
			$("#more-pedidos").slideToggle("slow");
		});

		$("#favoritos").click(function(){
			$(".more").css("display","none");
			$("#more-favs").slideToggle("slow");
		});		
	
});
