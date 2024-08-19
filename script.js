

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event){

        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;
        let list = document.getElementById("faultyItems");

        formSubmission(document,list,pilot,copilot,fuelLevel,cargoLevel);
        event.preventDefault();
    });

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        console.log(listedPlanets[0]);
        //TODO: add listed planet information/ variables & add the addDestinationInfo function
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      
       let pickedPlanet= pickPlanet(listedPlanets);
        let name = pickedPlanet.name;
        let diameter = pickedPlanet.diameter;
        let star = pickedPlanet.star;
        let distance = pickedPlanet.distance;
        let moons = pickedPlanet.moons;
        let imageUrl = pickedPlanet.image;


        addDestinationInfo(document,name,diameter,star,distance,moons,imageUrl);
    })
    
    
 });