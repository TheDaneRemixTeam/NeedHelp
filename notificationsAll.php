<!--notification to all subscribers
if we want this, attach this code to button that signals it: 
 <form action="notification.php" method="post"><input type="submit" name="send_all" value="send to all users"> -->

<?PHP

if (isset($_POST["send_all"])){
    
    $response = sendMessage();
    $return["allresponses"] = $response;
    $return = json_encode($return);
    
    $data = json_decode($response, true);
    print_r($data);
    $id = $data['id'];
    print_r($id);
    
    print("\n\nJSON received:\n");
    print($return);
    print("\n");
};

function sendMessage() {
    $headings = array (
        "en" => "My header if I had something to say to all" <--eventually a header
    );

    $content      = array(
        "en" => "My message for all"  <--I need to change this when I find out what we need it fo r
    );
    //$hashes_array = array();

    //IF WE WANTED  BUTTONS ON IT: 
    // array_push($hashes_array, array(
    //     "id" => "like-button",                      <--change the name once I figure out how I want to us e it 
    //     "text" => "Like",                           <--What text should be o n my button?
    //     "icon" => "http://i.imgur.com/N8SN8ZS.png",  <--What pic would I want to include?
    //     "url" => "https://yoursite.com"  <--What side would we want to take them to?
    // ));
    // array_push($hashes_array, array(
    //     "id" => "like-button-2",
    //     "text" => "Like2",
    //     "icon" => "http://i.imgur.com/N8SN8ZS.png",
    //     "url" => "https://yoursite.com"
    // ));
    $fields = array(
        'app_id' => "5eb5a37e-b458-11e3-ac11-000c2940e62c",
        'included_segments' => array(
            'All'                        <--this is where Ill specify the users i want it to go to
        ),
        'data' => array(   
            "foo" => "bar"             <--what data d o I want to get back after a response from the msg?
        ),
        'contents' => $content,
        'headings' => $headings,
        //'web_buttons' => $hashes_array
    );
    
    $fields = json_encode($fields);
    print("\nJSON sent:\n");
    print($fields);
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://onesignal.com/api/v1/notifications");
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/json; charset=utf-8',
        'Authorization: Basic N2IxNWY0ZTQtODRjMS00ODMxLWE4YjgtY2YyZDkxZGQ3MWM5'
    ));
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