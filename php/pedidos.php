<?php

  $idCar = $_GET['idCarrito'];
  session_start();
  $user = $_SESSION['perfil']['user'];
  $idEmp;
    if (@$enlace = new mysqli("localhost","root","","publidom")) {
      $consulta = "SELECT pro.idProducto,cantidad, precioProducto,idEmpresa, total from (psCarrito psC inner join carritos car on psC.idCarrito = car.idCarrito) inner join producto pro on pro.idProducto = psC.idProducto where car.idCarrito = $idCar";
      if (@$respuesta = $enlace -> query($consulta)) {
        if ($respuesta -> num_rows > 0) {
          if ($filas = $respuesta -> fetch_assoc()) {
            $idEmp = $filas['idEmpresa'];
            if (@$respuesta = $enlace -> query("INSERT into pedidos(idUsuario,idEmpresa,total) values($user,$filas['idEmpresa'],$filas['total'])")) {

            }
          }

          $consulta = "SELECT idPedido from pedidos where idUsuario = '$user' and idEmpresa = $idEmp";
          if ($respuesta = $enlace -> query($consulta)) {
            if (@$respuesta -> num_rows > 0) {
              if ($filas = $respuesta -> fetch_assoc()) {
                $idPedido = $filas['idPedido'];
              }
            }
          }
          while ($filas = $respuesta -> fetch_assoc()) {
            $con = "insert into productosPedido values($idPedido,$filas['idProducto'],$filas['cantidad']) ";
            if ($respuesta = $enlace -> query($con)) {

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
