<?php

require "./connect.php";

$sql = "SELECT * FROM tasks";

$result = mysqli_query($con, $sql);

$json_array = array();

while($row = mysqli_fetch_assoc($result)){
	$json_array[] = $row;
}

echo json_encode($json_array);

?>