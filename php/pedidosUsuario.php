<?php

  session_start();
  $user = $_SESSION['perfil']['user'];

    if (@$enlace = new mysqli("mysql.hostinger.mx","u606309797_root","PAO425","u606309797_publi")) {
      $consulta = "SELECT ped.idPedido,emp.nomEmpresa,nomProducto,cantidad,precioProducto,total,estado from ((producto pro inner join productosPedido psP ON pro.idProducto = psP.idProducto) inner join pedidos ped ON ped.idPedido = psP.idPedido) inner join empresa emp ON emp.idEmpresa = ped.idEmpresa and idUsuario = '$user' ORDER BY idPedido DESC";
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
<!-- SELECT ped.idPedido,emp.nomEmpresa,nomProducto,cantidad,precioProducto,total from ((producto pro inner join productosPedido psP ON pro.idProducto = psP.idProducto) inner join pedidos ped ON ped.idPedido = psP.idPedido) inner join empresa emp ON emp.idEmpresa = ped.idEmpresa and idUsuario = 'Shini6' ORDER BY idPedido DESC -->
