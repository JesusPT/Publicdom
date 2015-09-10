$(document).on("ready",function(){
		$("#btoReg").click(function(){
			$("#contenedor").css("display","inline-block");
		});
		$("#btoIni").click(function(){
			$("#ventaIni").css("display","inline-block");
		});
		$(".close").click(function(){
			$("#contenedor").css("display","none");
		});
		$("#closeIni").click(function(){
			$("#ventaIni").css("display","none");
		});

		$('#formRegistro').on('submit',function(e){
			e.preventDefault();
			var nom = document.nformRegistro.Nom.value;
			var ap = document.nformRegistro.AP.value;
			var am = document.nformRegistro.AM.value;
			var us = document.nformRegistro.User.value;
			var pass = document.nformRegistro.Pass.value;
			var rpass = document.nformRegistro.rPass.value;
			var age = document.nformRegistro.Age.value;
			var mail = document.nformRegistro.Email.value;
			//if (pass != rpass) {
				//break;
			//}
			$.ajax({
				type:"POST",
				url: "php/registro.php",
				data: "nombre="+nom+"&AP="+ap+"&AM="+am+"&User="+us+"&Pass="+pass+"&Age="+age+"&Email="+mail,
				success: function(respuesta){
					if (respuesta==0) {
						console.log("Error");
					}
				}
			});
		});
});
