$(document).on("ready",function(){

  $(document).on("keydown",function(key){
    //Cerrar ventanas al con la tecla "esc"
    if (key.which == 27) {
      if ($('#contenedor').css("display") == "block") {
        $("#contenedor").css("display","none");
        $("input[type$='text']").val("");
  			$("input[type$='text']").css("border-color","#999");
  			$("input[type$='password']").val("");
  			$("input[type$='password']").css("border-color","#999");
  			$("input[type$='email']").val("");
  			$("input[type$='email']").css("border-color","#999");
      }
      if ($('#ventaIni').css("display") == "block") {
        $("#ventaIni").css("display","none");
        $("input[type$='text']").val("");
  			$("input[type$='text']").css("border-color","#999");
  			$("input[type$='password']").val("");
  			$("input[type$='password']").css("border-color","#999");
  			$("input[type$='email']").val("");
  			$("input[type$='email']").css("border-color","#999");
      }
    }

    if (key.which == 13) {
      

    }
  });


});
