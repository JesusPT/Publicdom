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
				document.nformRegistro.rPass.value = ""
				var message = document.getElementById("mensaje");
				//var message = $('#message').("mensaje");
				//console.log(message);
				//console.log($('#message'));
				//message.innerHTML = "Las contraseñas no coinciden";
				$('#mensaje').text("Las contraseñas no coinciden");
				//$('#mensaje').text("");
/*			document.getElementById("mensaje").style.color = "red";
				document.getElementById("mensaje").style.fontStyle = "italic";
				document.getElementById("mensaje").style.textAlign = "center";
				document.getElementById("mensaje").style.display = "inline-block";
				document.getElementById("mensaje").style.backgroundColor = "yellow";
*/





			}

		});
});
