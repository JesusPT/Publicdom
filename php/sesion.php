<?php


if ($enlace = new mysqli("localhots","root")) {
	$consulta = "SELECT * FROM usuario";
	if ($respuesta = $enlace->query($consulta)) {
		
	}else{
		//Error al realizar la consulta
		echo 0;
	}
}else{
	//Error en la conexión
	echo 0;
}


?>
