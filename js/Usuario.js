$(document).on("ready",function(){
var ps;
//Validar sesion
$.ajax({
	url: "php/val.php",
	success: function(respuesta){
		if (respuesta == 0) {
			$(window).attr('location',"index.html");
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

//logo


//Cerrar session

		$('#mSalir').on('click',function(){
			$.ajax({
				url: "php/cerrarSesion.php",
				success: function(respuesta){
					$(window).attr('location',"index.html");
				}
			});
		});

		$('#cerrarSesion').on('click',function(){
			$.ajax({
				url: "php/cerrarSesion.php",
				success: function(respuesta){
					$(window).attr('location',"index.html");
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

				//remove
				$(".contenedorPedido").remove();
				//Volcado de datos Pedidos
				$.ajax({
					url: "php/pedidosUsuario.php",
					success: function(respuesta){
						if(respuesta == 0){

						}else{

							respuesta = respuesta.split('~');
							var carrito = 0;
							for (var i = 0; i < respuesta.length-1; i+=7) {

								if (carrito != respuesta[i]) {
									carrito = respuesta[i];
									$('#more-pedidos').append("<div class='contenedorPedido'><div class='pedidoEmpresa'><div class='pedidoTitulos'><div><a class ='EmpresaPSBus' href='#'>"+respuesta[i+1]+"</a></div><div class ='descArticulo'><h3>Servicio</h3><h3>Precio</h3></div></div><div class='cajaDePedidos"+respuesta[i]+"'> </div><div class ='detallesFinales'><div class='numerosTotales'><h3>Total</h3><p>$ <span class='TotalPedido'>"+respuesta[i+5]+"</span></p></div><div class='cajaBotonesPedido'><div class='boton'><a class ='btnEstadoPedido' href='#'>"+respuesta[i+6]+"</a></div></div></div></div></div>");
								}
								//for (var j = i+1; j < i+5; j++) {
									$(".cajaDePedidos"+respuesta[i]).append("<div class='articuloCaja'> <div> <span class='nombreArticulo'>"+respuesta[i+2]+"</span> </div> <div> <p><span class='cantidadArticulo'>"+respuesta[i+3]+"</span> <span class='metricaArticulo'>Piezas</span></p> </div> <div> <p>$<span class='precioUnitArticulo'>"+respuesta[i+4]+"</span></p> </div></div>");
								//}
							}
						}
					}
				});

				$.ajax({
					url: "php/pedidosUsuarioServ.php",
					success: function(respuesta){
						if(respuesta == 0){

						}else{

							respuesta = respuesta.split('~');
							var carrito = 0;
							for (var i = 0; i < respuesta.length-1; i+=6) {

								if (carrito != respuesta[i]) {
									carrito = respuesta[i];
									//$('#more-carrito').append("<div class='contenedorCarrito'> <div class='caritoEmpresa'> <div class='carritoTitulos'> <div> <a class ='EmpresaPSBus' href='#'>"+respuesta[i+1]+"</a> </div> <div class ='descArticulo'> <h3>Artículo</h3> <h3>Cantidad</h3> <h3>Precio</h3> </div> </div> <div class='cajaDeArticulos"+respuesta[i]+"'> </div> <div class ='detallesFinales'> <div class='numerosTotales'> <h3>Total</h3> <p>$ <span class='TotalCarrito'>"+respuesta[i+5]+"</span></p> </div> <div class='cajaBotonesCarrito'> <div class='boton'> <a class ='btnComprarCarritoServ' name="+respuesta[i]+" href='#'>Comprar</a> </div> <div class='boton'> <a class = 'btnBorrarCarritoServ' name="+respuesta[i]+" href='#'>Borrar</a> </div> </div> </div> </div> </div>");
								}
								//for (var j = i+1; j < i+5; j++) {
									$(".cajaDePedidos"+respuesta[i]).append("<div class='articuloCaja'> <div> <span class='nombreArticulo'>"+respuesta[i+2]+"</span> </div> <div> <p><span class='cantidadArticulo'>"+respuesta[i+3]+"</span> <span class='metricaArticulo'>Servicios</span></p> </div> </div>");
								//}
							}
						}
					}
				});


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
				//carritos
				$('.contenedorCarrito').remove();
				$.ajax({
					url: "php/carrito.php",
					success: function(respuesta){
						if(respuesta == 0){

						}else{

							respuesta = respuesta.split('~');
							var carrito = 0;
							for (var i = 0; i < respuesta.length-1; i+=6) {

								if (carrito != respuesta[i]) {
									carrito = respuesta[i];
									$('#more-carrito').append("<div class='contenedorCarrito'> <div class='caritoEmpresa'> <div class='carritoTitulos'> <div> <a class ='EmpresaPSBus' href='#'>"+respuesta[i+1]+"</a> </div> <div class ='descArticulo'> <h3>Artículo</h3> <h3>Cantidad</h3> <h3>Precio</h3> </div> </div> <div class='cajaDeArticulos"+respuesta[i]+"'> </div> <div class ='detallesFinales'> <div class='numerosTotales'> <h3>Total</h3> <p>$ <span class='TotalCarrito'>"+respuesta[i+5]+"</span></p> </div> <div class='cajaBotonesCarrito'> <div class='boton'> <a class ='btnComprarCarrito' name="+respuesta[i]+" href='#'>Comprar</a> </div> <div class='boton'> <a class = 'btnBorrarCarrito' name="+respuesta[i]+" href='#'>Borrar</a> </div> </div> </div> </div> </div>");
								}
								//for (var j = i+1; j < i+5; j++) {
									$(".cajaDeArticulos"+respuesta[i]).append("<div class='articuloCaja'> <div> <span class='nombreArticulo'>"+respuesta[i+2]+"</span> </div> <div> <p><span class='cantidadArticulo'>"+respuesta[i+3]+"</span> <span class='metricaArticulo'>Piezas</span></p> </div> <div> <p>$<span class='precioUnitArticulo'>"+respuesta[i+4]+"</span></p> </div></div>");
								//}
							}
						}
					}
				});

				$.ajax({
					url: "php/carritoServ.php",
					success: function(respuesta){
						if(respuesta == 0){

						}else{

							respuesta = respuesta.split('~');
							var carrito = 0;
							for (var i = 0; i < respuesta.length-1; i+=6) {

								if (carrito != respuesta[i]) {
									carrito = respuesta[i];
									//$('#more-carrito').append("<div class='contenedorCarrito'> <div class='caritoEmpresa'> <div class='carritoTitulos'> <div> <a class ='EmpresaPSBus' href='#'>"+respuesta[i+1]+"</a> </div> <div class ='descArticulo'> <h3>Artículo</h3> <h3>Cantidad</h3> <h3>Precio</h3> </div> </div> <div class='cajaDeArticulos"+respuesta[i]+"'> </div> <div class ='detallesFinales'> <div class='numerosTotales'> <h3>Total</h3> <p>$ <span class='TotalCarrito'>"+respuesta[i+5]+"</span></p> </div> <div class='cajaBotonesCarrito'> <div class='boton'> <a class ='btnComprarCarritoServ' name="+respuesta[i]+" href='#'>Comprar</a> </div> <div class='boton'> <a class = 'btnBorrarCarritoServ' name="+respuesta[i]+" href='#'>Borrar</a> </div> </div> </div> </div> </div>");
								}
								//for (var j = i+1; j < i+5; j++) {
									$(".cajaDeArticulos"+respuesta[i]).append("<div class='articuloCaja'> <div> <span class='nombreArticulo'>"+respuesta[i+2]+"</span> </div> <div> <p><span class='cantidadArticulo'>"+respuesta[i+3]+"</span> <span class='metricaArticulo'>Piezas</span></p> </div> <div> <p>$<span class='precioUnitArticulo'>"+respuesta[i+4]+"</span></p> </div></div>");
								//}
							}
						}
					}
				});

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

$('#profile-favs').on("click",function(){
	if ($("#more-favs").css('display')=='block') {
		$("#more-favs").slideToggle("slow");
		$("#favoritos").css('background-color','#5D5E60');


	}else {
		$('.ser-package-favs').remove();
		$(".more").css("display","none");
		$(".pIzquierda").css('background-color','#5D5E60');
		$("#favoritos").css('background-color','rgb(194, 194, 194)');
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

$("#favoritos").on("click",function(){
	if ($("#more-favs").css('display')=='block') {
		$("#more-favs").slideToggle("slow");
		$("#favoritos").css('background-color','#5D5E60');


	}else {
		$('.ser-package-favs').remove();
		$(".more").css("display","none");
		$(".pIzquierda").css('background-color','#5D5E60');
		$("#favoritos").css('background-color','rgb(194, 194, 194)');
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
e.preventDefault();
	var idEmpresa = $('#perEmpBusq').attr('name');
	var idPS = $('#nomPS').attr('name');
	$.ajax({
		url: "php/agregarPS.php",
		data: "idEmpresa="+idEmpresa+"&idProducto="+idPS+"&ps="+ps,
		success: function(respuesta){
			if (respuesta== 0) {

			}else{
				$('#contenedor').css("display","none");
				$('#detallesServBusqueda').css("display","none");
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
//------------------------------------------------------------------------------
//Comprar Carrito

$('#more-carrito').on('click','.btnComprarCarrito',function(e){
	e.preventDefault();
	var idCar = $(this).attr('name');
	console.log(idCar);
	$.ajax({
		url: "php/pedidos.php",
		data: "idCarrito="+idCar,
		success: function(respuesta){
			if (respuesta == 1) {
				
			}else{
				$('#more-carrito').slideToggle('slow');
			}
		}
	});

});

//------------------------------------------------------------------------------
//Agregar a favoritos
$('#imgStar').on('click',function(e){
	var idProd = $('#nomPS').attr('name');
	$.ajax({
		url: "php/agregarFavorito.php",
		data: "idProducto="+idProd,
		success: function(respuesta){
			if (respuesta == 0) {

			}else{
				$('#contenedor').css("display","none");
				$('#detallesServBusqueda').css("display","none");
			}
		}
	});
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
