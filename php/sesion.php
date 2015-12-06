<?php

	$usuario = $_POST['User'];
	$pass = md5($_POST['Pass']);

if (@$enlace = new mysqli("mysql.hostinger.mx","u606309797_root","PAO425","u606309797_publi")) {//Conexion con la DB
	$consulta = "SELECT * FROM usuario where idUsuario = '$usuario' AND contraUsuario = '$pass'";//Consulta SQL a ejecutar
	if (@$respuesta = $enlace->query($consulta)) {//Realizar consulta
		if ($respuesta -> num_rows > 0) {//si la respuesta contiene alguna fila
			if ($filas = $respuesta -> fetch_assoc()) {//obtener filas de resultado como arreglos asociativos
				session_start();
				unset($_SESSION['perfil']);//limpiar el espacio 'perfil'
				$_SESSION['perfil']['user'] = $_POST['User'];//Guardar nombre de usuario en el arreglo de sesiones
				$_SESSION['perfil']['pass'] = $_POST['Pass'];//Guardar contraseña en el arreglo de sesiones
				echo 1;
			}else{
				//Error al obtener el arreglo asociativo
				echo 4;
			}
		}else{
			$consulta = "SELECT * FROM empresa where usuarioEmp = '$usuario' and pass = '$pass'";
			if ($respuesta = $enlace -> query($consulta)) {
				if ($respuesta -> num_rows > 0) {
					session_start();
					unset($_SESSION['perfilEmp']);//limpiar el espacio 'perfil'
					$_SESSION['perfilEmp']['user'] = $usuario;//Guardar nombre de usuario en el arreglo de sesiones
					$_SESSION['perfilEmp']['pass'] = $pass;//Guardar contraseña en el arreglo de sesiones
					echo 9;
				}else{
					echo 3;
				}

			}else{
				echo 3;
			}

		}
	}else{
		//Error al realizar la consulta
		echo 2;
	}
}else{
	//Error en la conexión
	echo 0;
}

?>
