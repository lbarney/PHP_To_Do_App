<?php

require './app_config.php';

$con = mysqli_connect(DATABASE_HOST, DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_NAME)
	or die("<p>ERROR connecting to database: " .
		mysql_error() . "<p>");
?>