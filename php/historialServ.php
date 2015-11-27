<?php

  session_start();
  $user = $_SESSION['perfil']['user'];

  if (@$enlace = new mysqli("mysql.hostinger.mx","u606309797_root","PAO425","u606309797_publi")) {
    $consulta = "SELECT serv.idServicio,nomServicio,descripcion from servicio serv INNER JOIN historiales his ON serv.idServicio = his.idServicio and idUsuario = '".$user."'";
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
 <!-- select * from producto
 select * from empresa
 insert into empresa(idEmpresa,nomEmpresa) values ('08','Las Famosas')
insert into producto values ('08','Pquete 1','70','40','50','08','Torta ahogada grande, 2 tacos dorados, refresco de lata')

  -->
