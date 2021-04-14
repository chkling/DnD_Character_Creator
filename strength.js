const main = document.querySelector("#main-body");
const mainHeader = document.querySelector(".main-class-header");
const mainHeaderIMG = document.querySelector(".main-class-img");
const mainClassStrength = document.querySelector("#main-class-body");

const fetchStrengthData = async () => {
	let response = await fetch("https://www.dnd5eapi.co/api/classes/");
	let json = await response.json();

	const strengthContainer = document.createElement("div");
	strengthContainer.className = "main-class-body";
	main.append(mainHeader);
	mainHeader.append(mainHeaderIMG);
	main.append(strengthContainer);

	// BARBARIAN

	const barbarian = document.createElement("div");
	const barbName = document.createElement("h1");
	const barbInfo = document.createElement("p");
	const barbButton = document.createElement("button");

	// ASSIGN CLASSES
	// BARBARIAN

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

		const container = document.createElement("div");
		container.id = "class-box";
		main.append(container);
		container.append(barbName, barbInfo);

		const proficiencies = document.createElement("ul");
		const proficienciesChoice = document.createElement("ul");
		const starterPack = document.createElement("ul");
		const health = document.createElement("h3");
		const classIMG = document.createElement("img");
		const goBack = document.createElement("button");
		const profContainer = document.createElement("div");
		const profChoicesContainer = document.createElement("div");
		const packContainer = document.createElement("div");

		health.className = "class-health";
		classIMG.className = "classIMG";
		profContainer.className = "proficiencies";
		profChoicesContainer.className = "proficiencies-choice";
		packContainer.className = "starter-pack";
		proficiencies.innerHTML = "List of proficiencies: ";
		proficienciesChoice.innerHTML = "Select Two: ";
		starterPack.innerHTML = "Starts with: ";
		health.innerHTML = `Starting Health Points: ${json.hit_die}`;
		classIMG.src = "images/barbarian.png";
		goBack.innerHTML = "Go Back";
		goBack.className = "button";

		container.append(classIMG, health);

		// class info generation

		for (let prof of json.proficiencies) {
			const proficiency = document.createElement("li");
			proficiency.innerHTML = prof.name;
			container.append(proficiencies);
			proficiencies.append(proficiency);
			profContainer.append(proficiencies);
		}

		for (let choice of json.proficiency_choices[0]["from"]) {
			const proficiencyChoice = document.createElement("li");
			proficiencyChoice.innerHTML = choice.name.replace("Skill: ", "");
			container.append(proficienciesChoice);
			proficienciesChoice.append(proficiencyChoice);
			profChoicesContainer.append(proficienciesChoice);
		}

		for (let equip1 of json.starting_equipment) {
			const equipPack1 = document.createElement("li");
			equipPack1.innerHTML = equip1["equipment"]["name"];
			container.append(starterPack);
			starterPack.append(equipPack1);
			packContainer.append(starterPack);
		}

		for (let equip2 of json.starting_equipment_options) {
			const equipPack2 = document.createElement("li");
			equipPack2.innerHTML = equip2["from"][0]["equipment"]["name"];
			container.append(starterPack);
			starterPack.append(equipPack2);
			packContainer.append(starterPack);
		}

		container.append(
			profContainer,
			profChoicesContainer,
			packContainer,
			goBack
		);
		main.append(container);

		goBack.addEventListener("click", function () {
			main.removeChild(container);
			fetchStrengthData();
		});
	};

	const submitBarb = document.querySelector("#barb-button");
	submitBarb.addEventListener("click", function () {
		mainHeader.removeChild(mainHeaderIMG);
		main.removeChild(strengthContainer);
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

	// INSIDE FIGHTER CLASS
	const fetchFighterData = async () => {
		let response = await fetch("https://www.dnd5eapi.co/api/classes/fighter");
		let json = await response.json();

		const container = document.createElement("div");
		container.id = "class-box";
		main.append(container);
		container.append(fighterName, fighterInfo);

		const proficiencies = document.createElement("ul");
		const proficienciesChoice = document.createElement("ul");
		const starterPack = document.createElement("ul");
		const health = document.createElement("h3");
		const classIMG = document.createElement("img");
		const goBack = document.createElement("button");
		const profContainer = document.createElement("div");
		const profChoicesContainer = document.createElement("div");
		const packContainer = document.createElement("div");

		health.className = "class-health";
		classIMG.className = "classIMG";
		profContainer.className = "proficiencies";
		profChoicesContainer.className = "proficiencies-choice";
		packContainer.className = "starter-pack";
		proficiencies.innerHTML = "List of proficiencies: ";
		proficienciesChoice.innerHTML = "Select Two: ";
		starterPack.innerHTML = "Starts with: ";
		health.innerHTML = `Starting Health Points: ${json.hit_die}`;
		classIMG.src = "images/fighter.png";
		goBack.innerHTML = "Go Back";
		goBack.className = "button";

		container.append(classIMG, health);

		// class info generation

		for (let prof of json.proficiencies) {
			const proficiency = document.createElement("li");
			proficiency.innerHTML = prof.name;
			container.append(proficiencies);
			proficiencies.append(proficiency);
			profContainer.append(proficiencies);
		}

		for (let choice of json.proficiency_choices[0]["from"]) {
			const proficiencyChoice = document.createElement("li");
			proficiencyChoice.innerHTML = choice.name.replace("Skill: ", "");
			container.append(proficienciesChoice);
			proficienciesChoice.append(proficiencyChoice);
			profChoicesContainer.append(proficienciesChoice);
		}

		for (let equip1 of json.starting_equipment) {
			const equipPack1 = document.createElement("li");
			equipPack1.innerHTML = equip1["equipment"]["name"];
			container.append(starterPack);
			starterPack.append(equipPack1);
			packContainer.append(starterPack);
		}

		// let equip2 = json.starting_equipment_options;
		const equipPack2 = document.createElement("li");
		const equipPack3 = document.createElement("li");
		const equipPack4 = document.createElement("li");
		const equipPack5 = document.createElement("li");
		const equipPack6 = document.createElement("li");

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
		packContainer.append(starterPack);

		container.append(
			profContainer,
			profChoicesContainer,
			packContainer,
			goBack
		);
		main.append(container);

		goBack.addEventListener("click", function () {
			main.removeChild(container);
			fetchStrengthData();
		});
	};

	const submitFighter = document.querySelector("#fighter-button");
	submitFighter.addEventListener("click", function () {
		mainHeader.removeChild(mainHeaderIMG);
		main.removeChild(strengthContainer);
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
		"A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection...";
	monkButton.innerHTML = "Learn More";

	//append

	monk.append(monkName, monkInfo, monkButton);
	strengthContainer.append(monk);

	const fetchMonkData = async () => {
		let response = await fetch("https://www.dnd5eapi.co/api/classes/monk");
		let json = await response.json();

		const container = document.createElement("div");
		container.id = "class-box";
		main.append(container);
		container.append(monkName, monkInfo);

		const proficiencies = document.createElement("ul");
		const proficienciesChoice = document.createElement("ul");
		const starterPack = document.createElement("ul");
		const health = document.createElement("h3");
		const classIMG = document.createElement("img");
		const goBack = document.createElement("button");
		const profContainer = document.createElement("div");
		const profChoicesContainer = document.createElement("div");
		const packContainer = document.createElement("div");

		health.className = "class-health";
		classIMG.className = "classIMG";
		profContainer.className = "proficiencies";
		profChoicesContainer.className = "proficiencies-choice";
		packContainer.className = "starter-pack";
		proficiencies.innerHTML = "List of proficiencies: ";
		proficienciesChoice.innerHTML = "Select One: ";
		starterPack.innerHTML = "Starts with: ";
		health.innerHTML = `Starting Health Points: ${json.hit_die}`;
		classIMG.src = "images/monk.png";
		goBack.innerHTML = "Go Back";
		goBack.className = "button";

		container.append(classIMG, health);

		// class info generation

		for (let prof of json.proficiencies) {
			const proficiency = document.createElement("li");
			proficiency.innerHTML = prof.name;
			container.append(proficiencies);
			proficiencies.append(proficiency);
			profContainer.append(proficiencies);
		}

		for (let choice of json.proficiency_choices[0]["from"]) {
			const proficiencyChoice = document.createElement("li");
			proficiencyChoice.innerHTML = choice.name.replace("Skill: ", "");
			container.append(proficienciesChoice);
			proficienciesChoice.append(proficiencyChoice);
			profChoicesContainer.append(proficienciesChoice);
		}

		for (let equip1 of json.starting_equipment) {
			const equipPack1 = document.createElement("li");
			equipPack1.innerHTML = equip1["equipment"]["name"];
			container.append(starterPack);
			starterPack.append(equipPack1);
			packContainer.append(starterPack);
		}

		for (let equip2 of json.starting_equipment_options) {
			const equipPack2 = document.createElement("li");
			equipPack2.innerHTML = equip2["from"][0]["equipment"]["name"];
			container.append(starterPack);
			starterPack.append(equipPack2);
			packContainer.append(starterPack);
		}
		container.append(
			profContainer,
			profChoicesContainer,
			packContainer,
			goBack
		);
		main.append(container);

		// const goBack = document.querySelector("button");
		goBack.addEventListener("click", function () {
			main.removeChild(container);
			fetchStrengthData();
		});
	};

	const submitMonk = document.querySelector("#monk-button");
	submitMonk.addEventListener("click", function () {
		mainHeader.removeChild(mainHeaderIMG);
		main.removeChild(strengthContainer);
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
	paladinInfo.innerHTML = "A holy warrior bound to a sacred oath...";
	paladinButton.innerHTML = "Learn More";

	//append

	paladin.append(paladinName, paladinInfo, paladinButton);
	strengthContainer.append(paladin);

	// PALADIN STATS
	const fetchPaladinData = async () => {
		let response = await fetch("https://www.dnd5eapi.co/api/classes/paladin");
		let json = await response.json();

		const container = document.createElement("div");
		container.id = "class-box";
		main.append(container);
		container.append(paladinName, paladinInfo);

		const proficiencies = document.createElement("ul");
		const proficienciesChoice = document.createElement("ul");
		const starterPack = document.createElement("ul");
		const health = document.createElement("h3");
		const classIMG = document.createElement("img");
		const goBack = document.createElement("button");
		const profContainer = document.createElement("div");
		const profChoicesContainer = document.createElement("div");
		const packContainer = document.createElement("div");

		health.className = "class-health";
		classIMG.className = "classIMG";
		profContainer.className = "proficiencies";
		profChoicesContainer.className = "proficiencies-choice";
		packContainer.className = "starter-pack";
		proficiencies.innerHTML = "List of proficiencies: ";
		proficienciesChoice.innerHTML = "Select Two: ";
		starterPack.innerHTML = "Starts with: ";
		health.innerHTML = `Starting Health Points: ${json.hit_die}`;
		classIMG.src = "images/paladin.png";
		goBack.innerHTML = "Go Back";
		goBack.className = "button";

		container.append(classIMG, health);

		// class info generation

		for (let prof of json.proficiencies) {
			const proficiency = document.createElement("li");
			proficiency.innerHTML = prof.name;
			container.append(proficiencies);
			proficiencies.append(proficiency);
			profContainer.append(proficiencies);
		}

		for (let choice of json.proficiency_choices[0]["from"]) {
			const proficiencyChoice = document.createElement("li");
			proficiencyChoice.innerHTML = choice.name.replace("Skill: ", "");
			container.append(proficienciesChoice);
			proficienciesChoice.append(proficiencyChoice);
			profChoicesContainer.append(proficienciesChoice);
		}

		for (let equip1 of json.starting_equipment) {
			const equipPack1 = document.createElement("li");
			equipPack1.innerHTML = equip1["equipment"]["name"];
			container.append(starterPack);
			starterPack.append(equipPack1);
			packContainer.append(starterPack);
		}

		const equipPack2 = document.createElement("li");
		const equipPack3 = document.createElement("li");
		const equipPack4 = document.createElement("li");
		const equipPack5 = document.createElement("li");

		equipPack2.innerHTML =
			json.starting_equipment_options[0]["from"][0]["0"]["equipment"]["name"];
		equipPack3.innerHTML =
			json.starting_equipment_options[0]["from"][0]["1"]["equipment_option"][
				"from"
			]["equipment_category"]["name"];
		equipPack4.innerHTML =
			json.starting_equipment_options[1]["from"][0]["equipment"]["name"];
		equipPack5.innerHTML =
			json.starting_equipment_options[2]["from"][0]["equipment"]["name"];

		container.append(starterPack);
		starterPack.append(equipPack2, equipPack3, equipPack4, equipPack5);
		packContainer.append(starterPack);

		container.append(
			profContainer,
			profChoicesContainer,
			packContainer,
			goBack
		);
		main.append(container);

		goBack.addEventListener("click", function () {
			main.removeChild(container);
			fetchStrengthData();
		});
	};

	const submitPaladin = document.querySelector("#paladin-button");
	submitPaladin.addEventListener("click", function () {
		mainHeader.removeChild(mainHeaderIMG);
		main.removeChild(strengthContainer);
		fetchPaladinData();
	});
};

fetchStrengthData();
