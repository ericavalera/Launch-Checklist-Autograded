// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML =`<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">`
    
   
 };
 //Helps formSubmission to validate entries on form
 function validateInput(testInput) {
    if(testInput === ""){
        return "Empty";
    } else if (!isNaN(testInput)){
        return "Is a Number";
    } else { (isNaN(testInput))
        return "Not a Number"
    }
 };
 //with the help of validateInput() is verifying submissions and changing the information on the page via the DOM
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const launchStatus = document.getElementById("launchStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus= document.getElementById("cargoStatus");

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
        alert("All fields are required.");
        
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number"){
        alert("No numbers are allowed for pilot and co-pilot name.");
        
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number"){
        alert("Only numbers allowed in cargo mass and fuel level fields");   
    }
    else{
        
        if(fuelLevel < 10000 && cargoLevel > 10000){
        list.style.visibility = "visible";
        fuelStatus.innerHTML = `Fuel level too low for launch`;
        cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
        launchStatus.style.color = "red";
        pilotStatus.innerHTML= `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML= `Co-pilot ${copilot} is ready for launch`;
        launchStatus.innerHTML = `Shuttle Not Ready for Launch`;

    } else if (fuelLevel < 10000){
        list.style.visibility = "visible";
        fuelStatus.innerHTML = `Fuel level too low for launch`;
        launchStatus.style.color = "red";
        launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
        pilotStatus.innerHTML= `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML= `Co-pilot ${copilot} is ready for launch`;

     } else if (cargoLevel > 10000){
        list.style.visibility = "visible";
        cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
        launchStatus.style.color = "red";
        fuelStatus.innerHTML = "Fuel level high enough for launch"
        launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
        pilotStatus.innerHTML= `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML= `Co-pilot ${copilot} is ready for launch`;   

     } else { 
        list.style.visibility ="visible";
        launchStatus.style.color = "green";
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        cargoStatus.innerHTML ="Cargo mass low enough for launch";
        launchStatus.innerHTML = `Shuttle is Ready for Launch`; 
        pilotStatus.innerHTML= `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML= `Co-pilot ${copilot} is ready for launch`;
     };
    }
    };

 //fetching JSON information
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
       return response.json()
         });
 
     return planetsReturned;
 };
 //Randomly selects planet from JSON list
 function pickPlanet(planets) {
    let indexOfPlanets=  Math.floor(Math.random() * planets.length);
    return planets[indexOfPlanets];
 };
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;