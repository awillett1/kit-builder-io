<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve the username from the session
    //$username = isset($_SESSION['username']) ? $_SESSION['username'] : "Guest";
    // Define the CSV file path
    $csvFilePath = "kits.csv";

    $post = json_decode(file_get_contents('php://input'), $associative=true);
    print_r($post);

    // Collect form data
    //$username = $_SESSION['username'];
    $username = $post['username']; // $post["username"];
    $kitName = $post['name-input'];
    $selectedModes = $post['modes']; // implode(", ", $_POST["filter-select-modes"]);
    $weaponName = $post['weapon']; //$_POST["filter-select-weapon"];
    $headgear = $post['headgear'];
    $headgearPrimary = $post['primary-headgear']; //$_POST["headgear-primary-filter-select"];
    $shirt = $post['shirt'];
    $shirtPrimary = $post['primary-shirt']; //$_POST["shirt-primary-filter-select"];
    $shoes = $post['shoes'];
    $shoesPrimary = $post['primary-shoes']; //$_POST["shoes-primary-filter-select"]; 
    $date = $post['date'];

    // Create or open the CSV file for writing
    $csvFile = fopen($csvFilePath, 'a');

    // If the file is empty, add headers
    if (filesize($csvFilePath) == 0) {
        fputcsv($csvFile, ["user", "kit-name", "modes", "weapon", "headgear", "primary-headgear", "shirt", "primary-shirt", "shoes", "primary-shoes", "date"]);
    }

    // Write data to the CSV file
    fputcsv($csvFile, [$username, $kitName, $selectedModes, $weaponName, $headgear, $headgearPrimary, $shirt, $shirtPrimary, $shoes, $shoesPrimary, $date]);

    // Close the CSV file
    fclose($csvFile);

    // Redirect to the kit list HTML page
    //header("Location: kit-list.html");
    exit();
}
?>