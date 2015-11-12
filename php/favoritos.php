<?php

  session_start();
  $user = $_SESSION['perfil']['user'];

  if (@$enlace = new mysqli("localhost","root","","publidom")) {
    $consulta = "SELECT nomProducto,descripcion from producto pro INNER JOIN favoritos fav ON pro.idProducto = fav.idProducto and idUsuario = '".$user."'";
    if (@$respuesta = $enlace -> query($consulta)) {
      if ($respuesta -> num_rows > 0) {
        while ($filas = $respuesta -> fetch_assoc()) {

          foreach ($filas as $key) {
            echo $key;
            echo "~";
          }

        }
      }else {
        echo 1;
      }
    }else {
      echo 2;
    }
  }else {
    echo 0;
  }

 ?>
