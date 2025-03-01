
// Material descriptions for educational purposes
const materialDescriptions = {
  plastic: {
    '1': "Type 1 (PET/PETE): Polyethylene Terephthalate - Common in water bottles, soda bottles, cooking oil containers, and peanut butter jars. Clear, tough, and solvent resistant.",
    '2': "Type 2 (HDPE): High-Density Polyethylene - Used in milk jugs, detergent bottles, shampoo bottles, and bleach containers. Stiff plastic that's resistant to chemicals.",
    '3': "Type 3 (PVC/V): Polyvinyl Chloride - Found in pipes, shower curtains, vinyl flooring, medical tubing, and some food wraps. Can be rigid or flexible.",
    '4': "Type 4 (LDPE): Low-Density Polyethylene - Used in squeezable bottles, shopping bags, bread bags, frozen food bags, and plastic wraps. Flexible and transparent.",
    '5': "Type 5 (PP): Polypropylene - Common in yogurt containers, medicine bottles, straws, bottle caps, and food containers. Heat-resistant and doesn't melt easily.",
    '6': "Type 6 (PS): Polystyrene - Used in disposable plates and cups, meat trays, egg cartons, and packing peanuts. Also known as Styrofoam when in foam form.",
    '7': "Type 7 (Other): A catch-all category for plastics that don't fit into categories 1-6. Includes polycarbonate, acrylic, nylon, and bioplastics.",
    'unknown': "Plastic with unknown type. Look for a recycling symbol with a number (1-7) typically found on the bottom of the item."
  },
  paper: {
    'newspaper': "Newspaper: Daily or weekly publications printed on thin, low-grade paper.",
    'cardboard': "Cardboard: Thick, stiff paper material with corrugated middle layer used for boxes and packaging.",
    'carton': "Carton: Food and beverage containers often coated with plastic or wax (milk, juice boxes).",
    'office': "Office Paper: White or colored paper used for printing, writing, and copying.",
    'magazine': "Magazines/Catalogs: Glossy publications with colored ink and sometimes coated paper."
  },
  glass: {
    'clear': "Clear Glass: Commonly used for food jars, beverage bottles, and storage containers.",
    'green': "Green Glass: Often used for wine bottles and some food products.",
    'brown': "Brown/Amber Glass: Commonly used for beer bottles and medicine containers.",
    'blue': "Blue Glass: Decorative items, some medicine bottles, and specialty food containers."
  },
  metal: {
    'aluminum': "Aluminum: Soda cans, beer cans, foil, and some food packaging. Lightweight and valuable for recycling.",
    'steel': "Steel/Tin: Food cans, aerosol cans, and many household products. Often has a magnetic property.",
    'copper': "Copper: Wiring, plumbing pipes, and electronic components. High value for recycling.",
    'mixed': "Mixed Metals: Items containing multiple types of metals that may need special processing."
  },
  electronics: {
    'small': "Small Electronics: Cell phones, calculators, digital cameras, and other handheld devices.",
    'medium': "Medium Electronics: Laptops, tablets, small printers, and countertop appliances.",
    'large': "Large Electronics: TVs, monitors, desktop computers, and large appliances.",
    'batteries': "Batteries: Both rechargeable and single-use batteries of various types."
  },
  textiles: {
    'cotton': "Cotton: Natural fiber used in clothing, bedding, and other fabric products.",
    'synthetic': "Synthetic: Materials like polyester, nylon, and acrylic used in clothing and household textiles.",
    'mixed': "Mixed Textiles: Blended fabrics containing both natural and synthetic fibers."
  },
  composite: {
    'tetrapak': "Tetrapak: Multi-layer packaging with paper, plastic, and sometimes aluminum (juice boxes, soup containers).",
    'laminated': "Laminated Materials: Paper or cardboard with plastic coating or layers.",
    'multi-material': "Multi-material Products: Items made of inseparable combinations of different materials."
  }
};

