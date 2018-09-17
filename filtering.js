const form = document.querySelector("form")
const parent = document.querySelector(".characters");
let names
let filterarray = []



fetch('https://swapi.co/api/people')
.then(function(response) {
  return response.json();
  console.log(response)
})
.then(function(body) {
  names = body.results
  filterarray = names.map(function(character){
    return `<li>${character.name}</li>`}).join("")
    parent.innerHTML = filterarray;
  })


form.addEventListener("input", function(event){
  parent.innerHTML = ""
  filterarray = names.filter(function(char){
    return char.name.toLowerCase().includes(event.target.value.toLowerCase())
  }).map(function(character){
    return `<li>${character.name}</li>`}).join("")
    parent.innerHTML = filterarray;
})
