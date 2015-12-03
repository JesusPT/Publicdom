<?php
//if($_SERVER["REQUEST_METHOD"] == "POST"){  //Comprueba si la solicitud a sido enviada
$nomEmp = $_POST['nomEmp'];//Nombre de la empresa
$giro = $_POST['giroEmp'];//giro de la empresa
$tel = $_POST['telEmp'];//Telefono
//$User = md5($_POST['User']);//usuario
$dir = $_POST['direccionEmpr'];//Direccion de la empresa
//$Pass = md5($_POST['Pass']);//contraseña
$titular = $_POST['titularEmp'];//titular
$pass = md5($_POST['Pass']);//contraseña
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
                  $consulta = "INSERT INTO empresa(nomEmpresa, giroEmpresa, domEmpresa, telEmpresa, titular,pass,email,usuarioEmp) VALUES ('$nomEmp','$giro','$dir','$tel','$titular','$pass','$Email','$user')";
                  echo $consulta;

                  if (@$enlace -> query($consulta)) {
                    echo 1;
                  }else{
                    echo 0;
                  }
                }else{
                  echo 2;
                }
                //
              }else{
                echo "Usuario no valido";
              }

            }else{
              echo "Email invalido";
            }

          }else{
            echo "password no valido";
          }

        }else{
          echo "Nombre de titular no valido";
        }

      }else{
        echo "Direccion no valida";
      }

    }else{
      echo "telefono no valido";
    }

  }else{
    echo "giro incorrecto";
  }

}else{
  echo "nombre no aceptado";
}


?>
