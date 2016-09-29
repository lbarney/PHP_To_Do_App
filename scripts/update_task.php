<?php
require "./connect.php";

$data = file_get_contents("php://input");
$decoded = json_decode($data);
$dataId = $decoded -> id;
$changedTask = $decoded -> changedTask;

mysqli_query($con, "UPDATE tasks SET task = '$changedTask' WHERE id = '$dataId'");
?>