// Database template for recyclable items
// This is where you can add or modify recyclable items and their properties
const recyclableDatabase = {
  // Structure example for items:
  // [itemType]: {
  //   [materialType]: {
  //     [subType]: {
  //       recyclable: true/false/conditional,
  //       dropOff: true/false,
  //       conditions: [...],
  //       info: "Additional information"
  //     }
  //   }
  // }
  
  // Add specific handling for electronic items
  electronic: {
    electronics: {
      'small': { 
        recyclable: false, 
        dropOff: true, 
        conditions: [], 
        info: "Small electronics should not go in curbside recycling. Take to electronics recycling centers." 
      },
      'medium': { 
        recyclable: false, 
        dropOff: true, 
        conditions: [], 
        info: "Medium-sized electronics need specialized recycling. Many retailers offer take-back programs." 
      },
      'large': { 
        recyclable: false, 
        dropOff: true, 
        conditions: [], 
        info: "Large electronics require special handling. Contact local waste management for pickup options." 
      },
      'batteries': { 
        recyclable: false, 
        dropOff: true, 
        conditions: [], 
        info: "Batteries should never go in regular trash or recycling. Take to designated battery recycling points." 
      }
    }
  },
  
  // Plastic items
  bottle: {
    plastic: {
      '1': { 
        recyclable: true, 
        dropOff: false, 
        conditions: [], 
        info: "PET bottles are widely recyclable in curbside programs." 
      },
      '2': { 
        recyclable: true, 
        dropOff: false, 
        conditions: [], 
        info: "HDPE bottles are commonly accepted in curbside recycling." 
      },
      '3': { 
        recyclable: false, 
        dropOff: true, 
        conditions: ['clean'], 
        info: "PVC bottles are rarely accepted in curbside programs but may be accepted at special drop-off locations." 
      },
      '4': { 
        recyclable: false, 
        dropOff: true, 
        conditions: ['clean'], 
        info: "LDPE bottles may not be accepted in all areas. Check with local recycling program." 
      },
      '5': { 
        recyclable: true, 
        dropOff: false, 
        conditions: ['clean'], 
        info: "PP bottles are increasingly accepted in curbside recycling." 
      },
      '6': { 
        recyclable: false, 
        dropOff: true, 
        conditions: [], 
        info: "PS bottles are rarely accepted in curbside programs." 
      },
      '7': { 
        recyclable: false, 
        dropOff: true, 
        conditions: [], 
        info: "Type 7 plastics vary widely and are generally difficult to recycle." 
      }
    },
    glass: {
      'clear': {
        recyclable: true,
        dropOff: false,
        conditions: ['clean'],
        info: "Clear glass bottles are widely recyclable. Remove caps and rinse before recycling."
      },
      'green': {
        recyclable: true,
        dropOff: false,
        conditions: ['clean'],
        info: "Green glass bottles are recyclable in most curbside programs."
      },
      'brown': {
        recyclable: true,
        dropOff: false,
        conditions: ['clean'],
        info: "Brown glass bottles are recyclable in most curbside programs."
      }
    },
    metal: {
      'aluminum': {
        recyclable: true,
        dropOff: false,
        conditions: ['clean'],
        info: "Aluminum bottles are highly recyclable and valuable."
      }
    }
  },
  
  container: {
    plastic: {
      '1': { 
        recyclable: true, 
        dropOff: false, 
        conditions: ['clean'], 
        info: "Clean and empty PET containers are recyclable." 
      },
      '2': { 
        recyclable: true, 
        dropOff: false, 
        conditions: ['clean'], 
        info: "HDPE containers are widely accepted if clean." 
      },
      '5': { 
        recyclable: true, 
        dropOff: false, 
        conditions: ['clean'], 
        info: "PP containers are usually recyclable in many programs." 
      },
      '6': { 
        recyclable: false, 
        dropOff: true, 
        conditions: [], 
        info: "Polystyrene containers are rarely accepted in curbside recycling." 
      }
    },
    paper: {
      'cardboard': {
        recyclable: true,
        dropOff: false,
        conditions: ['clean'],
        info: "Cardboard containers should be flattened and free of food contamination."
      },
      'carton': {
        recyclable: true,
        dropOff: false,
        conditions: ['clean'],
        info: "Cartons should be rinsed and flattened before recycling."
      }
    },
    metal: {
      'aluminum': {
        recyclable: true,
        dropOff: false,
        conditions: ['clean'],
        info: "Aluminum containers are highly recyclable."
      },
      'steel': {
        recyclable: true,
        dropOff: false,
        conditions: ['clean'],
        info: "Steel containers should be rinsed before recycling."
      }
    }
  },
  
  bag: {
    plastic: {
      '2': { 
        recyclable: false, 
        dropOff: true, 
        conditions: ['clean'], 
        info: "Plastic bags should not go in curbside recycling. Take them to grocery store drop-off points." 
      },
      '4': { 
        recyclable: false, 
        dropOff: true, 
        conditions: ['clean'], 
        info: "Plastic film and bags should be taken to store drop-off locations, not placed in curbside bins." 
      }
    },
    paper: {
      'newspaper': {
        recyclable: true,
        dropOff: false,
        conditions: [],
        info: "Paper bags are recyclable in most curbside programs."
      }
    },
    textiles: {
      'cotton': {
        recyclable: false,
        dropOff: true,
        conditions: ['clean'],
        info: "Textile bags can be donated to textile recycling programs."
      }
    }
  },
  
  electronics: {
    electronics: {
      'small': {
        recyclable: false,
        dropOff: true,
        conditions: [],
        info: "Small electronics should not go in curbside recycling. Take to electronics recycling centers."
      },
      'medium': {
        recyclable: false,
        dropOff: true,
        conditions: [],
        info: "Medium-sized electronics need specialized recycling. Many retailers offer take-back programs."
      },
      'large': {
        recyclable: false,
        dropOff: true,
        conditions: [],
        info: "Large electronics require special handling. Contact local waste management for pickup options."
      },
      'batteries': {
        recyclable: false,
        dropOff: true,
        conditions: [],
        info: "Batteries should never go in regular trash or recycling. Take to designated battery recycling points."
      }
    }
  },
  
  clothing: {
    textiles: {
      'cotton': {
        recyclable: false,
        dropOff: true,
        conditions: ['clean'],
        info: "Cotton clothing in good condition can be donated; otherwise, look for textile recycling programs."
      },
      'synthetic': {
        recyclable: false,
        dropOff: true,
        conditions: ['clean'],
        info: "Synthetic clothing can be donated if in good condition or taken to textile recycling programs."
      },
      'mixed': {
        recyclable: false,
        dropOff: true,
        conditions: ['clean'],
        info: "Mixed fabric clothing can be donated or recycled through special textile programs."
      }
    }
  }
};

