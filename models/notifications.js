<<<<<<< Updated upstream
var GroupNotification = require("notificationGroup");
var AllNotification = require("notificationsAll");
var SingleNotification = require("notificationSingle");

//when new gig is created, call newGigURL()

function newGigURL() {

=======
// link to dashboard: https://app.onesignal.com
// login:
// organization: The Dane Remix Team
// email: chelsealuttrall@gmail.com
// pw: the1&only

const restApiKey = "N2IxNWY0ZTQtODRjMS00ODMxLWE4YjgtY2YyZDkxZGQ3MWM5";
const authKey = "OTVlN2U1MGItODQ3MS00YWU5LWJmZTktZjZkYzhjMjg0Y2E2";
const appId = "a8dc9719-288c-4e81-adf4-e69fcefe3976";
const testAppId = "88343ac4-1d20-490c-bef4-f46bf318570b";
// src = "https://cdn.onesignal.com/sdks/OneSignalSDK.js"
// async =
//     "app_id": "5eb5a37e-b458-11e3-ac11-000c2940e62c"


///////signaller

OneSignal.push(function() {

    var isPushSupported = OneSignal.isPushNotificationsSupported();
    if (isPushSupported) {
        // Push notifications are supported
        console.log("supported")
        OneSignal.isPushNotificationsEnabled(function(isEnabled) {
            if (isEnabled) {
                console.log("Push notifications are enabled!");
                OneSignal.getUserId(function(userId) {
                    console.log("OneSignal User ID:", userId);
                    // (Output) OneSignal User ID: example 270a35cd-4dda-4b3f-b04e-41d7463a2316     
                    document.getElementById('user_id').value = userID;
                    firstNotification(userID);
                });
            } else {
                console.log("Push notifications are not enabled yet.");
                OneSignal.push(function() {
                    OneSignal.showNativePrompt();
                });
            }
        });
    } else {
        // Push notifications are not supported
        console.log("not supported")
    }
});



//////notifications//////

let newGigCreated = {
    "app_id": "a8dc9719-288c-4e81-adf4-e69fcefe3976",
    "included_segments": [
        "All"
    ],
    "data": {
        "en": "bar"
    },
    "headings": {
        "en": "A new gig was posted to Needhelp!"
    },
    "contents": {
        "en": "Click to check it out"
    }
}


function newGigURL() {
>>>>>>> Stashed changes
    {
        //on the create new gig button push
        $("#help-btn").on("click", function(e) {
            e.preventDefault();
            console.log($(this).attr("href"));
<<<<<<< Updated upstream
=======
            linkToSendTo = $(this).attr("href")
            newGigURL linkToSendTo
>>>>>>> Stashed changes
        })

        //grab url of new gig site creation....

        //once the  button is pushed, send and activate the notificationGroup.php

    };

<<<<<<< Updated upstream



    //when someone volunteers for a gig, call 

    function someoneWantsToHelp() {
        //when someone volunteers for a gig, the poster of the gig is notified


    };











    module.exports = newGigURL;



































    //link to dashboard: https://app.onesignal.com
    //login:
    // organization: The Dane Remix Team
    //email: chelsealuttrall@gmail.com
    //pw: the1&only

    // const restApiKey: "N2IxNWY0ZTQtODRjMS00ODMxLWE4YjgtY2YyZDkxZGQ3MWM5"
    // const authKey: "OTVlN2U1MGItODQ3MS00YWU5LWJmZTktZjZkYzhjMjg0Y2E2"
    // const appId: "a8dc9719-288c-4e81-adf4-e69fcefe3976"

    // src = "https://cdn.onesignal.com/sdks/OneSignalSDK.js"
    // async =

    //     "app_id": "5eb5a37e-b458-11e3-ac11-000c2940e62c",
=======
}


//POst https://onesignal.com/api/v1/notifications

let firstNotification = {
    "app_id": "a8dc9719-288c-4e81-adf4-e69fcefe3976",
    "included_player_ids": [
        (userID)
    ],
    // "data": {
    //     "en": "bar"
    // },
    "headings": {
        "en": "Thanks for subscribing!"
    },
    "contents": {
        "en": "We'll keep you posted on new gigs."
    }
}


//    when someone volunteers for a gig, call 
// function someoneWantsToHelp() {
//when someone volunteers for a gig, the poster of the gig is notified
// };

// Export routes 
module.exports = notifications;
>>>>>>> Stashed changes
