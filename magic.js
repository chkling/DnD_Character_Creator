const main = document.querySelector(".main-class");
const mainHeader = document.querySelector("#main-class-header");

const fetchMagicData = async () => {
	let response = await fetch("https://www.dnd5eapi.co/api/classes/");
	let json = await response.json();
	console.log(json.results);

	const magicContainer = document.createElement("div");
	magicContainer.className = "main-class-container";
	main.append(magicContainer);

	function saveClass(classDiv) {
		let object = document.querySelectorAll(".class-filter");
		console.log(object);
		for (let i = 0; i < object.length; i++) {
			let removeID = document.getElementById(object[i]["id"]);
			if (removeID !== classDiv) {
				magicContainer.removeChild(removeID);
			}
		}
	}

	// cleric

	const cleric = document.createElement("div");
	const clericName = document.createElement("h1");
	const clericInfo = document.createElement("p");
	const clericButton = document.createElement("button");

	// ASSIGN CLASSES
	// cleric

	cleric.className = "class-option-A";
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
		console.log(json);

		const container = document.createElement("div");
		container.className = "class-box";
		magicContainer.append(container);

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

		// for (let equip2 of json.starting_equipment_options) {
		// 	const equipPack2 = document.createElement("li");
		// 	equipPack2.innerHTML = equip2["from"][0]["equipment"]["name"];
		// 	container.append(starterPack);
		// 	starterPack.append(equipPack2);
		// }
		cleric.removeChild(clericButton);
		cleric.append(container, goBack);

		// const goBack = document.querySelector("button");
		goBack.addEventListener("click", function () {
			main.removeChild(magicContainer);
			fetchMagicData();
		});
	};

	const submitcleric = document.querySelector("#cleric-button");
	submitcleric.addEventListener("click", function () {
		saveClass(cleric);
		fetchClericData();
	});

	// sorceror

	const sorceror = document.createElement("div");
	const sorcerorName = document.createElement("h1");
	const sorcerorInfo = document.createElement("p");
	const sorcerorButton = document.createElement("button");

	// assign classes

	sorceror.className = "class-option-B";
	sorceror.className = "class-filter";
	sorceror.id = "sorceror";
	sorcerorName.className = "class-header";
	sorcerorInfo.className = "class-info";
	sorcerorButton.className = "button";
	sorcerorButton.id = "sorceror-button";

	// create sorceror text

	sorcerorName.innerHTML = json.results[9]["name"];
	sorcerorInfo.innerHTML =
		"A spellcaster who draws on inherent magic from a gift or bloodline...";
	sorcerorButton.innerHTML = "Learn More";

	//append

	sorceror.append(sorcerorName, sorcerorInfo, sorcerorButton);
	magicContainer.append(sorceror);

	///////////// sorceror

	// INSIDE sorceror CLASS
	const fetchSorcerorData = async () => {
		let response = await fetch("https://www.dnd5eapi.co/api/classes/sorceror");
		let json = await response.json();

		const container = document.createElement("div");
		container.className = "class-box";
		magicContainer.append(container);

		const proficiencies = document.createElement("ul");
		const proficiencychoices = document.createElement("ul");
		const starterPack = document.createElement("ul");
		const health = document.createElement("h3");
		const classIMG = document.createElement("img");
		const goBack = document.createElement("button");

		proficiencies.innerHTML = "List of proficiencies: ";
		proficiencychoices.innerHTML = "Select Two: ";
		starterPack.innerHTML = "Starts with: ";
		health.innerHTML = `Starting Health Points: ${json.hit_die}`;
		classIMG.src = "images/sorceror.png";
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
			const proficiencychoice = document.createElement("li");
			proficiencychoice.innerHTML = choice.name;
			container.append(proficiencychoices);
			proficiencychoices.append(proficiencychoice);
		}

		for (let equip1 of json.starting_equipment) {
			const equipPack1 = document.createElement("li");
			equipPack1.innerHTML = equip1["equipment"]["name"];
			container.append(starterPack);
			starterPack.append(equipPack1);
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
		container.append(starterPack, classIMG);
		sorceror.removeChild(sorcerorButton);
		sorceror.append(container, goBack);

		// const goBack = document.querySelector("button");
		goBack.addEventListener("click", function () {
			main.removeChild(magicContainer);
			fetchMagicData();
		});
	};

	const submitSorceror = document.querySelector("#sorceror-button");
	submitSorceror.addEventListener("click", function () {
		saveClass(sorceror);
		fetchSorcerorData();
	});

	///////////// sorceror END

	////////////// warlock START

	const warlock = document.createElement("div");
	const warlockName = document.createElement("h1");
	const warlockInfo = document.createElement("p");
	const warlockButton = document.createElement("button");

	// assign classes

	warlock.className = "class-option-A";
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
		console.log(json);

		const container = document.createElement("div");
		container.className = "class-box";
		magicContainer.append(container);

		const proficiencies = document.createElement("ul");
		const proficiencieschoice = document.createElement("ul");
		const starterPack = document.createElement("ul");
		const health = document.createElement("h3");
		const classIMG = document.createElement("img");
		const goBack = document.createElement("button");

		proficiencies.innerHTML = "List of proficiencies: ";
		proficiencieschoice.innerHTML = "Select Two: ";
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
		}

		for (let choice of json.proficiency_choices[0]["from"]) {
			const proficiencychoice = document.createElement("li");
			proficiencychoice.innerHTML = choice.name;
			container.append(proficiencieschoice);
			proficiencieschoice.append(proficiencychoice);
		}

		for (let equip1 of json.starting_equipment) {
			const equipPack1 = document.createElement("li");
			equipPack1.innerHTML = equip1["equipment"]["name"];
			container.append(starterPack);
			starterPack.append(equipPack1);
		}

		// for (let equip2 of json.starting_equipment_options) {
		// 	const equipPack2 = document.createElement("li");
		// 	equipPack2.innerHTML = equip2["from"][0]["equipment"]["name"];
		// 	container.append(starterPack);
		// 	starterPack.append(equipPack2);
		// }
		warlock.removeChild(warlockButton);
		warlock.append(container, goBack);

		// const goBack = document.querySelector("button");
		goBack.addEventListener("click", function () {
			main.removeChild(magicContainer);
			fetchMagicData();
		});
	};

	const submitWarlock = document.querySelector("#warlock-button");
	submitWarlock.addEventListener("click", function () {
		saveClass(warlock);
		fetchWarlockData();
	});

	//////// warlock END

	/////// wizard START

	const wizard = document.createElement("div");
	const wizardName = document.createElement("h1");
	const wizardInfo = document.createElement("p");
	const wizardButton = document.createElement("button");

	// assign classes

	wizard.className = "class-option-B";
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
		console.log(json);

		const container = document.createElement("div");
		container.className = "class-box";
		magicContainer.append(container);

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
		classIMG.src = "images/wizard.png";
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

		container.append(classIMG);
		wizard.removeChild(wizardButton);
		wizard.append(container, goBack);

		goBack.addEventListener("click", function () {
			main.removeChild(magicContainer);
			fetchMagicData();
		});
	};

	const submitwizard = document.querySelector("#wizard-button");
	submitwizard.addEventListener("click", function () {
		saveClass(wizard);
		fetchWizardData();
	});
};

fetchMagicData();