// Template for drop-off locations
// You can add real locations as needed
const dropOffLocations = {
  // Structure: [zip code or city]: [array of locations]
  "12345": [
    { name: "Community Recycling Center", address: "123 Green St", acceptedItems: ["1", "2", "3", "4", "5", "6", "7"], phone: "555-123-4567" },
    { name: "Grocery Store A", address: "456 Main St", acceptedItems: ["2", "4"], phone: "555-987-6543" }
  ],
  "54321": [
    { name: "City Waste Management", address: "789 Ecology Blvd", acceptedItems: ["1", "2", "5", "6"], phone: "555-456-7890" },
    { name: "Sustainable Solutions", address: "321 Earth Way", acceptedItems: ["3", "4", "7"], phone: "555-234-5678" }
  ],
  // Add more locations as needed
};

// Get form elements
const recyclingForm = document.getElementById("recycling-form");
const itemTypeSelect = document.getElementById("item-type");
const materialTypeSelect = document.getElementById("material-type");
const plasticTypeSelect = document.getElementById("plastic-type");
const plasticTypesContainer = document.getElementById("plastic-types-container");
const materialDescription = document.getElementById("material-description");
const itemSizeSelect = document.getElementById("item-size");
const itemConditionSelect = document.getElementById("item-condition");
const locationInput = document.getElementById("location");
const checkButton = document.getElementById("check-btn");

// Get results section elements
const resultsSection = document.getElementById("results-section");
const recyclabilityResult = document.getElementById("recyclability-result");
const suggestionsContainer = document.getElementById("suggestions-container");
const locationsList = document.getElementById("locations-list");
const recyclingInfo = document.getElementById("recycling-info");
const infoContent = document.getElementById("info-content");
const searchAgainBtn = document.getElementById("search-again-btn");

