<?php

require "./connect.php";

date_default_timezone_set("America/Denver");
$data = file_get_contents('php://input');  
$decode = json_decode($data);
$thing = $decode -> newTask;
$date = date('Y-m-d');

mysqli_query($con, "INSERT INTO tasks (task, date) VALUES ('$thing', '$date')");


?>