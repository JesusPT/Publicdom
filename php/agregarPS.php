<?php
  session_start();
  $idUsu = $_SESSION['perfil']['user'];
  $idEmp = $_GET['idEmpresa'];
  $idPS = $_GET['idProducto'];
  $ps = $_GET['ps'];

  if (@$enlace = new mysqli("localhost","root","","publidom")) {
    $consulta = "SELECT idCarrito from carritos where idUsuario = '$idUsu' and idEmpresa = $idEmp";
    if ($respuesta = $enlace -> query($consulta)) {
      if (@$respuesta -> num_rows > 0) {
        if ($filas = $respuesta -> fetch_assoc()) {
          $idCar = $filas['idCarrito'];
          if ($ps==0) {
              insertarProducto($idCar,$idPS,$enlace);

          }else {
            insertarServicio($idCar,$idPS,$enlace);
          }
        }
      }else{
        crearCarrito($idUsu,$idEmp,$enlace,$idPS,$ps);
      }
    }else{
      echo 2;
    }
  }else{
    echo 0;
  }



  function insertarProducto($idCarrito,$idProd,$enlace){

    $cantidad = "SELECT cantidad from psCarrito where idCarrito = $idCarrito and idProducto = $idProd";
    if (@$cantidad = $enlace -> query($cantidad) ) {
      if ($cantidad -> num_rows > 0) {
        if ($filas = $cantidad -> fetch_assoc()) {
          $cantidad = $filas['cantidad'];
          $cantidad++;
          $consulta = "UPDATE psCarrito SET cantidad=$cantidad WHERE idCarrito = $idCarrito and idProducto = $idProd";
          if ($respuesta = $enlace -> query($consulta) ) {
            $con = "SELECT precioProducto from producto where idProducto = $idProd";
            if (@$respuesta = $enlace -> query($con)) {
              if ($filas = $respuesta -> fetch_assoc()) {
                $sumarPrecio =  $filas['precioProducto'];
                $con = "UPDATE carritos SET total = total + $sumarPrecio where idCarrito = $idCarrito";
                if (@$respuesta = $enlace -> query($con)) {

                }
              }
            }
          }else{
            echo "456";
          }
        }
      }else{
        $consulta = "INSERT INTO psCarrito VALUES($idProd,0,1,$idCarrito)";
        if (@$respuesta = $enlace -> query($consulta) ) {
          $con = "SELECT precioProducto from producto where idProducto = $idProd";
          if (@$respuesta = $enlace -> query($con)) {
            if ($filas = $respuesta -> fetch_assoc()) {
              $sumarPrecio =  $filas['precioProducto'];
              $con = "UPDATE carritos SET total = total + $sumarPrecio where idCarrito = $idCarrito";
              if (@$respuesta = $enlace -> query($con)) {

              }
            }
          }
        }else{
          echo "789";
        }
      }

    }
  }

  function insertarServicio($idCarrito,$idServ,$enlace){
    $cantidad = "SELECT cantidad from psCarrito where idCarrito = $idCarrito and idServicio = $idServ";
    if (@$cantidad = $enlace -> query($cantidad) ) {
      if ($cantidad -> num_rows > 0) {
        if ($filas = $cantidad -> fetch_assoc()) {
          $cantidad = $filas['cantidad'];
          $cantidad++;
          $consulta = "UPDATE psCarrito SET cantidad=$cantidad WHERE idCarrito = $idCarrito and idServicio = $idServ";
          echo $consulta;
          if ($respuesta = $enlace -> query($consulta) ) {

          }else{
            echo "456";
          }
        }
      }else{
        $consulta = "INSERT INTO psCarrito VALUES(0,$idServ,1,$idCarrito)";
        if (@$respuesta = $enlace -> query($consulta) ) {

        }else{
          echo "789";
        }
      }

    }

  }

  function crearCarrito($idUsu,$idEmp,$enlace,$idPS,$ps){
    $consulta = "INSERT INTO carritos(idUsuario,idEmpresa,total) VALUES ('".$idUsu."',$idEmp,0)";
    if ($respuesta = $enlace -> query($consulta))
      $consulta = "SELECT idCarrito from carritos where idUsuario = '$idUsu' and idEmpresa = $idEmp";
      if ($respuesta = $enlace -> query($consulta)) {
        if (@$respuesta -> num_rows > 0) {
          if ($filas = $respuesta -> fetch_assoc()) {
            $idCar = $filas['idCarrito'];
            if ($ps==0) {
              insertarProducto($idCar,$idPS,$enlace);

            }else {
              insertarServicio($idCar,$idPS,$enlace);
            }
          }
        }
      }
    }
 ?>
 <!-- use publidom -->
<!-- SELECT idCarrito,total from carritos where idEmpresa = 1 and idUsuario = 'Shini6' -->
