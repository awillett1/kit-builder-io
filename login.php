<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// check if exists in csv
function checkUser($username, $password) {
    $hpassword = password_hash($password, PASSWORD_DEFAULT);
    //print("Hashed: |$password|" . $hpassword);

    $csvFile = fopen("users.csv", "r");
    while (($row = fgetcsv($csvFile)) !== false) {
        list($storedUsername, $storedPassword) = $row;
        if ($username === $storedUsername && ($password === $storedPassword)) {
            fclose($csvFile);
            return true; // found
        }
    }
    fclose($csvFile);
    return false; // not found
}

// check if submit
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body, true);
    $username = $data["username"];
    $password = $data["password"];

    // validate fields
    if (!empty($username) && !empty($password)) {
        // check if exists
        if (checkUser($username, $password)) {
            echo "success";
        } else {
            echo "error : Invalid username or password";
        }
    } else {
        echo "error : Missing username or password";
    }
}
?>
