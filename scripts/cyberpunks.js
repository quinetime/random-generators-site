const lastRoles = [];
const cyberRoles = ["hacker", "magic", "politics", "religion", "driver", "detective", "brawler", "weapons", "wildcard", "fence", "corpo", "hedonist", "celebrity", "intellect", "thief", "hood", "lookout", "engineer"];
// other: explosive, weapons, acrobat, martial artist/brawler, scav, gang member, undedrworld boss  corporat lookout

let cybersHired = 0;

function nextCyberRole() {
	let randonum = Math.floor(Math.random()*cyberRoles.length);
	let newRole = cyberRoles.splice(randonum, 1)[0];
	lastRoles.push(newRole);
	if (lastRoles.length>cyberRoles.length-4) {
		let oldRole = lastRoles.shift();
		cyberRoles.push(oldRole);
	}
	return newRole;
}

function makeCyberpunk() {
	
	let criminal="";
	let criminalText = "";

	switch (nextCyberRole()) {
		case "hacker":
			criminal = randomChoice("The Hacker: ", "The Netrunner: ");
			break;
		case "magic":
			criminal = "The Gifted: ";
			break;
		case "politics":
			criminal = randomChoice("The Influence: ", "The Politico: ");
			break;
		case "religion":
			criminal = "The Faith: ";
			break;
		case "driver":
			criminal = randomChoice("The Driver: ", "The Getaway: ");
			criminalText = cyberDriver();
			break;
		case "detective":
			criminal = randomChoice("The Info Seeker: ", "The Tracker: ");
			break;
		case "brawler":
			criminal = randomChoice("The Brawler: ", "The Muscle: ", "The Protection: ");
			break;
		case "weapons":
			criminal = randomChoice("The Weapons Expert: ", "The Demolitions Expert: ", "The Explosives Expert: ");
			break;
		case "wildcard":
			criminal = randomChoice("The Wild Card: ", "The X Factor: ");
			break;
		case "fence":
			criminal = randomChoice("The Fence: ", "The Fixer: ");
			break;
		case "corpo":
			criminal = randomChoice("The Corporat: ", "The Executive: ");
			break;
		case "hedonist":
			criminal = randomChoice("The Distraction: ", "The Hedonist: ", "The Temptation: ", "The Smooth Operator: ");
			break;
		case "celebrity":
			criminal = randomChoice("The Celebrity: ", "The Fame: ");
			break;
		case "intellect":
			criminal = randomChoice("The Intellect: ", "The Brain: ");
			break;
		case "thief":
			criminal = randomChoice("The Thief: ", "The Rogue: ", "The Burglar: ");
			break;
		case "hood":
			criminal = randomChoice("The Street Hood: ", "The Ganger: ", "The Street Rat: ", "The Lowlife: ");
			break;
		case "engineer":
			criminal = randomChoice("The Engineer: ", "The Gearhead: ", "The Technician: ");
			break;
		case "lookout":
			criminal = randomChoice("The Look-Out: ", "The Recon: ", "The Watch: ");
			break;
		default:
			criminal = "No Criminal Found."
	}

	var cyberRoleNode = document.createElement("H3");
	cyberRoleNode.classList.add("cybertitle");
    var cyberTitleText = document.createTextNode(criminal);
    cyberRoleNode.appendChild(cyberTitleText);

    var cyberPersonNode=document.createElement("H4");
    var cyberPersonText = document.createTextNode(criminalText);
    cyberPersonNode.appendChild(cyberPersonText);
    cyberPersonNode.classList.add("cyberperson");
    cyberRoleNode.appendChild(cyberPersonNode);
    document.getElementById("cyberList").appendChild(cyberRoleNode);

    cybersHired++;
}






/// Tools for making descriptions


