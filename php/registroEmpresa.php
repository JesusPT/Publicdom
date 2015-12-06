<?php
//if($_SERVER["REQUEST_METHOD"] == "POST"){  //Comprueba si la solicitud a sido enviada
$nomEmp = $_POST['nomEmp'];//Nombre de la empresa
$giro = $_POST['giroEmp'];//giro de la empresa
$tel = $_POST['telEmp'];//Telefono
//$User = md5($_POST['User']);//usuario
$dir = $_POST['direccionEmpr'];//Direccion de la empresa
//$Pass = md5($_POST['Pass']);//contraseña
$titular = $_POST['titularEmp'];//titular
$pass = md5($_POST['PassE']);//contraseña
$Email = $_POST['Email'];//correo electronico
$user = $_POST['user'];

 // Validacion de Formulario
                   //echo "dentro de email";

if (preg_match("/[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ. ]{6,50}\S/ ",$nomEmp)) {
  if (preg_match("/[a-zA-Z]*/",$giro)) {
    if (preg_match("/[0-9]{10}/",$tel)) {
      if(preg_match("/[a-zA-Z0-9.,#ñÑáéíóúÁÉÍÓÚ ]{20,50}\S/",$dir)){
        if (preg_match("/^(([A-Za-z|ÁÉÍÓÚ|áéíóú]{1}[a-z|ñáéíóú]{1,13}[\s]?)){1,5}$/",$titular)) {
          if (preg_match("/[a-zA-Z0-9]{6,12}/",$pass)) {
            if (preg_match("/\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b/",$Email)) {
              if (preg_match("/^[a-zA-Z0-9|_|#]{3,11}$/",$user)) {
                //
                if (@$enlace = new mysqli("mysql.hostinger.mx","u606309797_root","PAO425","u606309797_publi")) {
                  if (existencia($enlace,$user,$Email)) {
                    $consulta = "INSERT INTO empresa(nomEmpresa, giroEmpresa, domEmpresa, telEmpresa, titular,pass,email,usuarioEmp) VALUES ('$nomEmp','$giro','$dir','$tel','$titular','$pass','$Email','$user')";
                    if (@$enlace -> query($consulta)) {
                      echo 1;
                    }else{
                      echo 0;
                    }
                  }else{
                    echo 10;
                  }


                }else{
                  echo 0;
                }
                //
              }else{
                echo 7;
              }

            }else{
              echo 9;
            }

          }else{
            echo 8;
          }

        }else{
          echo 6;
        }

      }else{
        echo 5;
      }

    }else{
      echo 4;
    }

  }else{
    echo 3;
  }

}else{
  echo 2;
}

function existencia($enlace,$User,$Email){
  $consulta = "SELECT idUsuario,nomEmpresa from usuario,empresa where idUsuario = '$User' or email= '$Email' or nomEmpresa = '$User' or usuarioEmp = '$User'";
  if ($respuesta = $enlace -> query($consulta)) {
    if ($respuesta -> num_rows > 0) {
      return false;
    }else{
      return true;
    }
  }

}

?>
