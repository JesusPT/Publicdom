$(document).on("ready",function(){

//------------------------------------------------------------------------------
//Validacion
$.ajax({
  url: "php/valEmp.php",
  success: function(respuesta){
    if (respuesta == 0) {
      $(window).attr('location',"index.html");
    }
  }
});
//------------------------------------------------------------------------------
//Datos de la empresa
$.ajax({
  url: "php/datosEmpresa.php",
  success: function(respuesta){

    if (respuesta == 0) {

    }else if(respuesta == 1){

    }else {
      respuesta = respuesta.split(",");
      $('#NombreEmpresa').text(respuesta[0]);
      //$('#').text(respuesta[1]);
    }
  }
});

//------------------------------------------------------------------------------
//Agregar Producto Servicio
  $('#formAgrProd').on('submit',function(){
    e.preventDefault();
  	var nomProd = document.nformAgrProd.nameProd.value;
  	var descProd = document.nformAgrProd.descProd.value;
  	var disp = $('#disponProd option:selected').text();
  	var precio = document.nformAgrProd.precioProd.value;

    $.ajax({
      type: "POST",
      url: "agregarProd.php",
      data: "nomProd=" + nomProd + "&descProd=" + descProd + "&disp=" + disp + "&precio" + precio,
      success: function(respuesta){
        if (respuesta == 1) {
          $("input[name $='nameProd']").val("");
          $("input[name $='descProd']").val("");
          $("input[name $='precioProd']").val("");
        }
      }

    })

  });
//------------------------------------------------------------------------------
//Salir
  $('#salir').on('click',function(){
    $.ajax({
      url: "php/cerrarSesionEmp.php",
      success: function(respuesta){
        $(window).attr('location',"index.html");
      }
    });
  });
//------------------------------------------------------------------------------
  $('#menuPerfil').on("click",function(){
    if ($("#moreEditEmpresa").css('display')=='block') {
      $("#moreEditEmpresa").slideToggle("slow");
      $("#perfilEmpresa").css('background-color','#5D5E60');
    }else {
      $(".more").css("display","none");
      $(".pIzquierda").css('background-color','#5D5E60');
      $("#perfilEmpresa").css('background-color','rgb(194, 194, 194)');
      $("#moreEditEmpresa").slideToggle("slow");
    }
  });

  $('#menuMensajes').on("click",function(){
    if ($("#moreMensajes").css('display')=='block') {
      $("#moreMensajes").slideToggle("slow");
      $("#Mensajes").css('background-color','#5D5E60');
    }else {
      $(".more").css("display","none");
      $(".pIzquierda").css('background-color','#5D5E60');
      $("#Mensajes").css('background-color','rgb(194, 194, 194)');
      $("#moreMensajes").slideToggle("slow");
    }
  });

  $('#menuPedidos').on("click",function(){
    if ($("#morePedidos").css('display')=='block') {
      $("#morePedidos").slideToggle("slow");
      $("#Pedidos").css('background-color','#5D5E60');
    }else {
      $(".more").css("display","none");
      $(".pIzquierda").css('background-color','#5D5E60');
      $("#Pedidos").css('background-color','rgb(194, 194, 194)');
      $("#morePedidos").slideToggle("slow");
    }
  });

  $('#menuProducto').on("click",function(){
    if ($("#moreProductos").css('display')=='block') {
      $("#moreProductos").slideToggle("slow");
      $("#Producto").css('background-color','#5D5E60');
    }else {
      $(".more").css("display","none");
      $(".pIzquierda").css('background-color','#5D5E60');
      $("#Producto").css('background-color','rgb(194, 194, 194)');
      $("#moreProductos").slideToggle("slow");
    }
  });

});
