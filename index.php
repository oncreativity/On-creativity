<?php
	$idiomas = explode(";", $_SERVER['HTTP_ACCEPT_LANGUAGE']);
	if(strpos($idiomas[0], "es") !== FALSE){
		if(file_exists('es.php')){ include('es.php'); }
	}elseif(strpos($idiomas[0], "en") !== FALSE){
		if(file_exists('en.php')){ include('en.php'); }
	}
?>