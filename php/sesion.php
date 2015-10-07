<?php

	$usuario = $_POST['User'];
	$pass = $_POST['Pass'];

if ($enlace = new mysqli("localhost","root","","publidom")) {//Conexion con la DB
	$consulta = "SELECT * FROM usuario where idUsuario = '$usuario' AND contraUsuario = '$pass'";//Consulta SQL a ejecutar
	if ($respuesta = $enlace->query($consulta)) {//Realizar consulta
		if ($respuesta -> num_rows > 0) {//si la respuesta contiene alguna fila
			if ($filas = $respuesta -> fetch_assoc()) {//obtener filas de resultado como arreglos asociativos
				session_start();
				unset($_SESSION['perfil']);//limpiar el espacio 'perfil'
				$_SESSION['perfil']['user'] = $_POST['User'];//Guardar nombre de usuario en el arreglo de sesiones
				$_SESSION['perfil']['pass'] = $_POST['Pass'];//Guardar contraseña en el arreglo de sesiones
				echo 1;
			}else{
				//Error al obtener el arreglo asociativo
				echo "Error al obtener el arreglo asociativo";
			}
		}else{
			//Error no hay filas
			echo "Error no hay filas";
		}
	}else{
		//Error al realizar la consulta
		echo "Error al realizar la consulta";
	}
}else{
	//Error en la conexión
	echo "Error en la conexión";
}

?>
