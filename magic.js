const main = document.querySelector("#main-body");
const mainHeader = document.querySelector(".main-class-header");
const mainHeaderIMG = document.querySelector(".main-class-img");
const mainClassStrength = document.querySelector("#main-class-body");

const fetchMagicData = async () => {
	let response = await fetch("https://www.dnd5eapi.co/api/classes/");
	let json = await response.json();

	const magicContainer = document.createElement("div");
	magicContainer.className = "main-class-body";
	main.append(mainHeader);
	mainHeader.append(mainHeaderIMG);
	main.append(magicContainer);

	// cleric

	const cleric = document.createElement("div");
	const clericName = document.createElement("h1");
	const clericInfo = document.createElement("p");
	const clericButton = document.createElement("button");

	// ASSIGN CLASSES
	// cleric

	cleric.className = "class-filter";
	cleric.id = "cleric";
	clericName.className = "class-header";
	clericInfo.className = "class-info";
	clericButton.className = "button";
	clericButton.id = "cleric-button";

	// create cleric text
	clericName.innerHTML = json.results[2]["name"];
	clericInfo.innerHTML =
		"A priestly champion who wields divine magic in service of a higher power...";
	clericButton.innerHTML = "Learn More";

	// append

	cleric.append(clericName, clericInfo, clericButton);
	magicContainer.append(cleric);

	// INSIDE cleric CLASS
	const fetchClericData = async () => {
		let response = await fetch("https://www.dnd5eapi.co/api/classes/cleric");
		let json = await response.json();

		const container = document.createElement("div");
		container.id = "class-box";
		main.append(container);
		container.append(clericName, clericInfo);

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
		classIMG.src = "images/cleric.png";
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

		const spellName1 = document.createElement("li");
		const spellName2 = document.createElement("li");
		const spellName3 = document.createElement("li");
		const spellName4 = document.createElement("li");
		const spellName5 = document.createElement("li");
		spellName1.innerHTML = json.spellcasting["info"][0]["name"];
		spellName2.innerHTML = json.spellcasting["info"][1]["name"];
		spellName3.innerHTML = json.spellcasting["info"][2]["name"];
		spellName4.innerHTML = json.spellcasting["info"][3]["name"];
		spellName5.innerHTML = json.spellcasting["info"][4]["name"];
		starterPack.append(
			spellName1,
			spellName2,
			spellName3,
			spellName4,
			spellName5
		);

		container.append(starterPack);
		packContainer.append(starterPack);

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
			fetchMagicData();
		});
	};

	const submitcleric = document.querySelector("#cleric-button");
	submitcleric.addEventListener("click", function () {
		mainHeader.removeChild(mainHeaderIMG);
		main.removeChild(magicContainer);
		fetchClericData();
	});

	// sorcerer

	const sorcerer = document.createElement("div");
	const sorcererName = document.createElement("h1");
	const sorcererInfo = document.createElement("p");
	const sorcererButton = document.createElement("button");

	// assign classes

	sorcerer.className = "class-filter";
	sorcerer.id = "sorcerer";
	sorcererName.className = "class-header";
	sorcererInfo.className = "class-info";
	sorcererButton.className = "button";
	sorcererButton.id = "sorcerer-button";

	// create sorcerer text

	sorcererName.innerHTML = json.results[9]["name"];
	sorcererInfo.innerHTML =
		"A spellcaster who draws on inherent magic from a gift or bloodline...";
	sorcererButton.innerHTML = "Learn More";

	//append

	sorcerer.append(sorcererName, sorcererInfo, sorcererButton);
	magicContainer.append(sorcerer);

	///////////// sorcerer

	// INSIDE sorcerer CLASS
	const fetchSorcererData = async () => {
		let response = await fetch("https://www.dnd5eapi.co/api/classes/sorcerer");
		let json = await response.json();

		const container = document.createElement("div");
		container.id = "class-box";
		main.append(container);
		container.append(sorcererName, sorcererInfo);

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
		classIMG.src = "images/sorcerer.png";
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
		// const equipPack2 = document.createElement("li");
		// const equipPack3 = document.createElement("li");
		// const equipPack4 = document.createElement("li");
		// const equipPack5 = document.createElement("li");
		// const equipPack6 = document.createElement("li");

		// equipPack2.innerHTML =
		// 	json.starting_equipment_options[0]["from"][0]["equipment"]["name"];
		// equipPack3.innerHTML =
		// 	json.starting_equipment_options[1]["from"][0]["0"]["equipment"]["name"];
		// equipPack4.innerHTML =
		// 	json.starting_equipment_options[1]["from"][0]["1"]["equipment_option"][
		// 		"from"
		// 	]["equipment_category"]["name"];
		// equipPack5.innerHTML =
		// 	json.starting_equipment_options[2]["from"][0]["equipment"]["name"];
		// equipPack6.innerHTML =
		// 	json.starting_equipment_options[3]["from"][0]["equipment"]["name"];
		// starterPack.append(
		// 	equipPack2,
		// 	equipPack3,
		// 	equipPack4,
		// 	equipPack5,
		// 	equipPack6
		// );
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
			fetchMagicData();
		});
	};

	const submitSorcerer = document.querySelector("#sorcerer-button");
	submitSorcerer.addEventListener("click", function () {
		mainHeader.removeChild(mainHeaderIMG);
		main.removeChild(magicContainer);
		fetchSorcererData();
	});

	///////////// sorcerer END

	////////////// warlock START

	const warlock = document.createElement("div");
	const warlockName = document.createElement("h1");
	const warlockInfo = document.createElement("p");
	const warlockButton = document.createElement("button");

	// assign classes

	warlock.className = "class-filter";
	warlock.id = "warlock";
	warlockName.className = "class-header";
	warlockInfo.className = "class-info";
	warlockButton.className = "button";
	warlockButton.id = "warlock-button";

	// create warlock text

	warlockName.innerHTML = json.results[10]["name"];
	warlockInfo.innerHTML =
		"A wielder of magic that is derived from a bargain with an extraplanar entity...";
	warlockButton.innerHTML = "Learn More";

	//append

	warlock.append(warlockName, warlockInfo, warlockButton);
	magicContainer.append(warlock);

	const fetchWarlockData = async () => {
		let response = await fetch("https://www.dnd5eapi.co/api/classes/warlock");
		let json = await response.json();

		const container = document.createElement("div");
		container.id = "class-box";
		main.append(container);
		container.append(warlockName, warlockInfo);

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
		classIMG.src = "images/warlock.png";
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

		// for (let equip2 of json.starting_equipment_options) {
		// 	const equipPack2 = document.createElement("li");
		// 	equipPack2.innerHTML = equip2["from"][0]["equipment"]["name"];
		// 	container.append(starterPack);
		// 	starterPack.append(equipPack2);
		// }
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
			fetchMagicData();
		});
	};

	const submitWarlock = document.querySelector("#warlock-button");
	submitWarlock.addEventListener("click", function () {
		mainHeader.removeChild(mainHeaderIMG);
		main.removeChild(magicContainer);
		fetchWarlockData();
	});

	//////// warlock END

	/////// wizard START

	const wizard = document.createElement("div");
	const wizardName = document.createElement("h1");
	const wizardInfo = document.createElement("p");
	const wizardButton = document.createElement("button");

	// assign classes

	wizard.className = "class-filter";
	wizard.id = "wizard";
	wizardName.className = "class-header";
	wizardInfo.className = "class-info";
	wizardButton.className = "button";
	wizardButton.id = "wizard-button";

	// create wizard text

	wizardName.innerHTML = json.results[11]["name"];
	wizardInfo.innerHTML =
		"A scholarly magic-user capable of manipulating the structures of reality...";
	wizardButton.innerHTML = "Learn More";

	//append

	wizard.append(wizardName, wizardInfo, wizardButton);
	magicContainer.append(wizard);

	// wizard STATS
	const fetchWizardData = async () => {
		let response = await fetch("https://www.dnd5eapi.co/api/classes/wizard");
		let json = await response.json();

		const container = document.createElement("div");
		container.id = "class-box";
		main.append(container);
		container.append(wizardName, wizardInfo);

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
		classIMG.src = "images/wizard.png";
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

		// const equipPack2 = document.createElement("li");
		// const equipPack3 = document.createElement("li");
		// const equipPack4 = document.createElement("li");
		// const equipPack5 = document.createElement("li");

		// equipPack2.innerHTML =
		// 	json.starting_equipment_options[0]["from"][0]["0"]["equipment"]["name"];
		// equipPack3.innerHTML =
		// 	json.starting_equipment_options[0]["from"][0]["1"]["equipment_option"][
		// 		"from"
		// 	]["equipment_category"]["name"];
		// equipPack4.innerHTML =
		// 	json.starting_equipment_options[1]["from"][0]["equipment"]["name"];
		// equipPack5.innerHTML =
		// 	json.starting_equipment_options[2]["from"][0]["equipment"]["name"];

		// container.append(starterPack);
		// starterPack.append(equipPack2, equipPack3, equipPack4, equipPack5);

		container.append(
			profContainer,
			profChoicesContainer,
			packContainer,
			goBack
		);
		main.a;
		main.append(container);

		goBack.addEventListener("click", function () {
			main.removeChild(container);
			fetchMagicData();
		});
	};

	const submitwizard = document.querySelector("#wizard-button");
	submitwizard.addEventListener("click", function () {
		mainHeader.removeChild(mainHeaderIMG);
		main.removeChild(magicContainer);
		fetchWizardData();
	});
};

fetchMagicData();
