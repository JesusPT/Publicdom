<?php


  session_start();
  $user = $_SESSION['perfilEmp']['user'];

  if (@$enlace = new mysqli("mysql.hostinger.mx","u606309797_root","PAO425","u606309797_publi")) {
    $consulta = "SELECT nomEmpresa,idEmpresa from empresa where usuarioEmp = '$user'";
    if (@$respuesta = $enlace -> query($consulta)) {
      if ($respuesta -> num_rows > 0) {
        if ($filas = $respuesta -> fetch_assoc()) {
          echo $filas['nomEmpresa'];
          echo ",";
          echo $user;

          $_SESSION['perfilEmp']['idEmpresa'] = $filas['idEmpresa'];

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
