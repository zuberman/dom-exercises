const parent = document.querySelector(".characters");

const characters = [
	{
		"name": "Luke Skywalker",
		"height": "172",
		"mass": "77",
		"hair_color": "blond",
		"skin_color": "fair",
		"eye_color": "blue"
	},
	{
		"name": "C-3PO",
		"height": "167",
		"mass": "75",
		"hair_color": "n/a",
		"skin_color": "gold",
		"eye_color": "yellow"
	},
	{
		"name": "R2-D2",
		"height": "96",
		"mass": "32",
		"hair_color": "n/a",
		"skin_color": "white, blue",
		"eye_color": "red"
	},
	{
		"name": "Darth Vader",
		"height": "202",
		"mass": "136",
		"hair_color": "none",
		"skin_color": "white",
		"eye_color": "yellow"
	},
	{
		"name": "Leia Organa",
		"height": "150",
		"mass": "49",
		"hair_color": "brown",
		"skin_color": "light",
		"eye_color": "brown"
	},
	{
		"name": "Owen Lars",
		"height": "178",
		"mass": "120",
		"hair_color": "brown, grey",
		"skin_color": "light",
		"eye_color": "blue"
	},
	{
		"name": "Beru Whitesun lars",
		"height": "165",
		"mass": "75",
		"hair_color": "brown",
		"skin_color": "light",
		"eye_color": "blue"
	},
	{
		"name": "R5-D4",
		"height": "97",
		"mass": "32",
		"hair_color": "n/a",
		"skin_color": "white, red",
		"eye_color": "red",
		"birth_year": "unknown"
	},
	{
		"name": "Biggs Darklighter",
		"height": "183",
		"mass": "84",
		"hair_color": "black",
		"skin_color": "light",
		"eye_color": "brown"
	},
	{
		"name": "Obi-Wan Kenobi",
		"height": "182",
		"mass": "77",
		"hair_color": "auburn, white",
		"skin_color": "fair",
		"eye_color": "blue-gray"
	}
];

const htmlcharacters = characters.map(function(character) {
	return `<li>${character.name} is ${character.height}cm tall and weighs ${character.mass}kg. They have ${character.hair_color} hair, ${character.skin_color} skin and ${character.eye_color} eyes</li>`
}).join("")
console.log(htmlcharacters)
parent.innerHTML = (htmlcharacters)
