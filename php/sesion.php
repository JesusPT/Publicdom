<?php

	$usuario = $_POST['user'];
	$pass = $_POST['pass'];

if ($enlace = new mysqli("localhots","root")) {//Conexion con la DB
	$consulta = "SELECT * FROM usuario where idUser = '$usuario', ";//Consulta SQL a ejecutar
	if ($respuesta = $enlace->query($consulta)) {//Realizar consulta
		if ($respuesta -> num_rows > 0) {//si la respuesta contiene alguna fila
			if ($respuesta -> fetch_assoc()) {//obtener filas de resultado como arreglos asociativos

			}
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