const cyberPrefixes = ["raster", "neo", "cred", "techno", "mech", "tech", "plasma", "bit", "byte", "meme", "gif", "vector", "cyber", "plasti", "array", "crypto", "pixel", "voxel", "script", "code", "repli", "nano", "xeno", "pico", "light", "laser", "futuro", "net", "hack", "jack", "info", "holo", "mecha", "silico", "deck", "data", "robo", "giga", "retro", "circuit", "crash", "bio", "neon", "bioport", "beam", "magneto", "wave", "freq", "rift", "oculo", "scan", "gene", "splice", "ion", "crack", "cipher"];
const cyberSimplePrefixes = ["cyber", "techno", "crypto"];
const cyberMoneyPrefixes = ["neo", "corpo", "omni", "giga", "cyber", "byte", "vox", "net", "neuro", "media", "patriot", "freedom", "electro"];
const cyberMoneySuffixes = ["creds", "dollars", "coins", "bucks"];
const cyberCorpPrefixes = ["Omni", "Umbra", "Globo", "Inter", "Nett", "Shado", "Tyrell", "Aerro", "Sky", "Edu", "Yawaha", "Grün", "Ultra", "Time", "Pax", "Patreo", "Coca", "Wylan", "Cyty", "Virtu", "Philoso", "Lambda", "Upsilon", "Encyclo", "Gymno", "Geny", "Tindr", "Twitt", "Googo", "Neutrino", "ICE", "Uber", "Episteme", "Neu", "Credo"];
const cyberCorpSuffixes = ["corp", "zon", "sys", "soft", "comp", " Pharmaceuticals", " Macrosystems", " Microsystems", " Telecoms", " Comms", " Systems", " Enterprises", " Brands", "bank", " Industries"];
const cyberChurch = ["XOR", "Uplink", "Inheritance Class", "Higher Scope", "Modal", "Lambda Function", "Envatted", "System S4", "Strict Entailment", "Empiricist", "Overclock", "Perceptron", "Hidden Layer", "Kernel"];
const cyberSpecies = ["human", "alien", "xenomorph", "cyborg", "robot", "holo-AI"];
const cyberGenders = [["his", "him", "he", "man"], ["her", "her", "she", "woman"]];
const cyberPolice = ["the FBXI", "Cypherpol", "Corpopol", "S/F/PD", "AI-Reg Enforcement", "the IRS2.0", "Drug Enforcement Systems"];


let cyberPrefixesTemp = cyberPrefixes.slice();
let cyberMoneyPrefixesTemp = cyberMoneyPrefixes.slice();
let cyberMoneySuffixesTemp = cyberMoneySuffixes.slice();
let cyberPoliceTemp = cyberPolice.slice();
let cyberCorpPrefixesTemp = cyberCorpPrefixes.slice();
let cyberCorpSuffixesTemp = cyberCorpSuffixes.slice();


function randCyberPrefix() {
	if (cyberPrefixesTemp.length == 0) {cyberPrefixesTemp = cyberPrefixes.slice();}
    let rando = Math.floor(Math.random() * cyberPrefixesTemp.length);
    return cyberPrefixesTemp.splice(rando, 1);
}

function randCyberMoney() {
	if (cyberMoneyPrefixesTemp.length == 0) {cyberMoneyPrefixesTemp = cyberMoneyPrefixes.slice();}
	if (cyberMoneySuffixesTemp.length == 0) {cyberMoneySuffixesTemp = cyberMoneySuffixes.slice();}
	let rando = Math.floor(Math.random() * cyberMoneyPrefixesTemp.length);
	let rando2 = Math.floor(Math.random() * cyberMoneySuffixesTemp.length);
    return cyberMoneyPrefixesTemp.splice(rando, 1)+cyberMoneySuffixesTemp.splice(rando2, 1);
} 

function randGender() {
	let rando = Math.floor(Math.random() * 2);
	return cyberGenders[rando];
}

function randCyberPolice() {
	if (cyberPoliceTemp.length == 0) {cyberPoliceTemp = cyberPolice.slice();}
	let rando = Math.floor(Math.random() * cyberPoliceTemp.length);
    return cyberPoliceTemp.splice(rando, 1);
}

