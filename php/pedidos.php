<?php

  $idCar = $_GET['idCarrito'];
  session_start();
  $user = $_SESSION['perfil']['user'];

  if (@$enlace = new mysqli("localhost","root","","publidom")) {
    $consulta = "SELECT total,idEmpresa from carritos where idCarrito = $idCar";
    if (@$respuesta = $enlace -> query($consulta)) {
      if (@$respuesta -> num_rows > 0) {
        if (@$filas = $respuesta -> fetch_assoc()) {
          $idEmpresa = $filas['idEmpresa'];
          $total = $filas['total'];
          $consulta = "INSERT INTO pedidos(idUsuario,idEmpresa,total) VALUES('$user',$idEmpresa,$total)";
          if (@$respuesta = $enlace -> query($consulta)) {
            $consulta = "SELECT idPedido from pedidos where idUsuario = '$user' and idEmpresa = $idEmpresa ORDER BY idPedido DESC";
            if (@$respuesta = $enlace -> query($consulta)) {
              if (@$respuesta -> num_rows > 0) {
                if (@$filas = $respuesta -> fetch_assoc()) {
                  $idPed = $filas['idPedido'];
                  agregarPS($idCar,$enlace,$idPed);
                }
              }
            }
          echo "se inserto el pedido";

        }else{
          echo 5;
        }

        }else{
          echo 2;
        }
      }else{
        echo 3;
      }

    }else{
      echo 4;
    }
  }else{
    echo 0;
  }


  function agregarPS($idCarrito, $enlace, $idPed){
    $consulta = "SELECT idProducto,idServicio,cantidad from psCarrito where idCarrito = $idCarrito";
    if (@$respuesta = $enlace -> query($consulta)) {
      if (@$respuesta -> num_rows > 0) {
        while (@$filas = $respuesta -> fetch_assoc()) {
          $idPro = $filas['idProducto'];
          $idSer = $filas['idServicio'];
          $cant = $filas['cantidad'];
          if ($idSer == 0) {
              $consulta = "INSERT INTO productosPedido(idPedido,idProducto,cantidad,idServicio) values($idPed,$idPro,$cant,0)";
          }else{
              $consulta = "INSERT INTO productosPedido(idPedido,idProducto,cantidad,idServicio) values($idPed,0,$cant,$idSer)";
          }
          if (@$respuesta2 = $enlace -> query($consulta)) {
            echo "si";
          }else{
            echo $consulta;
            echo 6;
          }
        }
        borrarCarrito($idCarrito,$enlace);
      }else{
        echo 7;
      }

    }else{
      echo 9;
    }
  }


  function borrarCarrito($idCar,$enlace){
    $consulta = "DELETE from psCarrito where idCarrito = $idCar";
    if ($respuesta = $enlace -> query($consulta)) {
      $consulta = "DELETE from carritos where idCarrito = $idCar";
      if ($respuesta = $enlace -> query($consulta)) {

      }
    }
  }

 ?>
 <!-- use publidom -->
<!-- SELECT idProducto,idServicio,cantidad from psCarrito where idCarrito = 27 -->
<!-- INSERT INTO productosPedido(idProducto,cantidad,idServicio) values($idPro,$cant,0) -->
<!-- INSERT INTO productosPedido(idPedido,idProducto,cantidad,idServicio) values(25,0,1,1) -->
<!-- INSERT INTO productosPedido(idPedido,idProducto,cantidad,idServicio) values(34,2,1,0) -->
SELECT idPedido from pedidos where idUsuario = 'Shini6' and idEmpresa = 2 ORDER BY idPedido DESC
