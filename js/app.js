'use strict';

// Darth Vader

function oReqPerson4Name() {
  const person4Name = document.querySelector("#person4Name");
  person4Name.innerHTML = JSON.parse(this.responseText).name;
  console.log(JSON.parse(this.responseText));
}

const name4Req = new XMLHttpRequest();
name4Req.addEventListener("load", oReqPerson4Name);
name4Req.open("GET", "https://swapi.co/api/people/4/");
name4Req.send();

function oReqPerson4HomeWorld() {
  const person4HomeWorld = document.querySelector("#person4HomeWorld");
  person4HomeWorld.innerHTML = JSON.parse(this.responseText).name;
}

const world4Req = new XMLHttpRequest();
world4Req.addEventListener("load", oReqPerson4HomeWorld);
world4Req.open("GET", "https://swapi.co/api/planets/1/");
world4Req.send();

