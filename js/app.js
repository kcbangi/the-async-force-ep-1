'use strict';

// Darth Vader
const name4Req = new XMLHttpRequest();
name4Req.addEventListener("load", function() {
  const person4Name = document.querySelector("#person4Name");
  const person4Object = JSON.parse(this.responseText);
  person4Name.innerHTML = person4Object.name;
  const world4Req = new XMLHttpRequest();
  world4Req.addEventListener("load", function() {
    const person4HomeWorld = document.querySelector("#person4HomeWorld");
    person4HomeWorld.innerHTML = JSON.parse(this.responseText).name;
  });
  world4Req.open("GET", person4Object.homeworld);
  world4Req.send();
});
name4Req.open("GET", "https://swapi.co/api/people/4/");
name4Req.send();


// Han Solo
const name14Req = new XMLHttpRequest();
name14Req.addEventListener("load", function() {
  const person14Name = document.querySelector("#person14Name");
  const person14Object = JSON.parse(this.responseText);
  person14Name.innerHTML = person14Object.name;
  const species14Req = new XMLHttpRequest();
  species14Req.addEventListener("load", function() {
    const person14Species = document.querySelector("#person14Species");
    person14Species.innerHTML = JSON.parse(this.responseText).name;
  });
  species14Req.send();
  species14Req.open("GET", person14Object.species);
});
name14Req.open("GET", "https://swapi.co/api/people/14/");
name14Req.send();


// Films
const filmReq = new XMLHttpRequest();
filmReq.addEventListener("load", function() {
  const API = JSON.parse(this.responseText); 
  const results = API.results;
  for (let i = 0; i < results.length; i++) {
    const film = document.createElement("li");
    film.classList = "film";
    filmList.appendChild(film);

    const filmTitle = document.createElement("h2");
    filmTitle.classList = "filmTitle";
    filmTitle.innerText = results[i].title;
    film.appendChild(filmTitle);

    const Planets = document.createElement("h3");
    Planets.innerText = "Planets";
    film.appendChild(Planets);

    const filmPlanets = document.createElement("ul");
    filmPlanets.classList = "filmPlanets";
    film.appendChild(filmPlanets);

    for (let j = 0; j < results[i].planets.length; j++) {
      const planet = document.createElement("li");
      planet.classList = "planet";
      filmPlanets.appendChild(planet);

      const planetReq = new XMLHttpRequest();
      planetReq.addEventListener("load", function() {
        const planetName = document.createElement("h4");
        planetName.classList = "planetName";
        planetName.innerHTML = JSON.parse(this.responseText).name;
        planet.appendChild(planetName);
      });
      planetReq.open("GET", results[i].planets[j]);
      planetReq.send();
    }
  }
});
filmReq.open("GET", "https://swapi.co/api/films/");
filmReq.send();
