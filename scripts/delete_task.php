<?php

require "./connect.php";
$data = json_decode(file_get_contents('php://input'));
$deleteId = $data -> id;
mysqli_query($con, "DELETE FROM tasks WHERE id =" . $deleteId);

?>