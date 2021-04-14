const main = document.querySelector("#main-body");
const mainHeader = document.querySelector(".main-class-header");
const mainHeaderIMG = document.querySelector(".main-class-img");
const mainClassStrength = document.querySelector("#main-class-body");

const fetchSupportData = async () => {
	let response = await fetch("https://www.dnd5eapi.co/api/classes/");
	let json = await response.json();

	const supportContainer = document.createElement("div");
	supportContainer.className = "main-class-body";
	main.append(mainHeader);
	mainHeader.append(mainHeaderIMG);
	main.append(supportContainer);

	// BARD

	const bard = document.createElement("div");
	const bardName = document.createElement("h1");
	const bardInfo = document.createElement("p");
	const bardButton = document.createElement("button");

	// ASSIGN CLASSES
	// BARD

	// bard.className = "class-option-A";
	bard.className = "class-filter";
	bard.id = "bard";
	bardName.className = "class-header";
	bardInfo.className = "class-info";
	bardButton.className = "button";
	bardButton.id = "bard-button";

	// create bard text
	bardName.innerHTML = json.results[1]["name"];
	bardInfo.innerHTML =
		"An inspiring magician whose power echoes the music of creation...";
	bardButton.innerHTML = "Learn More";

	// append

	bard.append(bardName, bardInfo, bardButton);
	supportContainer.append(bard);

	// INSIDE bard CLASS
	const fetchBardData = async () => {
		let response = await fetch("https://www.dnd5eapi.co/api/classes/bard");
		let json = await response.json();

		const container = document.createElement("div");
		container.id = "class-box";
		main.append(container);
		container.append(bardName, bardInfo);

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
		proficienciesChoice.innerHTML = "Select Three: ";
		starterPack.innerHTML = "Starts with: ";
		health.innerHTML = `Starting Health Points: ${json.hit_die}`;
		classIMG.src = "images/bard.png";
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
			fetchSupportData();
		});
	};

	const submitBard = document.querySelector("#bard-button");
	submitBard.addEventListener("click", function () {
		mainHeader.removeChild(mainHeaderIMG);
		main.removeChild(supportContainer);
		fetchBardData();
	});

	// DRUID

	const druid = document.createElement("div");
	const druidName = document.createElement("h1");
	const druidInfo = document.createElement("p");
	const druidButton = document.createElement("button");

	// assign classes

	druid.className = "class-filter";
	druid.id = "druid";
	druidName.className = "class-header";
	druidInfo.className = "class-info";
	druidButton.className = "button";
	druidButton.id = "druid-button";

	// create druid text

	druidName.innerHTML = json.results[3]["name"];
	druidInfo.innerHTML =
		"A priest of the Old Faith, wielding the powers of nature -- moonlight and plant growth, fire and lightning -- and adopting animal forms...";
	druidButton.innerHTML = "Learn More";

	//append

	druid.append(druidName, druidInfo, druidButton);
	supportContainer.append(druid);

	///////////// FIGHTER

	// INSIDE Druid CLASS
	const fetchDruidData = async () => {
		let response = await fetch("https://www.dnd5eapi.co/api/classes/druid");
		let json = await response.json();

		const container = document.createElement("div");
		container.id = "class-box";
		main.append(container);
		container.append(druidName, druidInfo);

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
		classIMG.src = "images/druid.png";
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

		goBack.addEventListener("click", function () {
			main.removeChild(container);
			fetchSupportData();
		});
	};

	const submitDruid = document.querySelector("#druid-button");
	submitDruid.addEventListener("click", function () {
		mainHeader.removeChild(mainHeaderIMG);
		main.removeChild(supportContainer);
		fetchDruidData();
	});

	///////////// DRUID END

	////////////// RANGER START

	const ranger = document.createElement("div");
	const rangerName = document.createElement("h1");
	const rangerInfo = document.createElement("p");
	const rangerButton = document.createElement("button");

	// assign classes

	ranger.className = "class-option-A";
	ranger.className = "class-filter";
	ranger.id = "ranger";
	rangerName.className = "class-header";
	rangerInfo.className = "class-info";
	rangerButton.className = "button";
	rangerButton.id = "ranger-button";

	// create barbarian text

	rangerName.innerHTML = json.results[7]["name"];
	rangerInfo.innerHTML =
		"A warrior who uses martial prowess and nature magic to combat threats on the edges of civilization...";
	rangerButton.innerHTML = "Learn More";

	//append

	ranger.append(rangerName, rangerInfo, rangerButton);
	supportContainer.append(ranger);

	const fetchRangerData = async () => {
		let response = await fetch("https://www.dnd5eapi.co/api/classes/ranger");
		let json = await response.json();

		const container = document.createElement("div");
		container.id = "class-box";
		main.append(container);
		container.append(rangerName, rangerInfo);

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
		proficienciesChoice.innerHTML = "Select Three: ";
		starterPack.innerHTML = "Starts with: ";
		health.innerHTML = `Starting Health Points: ${json.hit_die}`;
		classIMG.src = "images/ranger.png";
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
			fetchSupportData();
		});
	};

	const submitRanger = document.querySelector("#ranger-button");
	submitRanger.addEventListener("click", function () {
		mainHeader.removeChild(mainHeaderIMG);
		main.removeChild(supportContainer);
		fetchRangerData();
	});

	//////// RANGER END

	/////// ROGUE START

	const rogue = document.createElement("div");
	const rogueName = document.createElement("h1");
	const rogueInfo = document.createElement("p");
	const rogueButton = document.createElement("button");

	// assign classes

	rogue.className = "class-option-B";
	rogue.className = "class-filter";
	rogue.id = "rogue";
	rogueName.className = "class-header";
	rogueInfo.className = "class-info";
	rogueButton.className = "button";
	rogueButton.id = "rogue-button";

	// create rogue text

	rogueName.innerHTML = json.results[8]["name"];
	rogueInfo.innerHTML =
		"A scoundrel who uses stealth and trickery to overcome obstacles and enemies...";
	rogueButton.innerHTML = "Learn More";

	//append

	rogue.append(rogueName, rogueInfo, rogueButton);
	supportContainer.append(rogue);

	// ROGUE STATS
	const fetchRogueData = async () => {
		let response = await fetch("https://www.dnd5eapi.co/api/classes/rogue");
		let json = await response.json();

		const container = document.createElement("div");
		container.id = "class-box";
		main.append(container);
		container.append(rogueName, rogueInfo);

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
		proficienciesChoice.innerHTML = "Select Four: ";
		starterPack.innerHTML = "Starts with: ";
		health.innerHTML = `Starting Health Points: ${json.hit_die}`;
		classIMG.src = "images/rogue.png";
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
		main.append(container);

		goBack.addEventListener("click", function () {
			main.removeChild(container);
			fetchSupportData();
		});
	};

	const submitRogue = document.querySelector("#rogue-button");
	submitRogue.addEventListener("click", function () {
		mainHeader.removeChild(mainHeaderIMG);
		main.removeChild(supportContainer);
		fetchRogueData();
	});
};

fetchSupportData();
