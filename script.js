const main = document.querySelector(".main-class");

const fetchFightData = async () => {
	let response = await fetch("https://www.dnd5eapi.co/api/classes/");
	let json = await response.json();
	console.log(json.results);

	function saveItem(className) {
		if (className == "barbarian") {
			strengthContainer.removeChild(fighter);
			strengthContainer.removeChild(monk);
			strengthContainer.removeChild(paladin);
		}
		return;
	}

	const strengthContainer = document.createElement("div");
	strengthContainer.className = "main-class-container";
	main.append(strengthContainer);

	// BARBARIAN

	const barbarian = document.createElement("div");
	const barbName = document.createElement("h1");
	const barbInfo = document.createElement("p");
	const barbButton = document.createElement("button");

	// assign classes

	barbarian.className = "class-box";
	barbName.className = "class-header";
	barbInfo.className = "class-info";
	barbButton.className = "class-button";
	barbButton.id = "barb-button";

	// create barbarian text
	barbName.innerHTML = json.results[0]["name"];
	barbInfo.innerHTML = "This is text";
	barbButton.innerHTML = "Click";

	// append

	barbarian.append(barbName, barbInfo, barbButton);
	strengthContainer.append(barbarian);

	// INSIDE BARBARIAN CLASS
	const fetchBarbData = async () => {
		let response = await fetch("https://www.dnd5eapi.co/api/classes/barbarian");
		let json = await response.json();
		console.log(json);
	};

	const submitBarb = document.querySelector("#barb-button");
	submitBarb.addEventListener("click", function () {
		saveItem("barbarian");
		fetchBarbData();
	});

	// FIGHTER

	const fighter = document.createElement("div");
	const fighterName = document.createElement("h1");
	const fighterInfo = document.createElement("p");
	const fighterButton = document.createElement("button");

	// assign classes

	fighter.className = "class-box";
	fighterName.className = "class-header";
	fighterInfo.className = "class-info";
	fighterButton.className = "class-button";
	fighterButton.id = "fighter-button";

	// create barbarian text

	fighterName.innerHTML = json.results[4]["name"];
	fighterInfo.innerHTML = "This is text";
	fighterButton.innerHTML = "Click";

	//append

	fighter.append(fighterName, fighterInfo, fighterButton);
	strengthContainer.append(fighter);

	// MONK

	const monk = document.createElement("div");
	const monkName = document.createElement("h1");
	const monkInfo = document.createElement("p");
	const monkButton = document.createElement("button");

	// assign classes

	monk.className = "class-box";
	monkName.className = "class-header";
	monkInfo.className = "class-info";
	monkButton.className = "class-button";
	monkButton.id = "monk-button";

	// create barbarian text

	monkName.innerHTML = json.results[5]["name"];
	monkInfo.innerHTML = "This is text";
	monkButton.innerHTML = "Click";

	//append

	monk.append(monkName, monkInfo, monkButton);
	strengthContainer.append(monk);

	// PALADIN

	const paladin = document.createElement("div");
	const paladinName = document.createElement("h1");
	const paladinInfo = document.createElement("p");
	const paladinButton = document.createElement("button");

	// assign classes

	paladin.className = "class-box";
	paladinName.className = "class-header";
	paladinInfo.className = "class-info";
	paladinButton.className = "class-button";
	paladinButton.id = "paladin-button";

	// create barbarian text

	paladinName.innerHTML = json.results[6]["name"];
	paladinInfo.innerHTML = "This is text";
	paladinButton.innerHTML = "Click";

	//append

	paladin.append(paladinName, paladinInfo, paladinButton);
	strengthContainer.append(paladin);
};

const submit = document.querySelector("button");
submit.addEventListener("click", function () {
	fetchFightData();
});