// Add event listeners
recyclingForm.addEventListener("submit", checkRecyclability);
searchAgainBtn.addEventListener("click", resetForm);
materialTypeSelect.addEventListener("change", updateMaterialSubtypes);
plasticTypeSelect.addEventListener("change", updateMaterialDescription);

// Initialize with plastic types hidden until material type is selected
plasticTypesContainer.classList.add("hidden");

// Function to update material subtypes based on material selection
function updateMaterialSubtypes() {
  const materialType = materialTypeSelect.value;
  
  // Clear and hide the material description
  materialDescription.textContent = "";
  materialDescription.classList.add("hidden");
  
  // Show/hide plastic types container based on material selection
  if (materialType === "plastic") {
    plasticTypesContainer.classList.remove("hidden");
    plasticTypesContainer.querySelector("label").textContent = "Plastic Type:";
    // Reset the plastic type select
    plasticTypeSelect.selectedIndex = 0;
  } else if (materialType === "paper") {
    plasticTypesContainer.classList.remove("hidden");
    plasticTypesContainer.querySelector("label").textContent = "Paper Type:";
    // Replace options with paper types
    updateSelectOptions(plasticTypeSelect, [
      { value: "", text: "Select paper type", disabled: true, selected: true },
      { value: "newspaper", text: "Newspaper" },
      { value: "cardboard", text: "Cardboard" },
      { value: "carton", text: "Carton (milk, juice)" },
      { value: "office", text: "Office Paper" },
      { value: "magazine", text: "Magazines/Catalogs" }
    ]);
  } else if (materialType === "glass") {
    plasticTypesContainer.classList.remove("hidden");
    plasticTypesContainer.querySelector("label").textContent = "Glass Type:";
    updateSelectOptions(plasticTypeSelect, [
      { value: "", text: "Select glass type", disabled: true, selected: true },
      { value: "clear", text: "Clear Glass" },
      { value: "green", text: "Green Glass" },
      { value: "brown", text: "Brown/Amber Glass" },
      { value: "blue", text: "Blue Glass" }
    ]);
  } else if (materialType === "metal") {
    plasticTypesContainer.classList.remove("hidden");
    plasticTypesContainer.querySelector("label").textContent = "Metal Type:";
    updateSelectOptions(plasticTypeSelect, [
      { value: "", text: "Select metal type", disabled: true, selected: true },
      { value: "aluminum", text: "Aluminum" },
      { value: "steel", text: "Steel/Tin" },
      { value: "copper", text: "Copper" },
      { value: "mixed", text: "Mixed Metals" }
    ]);
  } else if (materialType === "electronics") {
    plasticTypesContainer.classList.remove("hidden");
    plasticTypesContainer.querySelector("label").textContent = "Electronics Type:";
    updateSelectOptions(plasticTypeSelect, [
      { value: "", text: "Select electronics type", disabled: true, selected: true },
      { value: "small", text: "Small Electronics" },
      { value: "medium", text: "Medium Electronics" },
      { value: "large", text: "Large Electronics" },
      { value: "batteries", text: "Batteries" }
    ]);
  } else if (materialType === "textiles") {
    plasticTypesContainer.classList.remove("hidden");
    plasticTypesContainer.querySelector("label").textContent = "Textile Type:";
    updateSelectOptions(plasticTypeSelect, [
      { value: "", text: "Select textile type", disabled: true, selected: true },
      { value: "cotton", text: "Cotton" },
      { value: "synthetic", text: "Synthetic" },
      { value: "mixed", text: "Mixed Textiles" }
    ]);
  } else if (materialType === "composite") {
    plasticTypesContainer.classList.remove("hidden");
    plasticTypesContainer.querySelector("label").textContent = "Composite Type:";
    updateSelectOptions(plasticTypeSelect, [
      { value: "", text: "Select composite type", disabled: true, selected: true },
      { value: "tetrapak", text: "Tetrapak" },
      { value: "laminated", text: "Laminated Materials" },
      { value: "multi-material", text: "Multi-material Products" }
    ]);
  } else {
    plasticTypesContainer.classList.add("hidden");
  }
}

