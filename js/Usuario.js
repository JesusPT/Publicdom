$(document).on("ready",function(){

//Validar sesion
$.ajax({
	url: "php/val.php",
	success: function(respuesta){
		if (respuesta == 0) {
			$(window).attr('location',"/Publicdom");
		}
	}
});


$('#formEdDatosPers').on('submit',function(e){

	e.preventDefault();
	$.ajax({
		url: "editarUsuario.php",
		method: "POST",
		//data:,
		success: function(respuesta){
			if (respuesta==0) {

			}
		}
	});

});

//Cerrar session

		$('#cerrarSesion').on('click',function(){
			$.ajax({
				url: "php/cerrarSesion.php",
				success: function(respuesta){
					$(window).attr('location',"/Publicdom");
				}
			});
		});

//---------------------------------------------------------------
//Efectos de ventanas
		$("#perfil").on("click",function(){
			if ($("#more-profile").css('display')=='block') {
				$("#more-profile").slideToggle("slow");
				$(this).css('background-color','#5D5E60');
			}else {
				$(".more").css("display","none");
				$(".pIzquierda").css('background-color','#5D5E60');
				$(this).css('background-color','rgb(194, 194, 194)');
				$("#more-profile").slideToggle("slow");
			}

		});

		$("#edit-profile").on("click",function(){
			if ($("#more-edituser").css('display')=='block') {
				$("#more-edituser").slideToggle("slow");
			}else {
				$("#more-profile").css("display","none");
				$("#more-edituser").slideToggle("slow");
			}
		});

		$("#btoBuscar").on("click",function(){
			$(".more").css("display","none");
			$("#more-search").slideToggle("slow");
		});

		$("#historial").on("click",function(){
			if ($("#more-history").css('display')=='block') {
				$("#more-history").slideToggle("slow");
				$(this).css('background-color','#5D5E60');
			}else {
				$(".more").css("display","none");
				$(".pIzquierda").css('background-color','#5D5E60');
				$(this).css('background-color','rgb(194, 194, 194)');
				$("#more-history").slideToggle("slow");
			}
		});


		$("#pedidos").on("click",function(){
			if ($("#more-pedidos").css('display')=='block') {
				$("#more-pedidos").slideToggle("slow");
				$(this).css('background-color','#5D5E60');
			}else {
				$(".more").css("display","none");
				$(".pIzquierda").css('background-color','#5D5E60');
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
				$(".pIzquierda").css('background-color','#5D5E60');
				$(this).css('background-color','rgb(194, 194, 194)');
				$("#more-favs").slideToggle("slow");
			}

		});

		$("#save-img").on("click",function(e){
			e.preventDefault();
			$("#more-edituser").slideToggle("slow");
			$("#more-profile").slideToggle("slow");
		});
//Fin Efectos de ventanas
//---------------------------------------------------------------------


//------------------------------------------------------------------------------

$.ajax({
	url: "php/datos.php",
	success: function(respuesta){
		if (respuesta == 0) {
			console.log("error al poner el nombre");
		}else {
			console.log(respuesta);
			$('#nombreUsuario').text(respuesta);
		}
	}
});


//------------------------------------------------------------------------------

		$(".pide").on("click",function(e){
			e.preventDefault();
			$($($(this).parent()).parent()).parent().remove();
		})

});