function randCyberCorp() {
	if (cyberCorpPrefixesTemp.length == 0) {cyberCorpPrefixesTemp = cyberCorpPrefixes.slice();}
	if (cyberCorpSuffixesTemp.length == 0) {cyberCorpSuffixesTemp = cyberCorpSuffixes.slice();}
	let rando = Math.floor(Math.random() * cyberCorpPrefixesTemp.length);
	let rando2 = Math.floor(Math.random() * cyberCorpSuffixesTemp.length);
    return cyberCorpPrefixesTemp.splice(rando, 1)+cyberCorpSuffixesTemp.splice(rando2, 1);
} 

function randomChoice() {
	let rando = Math.floor(Math.random()*arguments.length);
	return arguments[rando];
}

function randomChoiceInArray(array) {
	let rando = Math.floor(Math.random()*array.length);
	return array[rando];
}


function vowel() {
	let rando = Math.floor(Math.random()*5);
	if (arguments.length == 1) {
		rando = Math.floor(Math.random()*6);
	}
	switch (rando) {
		case 0:
			return "a";
			break;
		case 1:
			return "e";
			break;
		case 2:
			return "i";
			break;
		case 3:
			return "o";
			break;
		case 4:
			return "u";
			break;
		case 5:
			return "y";
			break;
		default:
			return "a";
	}
}

function capFirst(str) {
	return str.replace(/^\w/, c => c.toUpperCase());
}





/// Cybercriminal role descriptions

var cyberDriverTypes = [];
function cyberDriver() {
	if (cyberDriverTypes.length == 0) {
		cyberDriverTypes = [1,2,3];			//enter numbers equal to the number of switchcases.
	}
	let temp = Math.floor(Math.random()*cyberDriverTypes.length);
	let switchcase = cyberDriverTypes.splice(temp, 1)[0];
	switch (switchcase) {
		case 1: 
			return `${randomChoice("R", "Br", "B", "Gr", "Kr", "Ad", "Vr", "Dr")+vowel()}m ${randomChoice("Velo", "Motto", "Vroga", "Charge", "Scree")+randomChoice("n","r","t","")}, ${randomChoice("grizzled", "hard-drinking", "disgraced", "discredited", "dishonored")} ${randCyberPrefix()+randomChoice("cycle","buggy","bike")} racer ${randomChoice("kicked out of", "booted from", "who had his titles stripped from")} the pro ${randomChoice("circuit", "league")} for excessive ${randCyberPrefix()+randomChoice("roid","booster")} use.`;
			break;
		case 2:
			return `gig.econ Vehicle Wageslave #${randomChoice("449102", "88904622", "313330012", "440441", "13X4", "CC940A")}, ${randomChoiceInArray(cyberSpecies)} ${randomChoice("Lifttaxi", "Hovercab", "Blackcab")} driver ${randomChoice("seeking to smash the system", "trying to earn enough "+randCyberMoney()+" to purchase "+randomChoice("his","her")+" freedom")}.`;
			break;
		case 3:
			let dualletter = randomChoice("T","X","R","K","N","D","Z","L");
			let capvowel = capFirst(vowel());
			let firstlet = randomChoice("K","T","R","S","C","N","H","Q","F","G","J","P");
			let kittname = firstlet+"."+capvowel+"."+dualletter+"."+dualletter;
			return `${kittname}, ex-${randomChoice("scientist", "technician", "researcher")} for ${randCyberCorp()} who ${randomChoice("fused", "merged")} ${randomChoice("his","her")} ${randomChoice("consciousness", "personality", "sentience")} with the AI of a self-driving car to avoid capture by ${randCyberPolice()}.`;
			break;
		case 4:
			return `carcult`;
			break;
		case 5:
			return `hotshot wannabe`;
			break;
		default: return "No driver.";
	}
}