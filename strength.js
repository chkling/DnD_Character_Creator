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

	// ASSIGN CLASSES
	// BARBARIAN

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
		"A fierce warrior of primitive background who can enter a battle rage...";
	barbButton.innerHTML = "Learn More";

	// append

	barbarian.append(barbName, barbInfo, barbButton);
	strengthContainer.append(barbarian);

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
		barbHealth.innerHTML = `Starting Health Points: ${json.hit_die}`;
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
		saveClass(barbarian);
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
		" A master of martial combat, skilled with a variety of weapons and armor...";
	fighterButton.innerHTML = "Learn More";

	//append

	fighter.append(fighterName, fighterInfo, fighterButton);
	strengthContainer.append(fighter);

	///////////// FIGHTER

	// INSIDE BARBARIAN CLASS
	const fetchFighterData = async () => {
		let response = await fetch("https://www.dnd5eapi.co/api/classes/fighter");
		let json = await response.json();
		console.log(json);

		const fighterContainer = document.createElement("div");
		fighterContainer.className = "class-box";
		strengthContainer.append(fighterContainer);

		const fighterProficiencies = document.createElement("ul");
		const fighterProficienciesChoice = document.createElement("ul");
		const starterPack = document.createElement("ul");
		const fighterHealth = document.createElement("h3");
		const fighterIMG = document.createElement("img");
		const goBack = document.createElement("button");

		fighterProficiencies.innerHTML = "List of proficiencies: ";
		fighterProficienciesChoice.innerHTML = "Select Two: ";
		starterPack.innerHTML = "Starts with: ";
		fighterHealth.innerHTML = `Starting Health Points: ${json.hit_die}`;
		fighterIMG.src = "images/fighter.png";
		goBack.innerHTML = "Go Back";
		goBack.className = "button";

		fighterContainer.append(fighterHealth);

		// class info generation

		for (let prof of json.proficiencies) {
			const fighterProficiency = document.createElement("li");
			fighterProficiency.innerHTML = prof.name;
			fighterContainer.append(fighterProficiencies);
			fighterProficiencies.append(fighterProficiency);
		}

		for (let choice of json.proficiency_choices[0]["from"]) {
			const fighterProficiencyChoice = document.createElement("li");
			fighterProficiencyChoice.innerHTML = choice.name;
			fighterContainer.append(fighterProficienciesChoice);
			fighterProficienciesChoice.append(fighterProficiencyChoice);
		}

		for (let equip1 of json.starting_equipment) {
			const equipPack1 = document.createElement("li");
			equipPack1.innerHTML = equip1["equipment"]["name"];
			fighterContainer.append(starterPack);
			starterPack.append(equipPack1);
		}

		// let equip2 = json.starting_equipment_options;
		const equipPack2 = document.createElement("li");
		const equipPack3 = document.createElement("li");
		const equipPack4 = document.createElement("li");
		const equipPack5 = document.createElement("li");
		const equipPack6 = document.createElement("li");
		console.log(json.starting_equipment_options["from"]);
		equipPack2.innerHTML =
			json.starting_equipment_options[0]["from"][0]["equipment"]["name"];
		equipPack3.innerHTML =
			json.starting_equipment_options[1]["from"][0]["0"]["equipment"]["name"];
		equipPack4.innerHTML =
			json.starting_equipment_options[1]["from"][0]["1"]["equipment_option"][
				"from"
			]["equipment_category"]["name"];
		equipPack5.innerHTML =
			json.starting_equipment_options[2]["from"][0]["equipment"]["name"];
		equipPack6.innerHTML =
			json.starting_equipment_options[3]["from"][0]["equipment"]["name"];
		starterPack.append(
			equipPack2,
			equipPack3,
			equipPack4,
			equipPack5,
			equipPack6
		);
		fighterContainer.append(starterPack, fighterIMG);
		fighter.removeChild(fighterButton);
		fighter.append(fighterContainer, goBack);

		// const goBack = document.querySelector("button");
		goBack.addEventListener("click", function () {
			main.removeChild(strengthContainer);
			fetchFightData();
		});
	};

	const submitFighter = document.querySelector("#fighter-button");
	submitFighter.addEventListener("click", function () {
		saveClass(fighter);
		fetchFighterData();
	});

	///////////// FIGHTER

	////////////// MONK

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

	const fetchMonkData = async () => {
		let response = await fetch("https://www.dnd5eapi.co/api/classes/monk");
		let json = await response.json();
		console.log(json);

		const monkContainer = document.createElement("div");
		monkContainer.className = "class-box";
		strengthContainer.append(monkContainer);

		const monkProficiencies = document.createElement("ul");
		const monkProficienciesChoice = document.createElement("ul");
		const starterPack = document.createElement("ul");
		const monkHealth = document.createElement("h3");
		const monkIMG = document.createElement("img");
		const goBack = document.createElement("button");

		monkProficiencies.innerHTML = "List of proficiencies: ";
		monkProficienciesChoice.innerHTML = "Select Two: ";
		starterPack.innerHTML = "Starts with: ";
		monkHealth.innerHTML = `Starting Health Points: ${json.hit_die}`;
		monkIMG.src = "images/monk.png";
		goBack.innerHTML = "Go Back";
		goBack.className = "button";

		monkContainer.append(monkIMG, monkHealth);

		// class info generation

		for (let prof of json.proficiencies) {
			const monkProficiency = document.createElement("li");
			monkProficiency.innerHTML = prof.name;
			monkContainer.append(monkProficiencies);
			monkProficiencies.append(monkProficiency);
		}

		for (let choice of json.proficiency_choices[0]["from"]) {
			const monkProficiencyChoice = document.createElement("li");
			monkProficiencyChoice.innerHTML = choice.name;
			monkContainer.append(monkProficienciesChoice);
			monkProficienciesChoice.append(monkProficiencyChoice);
		}

		for (let equip1 of json.starting_equipment) {
			const equipPack1 = document.createElement("li");
			equipPack1.innerHTML = equip1["equipment"]["name"];
			monkContainer.append(starterPack);
			starterPack.append(equipPack1);
		}

		for (let equip2 of json.starting_equipment_options) {
			const equipPack2 = document.createElement("li");
			equipPack2.innerHTML = equip2["from"][0]["equipment"]["name"];
			monkContainer.append(starterPack);
			starterPack.append(equipPack2);
		}
		monk.removeChild(monkButton);
		monk.append(monkContainer, goBack);

		// const goBack = document.querySelector("button");
		goBack.addEventListener("click", function () {
			main.removeChild(strengthContainer);
			fetchFightData();
		});
	};

	const submitMonk = document.querySelector("#monk-button");
	submitMonk.addEventListener("click", function () {
		saveClass(monk);
		fetchMonkData();
	});

	//////// MONK
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

	// create paladin text

	paladinName.innerHTML = json.results[6]["name"];
	paladinInfo.innerHTML = "A holy warrior bound to a sacred oath.";
	paladinButton.innerHTML = "Learn More";

	//append

	paladin.append(paladinName, paladinInfo, paladinButton);
	strengthContainer.append(paladin);

	// INSIDE PALADIN
	const fetchPaladinData = async () => {
		let response = await fetch("https://www.dnd5eapi.co/api/classes/paladin");
		let json = await response.json();
		console.log(json);

		const container = document.createElement("div");
		container.className = "class-box";
		strengthContainer.append(container);

		const proficiencies = document.createElement("ul");
		const proficienciesChoice = document.createElement("ul");
		const starterPack = document.createElement("ul");
		const health = document.createElement("h3");
		const classIMG = document.createElement("img");
		const goBack = document.createElement("button");

		proficiencies.innerHTML = "List of proficiencies: ";
		proficienciesChoice.innerHTML = "Select Two: ";
		starterPack.innerHTML = "Starts with: ";
		health.innerHTML = `Starting Health Points: ${json.hit_die}`;
		classIMG.src = "images/paladin.png";
		goBack.innerHTML = "Go Back";
		goBack.className = "button";

		container.append(health);

		// class info generation

		for (let prof of json.proficiencies) {
			const proficiency = document.createElement("li");
			proficiency.innerHTML = prof.name;
			container.append(proficiencies);
			proficiencies.append(proficiency);
		}

		for (let choice of json.proficiency_choices[0]["from"]) {
			const proficiencyChoice = document.createElement("li");
			proficiencyChoice.innerHTML = choice.name;
			container.append(proficienciesChoice);
			proficienciesChoice.append(proficiencyChoice);
		}

		for (let equip1 of json.starting_equipment) {
			const equipPack1 = document.createElement("li");
			equipPack1.innerHTML = equip1["equipment"]["name"];
			container.append(starterPack);
			starterPack.append(equipPack1);
		}

		for (let equip2 of json.starting_equipment_options) {
			const equipPack2 = document.createElement("li");
			equipPack2.innerHTML = equip2["from"][0]["equipment"];
			container.append(starterPack);
			starterPack.append(equipPack2);
		}
		container.append(classIMG);
		paladin.removeChild(paladinButton);
		paladin.append(container, goBack);

		// const goBack = document.querySelector("button");
		goBack.addEventListener("click", function () {
			main.removeChild(strengthContainer);
			fetchFightData();
		});
	};

	const submitPaladin = document.querySelector("#paladin-button");
	submitPaladin.addEventListener("click", function () {
		saveClass(paladin);
		fetchPaladinData();
	});
};

const submit = document.querySelector("button");
submit.addEventListener("click", function () {
	main.removeChild(mainHeader);
	fetchFightData();
});