// Function to update dropdown options
function updateSelectOptions(selectElement, options) {
  // Clear all existing options
  selectElement.innerHTML = "";
  
  // Add new options
  options.forEach(option => {
    const optionElement = document.createElement("option");
    optionElement.value = option.value;
    optionElement.textContent = option.text;
    if (option.disabled) optionElement.disabled = true;
    if (option.selected) optionElement.selected = true;
    selectElement.appendChild(optionElement);
  });
}

// Function to display material descriptions
function updateMaterialDescription() {
  const materialType = materialTypeSelect.value;
  const subType = plasticTypeSelect.value;
  
  if (materialType && subType && materialDescriptions[materialType] && materialDescriptions[materialType][subType]) {
    materialDescription.textContent = materialDescriptions[materialType][subType];
    materialDescription.classList.remove("hidden");
  } else {
    materialDescription.textContent = "";
    materialDescription.classList.add("hidden");
  }
}

function checkRecyclability(e) {
  e.preventDefault();
  
  // Get form values
  const itemType = itemTypeSelect.value;
  const materialType = materialTypeSelect.value;
  const materialSubtype = plasticTypeSelect.value;
  const itemSize = itemSizeSelect.value;
  const itemCondition = itemConditionSelect.value;
  const location = locationInput.value;
  
  // Validate input
  if (!itemType || !materialType || (materialType === "plastic" && !materialSubtype) || !itemSize || !itemCondition || !location) {
    alert("Please fill out all fields");
    return;
  }
  
  // Check if item exists in database
  if (recyclableDatabase[itemType] && 
      recyclableDatabase[itemType][materialType] && 
      recyclableDatabase[itemType][materialType][materialSubtype]) {
    
    const itemData = recyclableDatabase[itemType][materialType][materialSubtype];
    
    // Determine recyclability based on conditions
    let isRecyclable = itemData.recyclable;
    
    // Check conditions (e.g., must be clean)
    if (itemData.conditions.includes('clean') && itemCondition !== 'clean') {
      isRecyclable = false;
    }
    
    // Display result
    if (isRecyclable) {
      recyclabilityResult.textContent = "This item can be recycled at home in your curbside bin.";
      recyclabilityResult.className = "recyclable";
    } else if (itemData.dropOff) {
      recyclabilityResult.textContent = "This item cannot be recycled at home, but can be dropped off at a collection point.";
      recyclabilityResult.className = "drop-off-only";
      showDropOffLocations(location, materialSubtype);
    } else {
      recyclabilityResult.textContent = "This item is not recyclable. Please dispose of it in regular trash.";
      recyclabilityResult.className = "not-recyclable";
    }
    
    // Show additional information
    infoContent.textContent = itemData.info || "No additional information available.";
    recyclingInfo.classList.remove("hidden");
    
  } else {
    recyclabilityResult.textContent = "We don't have information about this specific item. Please consult your local recycling guidelines.";
    recyclabilityResult.className = "";
    recyclingInfo.classList.add("hidden");
  }
  
  // Show results section
  resultsSection.classList.remove("hidden");
  
  // Scroll to results
  resultsSection.scrollIntoView({ behavior: 'smooth' });
}

function showDropOffLocations(userLocation, materialSubtype) {
  // Check if we have locations for the user's area
  // This is a simple check - in a real app, you'd use geocoding or a proper location search
  if (dropOffLocations[userLocation]) {
    const locations = dropOffLocations[userLocation];
    
    // Filter locations that accept this material type
    const relevantLocations = locations.filter(loc => 
      loc.acceptedItems.includes(materialSubtype)
    );
    
    if (relevantLocations.length > 0) {
      // Clear previous locations
      locationsList.innerHTML = "";
      
      // Add each location to the list
      relevantLocations.forEach(location => {
        const locationItem = document.createElement("div");
        locationItem.className = "location-item";
        
        locationItem.innerHTML = `
          <div class="location-name">${location.name}</div>
          <div class="location-address">${location.address}</div>
          <div class="location-phone">${location.phone}</div>
        `;
        
        locationsList.appendChild(locationItem);
      });
      
      suggestionsContainer.classList.remove("hidden");
    } else {
      locationsList.innerHTML = "<p>No specific drop-off locations found for this item in your area.</p>";
      suggestionsContainer.classList.remove("hidden");
    }
  } else {
    locationsList.innerHTML = "<p>No drop-off locations found for your area. Try searching with a different location or check your local recycling guidelines.</p>";
    suggestionsContainer.classList.remove("hidden");
  }
}

