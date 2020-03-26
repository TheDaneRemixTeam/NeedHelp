Send message to people who have signed up as helpers and want notifications. 
Send every time a new gig is posted. Action button = the button to submit a new gig.

<?PHP

require('notifications.js');

	function newGigPostedAlert(){
		$headings = array (
            "en" => "A new gig was posted to Needhelp!" <--eventually a header
        );
    
        $content      = array(
            "en" => "Click to check it out."  <--I need to change this when I find out what we need it fo r
        );
		$hashes_array = array();

    //IF WE WANTED  BUTTONS ON IT: 
    array_push($hashes_array, array(
        "id" => "go to gig",                      <--change the name once I figure out how I want to us e it 
        "text" => "Go to Gig",                           <--What text should be o n my button?
        <--What pic would I want to include? just using defaul t icon => needhelplogo.png
        "url" => ($newGigURL)  <--What site would we want to take them to?               -----this needs to be passed from notifications.js
    ));
		$fields = array(
			'app_id' => "5eb5a37e-b458-11e3-ac11-000c2940e62c",
			'included_segments' => array('All'),
			'data' => array("Go to Gig" => "Clicked"),  <--alert click
			'contents' => $content,
			'headings' => $headings,
			'web_buttons' => $hashes_array
		);
		
		$fields = json_encode($fields);
    	print("\nJSON sent:\n");
    	print($fields);
		
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, "https://onesignal.com/api/v1/notifications");
		curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json; charset=utf-8',
												   'Authorization: N2IxNWY0ZTQtODRjMS00ODMxLWE4YjgtY2YyZDkxZGQ3MWM5'));
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
		curl_setopt($ch, CURLOPT_HEADER, FALSE);
		curl_setopt($ch, CURLOPT_POST, TRUE);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);

		$response = curl_exec($ch);
		curl_close($ch);
		
		return $response;
	}
	
	$response = newGigPostedAlert();
	$return["allresponses"] = $response;
	$return = json_encode( $return);
	
	print("\n\nJSON received:\n");
	print($return);
	print("\n");


	var_export($response);
	
?>