<?php

  session_start();
  $user = $_SESSION['perfil']['user'];

    if (@$enlace = new mysqli("localhost","root","","publidom")) {
      $consulta = "SELECT car.idCarrito,emp.nomEmpresa,nomProducto,cantidad,precioProducto,total from ((producto pro inner join psCarrito psC ON pro.idProducto = psC.idProducto) inner join carritos car ON car.idCarrito = psC.idCarrito) inner join empresa emp ON emp.idEmpresa = car.idEmpresa and idUsuario = '$user' ORDER BY idCarrito DESC";
      if (@$respuesta = $enlace -> query($consulta)) {
        if ($respuesta -> num_rows > 0) {
          while ($filas = $respuesta -> fetch_assoc()) {

            foreach ($filas as $key) {
              echo $key;
              echo "~";
            }

          }
          
        }else {
          echo 2;
        }
      }else {
        echo 1;
      }
    }else {
      echo 0;
    }

 ?>
 <!-- use publidom -->
<!-- SELECT car.idCarrito,emp.nomEmpresa,nomProducto,cantidad,precioProducto from ((producto pro inner join psCarrito psC ON pro.idProducto = psC.idProducto) inner join carritos car ON car.idCarrito = psC.idCarrito) inner join empresa emp ON emp.idEmpresa = car.idEmpresa and idUsuario = 'Shini6' ORDER BY idCarrito DESC -->
<!-- SELECT car.idCarrito,emp.nomEmpresa,nomServicio,cantidad,Horario,total from ((servicio pro inner join psCarrito psC ON pro.idServicio = psC.idServicio) inner join carritos car ON car.idCarrito = psC.idCarrito) inner join empresa emp ON emp.idEmpresa = car.idEmpresa and idUsuario = 'Shini6' ORDER BY idCarrito DESC -->
