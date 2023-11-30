<?php

function readData($dataCSVPath) {

    if (($handle = fopen($dataCSVPath, "r")) !== FALSE) {
        $csvs = [];
        while(! feof($handle)) {
           $csvs[] = fgetcsv($handle);
        }
        $datas = [];
        $column_names = [];
        foreach ($csvs[0] as $single_csv) {
            $column_names[] = $single_csv;
        }
    
        foreach ($csvs as $key => $csv) {
            if ($key == 0 || !$csv) {
                continue;
            }
    
            foreach ($column_names as $column_key => $column_name) {
                $datas[$key-1][$column_name] = $csv[$column_key];
            }
    
        }

        return $datas;
    }
    
}

function findImage($imgDatas, $text, $tag) {
    foreach ($imgDatas as $row) {
        if ($row["text"] == $text) { return $row[$tag]; }
    }
    return "not found";
}

$imgWeaponDatas = readData("../data-service/data.csv");
$imgAbilityDatas = readData("../data-service/ability.csv");
$imgShirtDatas = readData("../data-service/shirts.csv");
$imgHeadgearDatas = readData("../data-service/headgear.csv");
$imgShoesDatas = readData("../data-service/shoes.csv");
//print_r(readData());

// Define the CSV file path
$csvFilePath = "kits.csv";

// Open the CSV file for reading
$csvFile = fopen($csvFilePath, 'r');

// Skip the header row
$header = fgetcsv($csvFile);

// Start the wrapper div for kits
echo '<div class="kits-wrapper">';

// Loop through each row in the CSV file
while (($row = fgetcsv($csvFile)) !== false) {
    // Extract data from the CSV row
    $username = $row[0];
    $kitName = $row[1];
    $selectedModes = $row[2];
    $weaponName = $row[3];
    $headgear = $row[4];
    $headgearPrimary = $row[5];
    $shirt = $row[6];
    $shirtPrimary = $row[7];
    $shoes = $row[8];
    $shoesPrimary = $row[9];
    $date = $row[10];
    
    // Output the HTML structure for each kit
    echo '<div class="container-submit">';
    echo '<div class="col-sm-4">';
    echo '<div class="panel panel-info" style="margin-top: 20px;">';
    echo '<div class="panel-heading">';
    echo '<b id="kit-title">' . urldecode($kitName). '</b><br>';
    echo '<b id="author">' . urldecode($username) . '</b>, <i id="date">' . urldecode($date) . '</i>';
    echo '</div>';
    echo '<div class="panel-heading" id="weapon-panel-heading">';
    echo '<span id="weapon-name">' . urldecode($weaponName) . '</span>';
    echo '<div id="weapon-image-container">';
    echo '<img id="weapon-image" src="' . findImage($imgWeaponDatas, urldecode($weaponName), "weapon-image") . '" alt="weapon image" class="img-circle">';
    echo '<img id="sub-image" src="' . findImage($imgWeaponDatas, urldecode($weaponName), "sub-image") . '" alt="sub image" class="img-circle" style="float: right;">';
    echo '<img id="special-image" src="' . findImage($imgWeaponDatas, urldecode($weaponName), "special-image") . '" alt="special image" class="img-circle" style="float: right;">';
    echo '</div>';
    echo '</div>';
    echo '<div class="panel-body">';


    /// activate jscript and get it to load in/trigger

    // Add image elements for headgear
    echo '<img id="headgear-image" src="' . findImage($imgHeadgearDatas, urldecode($headgear), "primary-image") . '" alt="headgear" class="img-circle-fit">';
    echo '<img id="headgear-primary-image" src="' . findImage($imgAbilityDatas, urldecode($headgearPrimary), "primary-image") . '" alt="primary headgear" class="img-circle">';
    //echo '<img id="headgear-primary-image" src="' . findAbility(urldecode($headgearPrimary)). '" alt="primary headgear" class="img-circle">';

    echo '<img id="headgear-secondary-image" src="https://i.imgur.com/MEIVO78.png" alt="secondary headgear" class="img-circle">';
    echo '<img id="headgear-third-image" src="https://i.imgur.com/MEIVO78.png" alt="third headgear" class="img-circle">';
    echo '<img id="headgear-fourth-image" src="https://i.imgur.com/MEIVO78.png" alt="fourth headgear" class="img-circle">';
    echo '<br>';

    // Add image elements for shirt
    echo '<img id="shirt-image" src="' . findImage($imgShirtDatas, urldecode($shirt), "primary-image") . '" alt="shirt" class="img-circle-fit">';
    echo '<img id="shirt-primary-image" src="' . findImage($imgAbilityDatas, urldecode($shirtPrimary), "primary-image") . '" alt="primary shirt gear" class="img-circle">';

    echo '<img id="shirt-secondary-image" src="https://i.imgur.com/MEIVO78.png" alt="secondary shirt gear" class="img-circle">';
    echo '<img id="shirt-third-image" src="https://i.imgur.com/MEIVO78.png" alt="third shirt gear" class="img-circle">';
    echo '<img id="shirt-fourth-image" src="https://i.imgur.com/MEIVO78.png" alt="fourth shirt gear" class="img-circle">';
    echo '<br>';


    // Add image elements for shoes
    echo '<img id="shoes-image" src="' . findImage($imgShoesDatas, urldecode($shoes), "primary-image") . '" alt="shoes" class="img-circle-fit">';
    echo '<img id="shoes-primary-image" src="' . findImage($imgAbilityDatas, urldecode($shoesPrimary), "primary-image") . '" alt="primary shoes gear" class="img-circle">';

    echo '<img id="shoes-secondary-image" src="https://i.imgur.com/MEIVO78.png" alt="secondary shoes gear" class="img-circle">';
    echo '<img id="shoes-third-image" src="https://i.imgur.com/MEIVO78.png" alt="third shoes gear" class="img-circle">';
    echo'<img id="shoes-fourth-image" src="https://i.imgur.com/MEIVO78.png" alt="fourth shoes gear" class="img-circle">';

    echo '</div>';
    echo '<div class="panel-footer">Made for: <span id="selectedModes">' . urldecode($selectedModes) . '</span></div>';
    echo '</div>';
    echo '</div>';
    echo '</div>';
}

// End the wrapper div for kits
echo '</div>';

// Close the CSV file
fclose($csvFile);
?>
