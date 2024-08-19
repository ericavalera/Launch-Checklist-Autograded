

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event){

        //DOM- Document object model declarations -input[name="etc"] is JQuery(?)
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;
        let list = document.getElementById("faultyItems");

        formSubmission(document,list,pilot,copilot,fuelLevel,cargoLevel);

        //preventDefault() to prevent request from being sent out and the page reloading
        event.preventDefault();
    });

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()

    //this equals the information on JSON
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        console.log(listedPlanets[0]);
        //TODO: add listed planet information/ variables & add the addDestinationInfo function
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      
        // Randomly picks a planet - information that is listed on the JSON for every planet 
       let pickedPlanet= pickPlanet(listedPlanets);
        let name = pickedPlanet.name;
        let diameter = pickedPlanet.diameter;
        let star = pickedPlanet.star;
        let distance = pickedPlanet.distance;
        let moons = pickedPlanet.moons;
        let imageUrl = pickedPlanet.image;

        //displays pickedplanet/missionTarget on Page
        addDestinationInfo(document,name,diameter,star,distance,moons,imageUrl);
    })
    
    
 });