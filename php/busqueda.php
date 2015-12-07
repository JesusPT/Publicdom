<?php

  session_start();
  $user = $_SESSION['perfil']['user'];
  $clave = $_POST['busqueda'];

  if($clave!="" & $clave!="_"){

    if (@$enlace = new mysqli("mysql.hostinger.mx","u606309797_root","PAO425","u606309797_publi")) {
      $consulta = "SELECT idProducto,nomProducto,descripcion from producto where nomProducto like '%".$clave."%' OR  descripcion like '%".$clave."%'";
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
      echo 3;
    }

  }else{
    echo 1;
  }

 ?>
