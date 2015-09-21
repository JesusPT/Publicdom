$(document).on("ready",function(){
		$("#btoReg").click(function(){
			if ($("#ventaIni").css("display") == "none") {
				$("#contenedor").css("display","inline-block");
			}

		});
		$("#btoIni").click(function(){
			if ($("#contenedor").css("display") == "none") {
				$("#ventaIni").css("display","inline-block");
			}

		});
		$(".close").click(function(){
			$("#contenedor").css("display","none");
		});
		$("#closeIni").click(function(){
			$("#ventaIni").css("display","none");
		});

		$("input[name $='Pass']").focus(function(){
			$('#mensaje').text('');
			$("input[name $='Pass']").css("border-color","black");
		});
		//Captura formulario de registro
		$('#formRegistro').on('submit',function(e){
			e.preventDefault();
			var nom = document.nformRegistro.name.value;
			var ap = document.nformRegistro.AP.value;
			var am = document.nformRegistro.AM.value;
			var us = document.nformRegistro.User.value;
			var pass = document.nformRegistro.Pass.value;
			var rpass = document.nformRegistro.rPass.value;
			var age = document.nformRegistro.Age.value;
			var mail = document.nformRegistro.Email.value;
			if (pass == rpass) {
				$.ajax({
					type:"POST",
					url: "php/registro.php",
					data: "name="+nom+"&AP="+ap+"&AM="+am+"&User="+us+"&Pass="+pass+"&Age="+age+"&Email="+mail,
					success: function(respuesta){
						if (respuesta==0) {
							console.log("Error");
						}
					}
				});
			}else{
				$("input[name $='Pass']").css("border-color","red");
				document.nformRegistro.Pass.value = "";
				document.nformRegistro.rPass.value = "";
				$('#mensaje').text("Las contraseñas no coinciden");
			}
		});

		$('#formInicioSesion').on("submit",function(e){
			e.preventDefault();
			var user = document.nformInicioSesion.User.value;
			var pass = document.nformInicioSesion.Pass.value;
			$.ajax({
				type: "POST",
				url: "php/sesion.php",
				data: "User="+user+"&Pass="+pass,
				success: function(respuesta){
					if (respuesta == 0) {
						//Porblema con el servidor
					}else if (respuesta) {

					}
				}
			});
		})


		//Cerrar ventanas al con la tecla "esc"
		

});
