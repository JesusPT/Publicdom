<?php
  session_start();
  if (isset($_SESSION['perfil'])) {
    echo 1;
  }else {
    echo 0;
  }

 ?>
