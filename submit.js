let headgearL = [
  { "value" : "octoPhones", "text" : "Ocho OctoPhones Blancos",
     "primary-image" : "https://leanny.github.io/splat3/images/gear/Hed_HDP009.webp"
  },

  { "value" : "gasMask", "text" : "Gas Mask",
  "primary-image" : "https://leanny.github.io/splat3/images/gear/Hed_MSK000.webp"
  },

  { "value" : "chaosHelm", "text" : "Chaos Helm",
  "primary-image" : "https://leanny.github.io/splat3/images/gear/Hed_AMB013.webp"
  },
];

let shirtL = [
  { "value" : "berry", "text" : "Berry BlobMob Tee",
     "primary-image" : "https://leanny.github.io/splat3/images/gear/Clt_TES091.webp"
  },

  { "value" : "penguin", "text" : "Penguin Bolero",
  "primary-image" : "https://leanny.github.io/splat3/images/gear/Clt_JKT056.webp"
  },

  { "value" : "rainbow", "text" : "Takoroka Rainbow Tie Dye",
  "primary-image" : "https://leanny.github.io/splat3/images/gear/Clt_TES050.webp"
  },
];

let shoesL = [
  { "value" : "inkBclam", "text" : "Ink-Black Clam 600s",
     "primary-image" : "https://leanny.github.io/splat3/images/gear/Shs_SLO023.webp"
  },

  { "value" : "zombie", "text" : "Zombie Hi-Horses",
  "primary-image" : "https://leanny.github.io/splat3/images/gear/Shs_SHI001.webp"
  },

  { "value" : "punk", "text" : "Punk Whites",
  "primary-image" : "https://leanny.github.io/splat3/images/gear/Shs_BOT006.webp"
  },
];

function headgearToCSV() {
  str = "value,text,primary-image\n";
  for (i in headgearL) {
    
    str += (headgearL[i]["value"] + "," + headgearL[i]["text"] + "," + headgearL[i]["primary-image"] + "\n");
  }

  console.log(str);
}

function shirtToCSV() {
  str = "value,text,primary-image\n";
  for (i in shirtL) {
    
    str += (shirtL[i]["value"] + "," + shirtL[i]["text"] + "," + shirtL[i]["primary-image"] + "\n");
  }

  console.log(str);
}

function shoesToCSV() {
  str = "value,text,primary-image\n";
  for (i in shoesL) {
    
    str += (shoesL[i]["value"] + "," + shoesL[i]["text"] + "," + shoesL[i]["primary-image"] + "\n");
  }

  console.log(str);
}

let shooters = [];

const xhr = new XMLHttpRequest();
xhr.open('GET', "http://10.16.14.104/~amelie/data-service/data-service.php");
xhr.responseType = "json";
xhr.onload = function() {
  if (xhr.status === 200) {
    shooters = this.response;
    loopThroughDictionary(s, shooters);
    //updateWeaponImage(shooters);
  } else {
    console.error("File could not be found.");
  }
};
xhr.send();
console.log(shooters);
var s = document.querySelector("#Shooters");

// FILL IN OPTION GROUPS FOR KIT-LIST AND KIT-LIST-SUBMIT
function loopThroughDictionary(ele, dict) {
  ele.innerHTML = "";

  for (var i = 0; i < dict.length; i++) {
    var opt = document.createElement("option");
    opt.value = dict[i].value;
    opt.innerHTML = dict[i].text;
    ele.appendChild(opt);
  }
}

// Function to populate the primary gear abilities dropdown
function populatePrimaryAbilities() {
  const headgearSelect = document.getElementById("headgear-primary-filter-select");
  const shirtSelect = document.getElementById("shirt-primary-filter-select");
  const shoesSelect = document.getElementById("shoes-primary-filter-select");
  
  // Call the loopThroughDictionary function for each select element
  loopThroughDictionary(headgearSelect, ability);
  loopThroughDictionary(shirtSelect, ability);
  loopThroughDictionary(shoesSelect, ability);
  
  }
  
  // Call the function to populate the primary gear abilities dropdown after DOM content has loaded
  document.addEventListener("DOMContentLoaded", function () {
    populatePrimaryAbilities();
  });

  
// Populate headgear, shirt, and shoes optgroups
function populateClothingOptions(groupName, clothingList) {
  const clothingOptgroup = document.getElementById(groupName);

  // Clear previous options
  clothingOptgroup.innerHTML = '';

  // Add new options based on clothingList
  clothingList.forEach(clothing => {
      const option = document.createElement('option');
      option.value = clothing.value;
      option.innerHTML = clothing.text;
      clothingOptgroup.appendChild(option);
  });
}

