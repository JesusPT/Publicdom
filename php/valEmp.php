<?php
  session_start();
  if (isset($_SESSION['perfilEmp'])) {
    echo 1;
  }else {
    echo 0;
  }

 ?>
