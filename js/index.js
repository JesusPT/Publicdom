$(document).on("ready",function(){


	$.ajax({
		url: "php/val.php",
		success: function(respuesta){
			if (respuesta == 1) {
				$(window).attr('location',"inicio-usuario.html");
			}
		}
	});

	$.ajax({
		url: "php/valEmp.php",
		success: function(respuesta){
			if (respuesta == 1) {
				$(window).attr('location',"inicio-empresa.html");
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
//------------------------------------------------------------------------------
//cerrar ventanas
		$(".close").click(function(){
			$("#contenedor").css("display","none");
			$("input[type$='text']").val("");
			$("input[type$='text']").css("border-color","#999");
			$("input[type$='password']").val("");
			$("input[type$='password']").css("border-color","#999");
			$("input[type$='email']").val("");
			$("input[type$='email']").css("border-color","#999");
		});
		$("#closeIni").click(function(){
			$("#ventaIni").css("display","none");
			$("input[type$='text']").val("");
			$("input[type$='text']").css("border-color","#999");
			$("input[type$='password']").val("");
			$("input[type$='password']").css("border-color","#999");
			$("input[type$='email']").val("");
			$("input[type$='email']").css("border-color","#999");
		});
//_-----------------------------------------------------------------------------
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
							$("input[type$='text']").val("");
							$("input[type$='text']").css("border-color","#999");
							$("input[type$='password']").val("");
							$("input[type$='password']").css("border-color","#999");
							$("input[type$='email']").val("");
							$("input[type$='email']").css("border-color","#999");
						}else{
							if (respuesta.indexOf("2")>=0) {
								//
								$("input[name $='name']").css("border-color","red");
								$("input[name $='name']").val("");

							}
							if (respuesta.indexOf("3")>=0) {
								$("input[name $='AP']").css("border-color","red");
								$("input[name $='AP']").val("");

							}
							if (respuesta.indexOf("4")>=0) {
								$("input[name $='AM']").css("border-color","red");
								$("input[name $='AM']").val("");

							}
							if (respuesta.indexOf("5")>=0) {
								$("input[name $='User']").css("border-color","red");
								$("input[name $='User']").val("");

							}
							if (respuesta.indexOf("6")>=0) {
								$("input[name $='Pass']").css("border-color","red");
								$("input[name $='Pass']").val("");

							}
							if (respuesta.indexOf("7")>=0) {
								$("input[name $='Age']").css("border-color","red");
								$("input[name $='Age']").val("");

							}
							if (respuesta.indexOf("8")>=0) {
								$("input[name $='Email']").css("border-color","red");
								$("input[name $='Email']").val("");

							}
							if (respuesta.indexOf("9")>=0) {
								$("input[name $='Email']").css("border-color","red");
								$("input[name $='Email']").val("");
								$("input[name $='User']").css("border-color","red");
								$("input[name $='User']").val("");
								$('#mensaje').text("Usuario o Email ya esta siendo usado");
							}
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
					}else if (respuesta == 9) {
						$(window).attr('location',"inicio-empresa.html");
					}else if (respuesta == 2) {
						$("input[name $='User']").css("border-color","red");
						$("input[name $='User']").val("");
						$("input[name $='Pass']").css("border-color","red");
						$("input[name $='Pass']").val("");
					}else if (respuesta == 3) {
						
						$("input[name $='User']").css("border-color","red");
						$("input[name $='User']").val("");
						$("input[name $='Pass']").css("border-color","red");
						$("input[name $='Pass']").val("");
					}
				}
			});
		});


//Tipo de Registro--------------------------------------------------------------
$('#btoRegUsuario').on('click',function(){
	$('#regRapidoUser').css("display","block");
	$('#regRapidoEmpr').css("display","none");
	$("input[type$='text']").val("");
	$("input[type$='text']").css("border-color","#999");
	$("input[type$='password']").val("");
	$("input[type$='password']").css("border-color","#999");
	$("input[type$='email']").val("");
	$("input[type$='email']").css("border-color","#999");
});

