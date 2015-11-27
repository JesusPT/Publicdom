<?php

  session_start();
  $user = $_SESSION['perfil']['user'];
  $idProd = $_GET['idProducto'];

    if (@$enlace = new mysqli("mysql.hostinger.mx","u606309797_root","PAO425","u606309797_publi")) {
      $consulta = "INSERT INTO favoritos values('$user',$idProd,0)";
      if (@$respuesta = $enlace -> query($consulta)) {


      }else {
        echo 1;
      }
    }else {
      echo 0;
    }

 ?>
