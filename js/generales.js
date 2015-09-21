$(document).on("ready",function(){

  $(document).on("keydown",function(key){
    if (key.which == 27) {
      if ($('#contenedor').css("display") == "block") {
        $("#contenedor").css("display","none");
      }
      if ($('#ventaIni').css("display") == "block") {
        $("#ventaIni").css("display","none");
      }
    }

    if (key.which == 13) {
      if ($("input[name $='busqueda']").activeElement) {
        console.log("el buscador tiene el foco");
      }
    }
  });


});
