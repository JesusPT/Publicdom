<?php

  $idPro = $_GET['idServicio'];

  if (@$enlace = new mysqli("localhost","root","","publidom")){
    $consulta = "SELECT idProducto,nomProducto,descripcion,precioProducto,Disponibilidad,nomEmpresa,emp.idEmpresa from producto pro INNER JOIN empresa emp ON pro.idEmpresa = emp.idEmpresa and idProducto = $idPro";
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