function resetForm() {
  // Hide results section
  resultsSection.classList.add("hidden");
  
  // Reset form
  recyclingForm.reset();
  
  // Hide subtypes, descriptions and info
  plasticTypesContainer.classList.add("hidden");
  materialDescription.classList.add("hidden");
  suggestionsContainer.classList.add("hidden");
  recyclingInfo.classList.add("hidden");
  
  // Scroll back to form
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Update drop-off locations database to include more material types
// Expand the database as needed
// Update locations to include all material types
Object.keys(dropOffLocations).forEach(location => {
  dropOffLocations[location].forEach(place => {
    // Add all plastic types
    if (!place.acceptedItems.includes('1')) place.acceptedItems.push('1');
    if (!place.acceptedItems.includes('2')) place.acceptedItems.push('2');
    
    // Add other material types
    place.acceptedItems.push('newspaper', 'cardboard', 'clear', 'aluminum', 'small', 'cotton');
  });
});

// Define valid material types for each item type
const validMaterialsForItems = {
  bottle: ["plastic", "glass", "metal"],
  container: ["plastic", "paper", "glass", "metal"],
  bag: ["plastic", "paper", "textiles"],
  wrap: ["plastic", "paper"],
  film: ["plastic", "paper"],
  electronic: ["electronics"],
  clothing: ["textiles"],
  other: ["plastic", "paper", "glass", "metal", "electronics", "textiles", "composite"]
};

// Material type display names
const materialDisplayNames = {
  plastic: "Plastic",
  paper: "Paper/Cardboard",
  glass: "Glass",
  metal: "Metal",
  electronics: "Electronics",
  textiles: "Textiles/Fabric",
  composite: "Composite Materials"
};

// Update dropdowns based on item type selection
itemTypeSelect.addEventListener("change", function() {
  const selectedItemType = this.value;
  
  // Reset material type selection
  materialTypeSelect.selectedIndex = 0;
  
  // Get valid materials for the selected item type
  const validMaterials = validMaterialsForItems[selectedItemType] || Object.keys(materialDisplayNames);
  
  // Create options array with default first option
  const materialOptions = [
    { value: "", text: "Select material type", disabled: true, selected: true }
  ];
  
  // Add valid material options
  validMaterials.forEach(material => {
    materialOptions.push({
      value: material,
      text: materialDisplayNames[material]
    });
  });
  
  // Update select options
  updateSelectOptions(materialTypeSelect, materialOptions);
  
  // Hide material subtype container
  plasticTypesContainer.classList.add("hidden");
  
  // Hide material description
  materialDescription.textContent = "";
  materialDescription.classList.add("hidden");
  
  // Reset subsequent form fields
  if (itemSizeSelect) itemSizeSelect.selectedIndex = 0;
  if (itemConditionSelect) itemConditionSelect.selectedIndex = 0;
});

// Enable reselection functionality
materialTypeSelect.addEventListener("change", function() {
  // When material type changes, reset any selected subtypes
  if (plasticTypeSelect) {
    plasticTypeSelect.selectedIndex = 0;
  }
  
  // Update material subtypes based on material selection
  updateMaterialSubtypes();
  
  // Reset subsequent form fields if this selection changes
  if (itemSizeSelect) itemSizeSelect.selectedIndex = 0;
  if (itemConditionSelect) itemConditionSelect.selectedIndex = 0;
});

// Allow going back to change selections at any point
plasticTypeSelect.addEventListener("change", function() {
  // Reset subsequent form fields if this selection changes
  if (itemSizeSelect) itemSizeSelect.selectedIndex = 0;
  if (itemConditionSelect) itemConditionSelect.selectedIndex = 0;
});

