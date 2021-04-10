const fightContainer = document.querySelector("#strength-container");

const fetchFightData = async () => {
	let response = await fetch("https://www.dnd5eapi.co/api/classes/");
	let json = await response.json();
	console.log(json);

	const barbarian = document.createElement("div");
	const name = document.createElement("h1");
	name.innerHTML = json.results[0]["name"];
	console.log(name);

	barbarian.append(name);
	fightContainer.append(barbarian);
};

const submit = document.querySelector("button");
submit.addEventListener("click", function () {
	fetchFightData();
});
