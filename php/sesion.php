<?php

	$usuario = $_POST['user'];
	$pass = $_POST['pass'];

if ($enlace = new mysqli("localhots","root","","publidom")) {//Conexion con la DB
	$consulta = "SELECT * FROM usuario where idUser = '$usuario', pass = '$pass'";//Consulta SQL a ejecutar
	if ($respuesta = $enlace->query($consulta)) {//Realizar consulta
		if ($respuesta -> num_rows > 0) {//si la respuesta contiene alguna fila
			if ($filas = $respuesta -> fetch_assoc()) {//obtener filas de resultado como arreglos asociativos
				session_start();
				unset($_SESSION['perfil']);//limpiar el espacio 'perfil'
				$_SESSION['perfil']['user'] = $_POST['user'];//Guardar nombre de usuario en el arreglo de sesiones
				$_SESSION['perfil']['pass'] = $_POST['pass'];//Guardar contraseña en el arreglo de sesiones
			}else{
				//Error al obtener el arreglo asociativo
				echo 0;
			}
		}else{
			//Error no hay filas
			echo 0;
		}
	}else{
		//Error al realizar la consulta
		echo 0;
	}
}else{
	//Error en la conexión
	echo 0;
}

?>
