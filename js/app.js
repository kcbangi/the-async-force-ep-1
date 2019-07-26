'use strict';

// Darth Vader
const name4Req = new XMLHttpRequest();
name4Req.addEventListener("load", oReqPerson4);
name4Req.open("GET", "https://swapi.co/api/people/4/");
name4Req.send();

function oReqPerson4() {
  const person4Name = document.querySelector("#person4Name");
  const person4Object = JSON.parse(this.responseText);
  person4Name.innerHTML = person4Object.name;
  const world4Req = new XMLHttpRequest();
  const getPerson4World = person4Object.homeworld;
  world4Req.addEventListener("load", oReqPerson4HomeWorld);
  world4Req.open("GET", getPerson4World);
  world4Req.send();
}

function oReqPerson4HomeWorld() {
  const person4HomeWorld = document.querySelector("#person4HomeWorld");
  person4HomeWorld.innerHTML = JSON.parse(this.responseText).name;
}


// Han Solo
const name14Req = new XMLHttpRequest();
name14Req.addEventListener("load", oReqPerson14);
name14Req.open("GET", "https://swapi.co/api/people/14/");
name14Req.send();

function oReqPerson14() {
  const person14Name = document.querySelector("#person14Name");
  const person14Object = JSON.parse(this.responseText);
  person14Name.innerHTML = person14Object.name;
  const species14Req = new XMLHttpRequest();
  const getPerson14Species = person14Object.species;
  species14Req.addEventListener("load", oReqPerson14Species);
  species14Req.open("GET", getPerson14Species);
  species14Req.send();
}

function oReqPerson14Species() {
  const person14Species = document.querySelector("#person14Species");
  person14Species.innerHTML = JSON.parse(this.responseText).name;
}


