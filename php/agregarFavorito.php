<?php

  session_start();
  $user = $_SESSION['perfil']['user'];
  $idProd = $_GET['idProducto'];
  echo $idProd;
    if (@$enlace = new mysqli("localhost","root","","publidom")) {
      $consulta = "INSERT INTO favoritos values('$user',$idProd,0)";
      if (@$respuesta = $enlace -> query($consulta)) {


      }else {
        echo 1;
      }
    }else {
      echo 0;
    }

 ?>
