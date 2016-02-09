<?php
include('../partials/config.php');

$query="select fideid, name, sex, title, rating, rapid_rating, blitz_rating, birthday from ratings_list WHERE flag!='i' && birthday>=1995 order by rating desc";
$result = $mysqli->query($query) or die($mysqli->error.__LINE__);

$arr = array();
if($result->num_rows > 0) {
	while($row = $result->fetch_assoc()) {
		$arr[] = $row;	
	}
}
# JSON-encode the response
$json_response = json_encode($arr);

// # Return the response
echo $json_response;
?>