$('#btoRegEmpresa').on('click',function(){
	$('#regRapidoUser').css("display","none");
	$('#regRapidoEmpr').css("display","block");
	$("input[type$='text']").val("");
	$("input[type$='text']").css("border-color","#999");
	$("input[type$='password']").val("");
	$("input[type$='password']").css("border-color","#999");
	$("input[type$='email']").val("");
	$("input[type$='email']").css("border-color","#999");
});

//------------------------------------------------------------------------------
//Registro empresa

$('#formRegistroEmp').on('submit',function(e){
	e.preventDefault();
	var nomEmp = document.nformRegistroEmp.nombreEmp.value;
	var giro = $('#menuGiro option:selected').text();
	var telEmp = document.nformRegistroEmp.telEmp.value;
	var dir = document.nformRegistroEmp.direccionEmpr.value;
	var titularEmp = document.nformRegistroEmp.titularEmp.value;
	var user = document.nformRegistroEmp.usuario.value;
	var pass = document.nformRegistroEmp.PassE.value;
	var rpass = document.nformRegistroEmp.rPassE.value;
	var mail = document.nformRegistroEmp.Emailemp.value;


	if (pass == rpass) {
		$.ajax({
			type:"POST",
			url: "php/registroEmpresa.php",
			data: "nomEmp="+nomEmp+"&giroEmp="+giro+"&telEmp="+telEmp+"&direccionEmpr="+dir+"&titularEmp="+titularEmp+"&Pass="+pass+"&rPass="+rpass+"&Email="+mail+"&user="+user,
			success: function(respuesta){
				if (respuesta == 0) {
					console.log("Error");
				}else if (respuesta == 1) {
					//correcto
					$('#mensaje').text("Correcto");
					$('#ventaIniRegEx').css('display','block');
					$("#contenedor").css("display","none");
					$("input[type$='text']").val("");
					$("input[type$='text']").css("border-color","#999");
					$("input[type$='password']").val("");
					$("input[type$='password']").css("border-color","#999");
					$("input[type$='email']").val("");
					$("input[type$='email']").css("border-color","#999");
				}else{

					if (respuesta.indexOf("2")>=0) {
						//
						$("input[name $='nombreEmp']").css("border-color","red");
						$("input[name $='nombreEmp']").val("");

					}
					if (respuesta.indexOf("3")>=0) {
						$("input[name $='giroEmp']").css("border-color","red");
						$("input[name $='giroEmp']").val("");

					}
					if (respuesta.indexOf("4")>=0) {
						$("input[name $='telEmp']").css("border-color","red");
						$("input[name $='telEmp']").val("");

					}
					if (respuesta.indexOf("5")>=0) {
						$("input[name $='direccionEmpr']").css("border-color","red");
						$("input[name $='direccionEmpr']").val("");

					}
					if (respuesta.indexOf("6")>=0) {
						$("input[name $='titularEmp']").css("border-color","red");
						$("input[name $='titularEmp']").val("");

					}
					if (respuesta.indexOf("7")>=0) {
						$("input[name $='usuario']").css("border-color","red");
						$("input[name $='usuario']").val("");

					}
					if (respuesta.indexOf("8")>=0) {
						$("input[name $='PassE']").css("border-color","red");
						$("input[name $='PassE']").val("");

					}
					if (respuesta.indexOf("9")>=0) {
						$("input[name $='Emailemp']").css("border-color","red");
						$("input[name $='Emailemp']").val("");
					}
					if (respuesta.indexOf("10")>=0) {
						$("input[name $='Emailemp']").css("border-color","red");
						$("input[name $='Emailemp']").val("");
						$("input[name $='usuario']").css("border-color","red");
						$("input[name $='usuario']").val("");
						$("input[name $='nombreEmp']").css("border-color","red");
						$("input[name $='nombreEmp']").val("");
						$('#mensajeE').text("Usuario o Email ya esta siendo usado, tome en cuenta que la empresa no puede compartir el nombre de algun usuario");

					}
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

$('#FooDer').on('click',function(){
	$.ajax({
		url: "php/con.php",
		success: function(respuesta){
			console.log("se conecto");
		}
	});
});

});
