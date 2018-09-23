const lastRoles = [];
const cyberRoles = ["hacker", "magic", "politics", "religion", "driver", "detective", "brawler", "weapons", "wildcard", "fence", "corpo", "hedonist", "celebrity", "intellect", "thief", "hood", "lookout", "engineer"];
// other: explosive, weapons, acrobat, martial artist/brawler, scav, gang member, undedrworld boss  corporat lookout

let cybersHired = 0;

function nextCyberRole() {
	let randonum = Math.floor(Math.random()*cyberRoles.length);
	let newRole = cyberRoles.splice(randonum, 1)[0];
	lastRoles.push(newRole);
	if (cyberRoles.length<=5) {
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
			criminalText = cyberPolitics();
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
			criminalText = cyberWildcard();
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
			criminal = randomChoice("The Lookout: ", "The Recon: ", "The Watch: ");
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


const cyberPrefixes = ["raster", "neo", "techno", "mech", "tech", "plasma", "bit", "byte", "meme", "gif", "vector", "cyber", "plasti", "array", "crypto", "pixel", "voxel", "script", "code", "repli", "nano", "xeno", "pico", "light", "laser", "futuro", "net", "hack", "jack", "info", "holo", "mecha", "silico", "deck", "data", "robo", "giga", "retro", "circuit", "crash", "bio", "neon", "beam", "magneto", "wave", "freq", "rift", "oculo", "scan", "gene", "splice", "ion", "crack", "cipher", "mirror"];
const cyberSimplePrefixes = ["cyber", "techno", "crypto", "neo"];
const cyberMoneyPrefixes = ["neo", "corpo", "omni", "giga", "cyber", "byte", "vox", "net", "neuro", "media", "patriot", "freedom", "electro"];
const cyberMoneySuffixes = ["creds", "dollars", "coins", "bucks"];
const cyberCorpPrefixes = ["Omni", "Umbra", "Globo", "Inter", "Nett", "Shado", "Tyrell", "Ayro", "Sky", "Edu", "Yawaha", "Grün", "Ultra", "Time", "Pax", "Patreo", "Coca", "Wylan", "Cyty", "Virtu", "Philoso", "Lambda", "Upsilon", "Encyclo", "Gymno", "Geny", "Tindr", "Twitt", "Googo", "Neutrino", "ICE", "Uber", "Episteme", "Neu", "Credo", "Panthe", "Z-Wave", "Sy"];
const cyberCorpSuffixes = ["corp", "zon", "soft", "comp", "labs", " Pharmaceuticals", " Macrosystems", " Microsystems", " Telecoms", " Comms", " Systems", " Enterprises", " Brands", "bank", " Industries"];
const cyberChurch = ["XOR", "Uplink", "Inheritance Class", "Higher Scope", "Modal", "Lambda Function", "Envatted", "System S4", "Strict Entailment", "Empiricist", "Overclock", "Perceptron", "Hidden Layer", "Kernel"];
const cyberSpecies = ["human", "human", "alien", "xenomorph", "cyborg", "robot", "holo-AI", "android"];
const cyberGenders = [["his", "him", "he", "man", "boy"], ["her", "her", "she", "woman", "girl"]];
const cyberPolice = ["the FBXI", "Cypherpol", "Corpopol", "S/F/PD", "AI-Reg Enforcement", "the IRS2.0", "Drug Enforcement Systems", "the Feds", "a vigilante Street Judge"];


let cyberPrefixesTemp = cyberPrefixes.slice();
let cyberMoneyPrefixesTemp = cyberMoneyPrefixes.slice();
let cyberMoneySuffixesTemp = cyberMoneySuffixes.slice();
let cyberPoliceTemp = cyberPolice.slice();
let cyberCorpPrefixesTemp = cyberCorpPrefixes.slice();
let cyberCorpSuffixesTemp = cyberCorpSuffixes.slice();


function randCyberPrefix() {
	if (cyberPrefixesTemp.length == 0) {cyberPrefixesTemp = cyberPrefixes.slice();}
    let rando = Math.floor(Math.random() * cyberPrefixesTemp.length);
    return cyberPrefixesTemp.splice(rando, 1)[0];
}

function randCyberMoney() {
	if (cyberMoneyPrefixesTemp.length == 0) {cyberMoneyPrefixesTemp = cyberMoneyPrefixes.slice();}
	if (cyberMoneySuffixesTemp.length == 0) {cyberMoneySuffixesTemp = cyberMoneySuffixes.slice();}
	let rando = Math.floor(Math.random() * cyberMoneyPrefixesTemp.length);
	let rando2 = Math.floor(Math.random() * cyberMoneySuffixesTemp.length);
    return cyberMoneyPrefixesTemp.splice(rando, 1)[0]+cyberMoneySuffixesTemp.splice(rando2, 1)[0];
} 

function randGender() {
	let rando = Math.floor(Math.random() * 2);
	return cyberGenders[rando];
}

function randCyberPolice() {
	if (cyberPoliceTemp.length == 0) {cyberPoliceTemp = cyberPolice.slice();}
	let rando = Math.floor(Math.random() * cyberPoliceTemp.length);
    return cyberPoliceTemp.splice(rando, 1)[0];
}

function randCyberCorp() {
	if (cyberCorpPrefixesTemp.length == 0) {cyberCorpPrefixesTemp = cyberCorpPrefixes.slice();}
	if (cyberCorpSuffixesTemp.length == 0) {cyberCorpSuffixesTemp = cyberCorpSuffixes.slice();}
	let rando = Math.floor(Math.random() * cyberCorpPrefixesTemp.length);
	let rando2 = Math.floor(Math.random() * cyberCorpSuffixesTemp.length);
    return cyberCorpPrefixesTemp.splice(rando, 1)[0]+cyberCorpSuffixesTemp.splice(rando2, 1)[0];
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
	let newstr = str.charAt(0).toUpperCase() + str.substr(1);
	return newstr;
}





/// Cybercriminal role descriptions

var cyberDriverTypes = [];
function cyberDriver() {
	if (cyberDriverTypes.length == 0) {
		cyberDriverTypes = [1,2,3,4,5,6];			//enter numbers equal to the number of switchcases.
	}
	let temp = Math.floor(Math.random()*cyberDriverTypes.length);
	let switchcase = cyberDriverTypes.splice(temp, 1)[0];
	switch (switchcase) {
		case 1: 
			return `${randomChoice("R", "Br", "B", "Gr", "Kr", "Ad", "Vr", "Dr")+vowel()}m ${randomChoice("Velo", "Motto", "Vroga", "Charge", "Scree")+randomChoice("n","r","t","")}, ${randomChoice("grizzled", "hard-drinking", "disgraced", "a now-homeless")} ${randCyberPrefix()+randomChoice("cycle","buggy","bike")} racer ${randomChoice("kicked out of", "booted from", "who had his titles stripped from")} the pro ${randomChoice("circuit", "league")} for excessive ${randCyberPrefix()+randomChoice("roid","booster")} use.`;
			break;
		case 2:
			return `Vehicle Wageslave #${randomChoice("449102", "88904622", "313330012", "440441", "13X4", "CC940A")}, a gig.econ ${randomChoice("Lifttaxi", "Hovercab", "Blackcab")} driver ${randomChoice("seeking to smash the system", "trying to earn enough "+randCyberMoney()+" to purchase "+randomChoice("his","her")+" freedom")}.`;
			break;
		case 3:
			let dualletter = randomChoice("T","X","R","K","N","D","Z","L");
			let capvowel = capFirst(vowel());
			let firstlet = randomChoice("K","T","R","S","C","N","H","Q","F","G","J","P");
			let kittname = firstlet+"."+capvowel+"."+dualletter+"."+dualletter;
			return `A talking ${randomChoice("Pontiac Firebird", "Pontiac Trans Am", "Dodge Charger", "Dodge Stealth", "DeLorean")+randomChoice(""," 2100"," reissue")} named ${kittname}., the result of a panicking ${randomChoice("scientist", "technician", "researcher")} ${randomChoice("fusing", "merging")} ${randomChoice("his","her")} ${randomChoice("consciousness", "personality", "sentience")} with the AI of a self-driving car to avoid capture by ${randCyberPolice()}.`;
			break;
		case 4:
			return `${randomChoice("G","T","B","P")+"o"+randomChoice("g","m","r","rg","rque","rk")}, ${randomChoice("hairless albino", "chrome-painted")} ${randomChoice("ambassador", "exile", "missionary")} of the ${randomChoice("nomadic ","")}${randomChoice("V12", "V8", "Diesel", "Deezle", "Hi-Octane")+" "+randomChoice("Muscle Car","Convoy","Roadrace")} Cult that drives ceaselessly through the ${randomChoice("radioactive","irradiated")} ${randomChoice("Calexican","Nevegasan")} ${randomChoice("waste","bad","out","border")}lands.`
			break;
		case 5:
			let gender = randGender();
			return `${randomChoice("Bucko", "Kiddo", "Gaga", "Boyo", "Chyll", "Bod", "Baboo", "Todd", "Radio")}, a hotshot teenage rocker${gender[4]} who streams nonstop ${randCyberPrefix()}pop to ${gender[0]} auditory cortex and who drives to ${gender[0]} own beat.`
			break;
		case 6:
			return `${randomChoice("Kryan", "Gryan", "Kosslyn", "Koslin", "Ryu-san", "Scorpio", "The White Scorpion")}, ${randomChoice("a taciturn", "an untalkative", "an affectless")} ${randomChoice("Z","H","B","N","K","X")}ollywood stunt driver unaware he is a replicant created by ${randCyberCorp()}.`
			break;
		default: return "No driver.";
	}
}


var cyberWildcardTypes = [];
function cyberWildcard() {
	if (cyberWildcardTypes.length == 0) {
		cyberWildcardTypes = [1,2,3,4,5,6];			//enter numbers equal to the number of switchcases.
	}
	let temp = Math.floor(Math.random()*cyberWildcardTypes.length);
	let switchcase = cyberWildcardTypes.splice(temp, 1)[0];
	switch (switchcase) {
		case 1: 
			return `Sentient ${randomChoice("liquid","cloud","rock creature","plant","crystal","lightwave","magnetic field")} ${randomChoice("R","G","N")}'${randomChoice("fan","ming","glo","tree","por","kon","gil","ta","pro","troc")+randomChoice("ta","ba","ma","leo","ve","ril","loo","traye","nosh","plo")} ${randomChoice("Bo","Ro","Mo","Zo","Tay","Gla","Yo")+"'"+randomChoice("grt","brt","brn","trn","wray","flo","fra","sign","sne","dru","blay","n","r","d","cid")}, ${randomChoice("exile of", "visitor from", "last remaining member of a species from", "discovered alone and dying in")} ${randomChoice("Planet Q","the Omicron Dimension","the Crab Nebula","the Infosphere","the Afterlife Dimension", "Otherwhere", "the Possibility Space", "the Alterspace", "the Subjunctive Zone")}, a mystery even to ${randomChoice("itself","himself","herself")}.`;
			break;
		case 2:
			return `${randomChoice("Second","Third","Fourth")} in line to the ${randomChoice("Martian","Venusian","Alpha Centaurian","Neptunian")} throne, the ${randomChoice("ignoble","immortal","bloodthirsty")+" "+randomChoice("cyberdemon","technoprince","technodemon","cyberogre","mechanosquid", "technoprincess","cybertyrant", "spidermech")+" "+randomChoice("J","Gr","L","P","Z","T","K","Q")+"z."}`;
			break;
		case 3:
			return `${randomChoice("First", "Last", "Wisest", "Most beautiful", "Most glorified", "Most secretive", "Most decadent", "Most cunning", "Most gracious", "Most bloodthirsty", "Cruelest", "Most spite-filled")} of the ${randomChoice("Electronic", "Computational", "Amoral", "Immortal", "Telecom", "Geothermal", "Steam-Powered", "Punchcard", "Circuitboard", "Wireless", "Clockwork")} Muses, ${randomChoice("Her Excellency the Lady", "the Lady", "Oracle", "Seer", "Her Royal Highness, Lady", "Madame")} ${randomChoice("Xoriana", "Nande", "Logixx", "Bayessa", "Cleon", "Pembroke", "Cortana", "Siri", "Alexa")}.`;
			break;
		case 4:
			return `${randomChoice("Martian","Venusian","Alpha Centaurian","Neptunian","Dominion")} shapeshifter ${randomChoice("Fr","Br","Tr","Cr")+"'"+randomChoice("tata","baba","dada","lala","nana")+" "+randomChoice("Cho","Ko","Bo","Lo","Ro","Tro","Sto","Sho","Jonzz","Odo")}, whose ability to take the forms of ${randomChoice("an ID badge", "an easel", "a windowwashing pail", "a desk chair", "a smoke detector", "a pillow", "a coffee mug", "a police badge", "a severed hand", "a treadmill")} and ${randomChoice("a ladder", "a rat", "a guard dog", "a throw rug", "a piece of abstract art", "a shampoo bottle", "a toothbrush", "a wrench", "a necktie", "an alarm clock", "a plasma rifle", "a plasma grenade")} ${randomChoice("should prove invaluable", "will come in handy", "will be necessary")}.`;
			break;
		case 5:
			return `${randomChoice("10010DAC", "0011001CCF", "BAC1101", "01101010", "9F8B0C", "0x68", "RX-LQC", "1101CABBDF")}, a faulty android programmed with only ${randomChoice("one","two")} of the three laws of robotics.`;
			break;
		case 6:
			return `Dream ${randomChoice("intrusion ", "infiltration ", "derangement ")+randomChoice("agent","expert","artist")} ${randomChoice("Hector ", "Felipe ", "Ignacio ", "Pablo ", "Paolo ", "Raoul ", "Francesca ", "Rosa ", "Clara ", "Maria ")+randomChoice("de Cruz","Argento","de Santos","Lopez","Cortez","Delgado")}, ${randomChoice("skilled","certified")} in level ${randomChoice("8","9","10","14")} inceptions, specialist in ${randomChoice("instilling", "inducing")} nightmares of ${randomChoice("falling","spiders","being buried alive","snakes","loneliness","inferiority","humiliation","being chased","drowning")}.`;
			break;
		default: return "No wild card.";
	}
}
// If I want to move the Inceptor, consider a bodyswapping alien intelligence, 

var cyberPoliticsTypes = [];
function cyberPolitics() {
	if (cyberPoliticsTypes.length == 0) {
		cyberPoliticsTypes = [1,2];			//enter numbers equal to the number of switchcases.
	}
	let temp = Math.floor(Math.random()*cyberPoliticsTypes.length);
	let switchcase = cyberPoliticsTypes.splice(temp, 1)[0];
	switch (switchcase) {
		case 1:
			let gender = randGender();
			let pref = randCyberPrefix();
			function presname() {
				if (gender[0]=="his") 
					return randomChoice("Hock", "Matthew", "Reginald", "Brant", "Corr", "Flash", "Joe", "Mayhew","Prete"); 
				else return randomChoice("Linda", "Veronica", "Bett", "Pix", "Ellalla", "Condy", "Zosha","Erin","Baud");
			}
			return `${randomChoice("Convincing solid light hologram and AI duplicate","Android duplicate","Illegal vat-grown clone")} of ${presname()} ${randomChoice("Cor","Bar","Har","Stead","Cal","Flash","Fish","Auto","Steel","Glass","Shine","Wish","Win","Light","Know","Click")+randomChoice("zone","man","fast","bulb","ler","fresh","vard","yard","shot","rat","sleeze","slime","murk","dark","bright","chan","zhang","bang")}, ${randomChoice("the President of the United States of America","a paleocon congress"+gender[3]+" from Calexico", "the junior senator from New Montana", "the governor of West American Canada", "the mayor of San/Fran", "newly-elected senator from Delmarva", "the governor of Saigon Province", "a congress"+gender[3]+" from Florida Island", "a representative of West American Canada", "the Federal Secretary of "+capFirst(pref)+"defense", "the Federal Secretary of Cryptography", "the Federal Secretary of Monopolies")}.`; 
			break;
		case 2:
			return `${randomChoice("Fiery", "Impassioned", "Firebrand")} ${randCyberPrefix()+randomChoice("-anarchist", "-socialist", "-revolutionary", "-ecologist")} ${randomChoice("Sheila", "Richard", "Bil", "Devon", "Clare", "Michaela", "Enrico", "Gordon", "Donn", "Jax", "Sonya")+" "+randomChoice("Kinship","Garnish","Soda","Smitt","Turnbuckle","Mirrorshades","Blumilk","Kang","Cageless")}, ${randomChoice("candidate","currently running")} for ${randomChoice("city council","mayor","the Mall of Congress")}, ${randomChoice("an idealist", "a warrior for social progress", "a rousing speaker", "a dreamer", "a big-picture visionary")} eager to ${randomChoice("tear down the corporatocracy so that society can be built anew","tear down the government from the inside","do whatever it takes to destroy the clampdown society","do whatever is necessary to climb to the top","burn down the corporatocracy from the inside and rebuild society in its ashes")}.`;
			break;
		case 3:
			return ``;
			break;

		default: return "No politician.";
	}

	//local community leader (Griffin's werewolf) fighting for those ruined by cybermods (the Brokendown, the Overclocked, the Fried), corrupt aide or secretary at City Hall, technoshah, Alex Jones conspiracy nut, idealist politician over a virtual community in cyberspace (The Republic), but a criminal in meatspace, Corporate lobbyist, official agreed to be taken hostage

	//need more grotesque cybermods


}