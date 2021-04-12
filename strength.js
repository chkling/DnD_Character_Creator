const main = document.querySelector(".main-class");
const mainHeader = document.querySelector("#main-class-header");

const fetchFightData = async () => {
	let response = await fetch("https://www.dnd5eapi.co/api/classes/");
	let json = await response.json();
	console.log(json.results);

	const strengthContainer = document.createElement("div");
	strengthContainer.className = "main-class-container";
	main.append(strengthContainer);

	function saveClass(classDiv) {
		let object = document.querySelectorAll(".class-filter");
		console.log(object);
		for (let i = 0; i < object.length; i++) {
			let removeID = document.getElementById(object[i]["id"]);
			if (removeID !== classDiv) {
				strengthContainer.removeChild(removeID);
			}
		}
	}

	// BARBARIAN

	const barbarian = document.createElement("div");
	const barbName = document.createElement("h1");
	const barbInfo = document.createElement("p");
	const barbButton = document.createElement("button");

	// assign classes

	barbarian.className = "class-option-A";
	barbarian.className = "class-filter";
	barbarian.id = "barbarian";
	barbName.className = "class-header";
	barbInfo.className = "class-info";
	barbButton.className = "button";
	barbButton.id = "barb-button";

	// create barbarian text
	barbName.innerHTML = json.results[0]["name"];
	barbInfo.innerHTML =
		"A fierce warrior of primitive background who can enter a battle rage.";
	barbButton.innerHTML = "Learn More";

	// append

	barbarian.append(barbName, barbInfo, barbButton);
	strengthContainer.append(barbarian);

	function checkBarb() {
		return barbarian;
	}

	// INSIDE BARBARIAN CLASS
	const fetchBarbData = async () => {
		let response = await fetch("https://www.dnd5eapi.co/api/classes/barbarian");
		let json = await response.json();
		console.log(json);

		const barbContainer = document.createElement("div");
		barbContainer.className = "class-box";
		strengthContainer.append(barbContainer);

		const barbProficiencies = document.createElement("ul");
		const barbProficienciesChoice = document.createElement("ul");
		const starterPack = document.createElement("ul");
		const barbHealth = document.createElement("h3");
		const barbIMG = document.createElement("img");
		const goBack = document.createElement("button");

		barbProficiencies.innerHTML = "List of proficiencies: ";
		barbProficienciesChoice.innerHTML = "Select Two: ";
		starterPack.innerHTML = "Starts with: ";
		barbHealth.innerHTML = `Health points: ${json.hit_die}`;
		barbIMG.src = "images/barbarian.png";
		goBack.innerHTML = "Go Back";
		goBack.className = "button";

		barbContainer.append(barbIMG, barbHealth);

		// class info generation

		for (let prof of json.proficiencies) {
			const barbProficiency = document.createElement("li");
			barbProficiency.innerHTML = prof.name;
			barbContainer.append(barbProficiencies);
			barbProficiencies.append(barbProficiency);
		}

		for (let choice of json.proficiency_choices[0]["from"]) {
			const barbProficiencyChoice = document.createElement("li");
			barbProficiencyChoice.innerHTML = choice.name;
			barbContainer.append(barbProficienciesChoice);
			barbProficienciesChoice.append(barbProficiencyChoice);
		}

		for (let equip1 of json.starting_equipment) {
			const equipPack1 = document.createElement("li");
			equipPack1.innerHTML = equip1["equipment"]["name"];
			barbContainer.append(starterPack);
			starterPack.append(equipPack1);
		}

		for (let equip2 of json.starting_equipment_options) {
			const equipPack2 = document.createElement("li");
			equipPack2.innerHTML = equip2["from"][0]["equipment"]["name"];
			barbContainer.append(starterPack);
			starterPack.append(equipPack2);
		}
		barbarian.removeChild(barbButton);
		barbarian.append(barbContainer, goBack);

		// const goBack = document.querySelector("button");
		goBack.addEventListener("click", function () {
			main.removeChild(strengthContainer);
			fetchFightData();
		});
	};

	const submitBarb = document.querySelector("#barb-button");
	submitBarb.addEventListener("click", function () {
		saveClass(checkBarb());
		fetchBarbData();
	});

	// FIGHTER

	const fighter = document.createElement("div");
	const fighterName = document.createElement("h1");
	const fighterInfo = document.createElement("p");
	const fighterButton = document.createElement("button");

	// assign classes

	fighter.className = "class-option-B";
	fighter.className = "class-filter";
	fighter.id = "fighter";
	fighterName.className = "class-header";
	fighterInfo.className = "class-info";
	fighterButton.className = "button";
	fighterButton.id = "fighter-button";

	// create fighter text

	fighterName.innerHTML = json.results[4]["name"];
	fighterInfo.innerHTML =
		"A fierce warrior of primitive background who can enter a battle rage.";
	fighterButton.innerHTML = "Learn More";

	//append

	fighter.append(fighterName, fighterInfo, fighterButton);
	strengthContainer.append(fighter);

	// MONK

	const monk = document.createElement("div");
	const monkName = document.createElement("h1");
	const monkInfo = document.createElement("p");
	const monkButton = document.createElement("button");

	// assign classes

	monk.className = "class-option-A";
	monk.className = "class-filter";
	monk.id = "monk";
	monkName.className = "class-header";
	monkInfo.className = "class-info";
	monkButton.className = "button";
	monkButton.id = "monk-button";

	// create barbarian text

	monkName.innerHTML = json.results[5]["name"];
	monkInfo.innerHTML =
		"A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection.";
	monkButton.innerHTML = "Learn More";

	//append

	monk.append(monkName, monkInfo, monkButton);
	strengthContainer.append(monk);

	// PALADIN

	const paladin = document.createElement("div");
	const paladinName = document.createElement("h1");
	const paladinInfo = document.createElement("p");
	const paladinButton = document.createElement("button");

	// assign classes

	paladin.className = "class-option-B";
	paladin.className = "class-filter";
	paladin.id = "paladin";
	paladinName.className = "class-header";
	paladinInfo.className = "class-info";
	paladinButton.className = "button";
	paladinButton.id = "paladin-button";

	// create barbarian text

	paladinName.innerHTML = json.results[6]["name"];
	paladinInfo.innerHTML = "A holy warrior bound to a sacred oath.";
	paladinButton.innerHTML = "Learn More";

	//append

	paladin.append(paladinName, paladinInfo, paladinButton);
	strengthContainer.append(paladin);
};

const submit = document.querySelector("button");
submit.addEventListener("click", function () {
	main.removeChild(mainHeader);
	fetchFightData();
});
