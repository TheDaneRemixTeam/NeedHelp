<!--notification to one subscriber
if we want this, attach this code to button that signals it: 
 <form action="notificationSingle.php" method="post">
     <input type="hidden" name="user_id" id = "user_id">
     <input type="submit" name="send_by_id" value="send to one user via id"> </form>-->



<?PHP

if(isset($_POST['send-by-id'])) {
    $app_id = $_POST['app_id'];
    $user_id = $_POST['user_id'];
    $response = sendByID($app_id, $user_id);
	$return["allresponses"] = $response;
	$return = json_encode( $return);
	
	print("\n\nJSON received:\n");
	print($return);
	print("\n");
}

	function sendByID($app_id, $user_id){
		$headings = array (
            "en" => "My header for one" <--eventually a header
        );
    
        $content      = array(
            "en" => "My message"  <--I need to change this when I find out what we need it fo r
        );
		
		$fields = array(
			'app_id' => $app_id,
			'include_player_ids' => array($user_id),
			'data' => array("foo" => "bar"),
			'contents' => $content,
            'headings' => $headings,
		);
		
		$fields = json_encode($fields);
    	print("\nJSON sent:\n");
    	print($fields);
		
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, "https://onesignal.com/api/v1/notifications");
		curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json; charset=utf-8'));
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
		curl_setopt($ch, CURLOPT_HEADER, FALSE);
		curl_setopt($ch, CURLOPT_POST, TRUE);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);

		$response = curl_exec($ch);
		curl_close($ch);
		
		return $response;
	}
	

?>
