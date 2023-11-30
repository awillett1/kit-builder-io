
let ability = [
  { "value" : "opGam", "text" : "Opening Gambit",
     "primary-image" : "https://leanny.github.io/splat3/images/skill/StartAllUp.webp"
  },

  {"value" : "last", "text" : "Last Ditch Effort",
  "primary-image" : "https://leanny.github.io/splat3/images/skill/EndAllUp.webp"
  },

  {"value" : "tena", "text" : "Tenacity",
  "primary-image" : "https://cdn.wikimg.net/en/splatoonwiki/images/6/60/S3_Ability_Tenacity.png?20220825111019"},

  {"value" : "come", "text": "Comeback",
  "primary-image" : "https://leanny.github.io/splat3/images/skill/ComeBack.webp"},

  {"value" : "ninja", "text" : "Ninja Squid",
  "primary-image" : "https://leanny.github.io/splat3/images/skill/SquidMoveSpatter_Reduction.webp"},

  {"value" : "haunt", "text": "Haunt",
  "primary-image" : "https://cdn.wikimg.net/en/splatoonwiki/images/2/2b/S3_Ability_Haunt.png?20220825110205"},

  {"value" : "thermal", "text": "Thermal Ink",
  "primary-image" : "https://cdn.wikimg.net/en/splatoonwiki/images/3/33/S3_Ability_Thermal_Ink.png?20220825112143"},

  {"value" : "respawn", "text": "Respawn Punisher",
  "primary-image" : "https://leanny.github.io/splat3/images/skill/Exorcist.webp"},

  {"value" : "stealth", "text": "Stealth Jump",
  "primary-image" : "https://cdn.wikimg.net/en/splatoonwiki/images/5/5a/S3_Ability_Stealth_Jump.png?20220825112118"}, 

  {"value" : "object", "text": "Object Shredder",
  "primary-image" : "https://leanny.github.io/splat3/images/skill/ObjectEffect_Up.webp"},

  {"value" : "drop", "text": "Drop Roller",
  "primary-image" : "https://leanny.github.io/splat3/images/skill/SomersaultLanding.webp"}, 
  
  { "value" : "inkM", "text" : "Ink Main Up",
  "primary-image" : "https://leanny.github.io/splat3/images/skill/MainInk_Save.webp"
  },

  { "value" : "inkS", "text" : "Ink Sub Up",
  "primary-image" : "https://leanny.github.io/splat3/images/skill/SubInk_Save.webp"
  },

  { "value" : "inkR", "text" : "Ink Recovery Up",
  "primary-image" : "https://leanny.github.io/splat3/images/skill/InkRecovery_Up.webp"
  },

  { "value" : "run", "text" : "Run Speed Up",
  "primary-image" : "https://leanny.github.io/splat3/images/skill/HumanMove_Up.webp"
  },

  { "value" : "swim", "text" : "Swim Speed Up",
  "primary-image" : "https://leanny.github.io/splat3/images/skill/SquidMove_Up.webp"
  },

  { "value" : "specialUp", "text" : "Special Charge Up",
  "primary-image" : "https://leanny.github.io/splat3/images/skill/SpecialIncrease_Up.webp"
  },

  { "value" : "specialS", "text" : "Special Saver Up",
  "primary-image" : "https://leanny.github.io/splat3/images/skill/RespawnSpecialGauge_Save.webp"
  },

  { "value" : "specialP", "text" : "Special Power Up",
  "primary-image" : "https://leanny.github.io/splat3/images/skill/SpecialSpec_Up.webp"
  },

  { "value" : "quickR", "text" : "Quick Respawn",
  "primary-image" : "https://leanny.github.io/splat3/images/skill/RespawnTime_Save.webp"
  },

  { "value" : "quickJ", "text" : "Quick Super Jump" ,
  "primary-image" : "https://leanny.github.io/splat3/images/skill/JumpTime_Save.webp"
  },

  { "value" : "subUp", "text" : "Sub Power Up",
  "primary-image" : "https://leanny.github.io/splat3/images/skill/SubSpec_Up.webp"
  },

  { "value" : "inkRes", "text" : "Ink Resistance Up" ,
  "primary-image" : "https://leanny.github.io/splat3/images/skill/OpInkEffect_Reduction.webp"
  },

  { "value" : "subRes", "text" : "Sub Resistance Up" ,
  "primary-image" : "https://leanny.github.io/splat3/images/skill/SubEffect_Reduction.webp"
  },
];

function abilityToCSV() {
  str = "value,text,primary-image\n";
  for (i in ability) {
    
    str += (ability[i]["value"] + "," + ability[i]["text"] + "," + ability[i]["primary-image"] + "\n");
  }

  console.log(str);
}

  // Function to fetch and display kits
  function displayKits() {
    // Your PHP file that generates the HTML for kits
    var kitsPHPFile = 'collect.php';

    // Fetch data from the PHP file
    fetch(kitsPHPFile)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(html => {
        // Insert the generated HTML into the kits-container div
        document.getElementById('kits-container').innerHTML = html;
      })
      .catch(error => {
        console.error('Error fetching kits:', error);
        document.getElementById('kits-container').innerHTML = 'Error loading kits. Please try again later.';
      });
  }

  // Call the function to display kits when the page loads
  window.onload = displayKits;