// Call the function to populate headgear, shirt, and shoes optgroups after DOM content has loaded
document.addEventListener("DOMContentLoaded", function () {
  populateClothingOptions("Headgear", headgearL);
  populateClothingOptions("Shirt", shirtL);
  populateClothingOptions("Shoes", shoesL);
});

const headgearSelect = document.getElementById("headgear-primary-filter-select");
const shirtSelect = document.getElementById("shirt-primary-filter-select");
const shoesSelect = document.getElementById("shoes-primary-filter-select");

// Function to update abilities for shirt, headgear, and shoes
function updateAbilities(selectElement, abilities) {
    // Clear previous options
    selectElement.innerHTML = '';

    // Add new options based on abilities
    abilities.forEach(ability => {
        const option = document.createElement('option');
        option.value = ability.value;
        option.textContent = ability.text;
        selectElement.appendChild(option);
    });
}

// Function to update kit details
function updateKitDetails(selectedWeaponData) {
    if (selectedWeaponData) {
        updateAbilities(headgearSelect, selectedWeaponData.headgearAbilities);
        updateAbilities(shirtSelect, selectedWeaponData.shirtAbilities);
        updateAbilities(shoesSelect, selectedWeaponData.shoesAbilities);

        // Update images for headgear, shirt, and shoes based on selected abilities
        updateClothingImage("headgear-primary-image", headgearSelect.value);
        updateClothingImage("shirt-primary-image", shirtSelect.value);
        updateClothingImage("shoes-primary-image", shoesSelect.value);
    }
}

// Add event listeners for ability selection change
headgearSelect.addEventListener("change", function () {
  updateClothingImage("headgear-primary-image", headgearSelect.value);
});

shirtSelect.addEventListener("change", function () {
  updateClothingImage("shirt-primary-image", shirtSelect.value);
});

shoesSelect.addEventListener("change", function () {
  updateClothingImage("shoes-primary-image", shoesSelect.value);
});

// Function to update clothing image based on ability value
function updateClothingImage(elementId, abilityValue) {
  const clothingImage = document.getElementById(elementId);
  const selectedAbility = ability.find(ability => ability.value === abilityValue);

  if (selectedAbility) {
      clothingImage.src = selectedAbility["primary-image"];
  } else {
      clothingImage.src = ""; // Clear image if ability is not found
  }
}


// Function to update clothing image based on ability value
function updateClothingImage(elementId, abilityValue) {
    const clothingImage = document.getElementById(elementId);
    const selectedAbility = ability.find(ability => ability.value === abilityValue);

    if (selectedAbility) {
        clothingImage.src = selectedAbility["primary-image"];
    } else {
        clothingImage.src = ""; // Clear image if ability is not found
    }
}

const weaponSelect = document.getElementById("filter-select-weapon");
weaponSelect.addEventListener("change", updateWeaponImage);
const weaponName = document.getElementById("weapon-name");

