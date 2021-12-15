"use strict";

function cityFacts(obj) {
  return `${obj.name} has a population of ${obj.population} and is situated in ${obj.continent}`;
}

console.log(
  cityFacts({
    name: "Paris",
    population: "2,140,526",
    continent: "Europe",
  })
);
