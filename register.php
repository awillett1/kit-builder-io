<?php
// REGISTER FORM
//error_reporting(E_ALL);
//ini_set('display_errors', 1);

// sanitize input data
function sanitizeInput($data) {
   //  $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body, true);

    //print_r($data);
    
    // get user input/sanitize
    $email = sanitizeInput($data["email"]);
    $username = sanitizeInput($data["username"]);
    //print_r("|" . $data["password"] . "|");
    //$password = password_hash($data["password"], PASSWORD_DEFAULT); // Hash the password
    $password = $data["password"];

    // validate fields
    if (!empty($email) && !empty($username) && !empty($password)) {
        // open the CSV file
        $csvFile = fopen("users.csv", "a");

        // check if file is opened successfully
        if ($csvFile !== false) {
            // write to CSV
            fputcsv($csvFile, [$username, $email, $password]);

            // close the CSV file
            fclose($csvFile);

            // send success response
            echo "success";
            exit();
        } else {
            // send error response if file cannot be opened
            echo "error : file cannot be opened";
            exit();
        }
    } else {
        // send error response if validation fails
        echo "error : validation fail";
        exit();
    }
}
?>