// ADD IMAGE TO WEAPONS
function updateWeaponImage() {
    const selectedWeapon = document.getElementById("filter-select-weapon");
    const selectedWeaponValue = selectedWeapon.value;
  
    // find weapon in shooters dict
    const selectedWeaponData = shooters.find(weapon => weapon.value === selectedWeaponValue);
  
    if (selectedWeaponData) {
      // update the weapon's image
      const weaponImage = document.getElementById("weapon-image");
      //weaponImage.src = selectedWeaponData;
      weaponImage.src = selectedWeaponData["weapon-image"];
  
      // update the weapon's name
      weaponName.textContent = selectedWeaponData.text;
  
      // add special/sub data
      const specialData = selectedWeaponData["special-image"]; 
      const subData = selectedWeaponData["sub-image"];
  
      // update special/sub data
      const specialImage = document.getElementById("special-image");
      const subImage = document.getElementById("sub-image");
  
      if (specialData) {
        specialImage.src = specialData;
      } else {
        specialImage.src = ""; // clear if not found
      }
  
      if (subData) {
        subImage.src = subData;
      } else {
        subImage.src = ""; // clear if not found
      }
    }
  }
  
  // UPDATE MODES SELECTED
  document.addEventListener("DOMContentLoaded", function () {
    const filterSelect = document.getElementById("filter-select-modes");
    const selectedModes = document.getElementById("selectedModes");
  
    filterSelect.addEventListener("change", function () {
      // clear prev
      while (selectedModes.firstChild) {
        selectedModes.removeChild(selectedModes.firstChild);
      }
  
      // get all selected
      const selectedOptions = Array.from(filterSelect.selectedOptions);
  
      // create and append a span element for each selectedMode
      selectedOptions.forEach((option) => {
        const modeSpan = document.createElement("span");
        modeSpan.textContent = `[${option.text}] `;
        selectedModes.appendChild(modeSpan);
      });
    });
  });
  
  const selectedHeadgear = document.getElementById("headgear-select");
  const selectedShirt = document.getElementById("shirt-select");
  const selectedShoes = document.getElementById("shoes-select");

  document.addEventListener("DOMContentLoaded", function() {
    // Function to update headgear image based on selection
    function updateHeadgearImage() {
        const selectedHeadgearValue = selectedHeadgear.value;

        // Find headgear in headgearL array
        const selectedHeadgearData = headgearL.find(headgear => headgear.value === selectedHeadgearValue);

        if (selectedHeadgearData) {
            // Update the headgear image
            const headgearImage = document.getElementById("headgear-image");
            headgearImage.src = selectedHeadgearData["primary-image"];
        }
    }

    // Add an event listener to the headgear select element
    const headgearSelect2 = document.getElementById("headgear-select");
    if (headgearSelect2) {
        headgearSelect2.addEventListener("change", updateHeadgearImage);
    } else {
        console.error("Headgear select element not found.");
    }
    
    // Function to update shoes image based on selection
    function updateShoesImage() {
        const selectedShoesValue = selectedShoes.value;

        // Find shoes in shoesL array
        const selectedShoesData = shoesL.find(shoes => shoes.value === selectedShoesValue);

        if (selectedShoesData) {
            // Update the shoes image
            const shoesImage = document.getElementById("shoes-image");
            shoesImage.src = selectedShoesData["primary-image"];
        }
    }

        // Function to update shirt image based on selection
        function updateShirtImage() {
          const selectedShirtValue = selectedShirt.value;
  
          // Find shirt in shirtL array
          const selectedShirtData = shirtL.find(shirt => shirt.value === selectedShirtValue);
  
          if (selectedShirtData) {
              // Update the shirt image
              const shirtImage = document.getElementById("shirt-image");
              shirtImage.src = selectedShirtData["primary-image"];
          }
      }
  
      // Add an event listener to the shirt select element
      const shirtSelect = document.getElementById("shirt-select");
      if (shirtSelect) {
          shirtSelect.addEventListener("change", updateShirtImage);
      } else {
          console.error("Shirt select element not found.");
      }

    // Add an event listener to the shoes select element
    const shoesSelect = document.getElementById("shoes-select");
    if (shoesSelect) {
        shoesSelect.addEventListener("change", updateShoesImage);
    } else {
        console.error("Shoes select element not found.");
    }
  });
  // UPDATE AUTHOR, DATE, TITLE.
  document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("name-input");
    const kitTitle = document.getElementById("kit-title");
    const author = document.getElementById("author");
    const date = document.getElementById("date");
    const submitBtn = document.getElementById("submit-button");
  
    // take from sessionStorage
    const username = sessionStorage.getItem("username");
  
    if (username) {
      // display username if found
      author.textContent = username;
    } else {
      // if username is not found/user not logged in
      author.textContent = "Guest";
    }
  
  
    // UPDATES THE KIT TITLE
    function updateKitTitle() {
      const kitName = nameInput.value || "kit title"; // placeholder if no name
      const currentDate = new Date();
      const formattedDate = currentDate.toDateString();
      kitTitle.textContent = kitName;
      // update author and date
  
      date.textContent = formattedDate;
    }
  
  
    updateKitTitle();
  
    //  update the kit title when the input changes
    nameInput.addEventListener("input", updateKitTitle);

    submitBtn.addEventListener("click", function() {
      console.log(nameInput.value);

      var xhr = new XMLHttpRequest();
      xhr.open("POST", "post-kit.php", true);
      //xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
          if (xhr.status == 200) {
            console.log(xhr.responseText);
          } else {
            console.error("Error: " + xhr.status);
          }
        }
      };

      var requestBody = { "name-input" : encodeURIComponent(nameInput.value),
                          // "username" :  ....,
                          "username" : username ? encodeURIComponent(username) : "Guest",
                          "modes" : encodeURIComponent(selectedModes.textContent),
                          "weapon" : encodeURIComponent(weaponName.textContent),
                          "headgear" : encodeURIComponent(selectedHeadgear.options[selectedHeadgear.selectedIndex].text),
                          "primary-headgear": encodeURIComponent(headgearSelect.options[headgearSelect.selectedIndex].text),
                          "shirt" : encodeURIComponent(selectedShirt.options[selectedShirt.selectedIndex].text),
                          "primary-shirt": encodeURIComponent(shirtSelect.options[shirtSelect.selectedIndex].text),
                          "shoes" : encodeURIComponent(selectedShoes.options[selectedShoes.selectedIndex].text),
                          "primary-shoes": encodeURIComponent(shoesSelect.options[shoesSelect.selectedIndex].text),
                          "date" : encodeURIComponent(date.textContent)
                        };
      xhr.send(JSON.stringify(requestBody));

    });

  });
