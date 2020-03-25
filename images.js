//For Storing images in mySql (of projects)

// Solved it by converting my imageFile to a string like this:

// encodedImage := base64.StdEncoding.EncodeToString(imageFile)

// Then I stored the encodedImage into my database's image column (of type BLOB)



//For building user's avatar

//https://www.programmableweb.com/api/avatar


//maps : https://docs.mapbox.com/api/
//token: pk.eyJ1IjoiY2hlbHNlYWx1dHRyYWxsIiwiYSI6ImNrODN5OXYzazBiMTczZ282cmZydTVpaGsifQ.RViTdQBXsT3Zs9AiYVeQww