<?php
  session_start();
  $idEmp = $_GET['idEmpresa'];
  $idUsu = $_SESSION['perfil']['user'];
  if (@$enlace = new mysqli("localhost","root","","publidom")){
    $consulta = "SELECT idCarrito,total from carritos where idEmpresa = $idEmp and idUsuario = '".$idUsu."'";
    if (@$respuesta = $enlace -> query($consulta)) {
      if ($respuesta -> num_rows > 0) {
        if ($filas = $respuesta -> fetch_assoc()) {
          echo $filas['idCarrito'];
          //agregarPS
        }
      }else {
        $consulta = "INSERT INTO carritos(idUsuario,idEmpresa,total) VALUES ('".$idUsu."',$idEmp,0)";
        if (@$respuesta = $enlace -> query($consulta)) {
          //AgregarPS
        }else{
          echo "no se logro creae el carrito";
        }
      }
    }else {
      echo 2;
    }
  }else {
    echo 0;
  }

 ?>
