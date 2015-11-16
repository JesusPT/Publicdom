$(document).on("ready",function(){

pruebaDeVariable = "Hola mundo";

	$.ajax({
		url: "php/val.php",
		success: function(respuesta){
			if (respuesta == 1) {
				$(window).attr('location',"/Publicdom/inicio-usuario.html");
			}
		}
	});


		$("#btoReg").click(function(){
			if ($("#ventaIni").css("display") == "none") {
				$("#contenedor").css("display","inline-block");
			}

		$('#btnOkReg').on('click',function(){
			$("#ventaIniRegEx").css("display","none");
		});

		});
		$("#btoIni").click(function(){
			console.log("entre");
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

		$("input").focus(function(){
			$('#mensaje').text('');
			$(this).css("border-color","#999");
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
						if (respuesta == 0) {
							console.log("Error");
						}else if (respuesta == 1) {
							//correcto
							$('#mensaje').text("Correcto");
							$('#ventaIniRegEx').css('display','block');
							$("#contenedor").css("display","none");
						}else if (respuesta == 2) {
							//
							$("input[name $='name']").css("border-color","red");
							$("input[name $='name']").val("");
							$('#mensaje').text("Nombre no válido");
						}else if (respuesta == 3) {
							$("input[name $='AP']").css("border-color","red");
							$("input[name $='AP']").val("");
							$('#mensaje').text("Apellido paterno no válido");
						}else if (respuesta == 4) {
							$("input[name $='AM']").css("border-color","red");
							$("input[name $='AM']").val("");
							$('#mensaje').text("Apellido materno no válido");
						}else if (respuesta == 5) {
							$("input[name $='User']").css("border-color","red");
							$("input[name $='User']").val("");
							$('#mensaje').text("Nombre de Usuario no válido");
						}else if (respuesta == 6) {
							$("input[name $='Pass']").css("border-color","red");
							$("input[name $='Pass']").val("");
							$('#mensaje').text("Contraseña no válida");
						}else if (respuesta == 7) {
							$("input[name $='Age']").css("border-color","red");
							$("input[name $='Age']").val("");
							$('#mensaje').text("Edad no válido");
						}else if (respuesta == 8) {
							$("input[name $='Email']").css("border-color","red");
							$("input[name $='Email']").val("");
							$('#mensaje').text("E-mail no válido");
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
						console.log("Error de conexion");
					}else if (respuesta == 1) {
						$(window).attr('location',"inicio-usuario.html");
					}else if (respuesta == 2) {
						//Error en la consulta
					}else if (respuesta == 3) {
						console.log("entre a 3");
						$("input[name $='User']").css("border-color","red");
						$("input[name $='User']").val("");
						$("input[name $='Pass']").css("border-color","red");
						$("input[name $='Pass']").val("");
					}
				}
			});
		});

$('#FooDer').on('click',function(){
	$.ajax({
		url: "php/con.php",
		success: function(respuesta){
			console.log("se conecto");
		}
	});
});

});
