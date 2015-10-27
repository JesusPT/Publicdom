$(document).on("ready",function(){

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
});
