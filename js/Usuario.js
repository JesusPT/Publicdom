$(document).on("ready",function(){
var ps;
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

		$('#mSalir').on('click',function(){
			$.ajax({
				url: "php/cerrarSesion.php",
				success: function(respuesta){
					$(window).attr('location',"/Publicdom");
				}
			});
		});

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

		$("#save-img").on("click",function(e){
			e.preventDefault();
			$("#more-edituser").slideToggle("slow");
			$("#more-profile").slideToggle("slow");
		});

		$("#carrito").on("click",function(){
			if ($("#more-carrito").css('display')=='block') {
				$("#more-carrito").slideToggle("slow");
				$(this).css('background-color','#5D5E60');
			}else {
				$(".more").css("display","none");
				$(".pIzquierda").css('background-color','#5D5E60');
				$(this).css('background-color','rgb(194, 194, 194)');
				$("#more-carrito").slideToggle("slow");
			}

		});
//Fin Efectos de ventanas
//---------------------------------------------------------------------

//Datos del usuario
//------------------------------------------------------------------------------

$.ajax({
	url: "php/datos.php",
	success: function(respuesta){

		if (respuesta == 0) {
			console.log("error al poner el nombre");
		}else if(respuesta == 1){

		}else {
			respuesta = respuesta.split(",");
			console.log(respuesta[0]);
			$('#nombreUsuario').text(respuesta[0]);
			$('#nuser').text(respuesta[1]);
		}
	}
});


//------------------------------------------------------------------------------
//historial del usuario


$.ajax({
	url: "php/historial.php",
	success: function(respuesta){

		if (respuesta == 0) {
			console.log("error al poner el nombre");
		}else if(respuesta == 1){

		}else {
			respuesta = respuesta.split("~");
			for (var i = 0; i < respuesta.length - 1; i++) {
				$("#more-history").append("	<div class='ser-package-history'> <a href='#' class='prod-link' name="+respuesta[i]+">"+respuesta[i+1]+"</a><p class='descrip-serv-history'>"+respuesta[i+2]+"</p> </div>");
				i+=2;
			}

		}
	}
});
//------------------------------------------------------------------------------
//historial Servicios

$.ajax({
	url: "php/historialServ.php",
	success: function(respuesta){

		if (respuesta == 0) {
			console.log("error al poner el nombre");
		}else if(respuesta == 1){

		}else {
			respuesta = respuesta.split("~");
			for (var i = 0; i < respuesta.length - 1; i++) {
				$("#more-history").append("	<div class='ser-package-history'> <a href='#' class='serv-link' name="+respuesta[i]+">"+respuesta[i+1]+"</a><p class='descrip-serv-history'>"+respuesta[i+2]+"</p> </div>");
				i+=2;
			}

		}
	}
});


//------------------------------------------------------------------------------
//Busqueda

$("#btoBuscar").on("click",function(){
	var clave = $("input[name$='busqueda']").val();
	$('.ser-package').remove();

	$.ajax({
		url: "php/busqueda.php",
		type: "POST",
		data: "busqueda="+clave,
		success: function(respuesta){

			if (respuesta == 0) {
				console.log("error al poner el nombre");
			}else if(respuesta == 1){

			}else {
				respuesta = respuesta.split("~");
				for (var i = 0; i < respuesta.length - 1; i++) {
					$("#more-search").append("<div class='ser-package'><a href='#' class='prod-link' name="+respuesta[i]+">"+ respuesta[i+1] +"</a><p class='descrip-serv'>"+ respuesta[i+2] +"</p></div>");
					i+=2;
				}

			}
		}
	});
	//Servicios
	$.ajax({
		url: "php/busquedaServ.php",
		type: "POST",
		data: "busqueda="+clave,
		success: function(respuesta){

			if (respuesta == 0) {
				console.log("error al poner el nombre");
			}else if(respuesta == 1){

			}else {
				respuesta = respuesta.split("~");
				for (var i = 0; i < respuesta.length - 1; i++) {
					$("#more-search").append("<div class='ser-package'><a href='#' class='serv-link' name="+respuesta[i]+">"+ respuesta[i+1] +"</a><p class='descrip-serv'>"+ respuesta[i+2] +"</p></div>");
					i+=2;
				}

			}
		}
	});

	$(".more").css("display","none");
	$("#more-search").slideToggle("slow");
});

//------------------------------------------------------------------------------
//favoritos

$("#favoritos").on("click",function(){
	if ($("#more-favs").css('display')=='block') {
		$("#more-favs").slideToggle("slow");
		$(this).css('background-color','#5D5E60');


	}else {
		$('.ser-package-favs').remove();
		$(".more").css("display","none");
		$(this).css('background-color','rgb(194, 194, 194)');
		$(".pIzquierda").css('background-color','#5D5E60');
		$("#more-favs").slideToggle("slow");
		//favoritos Producto
		$.ajax({
			url: "php/favoritos.php",
			success: function(respuesta){
				if (respuesta == 0) {
					console.log("error al poner el nombre");
				}else if(respuesta == 1){

				}else {
					respuesta = respuesta.split("~");
					for (var i = 0; i < respuesta.length - 1; i++) {
						$("#more-favs").append("<div class='ser-package-favs'><a href='#' class='prod-link' name="+respuesta[i]+">"+ respuesta[i+1] +"</a><p class='descrip-serv-favs'> "+ respuesta[i+2] +" </p></div>");
						i+=2;
					}

				}
			}
		});

		//favoritos servicio
		$.ajax({
			url: "php/favoritosServ.php",
			success: function(respuesta){
				if (respuesta == 0) {
					console.log("error al poner el nombre");
				}else if(respuesta == 1){

				}else {
					respuesta = respuesta.split("~");
					for (var i = 0; i < respuesta.length - 1; i++) {
						$("#more-favs").append("<div class='ser-package-favs'><a href='#' class='serv-link' name="+respuesta[i]+">"+ respuesta[i+1] +"</a><p class='descrip-serv-favs'> "+ respuesta[i+2] +" </p></div>");
						i+=2;
					}

				}
			}
		});
	}

});

//------------------------------------------------------------------------------
//Producto

$('#more-search,#more-favs,#more-history').on("click",".prod-link",function(e){
		e.preventDefault();
		ps = 0;
		var idProducto = $(this).attr('name');
		$.ajax({
			url: "php/producto.php",
			data: "idProducto="+idProducto,
			success: function(respuesta){
				if (respuesta== 0) {

				}else{
						respuesta = respuesta.split("~");
						$('#nomPS').attr('name',respuesta[0]);
						$('#nomPS').text(respuesta[1]);
						$('#descPSBus').text(respuesta[2]);
						$('#precioProdDet').text(respuesta[3]);
						$('#dispPSBus').text(respuesta[4]);
						$('#perEmpBusq').text(respuesta[5]);
						$('#perEmpBusq').attr('name',respuesta[6]);


				}
			}
		});

		$('#contenedor').css("display","block");
		$('#detallesServBusqueda').css("display","block");
});
//------------------------------------------------------------------------------
//Servicio

$('#more-search,#more-favs,#more-history').on("click",".serv-link",function(e){
		e.preventDefault();
		ps = 1;
		var idServicio = $(this).attr('name');
		$.ajax({
			url: "php/servicio.php",
			data: "idServicio="+idServicio,
			success: function(respuesta){
				if (respuesta== 0) {

				}else{
						respuesta = respuesta.split("~");
						$('#nomPS').attr('name',respuesta[0]);
						$('#nomPS').text(respuesta[1]);
						$('#descPSBus').text(respuesta[2]);
						$('#dispPSBus').text(respuesta[3]);
						$('#perEmpBusq').text(respuesta[4]);
						$('#perEmpBusq').attr('name',respuesta[5]);


				}
			}
		});

		$('#contenedor').css("display","block");
		$('#detallesServBusqueda').css("display","block");
});
//------------------------------------------------------------------------------
//Añadir Producto/Servicio

$('#agregarPS').on('click',function(e){

	var idEmpresa = $('#perEmpBusq').attr('name');
	var idPS = $('#nomPS').attr('name');
	$.ajax({
		url: "php/agregarPS.php",
		data: "idEmpresa="+idEmpresa+"&idProducto="+idPS+"&ps="+ps,
		success: function(respuesta){
			if (respuesta== 0) {

			}else{

			}
		}
	});
});


//---------------------------------------------------------------------rgb(255, 50, 50)---------
//compraOK

$('#compraOK').on('click',function(){
	$('#emergenteCompraOK').css('display','none');
	$('#contenedor').css('display','none');
});

		$(".pide").on("click",function(e){
			e.preventDefault();
			$($($(this).parent()).parent()).parent().remove();
		})

//------------------------------------------------------------------------------
//Detalles empresa

		$('#perEmpBusq').on('click',function(e){
			e.preventDefault();
			var idEmpresa = $(this).attr('name');
			$.ajax({
				url: "php/empresa.php",
				data: "idEmpresa="+idEmpresa,
				success: function(respuesta){
					if (respuesta== 0) {

					}else{
							respuesta = respuesta.split("~");
							$('#nomEmpresaDetalles').text(respuesta[0]);
							$('.dirEmpBus').text(respuesta[1]);
							$('.telEmpBus').text(respuesta[2]);
							$('.titularEmpBus').text(respuesta[3]);

					}
				}
			});

			$('#detallesServBusqueda').css("display","none");
			$('#contenedor').css("display","block");
			$('#detallesEmprBusqueda').css("display","block");
		});

//Cerrar emergentes-------------------------------------------------------------

$('#cerrarDetallesServBusqueda').on('click',function(){
	$('#contenedor').css("display","none");
	$('#detallesServBusqueda').css("display","none");
});


$('#cerrarDetallesEmprBusqueda').on('click',function(){
	$('#contenedor').css("display","none");
	$('#detallesEmprBusqueda').css("display","none");
});
//------------------------------------------------------------------------------

});
