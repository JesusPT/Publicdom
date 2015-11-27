<?php

  $idServ = $_GET['idServicio'];

  if (@$enlace = new mysqli("mysql.hostinger.mx","u606309797_root","PAO425","u606309797_publi")){
    $consulta = "SELECT idServicio,nomServicio,descripcion,Disponible,nomEmpresa,emp.idEmpresa from servicio serv INNER JOIN empresa emp ON serv.idEmpresa = emp.idEmpresa and idServicio = $idServ";
    if (@$respuesta = $enlace -> query($consulta)) {
      if ($respuesta -> num_rows > 0) {
        if ($filas = $respuesta -> fetch_assoc()) {

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
