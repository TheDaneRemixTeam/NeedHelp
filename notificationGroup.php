<?PHP
	function sendMessage(){
		$headings = array (
            "en" => "My header for one" <--eventually a header
        );
    
        $content      = array(
            "en" => "My message"  <--I need to change this when I find out what we need it fo r
        );
		
		$fields = array(
			'app_id' => "5eb5a37e-b458-11e3-ac11-000c2940e62c",
			'included_segments' => array('Active Users'),
			'data' => array("foo" => "bar"),
			'contents' => $content,
            'headings' => $headings,
		);
		
		$fields = json_encode($fields);
    	print("\nJSON sent:\n");
    	print($fields);
		
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, "https://onesignal.com/api/v1/notifications");
		curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json; charset=utf-8',
												   'Authorization: Basic YOUR_REST_API_KEY'));
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
		curl_setopt($ch, CURLOPT_HEADER, FALSE);
		curl_setopt($ch, CURLOPT_POST, TRUE);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);

		$response = curl_exec($ch);
		curl_close($ch);
		
		return $response;
	}
	
	$response = sendMessage();
	$return["allresponses"] = $response;
	$return = json_encode( $return);
	
	print("\n\nJSON received:\n");
	print($return);
	print("\n");
?>