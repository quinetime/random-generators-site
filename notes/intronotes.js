// randomize: event, date, holoassistant/alarm, location/wealth/status, heist, how you heard about the heist.


// You awaken (to the gentle prods of your solid-light holoassistant//the shrill barks of your chronoregulator//the pulse of the chronochip implanted under the skin of the back of your hand/your wrist/the back of your neck //artificial sunlight streaming through the blinds).  "It's time to wake up," he/she/it says/: the words flash in red across your retinal display.  Your head throbs; it's the first day of 21XX, and you hit the synthohol/biobooze/alcopills/ionic cocktails pretty hard at last night's New Year's Party.  

// Your holoassisant brings you a hot mug of caffinium/neurostim/coff-E/kov/coffee, which you sip as you contemplatively gaze through the window at the Golden Gate Cyberbridge.  A view like this from the Penthouse Suite of MegaTower 12 did not come cheap, but you are good at what you do.

// And you now have another opportunity to make use of your skill.  While masked at the Governor's New Year's Ball, you managed to overhear a juicy piece of gossip from a looselipped corpo exec.

// The San/Fran Museum of Prequantum/Preholographic/Primitive Art will be showcasing oil paintings
// Bank job
// Visiting dignitary has a NOC list
// University museum antiques
// Military tech
// Corporate secrets

function buildCyberIntro() {
	let coffee = randomChoice("coffee","caffinium","neurostim","coff-E","kov","java","hotbrown","presso");
	let alcohol = randomChoice("synthohol","biobooze","alcopills","ionic cocktails","whiskeyblasters","absynth");
	let divebar = randomChoice("The Collapsing Waveform","Xeno's","The King's Bionics","Rare Earth Mineral","The Dog and Hacker","Mechaskullz","Club Neon","The Wireless Underground", "Touchscreen", "Glass and Leather","The Sensor Bar");
	let party = randomChoice("mansion","nybar","olympics","sports");
	let rich = randomChoice("true","false");
	let job = randomChoice("art","bank","NOC","antiques","military","corpo","gangboss");
	let awakener = randomChoice("implant","traffic","assistant","clock");

	let intro = "You awaken to "+cyberIntroAwaken(awakener);
	intro += ` ${randomChoice("Your heads throbs","You have a splitting headache, and you wince","A wave of light nausea washes over you","A wave of dizziness hits you")} as you ${randomChoice("wobble","stand")} to your feet. `;  
	intro += cyberIntroParty(party,alcohol,divebar);
	intro += `
	
	`;

	if (awakener=="assistant") {
		intro += `Your assistant brings you a ${randomChoice("cup","mug")} of ${coffee}, and you `;
	} else {
		intro += `You pour yourself a ${randomChoice("cup","mug")} of ${coffee} and `;
	}

	if (rich=="true") {
		intro += `sip it as you contemplatively gaze through the window at the Golden Gate ${randomChoice("Cyber","Holo","Light","Mag","Cyclo")}bridge. A view from the Penthouse Suite of MegaTower ${Math.floor(Math.random()*20)+1} did not come cheap, but you are good at what you do.

		And now you'll have another opportunity to make use of your skill. `;
		if (party=="nybar"||party=="sports") {
		intro += `Slumming it for a night at a dive bar has unexpectedly paid off. `;
		}
	} else {
		intro += `sip it as you take stock of your tiny ${randomChoice("condopod","podflat","cyberflat","techpartment")}. ${randomChoice("The size and the squalor repulse you.","A mutoroach runs under a rug, and you shudder. Disgusting.")} You've always known that you are destined for greater things; you've been waiting for your one big break. That one job that'll ${randomChoice("turn your life around","pull you to the station you deserve")}.

		And now, it seems, you have it. `;
		if (party=="mansion"||party=="olympics") {
			intro += `Sneaking into a mayoral party without an invitation paid off, big time. `
		}
	}

	intro += cyberOverhear(party);

}

function cyberIntroAwaken(awakener) {
	let str = "";
	switch (awakener) {
		case "implant":
			let skin = randomChoice("the back of your hand","your wrist","the back of your neck");
			str = `the pulse of the ${randomChoice("alarm","chrono")}chip implanted under the skin of ${skin}. The words ${randomChoice(`"It's time to wake up"`,'"WAKE UP"','"Good Morning"')} ${randomChoice("flash","scroll") in red across your ${randomChoice("ocular","retinal")} ${randomChoice("field","display")}.}`;
			break;
		case "traffic":
			str = `the sounds of morning hovertraffic as artificial dawnlight spills through the blinds of your bedroom. ${randomChoice("Bleary-eyed","Groggily")}, you ${randomChoice("glance at","roll over to face")} ${randomChoice("your chronocrystal","the time display on your sleep pod","your chronopiece")}.  It's ${randomChoice("9","10")} AM.`;
			break;
		case "assistant":
			str = `the gentle prods of your ${randomChoice("solid-light holoassistant","robotic housedroid assistant")}.  "It's the morning, ${randomChoice("my dear","boss")}," ${randomChoice("he","she","it")} says. "Time to wake up."`
			break;
		case 3: "clock"
			str = `` //to do
			break;
		default: 
			str = "";
			break;
	}
	return str;
}

function cyberIntroParty(party, alcohol,divebar) {
	switch (party) {
		case "mansion":
			return `It's the first day of 21${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}, and you hit the ${alcohol} pretty hard last night at the New Year's Eve masquerade ball hosted at the San/Fran mayoral mansion.`;
			break;
		case "nybar":
			return `It's the first day of 21${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}, and you hit the ${alcohol} pretty hard last night at the New Year's fesitivities at ${divebar}, one of San/Fran's ${randomChoice("nicer","least")} ${randomChoice("seedy","disgusting")} dive bars.`;
			break;
		case "olympics":
			return `You hit the ${alcohol} pretty hard last night. San/Fran won its bid for the the 21${Math.floor(Math.random()*10)}${(Math.floor(Math.random()*5))*2} Olympics, and the mayor threw a lavish celebration. Everyone who is anyone was invited... so of course, you found a way to be there.`;
			break;
		case "sports":
			return `The San/Fran ${randomChoice("Mutowolves","4.999ers","Cyborgs","Perceptrons","Razerbeams")} made it into the ${randomChoice("","inter")}national ${randomChoice("hypno","disc","laser","raster","vector")}ball playoffs last night for the first time since 21${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}, and you hit the ${alcohol} pretty hard celebrating down at ${divebar}.`;
			break;
		default: return "";	
	}
}

function cyberOverhear(party) {
	switch (overhear) {
		case "mansion":
			return ``;
			break;
		case "nybar":
			return ``;
			break;
		case "olympics":
			return ``;
			break;
		case "sports":
			return ``;
			break;
		case default:
			return `You got wind of a heist.`;
			break;
	}
}