<?php

  session_start();
  $user = $_SESSION['perfil']['user'];

  if (@$enlace = new mysqli("localhost","root","","publidom")) {
    $consulta = "SELECT nomUsuario from usuario where idUsuario ='".$user."'";
    if (@$respuesta = $enlace -> query($consulta)) {
      if ($respuesta -> num_rows > 0) {
        if ($filas = $respuesta -> fetch_assoc()) {
          echo $filas['nomUsuario'];
        }else {
          echo 0;
        }
      }else {
        echo 1;
      }
    }else {
      echo 2;
    }
  }else {
    echo 3;
  }

 ?>
