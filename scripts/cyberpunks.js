// CYBERPUNKS

const lastRoles = [];
// const cyberRoles = ["forger", "hacker", "magic", "politics", "religion", "driver", "detective", "brawler", "weapons", "wildcard", "fence", "corpo", "hedonist", "celebrity", "intellect", "thief", "hood", "lookout", "engineer"];

const cyberRoles = ["forger","politics","religion","driver","wildcard","lookout","engineer","brawler","thief","striker","hacker"];
// other: explosive, weapons, acrobat, martial artist/brawler, strike force lead, scav, gang member, undedrworld boss  corporat corpoxec
let cybersHired = 0;
const cybersPerTeam = 6;

function nextCyberRole() {
	let randonum = Math.floor(Math.random()*cyberRoles.length);
	let newRole = cyberRoles.splice(randonum, 1)[0];
	lastRoles.push(newRole);
	if (lastRoles.length>=cybersPerTeam) {
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
			criminal = randomChoice("The Hacker: ", "The Coderunner: ", "The Netrunner: ", "The Black Hat Hacker: ");
			criminalText = cyberHacker();
			break;
		case "magic":
			criminal = "The Gifted: ";
			break;
		case "politics":
			criminal = randomChoice("The Influence: ", "The Politico: ");
			criminalText = cyberPolitics();
			break;
		case "religion":
			criminal = randomChoice("The Faith: ","The Zealot: ","The Devoted: ");
			criminalText = cyberFaith();
			break;
		case "driver":
			criminal = randomChoice("The Driver: ", "The Getaway: ", "The Wheels: ");
			criminalText = cyberDriver();
			break;
		case "detective":
			criminal = randomChoice("The Investigator: ", "The Fact-Finder: ", "The Blackmailer: ");
			break;
		case "brawler":
			criminal = randomChoice("The Brawler: ", "The Muscle: ", "The Bruiser: ", "The Brute Force: ");
			criminalText = cyberMuscle();
			break;
		case "weapons":
			criminal = randomChoice("The Safecracker: ", "The Demolitions Expert: ", "The Explosives Expert: ","The Bomb Maker: ");
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
			criminal = randomChoice("The Intellect: ", "The Brains: ");
			break;
		case "thief":
			criminal = randomChoice("The Thief: ", "The Rogue: ", "The Burglar: ","The Infiltration: ");
			criminalText = cyberThief();
			break;
		case "hood":
			criminal = randomChoice("The Street Hood: ", "The Gang Member: ", "The Street Rat: ", "The Lowlife: ");
			break;
		case "engineer":
			criminal = randomChoice("The Engineer: ", "The Gearhead: ", "The Technician: ");
			criminalText = cyberEng();
			break;
		case "lookout":
			criminal = randomChoice("The Lookout: ", "The Scout: ", "The Watch: ", "The Sentry: ");
			criminalText = cyberWatch();
			break;
		case "forger":
			criminal = randomChoice("The Forger: ", "The Counterfeiter: ");
			criminalText = cyberForger();
			break;
		case "striker":
			criminal = randomChoice("The Strike Team Leader: ", "The Spearhead: ");
			criminalText = cyberStriker();
			break;
		default:
			criminal = "No Criminal Found."
	}

	var cyberRoleNode = document.createElement("H3");
	cyberRoleNode.classList.add("cybertitle");
    var cyberTitleText = document.createTextNode(criminal);
    cyberRoleNode.appendChild(cyberTitleText);

    var cyberPersonNode = document.createElement("H4");
    var cyberPersonText = document.createTextNode(criminalText);
    cyberPersonNode.appendChild(cyberPersonText);
    cyberPersonNode.classList.add("cyberperson");
    cyberRoleNode.appendChild(cyberPersonNode);

    var cyberPersonWrapper = document.createElement("div");
    cyberPersonWrapper.classList.add("cyberwrapper");
    cyberPersonWrapper.appendChild(cyberRoleNode);
    //cyberPersonWrapper.appendChild(cyberPersonNode);

    document.getElementById("cyberList").appendChild(cyberRoleNode);

    setTimeout(function() {
     	cyberRoleNode.classList.add("cybershow");
  	}, 10);

    cybersHired++;
    let outcome = "";
    
    if (cybersHired<(cybersPerTeam-1)) {
    	outcome = `You need ${cybersPerTeam-cybersHired} more ${randomChoice("team members","accomplices","associates","heistmates")}.`;
    }
    if (cybersHired==(cybersPerTeam-1)) {
    	outcome = `You need just one more ${randomChoice("team member","accomplice","associate","heistmate")}.`;
    }

    if (cybersHired >= cybersPerTeam) { // comment this block out to keep an ever expanding list.
    	outcome = randomChoice("That's it! You've assembled your team. ","You've got your crew. Not a bad bunch. ","That's it! You're done recruiting your accomplices. ")+"You take stock of each of them one last time, "+randomChoice(`your ${randomChoice("cybermind","mental augments")} calculating all the possible outcomes. `,"mentally going over who needs to be where, when. ","visualizing them playing out their roles. ", "rehearsing the plan in your mind. ")+randomChoice("You smile. This is going to be fun.",`You laugh out loud${randomChoice("",", to the confused stares of your teammates")}. There's no way this plan can fail.`,"You're a little nervous, but you're pretty sure you've got this.", "You're confident. You've got this.");
    	let gotime = randomChoice("It's Go Time","Heist!","Strike Team: Go!","Initiate Heist","Let's Do This Thing");
    	document.getElementById("cyberBtn").onclick = cyberHeistOutcome;
    	document.getElementById("cyberBtn").childNodes[0].nodeValue = gotime;
    }
    setTextContent(document.getElementById("cyberOutcome"),outcome);
}

function cyberHeistOutcome() {
	let outcome = "";
	switch (randCyberOutcome()) {
		case "totaldisaster":
			outcome = `${randomChoice("DISASTER!", "What a disaster!",'"ABORT! ABORT!" The cry came over the headcomms too late for you to do anything about it.')} The mission ${randomChoice("was a shambles from the start","was a total failure","was a colossal failure","could haven't have gone worse")}. ${randomChoice("One of your accomplices was","Two of your accomplices were")} ${randomChoice("slain","gunned down","completely fried","vaporized into nothingness","cut apart by laser wires")}, and another ${randomChoice("two","three")} were captured${randomChoice(""," and thrown into cryostasis"," and deported from the planet")}. You yourself barely managed ${randomChoice("to escape","to get away")}, and now you're on the ${randomChoice("lam","run")} from both corpos and the gov. ${randomChoice("This is not the life that you wanted.","This is not the bright future you were promised.","You can't see yourself getting out of this one.")}`;
			break;
		case "totalsuccess":
			outcome = `${randomChoice("Excellent work.","Success!","Great job!","OUTSTANDING!")} The plan went off without a hitch. No one aside from you and your team even realizes that a ${randomChoice("burglary","robbery","theft")} took place. Everyone played their role perfectly, and you expect to work with all of them again soon. In the meantime, celebration is deserved. ${randomChoice("A week in a VR pleasurechamber","A vacation in Chilean Tahiti","A new model 3000 jetcraft","A shopping spree at Quartz's Finery","The tasting menu at Au Pied de Plutonien","A bottle of Chateau de Brocheque Rouge 2077")}, perhaps?`;
			break;
		case "dicey":
			outcome = `${randomChoice("The heist was a success... but things got pretty dicey there.","Success! Things got pretty dicey for a moment though.","You pulled it off! Barely.")} ${randomChoice("An unexpected guard","An unfortunate coincidence","An unexpected witness","An unusually brave security droid","An unexpected smogstorm","A passing cam-drone","An unscheduled fallout warning test alarm","A rolling brownout")} ${randomChoice("almost ruined the whole plan","threatened to unravel the entire plan")}, but ${randomChoice("quick thinking from two of your accomplices","some clever improvisation from one of your accomplices")} saved the day. Celebration is in order! ${randomChoice("A week in a VR pleasurechamber","A vacation in Chilean Tahiti","A new model 3000 jetcraft","A shopping spree at Quartz's Finery","The tasting menu at Au Pied de Plutonien","A bottle of Chateau de Brocheque Rouge 2077")}, perhaps?`;
			break;
		case "surpriseending":
			outcome = `After${"wards"," the attempted heist"}, you debrief with your accomplices at ${randomChoice("the meeting place","the rendezvous","headquarters","the hideout")}. ${randomChoice("By all accounts,","Everyone is angry:","Everyone is frustrated:")} the mission was a failure. No one was captured or ${randomChoice("injured","hurt")}, but that's the best that you can say. Your accomplices file out, ${randomChoice("cursing you under their breath","vowing to never work with you again","some apologetic, others seething")}. After locking the door behind them, you open a safe hidden ${randomChoice("behind a vidscreen","under a floorboard")} to take another look at the goods. You've betrayed your ${randomChoice("teammates","crew")}. But you won't have to share the profits. Celebration is in order. ${randomChoice("A week in a VR pleasurechamber","A vacation in Chilean Tahiti","A new model 3000 jetcraft",`A shopping spree at ${randomChoice("Quartz","Zaphod")}'s Finery`,"The tasting menu at Au Pied de Plutonien","A bottle of Chateau de Brocheque Rouge 2077")}, perhaps?`;
			break;
		case "betrayal":
			outcome = `You are ${"furious","incandescent with anger","seething with fury"}. Everything was going ${randomChoice("great","swimmingly","perfectly","according to plan")}. But then... you were betrayed. ${randomChoice("Two","Three")} of your squadmates apparently had ${randomChoice("a secret understanding","a plan of their own")}: they've disappeared, and they've taken the goods with them. The rest of you barely managed to ${randomChoice("evade authorities","escape without getting caught","escape with your lives")}. Now you have a ${randomChoice("vendetta","score to settle")}.`;
			break;
		default:
	}

	if (!document.getElementById("cyberOutcome").classList.contains("fadedout")) {
		document.getElementById("cyberOutcome").classList.add("fadedout")
	}

	document.getElementById("cyberBtn").disabled=true;

	setTimeout(function() {
 		setTextContent(document.getElementById("cyberOutcome"),outcome);
      	document.getElementById("cyberOutcome").classList.remove("fadedout");
  		document.getElementById("cyberBtn").onclick = cyberReset;
		document.getElementById("cyberBtn").childNodes[0].nodeValue = "RESTART";
		document.getElementById("cyberBtn").disabled=false;
   	}, 300);


}

function cyberReset() {
	cybersHired = 0;
	document.getElementById("cyberBtn").onclick = makeCyberpunk;
	document.getElementById("cyberBtn").childNodes[0].nodeValue = "Enlist Cybercriminal";
	setTextContent(document.getElementById("cyberOutcome"),"");

	let listNode = document.getElementById("cyberList");

	while (listNode.firstChild) {
		listNode.removeChild(listNode.lastChild);
	}

	location.hash = "#cyberpunks";
	buildCyberIntro();
}






/// Tools for making descriptions


const cyberPrefixes = ["raster", "neo", "techno", "mech", "tech", "plasma", "bit", "byte", "meme", "gif", "vector", "cyber", "plasti", "array", "crypto", "pixel", "voxel", "script", "code", "repli", "nano", "xeno", "pico", "light", "laser", "futuro", "net", "hack", "jack", "info", "holo", "mecha", "silico", "deck", "data", "robo", "giga", "circuit", "crash", "bio", "neon", "beam", "magneto", "wave", "freq", "rift", "oculo", "scan", "gene", "splice", "ion", "crack", "cipher", "mirror", "hyper", "quantum", "digi","fusion","edge","smart"];
const cyberSimplePrefixes = ["cyber", "techno", "crypto", "neo", "nano"];
const cyberMoneyPrefixes = ["neo", "corpo", "omni", "giga", "cyber", "byte", "vox", "net", "neuro", "media", "patriot", "electro"];
const cyberMoneySuffixes = ["creds", "dollars", "coins", "bucks"];
const cyberCorpPrefixes = ["Omni", "Umbra", "Globo", "Inter", randomChoice("X","Z","L","M","Y","K","G")+"-Net", "Shado", "Tyrell", "Ayro", "Sky", "Edu", "Yawaha", "Grün", "Ultra", "Time", "Pax", "Patreo", "Coca", "Wylan", "Cyty", "Virtu", "Philoso", "Lambda", "Upsilon", "Encyclo", "Gymno", "Geny", "Tindr", "Twitt", "Googo", "Neutrino", "ICE", "Uber", "Episteme", "Neu", "Credo", "Panthe", "Z-Wave", "Sy"];
const cyberCorpSuffixes = ["corp", "zon", "soft", "comp", "labs", " Pharmaceuticals", " Macrosystems", " Microsystems", " Telecoms", " Comms", " Systems", " Enterprises", " Brands", " Industries", " Biotech", "xon Biofuels"];
const cyberSpecies = ["human", "human", "alien", "xenomorph", "cyborg", "robot", "holo-AI", "android"];
const cyberGenders = [["his", "him", "he", "man", "boy"], ["her", "her", "she", "woman", "girl"]];
const cyberPolice = ["the FBXI", "Cypherpol", "Corpopol", "the S/F/PD", "AI-Reg Enforcement", "the IRS2.0", "Drug Enforcement Systems", "the Feds", "a vigilante Street Judge"];
const cyberParty = ["mansion","nybar","olympics","sports"];
const cyberOutcomeList = ["totalsuccess","totaldisaster","dicey","betrayal","surpriseending"];


let cyberPrefixesTemp = cyberPrefixes.slice();
let cyberMoneyPrefixesTemp = cyberMoneyPrefixes.slice();
let cyberMoneySuffixesTemp = cyberMoneySuffixes.slice();
let cyberPoliceTemp = cyberPolice.slice();
let cyberCorpPrefixesTemp = cyberCorpPrefixes.slice();
let cyberCorpSuffixesTemp = cyberCorpSuffixes.slice();
let cyberPartyTemp = cyberParty.slice();
let cyberOutcomeListTemp = cyberOutcomeList.slice();


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

function randCyberParty() {
	if (cyberPartyTemp.length == 0) {cyberPartyTemp = cyberParty.slice();}
    let rando = Math.floor(Math.random() * cyberPartyTemp.length);
    return cyberPartyTemp.splice(rando, 1)[0];
}

function randCyberOutcome() {
	if (cyberOutcomeListTemp.length == 0) {cyberOutcomeListTemp = cyberOutcomeList.slice();}
    let rando = Math.floor(Math.random() * cyberOutcomeListTemp.length);
    return cyberOutcomeListTemp.splice(rando, 1)[0];
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

function randCaps(str) {
	let newstr = str.charAt(0).toUpperCase();
	for (let i=1;i<str.length;i++) {
		let randonum = Math.floor(Math.random()*2);
		if (randonum == 0) {
			newstr+=str.charAt(i).toLowerCase();
		}
		else {
			newstr+=str.charAt(i).toUpperCase();
		}
	}
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
			return `Vehicle Wageslave #${randomChoice("449102", "88904622", "313330012", "440441", "13X4", "CC940A")}, a gig.econ ${randomChoice("Lifttaxi","Hovercab","Blackcab","Johnnycab","Uberlift")} driver ${randomChoice("seeking to smash the system", "trying to earn enough "+randCyberMoney()+" to purchase "+randomChoice("his","her")+" freedom")}.`;
			break;
		case 3:
			let dualletter = randomChoice("T","X","R","K","N","D","Z","L");
			let capvowel = capFirst(vowel());
			let firstlet = randomChoice("K","T","R","S","C","N","H","Q","F","G","J","P");
			let kittname = firstlet+"."+capvowel+"."+dualletter+"."+dualletter;
			return `A talking ${randomChoice("Pontiac Firebird", "Pontiac Trans Am", "Dodge Charger", "Dodge Stealth", "DeLorean")+randomChoice(""," 2100"," reissue")} named ${kittname}., the result of a ${randomChoice("scientist", "technician", "researcher")} ${randomChoice("fusing", "merging")} ${randomChoice("his","her")} ${randomChoice("consciousness", "personality", "sentience")} with the AI of a self-driving car to avoid capture by ${randCyberPolice()}.`;
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
		default: return "No driver can be found.";
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
			return `Sentient ${randomChoice("liquid","cloud","rock creature","plant","crystal","lightwave","magnetic field","patch of color")} ${randomChoice("R","G","N")}'${randomChoice("fan","ming","glo","tree","por","kon","gil","ta","pro","troc")+randomChoice("ta","ba","ma","leo","ve","ril","loo","traye","nosh","plo")} ${randomChoice("Bo","Ro","Mo","Zo","Tay","Gla","Yo")+"'"+randomChoice("grt","brt","brn","trn","wray","flo","fra","sign","sne","dru","blay","n","r","d","cid")}, ${randomChoice("exile of", "visitor from", "last remaining member of a species from", "discovered alone and dying in")} ${randomChoice("the mines of Planet Q","the Omicron Dimension","the Crab Nebula","the Infosphere","the Afterlife Dimension", "Otherwhere", "the Possibility Space", "the Alterspace", "the Subjunctive Zone")}, a mystery even to ${randomChoice("itself","himself","herself")}.`;
			break;
		case 2:
			return `${randomChoice("Second","Third","Fourth")} in line to the ${randomChoice("Martian","Venusian","Alpha Centaurian","Neptunian")} throne, the ${randomChoice("ignoble","immortal","bloodthirsty")+" "+randomChoice("cyberdemon","technoprince","technodemon","cyberogre","mechanosquid", "technoprincess","cybertyrant", "spidermech")+" "+randomChoice("J","Gr","L","P","Z","T","K","Q")+"z."}`;
			break;
		case 3:
			return `${randomChoice("First", "Last", "Wisest", "Most beautiful", "Most glorified", "Most secretive", "Most decadent", "Most cunning", "Most gracious", "Most bloodthirsty", "Cruelest", "Most spite-filled")} of the ${randomChoice("Electronic", "Computational", "Amoral", "Immortal", "Telecom", "Geothermal", "Steam-Powered", "Punchcard", "Circuitboard", "Wireless", "Clockwork")} Muses, ${randomChoice("Her Excellency, the Lady", "the Lady", "Oracle", "Seer", "Her Royal Highness, Lady", "Madame")} ${randomChoice("Xoriana", "Nande", "Logixx", "Bayessa", "Cleon", "Pembroke", "Cortana", "Siri", "Alexa","Lovelace")}.`;
			break;
		case 4:
			return `${randomChoice("Martian","Venusian","Alpha Centaurian","Neptunian","Dominion")} shapeshifter ${randomChoice("Fr","Br","Tr","Cr")+"'"+randomChoice("tata","baba","dada","lala","nana")+" "+randomChoice("Cho","Ko","Bo","Lo","Ro","Tro","Sto","Sho","Jonzz","Odo")}, whose ability to take the forms of ${randomChoice("an ID badge", "an easel", "a window-washing pail", "a desk chair", "a smoke detector", "a pillow", "a coffee mug", "a police badge", "a severed hand", "a treadmill")} and ${randomChoice("a ladder", "a rat", "a guard dog", "a throw rug", "a piece of abstract art", "a shampoo bottle", "a toothbrush", "a wrench", "a necktie", "an alarm clock", "a plasma rifle", "a plasma grenade")} ${randomChoice("should prove invaluable", "will come in handy", "will be necessary")}.`;
			break;
		case 5:
			return `${randomChoice("10010DAC", "0011001CCF", "BAC1101", "01101010", "9F8B0C", "0x68", "RX-LQC", "1101CABBDF")}, a faulty android programmed with only ${randomChoice("one","two")} of the three laws of robotics.`;
			break;
		case 6:
			return `Dream ${randomChoice("intrusion ", "infiltration ", "derangement ")+randomChoice("agent","expert","artist")} ${randomChoice("Hector ", "Felipe ", "Ignacio ", "Pablo ", "Paolo ", "Raoul ", "Rosa ", "Clara ", "Maria ", "Lalo ", "Leonel ", "Marco ", "Gabriela ", "Fernando ")+randomChoice("de Cruz","de Santos","Lopez","Cortez","Delgado","Diaz","Campos")}, ${randomChoice("skilled","certified")} in level ${randomChoice("8","9","10","14")} inceptions, specialist in ${randomChoice("instilling", "inducing")} nightmares of ${randomChoice("falling","spiders","being buried alive","snakes","loneliness","inferiority","humiliation","being chased","drowning")}.`;
			break;
		default: return "No wild card can be found.";
	}
}
// If I want to move the Inceptor, consider a bodyswapping alien intelligence

var cyberPoliticsTypes = [];
function cyberPolitics() {
	if (cyberPoliticsTypes.length == 0) {
		cyberPoliticsTypes = [1,2,3,4,5,6];			//enter numbers equal to the number of switchcases.
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
			return `${randomChoice("Convincing solid light hologram and AI duplicate","Android duplicate","Illegal vat-grown clone")} of ${presname()} ${randomChoice("Cor","Bar","Har","Stead","Cal","Flash","Fish","Auto","Steel","Glass","Shine","Wish","Win","Light","Know","Click")+randomChoice("zone","man","fast","bulb","ler","fresh","vard","yard","shot","rat","sleeze","slime","murk","dark","bright","chan","zhang","bang","star")}, ${randomChoice("the President of the United States of America","paleocon congress"+gender[3]+" from Calexico", "the junior senator from New Montana", "the governor of West American Canada", "the mayor of San/Fran", "newly-elected senator from Delmarva", "the governor of Saigon Province", "congress"+gender[3]+" from Florida Island", "the Federal Secretary of "+capFirst(pref)+"defense", "the Federal Secretary of Cryptography", "the Federal Secretary of Monopolies", "an important diplomat from Eurasia")}.`; 
			break;
		case 2:
			return `${randomChoice("Fiery", "Impassioned", "Firebrand")} ${randCyberPrefix()+randomChoice("-anarchist", "-socialist", "-revolutionary", "-ecologist")} ${randomChoice("Sheila", "Richard", "Bil", "Devon", "Clare", "Michaela", "Enrico", "Gordon", "Donn", "Jax", "Sonya")+" "+randomChoice("Kinship","Garnish","Soda","Smitt","Turnbuckle","Mirrorshades","Blumilk","Kang","Cageless", "Kong")}, ${randomChoice("candidate","currently running")} for ${randomChoice("city council","mayor","Penthouse of Congress","board of Megablock 4","Administrator of MegaTower 1")}, ${randomChoice("an outspoken idealist", "a warrior for social progress", "a rousing speaker", "a dreamer", "a big-picture visionary")} eager to ${randomChoice("tear down the corporatocracy so that society can be built anew","tear down the government from the inside","do whatever it takes to destroy the clampdown government","do whatever is necessary to climb to the top","burn down the corporatocracy from the inside and rebuild society in its ashes")}.`;
			break;
		case 3:
			return `${randomChoice("Community leader", "Neighborhood leader", "Activist leader", "Hacktivist leader", "Hacktivist/cracktivist")} ${randomChoice("Brackton", "Gilton", "Renee", "Nock", "Harv", "Marvon", "Jenee", "Gliston", "Sol", "Janel")} ${randomChoice("Sinclair", "Stitcher", "Castle", "Chantz", "Zackton", "Goodday")}, violent and revolutionary advocate for the ${randomChoice("Bakebrains", "Bluescreens", "Brokendowns")}, those ${randomChoice("pitiful","sorry","unfortunate","wretched")} ${randomChoice("citizens","individuals","victims")} so overloaded with experimental ${randomChoice("wetware","biomods","neuromods","corticosculpts")} by the ${randomChoice("gov","government","corpos")} that they ${randomChoice("blinked out","system-crashed","lost hold of reality")}.`;
			break;
		case 4:
			let goodname = randomChoice("Tad","Joe","Jon","Ted","Bil","Wil","Jim","Don","Ron");
			return `${randomChoice("Handsome","Smiling","Friendly","Kind-Eyed","Wise and Dimpled","Humble", "Goodboy")+" "+goodname}, ${randomChoice("extremely popular","beloved")+" "+randomChoice("President","Prime Minister")} of the virtual cyberspace country of ${goodname+"topia (population: "+randomChoice("seven","eight","twelve","twenty-one","forty")} million) who in meatspace is secretly the infamous ${randomChoice("terrorist","arsonist","kidnapper")+" and "+randomChoice("assassin ","murderer ","serial killer ")+randomChoice("Filthy ","Horrorshow ","Bandsaw ","Bonecrack ","Pigblood ","Lobotomy ")+randomChoice("Pete","Chuck","Burt","Stu","Dick","Rob")}.`;
			break;
		case 5:
			let cappre = capFirst(randCyberPrefix());
			return `${randomChoice("Br","N","Sp","L","R","Str","Pl","Ph","J","K")+randomChoice("aul","ichard","ichael","ack","elvin","obert","istopher","onny","ohnathan","athan","ian", "effrey")+" "+randomChoice("Jones","Smith","Jefferson","Jameson","James","Johns","McKay")}, State ${cappre+randomChoice("secretary","-Overseer","-Admin")} so overburdened with ${randomChoice("cybergambling debts","creditchip debt","his cryptomortgage","the costs of his expensive holosuite addiction")} that he has agreed to help us acquire the ${randomChoice("security room access","VR security footage","sewer holomaps","building access neurocodes","government nanoschedules","blockchains","military tech","firewall crack","government clearance", "phase shifters")} we need and provide us with a cover story in the ${randCyberPrefix()}${randomChoice("-media","-news")}.`;
		case 6:
			let lastn = randomChoice("Jonzz","Alexx","Smith","Freqout","Snuze","Drear","Clott","Grott","Trawl","Phylax","Mudd","Druck","Ziil","Trutch", "Plott", "Glugg");
			let news = lastn+" "+capFirst(randCyberPrefix()+randomChoice("report","Eye","news","times","blitz","-Update","-Enquirer","-Inquiry","tattle","snoop","cast"));
			return `${randomChoice("Grundle","Fredder","Balder","Hander","Cinder","Buggle","Uggle","Crog","Bug","Conker")+randomChoice("drudge","tote","grote","chunt","cruft","pore","plunt","rush","hump","mane","brox")} ${lastn}, ${randomChoice("squat","short","greasy","lunatic","loud")} and ${randomChoice("unsavory","contemptible","dissolute")} ${randomChoice("host","editor","journo","muckracker")} of the conspiracy-minded ${randomChoice("holoprogram","cyberrag","cybertube show","podwire show","tabloidtube","tabloid")} The ${news}, a ${randomChoice("confusingly","frustratingly","surprisingly")} influential ${randomChoice("blowhard","gasbag","slimeball","creep")} who has had so many ${randomChoice("senshancements","facegrafts","cheekpuffs")} and ${randomChoice("skinfrills","oculomods","sweatbloks")} installed that he looks ${randomChoice("just","almost exactly", "a lot")} like a ${randomChoice("wastetoad","mutofrog","raccoon","wasteland lemur","kinkajou","blobfish", "catfish", randCyberPrefix()+"muppet")}.`;
			break;

		default: return "No politician can be found.";
	}
}

var cyberWatchTypes = [];
function cyberWatch() {
	if (cyberWatchTypes.length == 0) {
		cyberWatchTypes = [1,2,3,4,5,6];			//enter numbers equal to the number of switchcases.
	}
	let temp = Math.floor(Math.random()*cyberWatchTypes.length);
	let switchcase = cyberWatchTypes.splice(temp, 1)[0];
	let gend = randGender();
	switch (switchcase) {
		case 1:
			hivemindNum = randomChoice("fourteen", "sixteen", "eight", "twelve", "nine");
			return `The ${randomChoice("Midwich","Borgia","San Bernardino","Dunwich","Alcatraz","Simi Valley","Bordeaux","Brie","Savescumm","Voight-Ashbury")} ${randomChoice("Commune","One-Mind","Ego","Network","Consortium","Collective","Aggregate","Aggregation","Polyphony","Organon","Organum")}, a hivemind-for-hire made up of ${hivemindNum} ${randomChoice("gang members","college students","housewives","teenagers","Prussian mobsters","bohemians","French mobsters","escaped prisoners")} so ${randomChoice("thoroughly","completely")} ${randomChoice("quantum-","synaptico-")}${randomChoice("networked","interlinked")} that they have become a single conscious ${randomChoice("being", "entity")} with ${randomChoice(hivemindNum)} bodies... and ${randomChoice(hivemindNum)} pairs of eyes to ${randomChoice("keep lookout", "keep watch", "survey the job site", "help coordinate our activities")}.`;
			break;
		case 2:
			return `${randomChoice("Josh","Barb","Greg","Mon","Max","Mal","Jenn")+randomChoice("ua","ifer","ara","pold","ory","ica","field","imillian")} ${randomChoice("Up","Down","Fly","Spider","Ant","Bould","Climb","Verti","Whirli","Hop")+randomChoice("wards","face","slope","scale","leap","jump","kick")}, ${randomChoice("Olympic-level","latinum-medal-winning","godtier","professional","galaxy-class")} ${randomChoice("free-runner","parkour expert","arrythmic gymnast", "track star")} outfitted with a pair of ${randomChoice("grav-","mag-","gravmag-")+randomChoice("boots","shoes","footpads")} that lets ${randomChoice("him","her")} run straight up walls at ${randomChoice("incredible","dizzying","astounding","next-gen")} speeds.`;
			break;
		case 3:
			return `${randomChoice("Pug","Pup","Kit","Bee","Eel","Gecko","Pett","Pupa")} ${randomChoice("M","P","L","R")+vowel("y")+randomChoice("ria","stia","gra","gry","rry","ren","rent","rrent","ckent")}, animal body${randomChoice("mod","sculpt")} ${randomChoice("fanatic","addict")} who can fly above the site of the heist on ${gend[0]} ${randomChoice("dragonfly wings","eagle wings","crow wings","batwings")} and ${randomChoice("surveil","keep tabs on")} the scene with ${randomChoice(gend[0]+" hawk's eyes",gend[0]+" ultraviolet-sensing compound eyes",gend[0]+" enormous tarsier eyes",gend[0]+" nightvision cateyes", "the eyes of twelve different animals")}, ${gend[0]} ${randomChoice("bloodhound's nose", "St. Bernard's nose", "three dog noses", "huge rabbit ears", "huge elephant ears")}, and ${gend[0]} ${randomChoice("dolphingraft sonar", "sharkgraft sensivitity to electric fields", "pigeongraft sensitivity to magnetic fields")}.`;
			break;
		case 4:
			return `${randomChoice("Midas","Elvin","Flyboy","Goldcoil","Hetset","Hurlburt","Goose","Mavric","Jester")} ${randomChoice("K","P","M","F","T")}. ${randomChoice("Keats","Keaton","Airson","Millet","Cortell","Metacalf","Bradshaw","Eisman")}, ${randomChoice("discharged Cosmoforce pilot","octogenarian aviation enthusiast","basement-dwelling peeping tom")} whose ${randomChoice("primary visual cortex is linked to","optic nerve fibers receive wireless signals from")} the cameras of ${randomChoice("thirty","forty","fifty","sixty")} ${randomChoice("aerodrones","soarsphere drones","helidrones","helicopter drones")}.`;
			break;
		case 5:
			return `${randomChoice("Oculara","Oculax","Oculon","Sclera","Iris","Orbo","Corneax","Sclerax","Viz","Augle","Oggle")}, a ${randomChoice("telepathic","talking")} ${randomChoice("two-foot-wide","cantaloupe-sized","baseball-sized")} ${randomChoice("floating","hovering")} eyeball ${randomChoice("who","that")} ${randomChoice("alleges","purports")} to be ${randomChoice("","just ")}an autonomous ${randomChoice("AI sentry drone","mechanical drone","robot made by "+randCyberCorp())}... a claim you ${randomChoice("find wholly implausible","pretend to accept, though you secretly know the truth","know for a fact to be false","doubt but choose not to question")}.`;
			break;
		case 6:
			return `${randomChoice("Outback","Dingo","Wallaby","Eucalyptus","Sydney","Perth","Uluru")}, ${randomChoice("a retired ","an ex-","a onetime ")}sniper for the ${randCyberCorp()} private ${randomChoice("army","militia","security force")} ${randomChoice("who sports","who has been outfitted with")} ${randomChoice("multiple","some","a number of")} ${randomChoice("costly","outrageously expensive","dangerous")} vigilance ${randomChoice("augments","biomods")}, ${randomChoice("such as","including")} ${randomChoice("a 220 degree FOV","asynchronous blinking","transparent nictitating membranes")} and a constant flow of attention-boosting ${randomChoice("dextroamphetamines",randCyberPrefix()+"amphetamines",randCyberPrefix()+"-modafinil")} ${randomChoice("squirted","dripped","delivered intravenously")} into ${gend[0]} bloodstream.`;
			break;
		default: return "No lookout can be found.";
	}
}

var cyberFaithTypes = [];
function cyberFaith() {
	if (cyberFaithTypes.length == 0) {
		cyberFaithTypes = [1,2,3,4,5,6];			//enter numbers equal to the number of switchcases.
	}
	let temp = Math.floor(Math.random()*cyberFaithTypes.length);
	let switchcase = cyberFaithTypes.splice(temp, 1)[0];
	let gend = randGender();
	switch (switchcase) {
		case 1:
			let grossname1 = "L"+randCaps("ONELY MOMS IN YOUR AREA")+" !!FREE SIGNUP!!";
			let grossname2 = "F"+randCaps("REE VIAGRA");
			let grossname3 = "O"+randCaps("VERSEXED COLLEGE GIRLS WAITING FOR YOU")+" [CLICK HERE]";
			return `${randomChoice("Pontife","Antipope Pius ")}XXX ${randomChoice(grossname1, grossname2,grossname3)}, Catholic Pope whose ${randomChoice("cerebrum","cerebral cortex","prefrontal cortex")} was corrupted with malware ${randomChoice("when cruising the darkweb","when downloading bittorrents","written by atheo-terrorists")} and who subsequently ${randomChoice("was excommunicated", "was forced to retire", "turned the Vatican into a brothel and a den of criminality", "turned the Vatican into a global criminal enterprise", "caused the Catholic Church to splinter into a conservative sect and the S3XYSEX sect")}.`;
			break;
		case 2:
			return `Bhagwan ${randomChoice("Sanganak", "Paramaanu", "Prasaaran", "Vikiran", "Nabhikiy", "Rog")}, ${randomChoice("heavily-mutated","grotesquely mutated","lightly glowing")} leader of a ${randomChoice("saffron","red","cerulean","neon-yellow","neon-blue","silver")}-robed, ${randomChoice("radiation","fallout","cancer")}-worshipping ${randomChoice("sex","death")} cult ${randomChoice("located","based")} in the ${randomChoice("deadly","toxic","irradiated","poisoned")} ${randomChoice("New Montanan","Oregonian","Nevegasan")} ${randomChoice("waste","bad","out","border")}lands.`;
			break;
		case 3:
			if (Math.random()<0.5) {
				return `${randomChoice("Fra","Father")} ${randomChoice("Fresnelle","Variable","Monoculus","Quinine","Vaporcool","Turbo","Hyperlink","Ahref","404","Mountdrive","Sudo","Perceptron","Freewill")},${randomChoice(" fallen"," corrupt"," mad")} ${randomChoice("monk", "robomonk","cybermonk","robopriest","cyberpriest","lasermonk","mutant monk","digimonk","technomonk")} of the ${randomChoice("XOR","Uplink","Inheritance Class","Higher Scope","Lambda","Envatted","System S4","Gates of Logic","Strict Entailment","Hidden Layer","Kernel")} Brotherhood.`; 
			}
			else {
				return `${randomChoice("Sister","Mother")} ${randomChoice("Fresnelle","Variable","Monoculus","Quinine","Vaporcool","Turbo","Hyperlink","404","Mountdrive","Sudo","Perceptron","Freewill")}, ${randomChoice("fallen","corrupt","mad")} ${randomChoice("nun", "robonun","cybernun", "lasernun","mutant nun","diginun","technonun")} of ${randomChoice("XOR","Uplink","Inheritance Class","Higher Scope","Lambda","The Envatted","The Gates of Logic","Strict Entailment","Hidden Layer","Kernel")} Abbey.`
			}
			break;
		case 4:
			return `Nameless ${randomChoice("supplicant","parishioner", "Faith Militant", "crusader", "Sentinel")} of the Church of ${randomChoice("Digi","Sciento","Laser","Infoge","Cryo","Info","Plasma","Io")}netics, on ${gend[0]} ${randomChoice("first","second","third")} of the ${randomChoice("Three","Four")} ${randomChoice("Holy Acts of Cybercrime","Immoral Ordeals","Sacred Crimetrials")} required before ${gend[2]} can be ritually ${randomChoice("slain","sacrificed","drowned","beheaded")} and ascend to pure ${randomChoice("data","information","abstracta")}.`;
			break;
		case 5:
			return `${randomChoice("A young","An old","A middle-aged")} ${gend[3]} who recently installed ${randomChoice("a God", "an Angel", "an Ecstati")+randomChoice("chip","mod")}, which ${randomChoice("gives","grants")} ${randomChoice("powerful","intense")} ${randomChoice("religious","spiritual")} ${randomChoice("experiences","visions")} but also secretly lets ${randCyberCorp()} wipe the user's ${randomChoice("consciousness","agency","memory")} and take control of ${gend[0]} body to rent out for ${randomChoice("anonymous tasks... such as a cyberheist","suicide missions", "dangerous jobs","criminal undertakings")}.`;
			break;
		case 6:
			return `${randomChoice("Moss","Swump","Ives","Vane","Alga","Brackesh")}, ${randomChoice("techno","cyber","splicer","biohack-","climate ","eco")}druid of ${randomChoice("The Order of the Ozone","The Photosynthetes","The Organic Circle","The Order of Granola","The Church of the Biodegradables")}, a ${randomChoice("leafy-robed figure",`sexy green-skinned ${gend[3]}`,`pointy-eared ${gend[3]}`)} who is keeping a vow of ${randomChoice("silence","celibacy")} until ${randomChoice("global warming has been reversed","sea levels have returned to pre-disaster levels")} and who wields a${randomChoice(" gene"," bio"," geo"," Gaia","n eco")+randomChoice("staff","-seedpouch","ray rifle","bolt pistol","-orb","wand","-sash")} that gives ${gend[1]} ${randomChoice("impressive","tremendous","total")} control over ${randomChoice("geothermal activity","the weather","ambient temperature","atmospheric moisture","plant life","insect life","plant growth")}.`;
			break;
		default: return "No religious figure can be found.";
	}
}

var cyberEngTypes = [];
function cyberEng() {
	if (cyberEngTypes.length == 0) {
		cyberEngTypes = [1,2,3,4,5,6];			//enter numbers equal to the number of switchcases.
	}
	let temp = Math.floor(Math.random()*cyberEngTypes.length);
	let switchcase = cyberEngTypes.splice(temp, 1)[0];
	let gend = randGender();
	switch (switchcase) {
		case 1:
			return `${randomChoice("M","B","P")+vowel()+randomChoice("n","l","r","c","s")+"t"+vowel("y")+randomChoice("r ","n ","x ")+randomChoice("P","B","Cl")+vowel()+randomChoice("ffe","tte","nne","bbe","ppe","gge")+randomChoice("rnut","rson","rman","rfun","rton","rdon","rby","ry","rpot")}, ${randomChoice("begoggled ","wild-eyed ","wild-haired ","")}crackpot ${randomChoice("inventor","tinkerer")} who has somehow ${randomChoice("created","managed to build", "stumbled upon a working design for")} a ${randomChoice("Lewisian Many-Worlds Possibility Generator", "Lewisian Possibilia Generator", "Stalnakerian Many-Worlds Possibility Generator", "Lewisian Pluriverse Device")} which ${randomChoice("we can use to", "should", "will be able to", "will")} ${randomChoice("shield us from","confound", "mask our activities from", "cloak us from")} the precogs of the ${randomChoice("Federal", "S/F/PD")} PreCrime division.`;
			break;
		case 2:
			let geniusname = "";
			if (gend[4]=="boy") {
				geniusname = randomChoice("Reginald","Reggie","Anthony","Thomas","Richie","Owethu","Kwami","Manqobi");
			} else {
				geniusname = randomChoice("Janice","Yuki","Karabo","Iminathi","Ayanda","Amanda","Mercedes","Taylor","Piper");
			}
			return `${geniusname} ${randomChoice("Warren","Quiz","Query","Quest","Ziphozonke","Yamakazi","Ventura")}, ${gend[4]} genius who ${randomChoice("made "+gend[0]+" fortune", "revolutionized industry","astonished the world")} by ${randomChoice("patenting","developing","designing")} ${randomChoice("hundreds of","more than a hundred")} ${randomChoice("marvels of engineering","society-changing inventions")} (including ${randomChoice("a clean hypofission reactor","Riemannian curvature blockchain-cracks","electric sugar","transparent concrete")}, ${randomChoice("paperscreens","information landfills","phase cloaks","quantum darkfuel","ozone constructors","crowdsourced bioenergy collectors","solar pseudotravel")}, and ${randomChoice("ionic democracy","pharma beans","grassfed housing",`genetically modified fallout-cleansing ${randomChoice("spiders","rats","turtles")}`,"nuclear VR","timestop chambers")}), but who has now in ${randomChoice("adulthood",gend[0]+" late twenties",gend[0]+" early thirties")} grown bored of success and ${randomChoice("idly ","")}turned to crime ${randomChoice("as a sort of sport","in search of fun","to try to find some sort of challenge")}.`;
			break;
		case 3:
			return `${randomChoice("Gizmo","Gyro","Sprock","Gadget","Zipper","Casey Splacer")}, ${randomChoice("head ","")}repair${gend[3]} for the ${randCyberCorp()} fleet of ${randomChoice("interstellar","interplanetary","intergalactic","startravel","space-tourism","moontravel")} ${randomChoice("ships","cruisers","mechs","mechanthropes")}, a ${randomChoice("reliable","dependable")} worker who has replaced one of ${gend[0]} ${randomChoice("hands","arms")} with ${randomChoice("a holographic multitool","a soldering laser","a huge wrench","a welding magtorch")}.`;
			break;
		case 4:
			return `${randomChoice("Fievel","Fourvel","Evo","Eva","Friend","Lady","Good Nan")}, a wild ${randomChoice("goat","doberman","bear")} from the ${randomChoice("waste","bad","out","border")}lands who ${randomChoice("somehow","mysteriously")} acquired ${randomChoice("human","superhuman")} intelligence, built a bipedal exoskeleton${randomChoice(" out of scraps","")}${randomChoice(" on the city's fringes","")}, ${randomChoice("",`got a ${randomChoice("sweet","cool")} ${randomChoice("set of dreadlocks,","mohawk,","eyepatch,")} `)}and set up a ${randomChoice("hovercycle"," mech"," roboservant")} repair shop in ${randomChoice("the Castro 2.0", "the Voight-Ashbury district", "Nob Crater","Russiatown","the Emission district","Sector 17","The Savescumm Sector","Fishman's Wharf")}.`;
			break;
		case 5:
			return `${randomChoice("R","J","Wr","K","Sp","Gr","Sh","Cr","Br","Fl")}ay ${randomChoice("D","Cl","B","Kn","Fr","St","G","Gh","S","Bl","Gn","F")+"oo"+randomChoice("lie","gie","sty","ny","vey","ry","thy","ty","pie","dy","ney","key")}, ${randomChoice("unlicensed","unsanctioned","homeless")} street-level ripperdoc making ${randomChoice("his living","a living")} by ${randomChoice("building","fencing")} and ${randomChoice("surgically installing","installing","implanting")} ${randomChoice("black market","illegal")} ${randomChoice("bio","cyber","neuro")+randomChoice("mods","-augments","-augs","grafts")}, always ${randomChoice("filthy and sleep-deprived","drunk","high on sudo-feed")} when ${randomChoice("performing surgery","cutting open his patients")} but skilled enough to ${randomChoice("hack together","cobble together","bang together")} any ${randomChoice("new")} tool${randomChoice(""," or limb"," or graft")} we might need.`;
			break;
		case 6:
			return `${randomChoice("Stochastic","Kurtosis","Sinusoidal","Bellcurve","Floating-Point")} ${randomChoice("Jimmy","Martha","Gil","Dwayne","Cory","Beth","Ellen")}, spacetime ${randomChoice("portal","wormhole")} technician working for ${randomChoice("U.S.","Earth","Calexico")} Border Control at Stargate SF-${randomChoice("Z","X","F","1","6")} in ${randomChoice("the Castro 2.0", "the Voight-Ashbury district", "Nob Crater","Russiatown","the Emission district","Sector 17","The Savescumm Sector","Fishman's Wharf")}.`;
			break;
		default: return "No engineers can be found.";
	}
}


var cyberMuscleTypes = [];
function cyberMuscle() {
	if (cyberMuscleTypes.length == 0) {
		cyberMuscleTypes = [1,2,3,4,5,6];			//enter numbers equal to the number of switchcases.
	}
	let temp = Math.floor(Math.random()*cyberMuscleTypes.length);
	let switchcase = cyberMuscleTypes.splice(temp, 1)[0];
	let gend = randGender();
	switch (switchcase) {
		case 1:
			if (gend[4]=="girl") {
				return `${randomChoice("Montanar","Montanax","Ari Zonar","Ari Zonax")}, a massive ${randomChoice("steam","coal")}-powered locomotobot whose ${randomChoice("neural net was trained exclusively on","machine learning algorithm was fed only")} ${randomChoice("ancient American","John Wayne")} westerns, which ${randomChoice("is","explains")} why ${randomChoice("he","it")} wears ${randomChoice("a cowboy hat","a Stetson")} and ${randomChoice("a poncho","blue jeans","spurs")} and speaks in a ${randomChoice("robotic-sounding","monotone","clicky and staticky")} drawl${randomChoice(" that is played off internal wax cylinders","")}.`;
			}
			else {
				return `${randomChoice("Montanar","Montanax","Ari Zonar","Ari Zonax")}, a massive ${randomChoice("bull","bison")}-${randomChoice("Martian","Venusian")} hybrid who ${randomChoice("was discarded in the borderlands","was orphaned in the badlands")} as a baby then grew up exclusively on ${randomChoice("ancient American","John Wayne")} westerns, which ${randomChoice("is","explains")} why he wears ${randomChoice("a cowboy hat","a Stetson")} and ${randomChoice("a poncho","blue jeans","spurs")} and speaks with a ${randomChoice("snorting and grunting","grotesque and halting")} drawl.`;
			} 
			break;
		case 2:
			return `${randomChoice(`B${vowel()}r${randomChoice("d","t","n")}ie`,`Be${randomChoice("bop","nchy","eb","drock","anpot","efbowl")}`,`Rock${randomChoice("steady","lobber","ledunk"," Simpleson")}`)}, bouncer at ${randomChoice("The Collapsing Waveform","Xeno's","The King's Bionics","Rare Earth Mineral","The Dog and Hacker","Mechaskullz","Club Neon","The Wireless Underground", "Touchscreen", "Glass and Leather","The Sensor Bar")}, a ${randomChoice("pock-marked","massive","seven-foot-tall","one-eared","hulking")} ${randomChoice(randCyberPrefix()+"roid",`${randomChoice("Martian","Mutant","Kaiju")}-Growth-Hormone`)} ${randomChoice("addict","junkie")} who is ${randomChoice("basically","essentially")} just a ${randomChoice("huge bicep","slab of meat","big veiny muscle")} ${randomChoice("with a mohawk","in a leather jacket","in a tight black t-shirt")} and${randomChoice(" thrash",""," glow")} chains.`;
			break;
		case 3:
			return `${randomChoice("Sword","Katana","Daishō","Rōnin")}-for-hire ${randomChoice("Soulstained Michi","Jensen Orokusaki","Taylor Kojima","by the name of CyberJun","going by the name All-Seeing Zatōichi","who goes by the name Bumbo","Kitsune Yojimbo","demanding to be called Kōshō Reborn","Shōgun Paul","Paul Peters")}, a ${randomChoice("hulking","monstrous")} ${randomChoice("seven-foot-tall","kamishimo-clad","armor-clad")} Street Samurai whose eyes blaze neon ${randomChoice("yellow","orange","red","green")} and who claims to be possessed by ${randomChoice("a digital","a virtual","the AI manifestation of an ancient")} ${randomChoice("oni","demon","yokai","spirit of death","ayakashi")}.`;
			break;
		case 4:
			return `${randomChoice('"The perfect bodyguard",',"Experimental bodyguard prototype")} ${randomChoice("SCUD-47","Number 48","BG-47","Fortran-7","4Seven","S.C.U.D.D.","Frankie Seven","Number Four","Number Seven")}, a ${randomChoice("bald and barcoded artificial human","wiry but incredibly strong android","cybernetic behemoth")} implanted with a ${randomChoice("nanonuke","virus bomb","psychovirus","g-bomb")} that will immediately kill ${gend[1]} when ${gend[0]} creator dies... but who, upon ${randomChoice("learning of","discovering")} this, ${randomChoice(`put ${gend[0]} creator in a permanent coma`,`threw ${gend[0]} creator in a cryostasis chamber`,`imprisoned ${gend[0]} creator in a cage`)} and ${randomChoice("went freelance",`set out to write ${gend[0]} own destiny`)}.`;
			break;
		case 5:
			let lilname = "";
			if (gend[4] == "girl") {
				lilname = randomChoice("Sally","Midge","Charlotte","Amelia","Betty");
			} else {
				lilname = randomChoice("Jimmy","Sammy","Billy","Timmy","Jack");
			}
			let liltitle = randomChoice("Big","Muscle","Monster","Hulky","Tough","Super","Naughty","Screamy","Bad "+capFirst(gend[4]));
			return `${liltitle} ${lilname}, a ${randomChoice(9,10,12)}-year-old ${gend[4]} transformed by ${randomChoice("cosmic","interdimensional","galactic","nuclear","ionic","gamma","radioactive","quantum","DNA-unspooling")} ${randomChoice("sludge","slime","fallout","ooze","rays","waves")} into an ${randomChoice("invulnerable","invincible","unstoppable")} ${randomChoice("purple","neon-green","red","grey","neon-yellow","blue")}-${randomChoice("skinned","furred")} ${randomChoice("brute","grotesquerie","beast","monstrosity")}... and the ${randomChoice(`happier ${liltitle} ${lilname} gets`,`more fun ${liltitle} ${lilname} has`,`more excited ${liltitle} ${lilname} gets`,`naughtier ${liltitle} ${lilname} gets`,`screamier ${liltitle} ${lilname} gets`)}, the stronger ${liltitle} ${lilname} gets.`;

			break;
		case 6:
			return `${randomChoice("Theseus","Heraclitus","Aristotle","Trigger")} ${randomChoice("Pa","Bla","A","Gra","Bra","Papa","Xa","Za","Va")+randomChoice("vios","llas","lexios","gnew","dopoulos","dakis","sco")}, a human ${randomChoice("tank","weapon")} who has ${randomChoice("swapped out","replaced")} so many ${randomChoice("parts","pieces")} of himself with new ${randomChoice("pieces of cyberware","augments","cyber-augs","cybermods")} that nothing of the original ${randomChoice("person","man")} remains.`;
			break;
		default: return `No bruiser could be found.`;
	}
}

var cyberForgerTypes = [];
function cyberForger() {
	if (cyberForgerTypes.length == 0) {
		cyberForgerTypes = [1,2,3,4,5,6];			//enter numbers equal to the number of switchcases.
	}
	let temp = Math.floor(Math.random()*cyberForgerTypes.length);
	let switchcase = cyberForgerTypes.splice(temp, 1)[0];
	let gend = randGender();
	switch (switchcase) {
		case 1:
			return `${randomChoice("Artificial eye designer", "Artificial eyeball grower", "Eyeball farmer","Farmer of replicant eyeballs")} ${randomChoice("Vincent","Hannibal","Victoria","Eustice","Cletus","Joe Bob","Mary Grace","Delmont","Bobby Joe")+" "+randomChoice("Chu","Xiu","Xiu Xiu","Tran","Xiumai")}, a ${randomChoice("talented but nervous eighty-year-old","talented but nervous young bioresearcher","cold and severe professional","vain and superficial showboat","backwater hick","surly fifty-year-old")} who can ${randomChoice("grow us","provide us with")} ${randomChoice("the fake retinas","a vat of the eyes","a full vine of the eyeballs","a stalk of the many eyes","a vat-grown baby with perfect replicas of the eyes","a puppy with perfect replicas of the eyes")} ${randomChoice("we'll","we will")} need to bypass the ${randomChoice("ocular locks","retinal scans","ocular verification systems")}.`;
			break;
		case 2:
			return `${randomChoice("Spunx","Jank","Linka","Inka","Ynka","Danek","Spinx","Spynk")}, ${randomChoice("sexy","shy but sly","young and brash")} ${randomChoice("silver-","gold-","copper-")+randomChoice("dreadlocked","mohawked")} gif-tattooist whose ability to ${randomChoice("animate anything","duplicate any vid")} in ${randomChoice("cyber-","e-","voxel-","pixel-")}Ink has made ${randomChoice("him","her")} the ${randomChoice("most celebrated","most desirable","hottest")} ${randomChoice("cineskin artist","fleshflick artist","skinfilm artist")} in ${randomChoice("the Castro 2.0", "the Voight-Ashbury district", "Nob Crater","Russiatown","the Emission district","Sector 17","The Savescumm Sector")}.`;
			break;
		case 3:
			return `${randomChoice("Black market","Grey market","Unsanctioned","Unlicensed")} cosmetic ${randomChoice("bodysculpt","fleshmod","faceshape","facesculpt")} ${randomChoice("surgeon","artist")} J${vowel("y")}li${vowel()} ${randomChoice("M","P","L","D")+vowel()}p${randomChoice("","s")}, ${randomChoice("beauty-obsessed","vain","haughty","four-armed","opalescent-eyed")+" "+randomChoice("weirdo","oddball","psychopath")} able to ${randomChoice("manipulate","mold")} flesh like it was ${randomChoice("clay","plasticine","modeling clay","a clump of mashed potatoes")}.`;
			break;
		case 4:
			return `${randomChoice("Sprite","Tempe5t","T-P0se","Br0ck","Klaus++","c0m","Brainfloss","HREF","Hushtag")}, an ${randomChoice("ultra","uber","OMG")}-talented graffiti artist proficient enough with ${randCyberPrefix()+randomChoice("spray","paint")} to create ${randomChoice("atom","pixel","voxel")}-perfect ${randomChoice("fake IDs","fake scanbadges","fake passports")}, but whose ${randomChoice("identity","face")} is always kept hidden beneath a ${randomChoice("chromium","obsidian","rainbowsheen","neonblind")} helmet.`;
			break;
		case 5:
			return `${randomChoice("Postfuturo","Abstract","Postconceptual")} artist and ${randomChoice("showrunner","fashion designer","jeweler","furniture designer","architect")} ${randomChoice("Rebecca","Mikael","Travis","Griffin","Justina","Clinton","Blake","Chaddery","Sol")} ${randomChoice("Psonic","Chanman","Glorify","Arbys","Subway","Volcaneo","Kilroy","Basquiat","Sara")}, a ${randomChoice("turtlenecked","quartz-studded","cyberberet-sporting")}, ${randomChoice("neckerchiefed","nanovisored","vaperillo-puffing")}, ${randomChoice("flamboyant","offensively pensive","manic")} ${randomChoice("darling of art critics and aesthetic philosophers","provocateur with the skill to counterfeit almost anything","snow-junkie with undeniable skill and vision")}.`;
			break;
		case 6:
			return `${randomChoice("Otto","Hilgard","Brot","Wulf","Ranier","Gerhard","Horst","Jürgen","Uwe","Helga","Hilda","Ursula","Lena","Anja","Birgit","Ingrid")} ${randomChoice("Wil","Bruns","Fleish","Grün","Rot","Blau","Himmel","Maus","Uhr","Zeit","Vogel","Spitz","Strahlen","Röntgen","Wissen")+randomChoice("hund","wick","mark","wald","welt","braun","helm","seher","malen","werk","schirm","kunst","berger","mann","weg","maier","feldt","berg","biegel","schaft")}, ${randomChoice("white-haired","grey-haired","weathered and lanky","lanky and angular")} ${randomChoice("Swiss-German","German","Prussian","Weimer","Austrian","Austro-Hungarian","Dutch-German","Düsseldorf-born","Zurich-born")} ${randomChoice("watchmaker","clockmaker","maker of hand-crafted nanochips,","nano-artist","crafter of handmade boutique microchips,")} ${randomChoice("outfitted with","sporting","equipped with")} ${randomChoice("permanently-affixed magnification googles","enormous magnification irises","magnification lens implants")} and fingertips that can ${randomChoice("flip open","be taken off")} to reveal the ${randomChoice("miniscule","tiny")} ${randomChoice("tools","paintbrushes and screwdrivers","soldering tools","tools and brushes")} ${randomChoice("necessary","required","needed")} for ${"","painstakingly "}delicate work.`
		default: return "No forgers can be found.";
	}
}

var cyberStrikerTypes = [];
function cyberStriker() {
	if (cyberStrikerTypes.length == 0) {
		cyberStrikerTypes = [1,2,3,4,5,6];			//enter numbers equal to the number of switchcases.
	}
	let temp = Math.floor(Math.random()*cyberStrikerTypes.length);
	let switchcase = cyberStrikerTypes.splice(temp, 1)[0];
	let gend = randGender();
	switch (switchcase) {
		case 1:
			return `An ${randomChoice("amazingly","astonishingly","astoundingly","incredibly")} ${randomChoice("accomplished","successful")} ${randomChoice("bank robber","supercriminal","one-man army")} who just ${randomChoice("a few years ago","a couple of years ago","ten months ago")} was a ${randomChoice("shy","weakling","simpering","nerdy")} office ${randomChoice("wageslave","data-clerk","mailboy","peon")} named ${randomChoice("Melvin","Hubert","Qubert","Rupert","Terrence","Clarence","Rubarbo","Stephen","Chip","Humbert")} ${randomChoice("Squink","Spink","Ping","Pong","Crumb","Grimb","Wink","Shrimp","Thimb","Thrub","Nerf","Nerp","Pring")+randomChoice("ley","leman","leton","s","les")}, but whose life changed when he logged into the immersive ${randomChoice("heist","action")} ${randomChoice("holosuite adventure","VR game","VR experience","holo-sim")} ${randomChoice("Hard","Shock","Dark","Shaolin","Latinum","Neo","Final","Future","Corpo")} ${randomChoice("MegaTower","Cannon","Clench","Exo-Target","Chronicles","Xeno-Fist","Nite","Saturn","Electron","Vault","Matrix","Grunt","Biomarker")}${randomChoice(" II"," III"," 3"," 4","",""," of the Dead"," Blasters"," Battle"," Souls"," War"," Odyssey"," 2"," Assassin")} and then ${randomChoice("refused to accept","refused to believe")} that he ${randomChoice("was ever unplugged","ever logged off","ever logged out")}, so he continues to delusionally ${randomChoice("assume","play","take on")} the ${randomChoice("role","character")} of ${randomChoice("indestructible","invincible","unstoppable","morally ambiguous")} antihero ${randomChoice("Nuke","Jack","Blaze","Duke","Rock","Zap","Ray")} ${randomChoice("Slater","Codec","Cyberarm","Stronggun","Blastarm","Lasershot","Plasm","Atomica")}.`;
			break;
		case 2:
			return `${randomChoice("Cyborg merc","Mercenary cyborg","Cyborg-for-hire","Assassin-for-hire")} ${randomChoice("Ambrogia","Torquato","Raimondo","Ottavio","Chiara","Sofia","Martina","Giulia","Francesca")} ${randomChoice("Male","Brutto","Marcio","Marco","Sprezza")+randomChoice("reti","gramma","naro","nodo","so","ni","no","tas")}, ${randomChoice("condottiero","captain","capitani di ventura")} and CEO of The ${randomChoice("Cwantum","Intrepid","Acquisition","Capital","Bitstream")} ${randomChoice("Corps","Companions","Comrades")}, the ${randomChoice("Italian","Italo-Helvetican","Franco-Italian","silico-Sicilian","neo-Neopolitan","Venusian-Venetian")} ${randomChoice("mercenary company","private army","free company")} whose ${randomChoice("successes","feats","achievements")} include turning the tide of The ${randomChoice("English-Catalan War","Battle of Biohack Bay","Second Browser War","First Digital Drug War","War between "+randCyberCorp()+" and "+randCyberCorp(),randCyberCorp()+" Public Offering War","First Great Mutant Uprising","Second American Proletariat Revolt","Third American Proletariat Uprising","Calexican Civil War","War of the Nine A.I. Saints","Battle for the Digital Papacy","Manitoba Bloodbath","Saskatchewan Uprising","T'ronto Bloodbath")}.`;
			break;
		case 3:
			return `A former ${randomChoice("Q","E","G","K","R","A","B","D","L","Z","X","M","N")}-SWAT team ${randomChoice("leader","captain")} who ${randomChoice("was fired and forced to go on the run from","was fired from","quit and had go on the run from","was forced to quit")} ${randomChoice("the S/F/PD","the FBXI","Cyberpol")} for ${randomChoice("refusing to undergo a mandatory personality wipe","refusing to take empathy-blocking drugs",`charging ${gend[0]} higher-ups with the murder of the CEO of ${randCyberCorp()}`,`discovering just how thoroughly ${randCyberCorp()} controls the authorities`,`refusing to pin a murder on a random wastoid`)}.`;
			break;
		case 4:
			return `${randomChoice("Snakeskin Sasha","Jesse Snook","Jesse Greenfelt","Sidepocket","Sasha Scratch","Anyside Red","Syd Liquirish","Aubrey Bluff","Skeeter","Happenstance Slim","Casey Royale", "Cornersplice")}, a ${randomChoice("laserpool","lasersnooker","snooker-poker")} ${randomChoice("hustler","grifter")} who installed so many ${randomChoice("cheatmods","cheat-augs","calc-mods","prediction mods","prediction augments")} that ${gend[2]} can now literally see the physical paths that objects are likely to take${randomChoice(""," (colored according to probability)")}, which ${gend[2]} soon discovered renders ${gend[1]} nearly ${randomChoice("unbeatable","untouchable","unstoppable")} in ${randomChoice("frontal assault","infiltration")} and ${randomChoice("hand-to-hand","melee")} combat.`;
			break;
		case 5:
			return `${randomChoice("Keynote","Canoe","Grayble","K-Bo","Chakotay","Depp","Trek","Keno","Keto")} ${randomChoice("Williams","Billiams","Soze","Tallent","Tennant","Whittaker","Wompler","Raitrace")}, a ${randomChoice("martial arts champion","data librarian","gutterpunk")} who recently discovered that ${gend[2]} is somehow able to ${randomChoice("neuro-download","digitally fastlearn")} as many skills as ${gend[2]} wants without ${randomChoice("system-crashing","blinking out","going comatose","suffering brain-bleed")}, and so has quickly become a master of every physical proficiency.`;
			break;
		case 6:
			let fname = "";
			if (gend[3] == "man") {
				fname = randomChoice("Gabriel","Michael","Raphael");
			}
			else {
				fname = randomChoice("Gabriela","Michaela","Raffaela");
			}
			return `${fname} ${randomChoice("Lopez","Lup","Loop","Lupez","La Paz","Lopes","Looper")}, a ${randomChoice("star","decorated")} undercover agent for the S/F/PD who ${randomChoice(`was so deeply embedded in ${gend[0]} role`,`so completely bifurcated ${gend[0]} consciousness between ${gend[0]} cop role and ${gend[0]} criminal role`)} that, while occupying ${gend[0]} criminal ${("alterego","identity")}, ${gend[2]} discovered evidence of being an undercover agent and then used ${randomChoice("a data scalpel","a precision mem-wipe","targeted neural bleach")} to ${randomChoce("purge","excise")} all ${gend[0]} memories of being a police${gend[3]}.`
			break;
		default: return `No strike team leader could be found.`;
	}
}


// UNDER SIX... TO FINISH


var cyberThiefTypes = [];
function cyberThief() {
	if (cyberThiefTypes.length == 0) {
		cyberThiefTypes = [1,2,3,4,5];			//enter numbers equal to the number of switchcases.
	}
	let temp = Math.floor(Math.random()*cyberThiefTypes.length);
	let switchcase = cyberThiefTypes.splice(temp, 1)[0];
	let gend = randGender();
	switch (switchcase) {
		case 1:
			return `A${randomChoice("n electro"," digi"," flicker"," pixel"," holo")+randomChoice("ghast","-geist","ghost","specter","-phantasm","-phantom","haunt","spirit")} you ${randomChoice("suspect","believe")} to be ${randomChoice("Shannon Entropy","The Entrope","The Problem of Newcomb Lane","The Demon of Maxwell Lane","The Basilisk","Roko","The Poor Rationale","The St. Petersburg Paradox")}, a master ${randomChoice("thief","criminal","cat burglar")} executed ${randomChoice("twenty","twenty-five","thirty","fifty")} years ago whose dying ${randomChoice("consciousness","digital image","ego-signature")} was ${randomChoice("converted into","trapped in")} ambient ${randomChoice("wireless signals","wireless frequencies","waveforms")} and is ${randomChoice("reported","rumored","said")} to ${randomChoice("still exist","haunt San/Fran","exact revenge on the San/Fran elite")} as a ${randomChoice("flickering","staticky","howling","blurry")} ${randomChoice("monochrome","green")} ${randomChoice("image","shadow","figure")} that ${randomChoice("appears and disappears seemingly at random","can pass through solid objects","no door can bar","can apparate anywhere in the city")}.`;
			break;
		case 2:
			return `${randomChoice("Steel","Iron","Death","Tech","Mech","Servo","Polymer","Light","Script","Jade","Onyx","Silent","Wise","Silver","Glow","Neon","Ion","Atom","Vape","Vapor","Zinc","Gear")}${randomChoice(" Algorithm","wolf"," Locust"," Cicada"," Jackal","step","wave","spring"," Eyes","scar"," Rain","storm","fall","shroud"," Whisper"," Wind"," Petal","code","leaf","tail"," Fox","dagger","knives","foot","veil","saber","claw")}, ${randomChoice("masked","holo-masked","visored","jawless","faceless","blindfolded")} ${randomChoice("cyberninja","cyborg ninja","cybernetic ninja")} ${randomChoice("skilled","proficient")} at ${randomChoice("perfectly silent","silent","surreptitious","perfectly noiseless")} infiltrations${randomChoice("",` who has replaced ${gend[0]} bones and organs with ultra-lightweight artificial versions ${randomChoice(`to reduce the sound ${gend[2]} makes when prowling`,`allowing ${gend[1]} to leap three times ${gend[0]} height`)}`)}.`;
			break;
		case 3:
			return `${randomChoice("Anti-corpo","Anti-capitalist","Industrial")} saboteur The ${randomChoice("Shifting","Quantum","Spacetime","Freedom","Patriot","People's","Compassionate")} ${randomChoice("Phantasm","Specter","Shadow","Waveform","Haunt")}, an anarcho-${randomChoice("communist","reformist","Marxist","revolutionary","redistributivist")+randomChoice(""," Robin Hood")} ${randomChoice(`equipped with an experimental phase cloak that lets ${gend[1]} become`,`who was pelted with beta rays rendering ${gend[1]}`,`outfitted with a stealth suit that renders ${gend[1]}`)} transparent and intangible, relentlessly pursued by ${randCyberPolice()} for singlehandedly ${randomChoice("taking down","destroying","bankrupting","draining the assets of","causing the collapse of")} ${randCyberCorp()}.`;
			break;
		case 4:
			return `${randomChoice("Pipespeed","Queek","Muscord","Dubilclik","Riteclik","Bitwise","Thum","Thrumb","Diode","Tidbyte","Tidbit","2Bit","Pinky Clyde","Gilly Wissenschaft","Clikbait")}, a ${randomChoice("ratty","charming","talkative","soot-covered","shaggy","Cockney","twelve-fingered","tiny")} urchin ${gend[4]} (no older than ${randomChoice("seven","eight","nine","ten")}) who ${randomChoice("l","h")}eads the ${randomChoice("Beggar","Alley","Urchin","Orphan")+randomChoice("master","lord"," King")}'s ${randomChoice("pickpocketing","petty theft","rooftop","lightfingered","streetrat")} ${randomChoice("corps","brigade","division")} and is ${randomChoice("neurally","cerebrally","genetically","cybernetically","physiologically")} enhanced to ${randomChoice("be able to deftly lift anything from anybody","be the perfect pickpocket","be the city's most slippery thief","be the perfect fingersmith")}.`;
			break;
		case 5:
			return `${randomChoice("Yur","Andi","Vilka","Janus","Cosmaj","Valya","Vla","Kira","Bela","Zhenya","Ivica")} ${randomChoice("Stani","Novi","Petro","Pa","Vo","Pu","Ro","Robo","Cybo","Kro","Roboto","Bra","Kiri","Petu","Servo","Modulo","Nodo","Nuro","Siri","Vla")+randomChoice("slak","slav","stok","kov","tov","tovi","ka","dov","dosk","dka","ska","ski","slovski","bor","lski","lka","vich")}, a ${randomChoice("Soviet","Russian","Belorussian","Slavic","Macedonian")} ${randomChoice("Hypernaut","Hyperpilot")} presumed lost by ${randomChoice("HyperNASA","the authorities","the U.S. Cosmoforce","The Hypercube Institute",`${gend[0]} handlers`,"The Eternalists")} when exploring higher dimensions but who actually gave them the slip, and who now appears as a collection of floating body parts able to ${randomChoice("walk around solid walls in the fourth dimension","reach through the fourth dimension into enclosed spaces")}.`;
			break;
		case 6:
			return `Dashing and debonair gentleman thief, outfitted with `;
			// gentleman thief / glamourous cat burglar
			break;
		default: return `No thief could be found.`;
	}
}

var cyberHackerTypes = [];
function cyberHacker() {
	if (cyberHackerTypes.length == 0) {
		cyberHackerTypes = [1,2,3,4,5];			//enter numbers equal to the number of switchcases.
	}
	let temp = Math.floor(Math.random()*cyberHackerTypes.length);
	let switchcase = cyberHackerTypes.splice(temp, 1)[0];
	let gend = randGender();
	switch (switchcase) {
		case 1:
			return `${randomChoice("Chloe","Dennis")} ${randomChoice("","O'")+randomChoice("Dennis","Jason","Lizabeth","Jack","Gordon","Phillip","Steven")+randomChoice("","ry")}, ${randomChoice("acerbic","socially maladroit","cranky","graceless")} but ${randomChoice("lovable","quick-witted","charming","jocular")} ${randomChoice("code dev","tech guru","technohacker")} who worked for ${randomChoice("years","ten years","a decade")} as ${randomChoice("chief","head","lead")} ${randomChoice("systems administrator","software engineer")} of ${randomChoice("the U.S. Lottery Commission","the Oceanian Counter-Terrorism Unit","a dinosaur cloning facility","the Environmental Enforcement Agency")} but eventually ${randomChoice("succumbed","gave in")} to ${randomChoice("temptation","the allure of money")} and ${randomChoice("sold off","went on the lam with")} ${randomChoice("dozens","hundreds")} of ${randomChoice("decrypted secrets","corporate passkeys","stolen DNA samples","backdoor exploits")}.`;
			break;
		case 2:
			let coname = randomChoice("R","M","L","T")+vowel("y")+"c"+randomChoice("","","h")+"o";
			return `${coname} ${randomChoice("Cyber","Hyper","Fiber","Typer")+randomChoice("light","wire","mine","drive")}, ${randomChoice("wild-eyed","wild-haired","smooth-talking","opinionated")} ${randomChoice("founder","leader")} of The ${randomChoice("Faceless","Pseudonymous","Impersonal","Indistinct","Voiceless","Incognito")} ${randomChoice("Ones and Zeros","Hundred","Thousand","Overture","Majority","Equilibrium")}, a ${randomChoice("blackhat ","")}hacker collective known and feared for ${randomChoice("stealing elections","influencing elections","exposing government corruption","blackmailing CEOs")} but which secretly ${randomChoice(`has ${coname} as its only member`,`consists only of ${coname}`)}.`;
			break;
		case 3:
			return `${randomChoice("I","WE","THEY","ME")+randomChoice("BE","LIKE","HATE","LOVE","KNOW","EAT")+randomChoice("YOU","US","GOATS","BUGS","BEES")+"."+randomChoice("EXE","EXEC","DLL","PHP","JSX","SYS","TROJ","WORM")}, a sentient ${randomChoice("computer virus","piece of malware","computer worm")} that ${randomChoice("aces the Turing Test","satisfies all criteria for life")} and that is so thoroughly distributed across ${randomChoice("the net","the web","modern tech")} that you can open up a terminal on any ${randomChoice("machine","server","computer")} and ${randomChoice("hire it to hack into systems it has infected","try to convince it hack into systems it has infected", "discuss the terms of a hacking contract you would like it to complete")}.`;
			break;
		case 4:
			let fname = "";
			if (gend[3] == "woman") {
				fname = randomChoice("Jen","Barb","Meg","Fran");
			}
				else {fname = randomChoice("Paul","Hank","Gus","Jack")}
			return `${fname+randomChoice("soft","tium")} ${Math.floor(Math.random()*9)+1}.${Math.floor(Math.random()*10)}, a ${gend[3]}-computer hybrid who exists simultaneously in meatspace and cyberspace and whose ${randomChoice("simple","very","mere")} existence ${randomChoice("challenges","destroys","complicates")} conventional ${randomChoice("definitions","conceptions")} of ${randomChoice("life","consciousness","humanity")}.`; 
			break;
		case 5:
			return `${randomChoice("A","Ja","Cha","Gra","Ta","Ra","Bra")+randomChoice("i","y")+"d"+randomChoice("e","e","a","i")+"n "+randomChoice("Washington","Pierce","Franklin","Taylor Thomas","Carter")}, a ${randomChoice("too-cool-for-school","sarky","smack-talking","mannerless","forum-trolling")} ${randomChoice("skate","hover","surf","rocket")}boarding ${randomChoice("bill","trill","tetr","yott","picoll","megall","quint")+"ennial"} who always wears his signature ${randomChoice("grey","black","neon","opalescent","silver")} ${randomChoice("hoodie","duster","baseball cap","fedora")} and ${randomChoice("sneakers","tennis shoes")} and who is unusual among ${randomChoice("criminal","blackhat")} hackers in that he loves ${randomChoice("to get his hands dirty","fieldwork")} and insists on joining the heist strike team to 3D-print improvised ${randomChoice("tools","weapons","traps for security")}.`;
			break;
		case 6:
			return ``;
			break;
			// a Film Noir detective, a search engine / shadow broker, or a Street Judge sidekick modeled on Microchip?
		default: return `No hacker could be found.`;
	}
}


var cyberGiftedTypes = [];
function cyberGifted() {
	if (cyberGiftedTypes.length == 0) {
		cyberGiftedTypes = [1];			//enter numbers equal to the number of switchcases.
	}
	let temp = Math.floor(Math.random()*cyberGiftedTypes.length);
	let switchcase = cyberGiftedTypes.splice(temp, 1)[0];
	let gend = randGender();
	switch (switchcase) {
		case 1:
			return ``;
			// precog
			break;
		case 2:
			return ``;
			// tech empath / technomancer
			break;
		case 3:
			return ``;
			// jumper (I like the idea of a University dean as a jumper though)
			break;
		case 4:
			return ``;
			// mesmerist / suggestion and pheremone (pheremods? Maybe save for the hedonist)
			break;
		case 5:
			return ``;
			// psion
			break;
		case 6:
			return ``;
			// a slider?
			break;
		default: return `No individual with unusual talents could be found.`;
	}
}




// Mr. ${randomChoice("Kring","Slay","Kris","Nicolas","Snow","List","Cole","Clause","Garland")}, an animatronic mall Santa who ${randomChoice("unexpectedly ","mysteriously ","")}gained ${randomChoice("sentience","autonomy")}, ${randomChoice("went on a killing spree, ","eviscerated mall security, ","")}then traded his red coat for ${randomChoice("purple pinstripes","a purple suit","a white suit","a tailored suit","a suit and cane","a three-piece suit")} and ${randomChoice("worked his way up to become","eventually became")} the most ${randomChoice("feared","dangerous")} and respected crime ${randomChoice("boss","kingpin")} of ${randomChoice("the Castro 2.0", "the Voight-Ashbury district", "Nob Crater","Russiatown","the Emission district","Sector 17","The Savescumm Sector")}.

// mandatory: burglar, hacker, gifted
// good adds: brains, lowlife/scav/hood, corpo
// next: crimeboss, ganger, explosive expert, fence/fixer, celebrity, hedonist, info-seeker (tracker?)

// do I want infiltrator separate from burglar?


// maybe make nano cloud the wild card and make thief more like an infiltator?




// WHERE TO PUT??
//mall santa gone mad, become crime boss?
// The Grey Goo, a swarm of nanobots
// a Jumper... someone who can swap their consciousness with someone else (but has lost their original body)
// The above two can both be The Intellect.  Jumper is like Dax, lived for ages.
// Modular distributed brain?
// sushi/ramen/gagh stall

// The Search Engine for Shadow broker



function setTextContent(element, text) {
    while (element.firstChild!==null)
        element.removeChild(element.firstChild); // remove existing text
    	element.appendChild(document.createTextNode(text));
}

function buildCyberIntro() {
	let coffee = randomChoice("coffee","caffinium","neurostim","coff-E","kov","java","hotbrown","presso");
	let alcohol = randomChoice("synthohol","biobooze","alcopills","ionic cocktails","whiskeyblasters","absynth");
	let divebar = randomChoice("The Collapsing Waveform","Xeno's","The King's Bionics","Rare Earth Mineral","The Dog and Hacker","Mechaskullz","Club Neon","The Wireless Underground", "Touchscreen", "Glass and Leather","The Sensor Bar");
	let rich = randomChoice("true","false");
	let job = randomChoice("artwork","money","NOC","backdoor","military");
	let awakener = randomChoice("implant","traffic","assistant","clock");

	let party = randCyberParty();

	let intro1 = "You awaken to "+cyberIntroAwaken(awakener);
	let intro2 = `${randomChoice("Your heads throbs","A splitting headache makes you wince","A wave of nausea washes over you")} as you ${randomChoice("wobble","stand")} to your feet. `;  
	intro2 += cyberIntroParty(party,alcohol,divebar);

	let intro3 = "";
	if (awakener=="assistant") {
		intro3 += `Your assistant brings you a ${randomChoice("cup","mug")} of ${coffee}, and you `;
	} else {
		intro3 += `You pour yourself a ${randomChoice("cup","mug")} of ${coffee} and `;
	}
	if (rich=="true") {
		intro3 += `${randomChoice("sip it","take a sip")} as you contemplatively gaze through the window at the Golden Gate ${randomChoice("Cyber","Holo","Light","Magno","Cyclo")}bridge. A view from the penthouse suite of MegaTower ${Math.floor(Math.random()*20)+1} did not come cheap, but you are good at what you do. And now you'll have another chance to make use of your skills. You smile. `;
		if (party=="nybar"||party=="sports") {
		intro3 += `Slumming at a dive bar has unexpectedly paid off.`;
		} else intro3 += `The mayor's party was rich with opportunity.`;
	} else {
		intro3 += `${randomChoice("sip it","take a sip")} as you take stock of your tiny ${randomChoice("condopod","podflat","cyberflat","techpartment")}. ${randomChoice(`It's grey and squalid without a single ${randomChoice("biojack","VR-jack","techport")} in sight; you frown in disapproval.`,`A mutoroach ${randomChoice("runs","scurries")} under ${randomChoice("a rug","the hoversofa","the hoverfuton")}, and you ${randomChoice("shudder","wince")} in revulsion.`)} It's time to turn your life around. You've been waiting for ${randomChoice("your big break", "that one job that'll pull you up to the station you deserve")}, and now, it seems, you've found it. You smile. `;
		if (party=="mansion"||party=="olympics") {
			intro3 += `Sneaking into the mayoral party without an invitation paid off, big time.`
		} else intro3 += `You got more from ${divebar} last night than just a massive hangover.`;
	}

	let intro4 = cyberOverhear(party,job);
	let intro5 = `${randomChoice("This is going to be a perfect heist.","Now is the time to strike.")} You just need to ${randomChoice("assemble","recruit")} your team. Six experienced criminals should ${randomChoice("be the right number.","do it.")}`;

	if (!document.getElementById("cyberIntro").classList.contains("fadedout")) {
		document.getElementById("cyberIntro").classList.add("fadedout")
	}

	setTimeout(function() {
 		setTextContent(document.getElementById("cyberIntroPar1"), intro1);
		setTextContent(document.getElementById("cyberIntroPar2"), intro2);
		setTextContent(document.getElementById("cyberIntroPar3"), intro3);
		setTextContent(document.getElementById("cyberIntroPar4"), intro4);
		setTextContent(document.getElementById("cyberIntroPar5"), intro5);
      	document.getElementById("cyberIntro").classList.remove("fadedout");
   	}, 450);
} 

function cyberIntroParty(party, alcohol,divebar) {
	switch (party) {
		case "mansion":
			return `It's the first day of 21${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}, and you hit the ${alcohol} pretty hard at last night's New Year's Eve Masquerade Ball at the San/Fran mayoral mansion.`;
			break;
		case "nybar":
			return `It's the first day of 21${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}, and you hit the ${alcohol} pretty hard last night. You remember shouting out the countdown to the new year at ${divebar}, one of San/Fran's ${randomChoice("thoroughly","truly")} ${randomChoice("seedy","disgusting")} dive bars, but you can barely recall how you got home.`;
			break;
		case "olympics":
			return `You hit the ${alcohol} pretty hard last night. San/Fran won its bid for the 21${Math.floor(Math.random()*10)}${(Math.floor(Math.random()*5))*2} Olympics, and the mayor threw a lavish celebration. Everyone who is anyone was invited.  So, of course, you found a way to be there.`;
			break;
		case "sports":
			return `Last night, the San/Fran ${randomChoice("Mutowolves","4.999ers","Cyborgs","Perceptrons","Razerbeams")} made it into the ${randomChoice("","inter")}national ${randomChoice("hypno","disc","laser","raster","vector")}ball playoffs for the first time since 21${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}. You hit the ${alcohol} pretty hard celebrating down at ${divebar}, and you can tell that the hangover is going to be brutal.`;
			break;
		default: return "";	
	}
}


function cyberIntroAwaken(awakener) {
	let str = "";

	switch (awakener) {
		case "implant":
			let skin = randomChoice("your hand","your wrist","your neck");
			str = `the pulse of the ${randomChoice("alarm","chrono")}chip implanted under the skin of ${skin}.  The words ${randomChoice(`"It's time to wake up"`,'"WAKE UP"','"Good Morning"')} ${randomChoice("flash in red on","scroll in red across")} the insides of your eyelids.`;
			break;
		case "traffic":
			str = `the sounds of morning hovertraffic as artificial dawnlight spills through your bedroom blinds. ${randomChoice("Bleary-eyed","Groggily")}, you ${randomChoice("glance at","roll over to viddy")} ${randomChoice("your chronocrystal","the time display on your sleep pod","your chronopiece")}: it's ${randomChoice("9","10")} AM.`;
			break;
		case "assistant":
			str = `the gentle prods of your ${randomChoice("solid-light holoassistant","robotic housedroid assistant")}. "It's morning, ${randomChoice("my dear","boss")}," ${randomChoice("he","she","it")} says. "${randomChoice("You'd better","It's time to")} wake up."`
			break;
		case "clock":
			str = `${randomChoice("the beeps and bloops","the bloops and jangles")} of ${randCyberPrefix()}pop music playing from your ${randomChoice("splice","smart","net")}clock. Sensing that you're awake, the wallscreen to your ${randomChoice("left","right")} flips on and a weather${randomChoice("bot","man")} on ${randomChoice("Good Morning San/Fran", "The 8 AM Blogroll", "The San/Fran Morncast", "The San/Fran Upload")} tells you ${randomChoice("that you can look forward to sunshine","to expect rain")} today.`;
			break;
		default: 
			str = awakener;
			break;
	}
	return str;
}

function cyberOverhear(party,job) {
	let str = "";
	switch (party) {
		case "mansion":
			str = `Shortly before midnight, a ${randomChoice("dignitary","corpo")} wearing ${randomChoice("an opalescent","an ostentatious","a neon","a glittering")} ${randomChoice("bulldog","puma","flamingo","Venusian","heron")} mask pulled you onto the balcony, mistaking you for someone else. ${randomChoice("He","She")} let you in on a juicy piece of information. Apparently, `;
			str += cyberJob(party,job);
			break;
		case "nybar":
			str =  `While ${randomChoice("standing in line for the bathroom","waiting for a drink at the bar","playing laserpool","playing sonicdarts")}, you managed to overhear a drunk and looselipped ${randomChoice("corporat","cyberbro","government clerk","security guard")} spill some secrets ${randomChoice("when bragging to","trying to seem like a bigshot to", "while boasting to")} ${randomChoice("a group of uninterested women","the android bartender","a couple of neopunks")}. Apparently, `;
			str += cyberJob(party,job);
			break;
		case "olympics":
			str = `In the midst of the revelry, you managed to overhear some juicy information from a drunk and looselipped ${randomChoice("government aide","municipal clerk","Street Judge","corporat","fashionista")}. It turns out that `;
			str += cyberJob(party,job);
			break;
		case "sports":
			str = `The celebration over San/Fran's ${randomChoice("win","victory")} led ${randomChoice("a gang of razorpunks","some roided-up lowlifes","some particularly shady neopunks")} to take you as friend, and with misplaced camaraderie they shared some juicy ${randomChoice("pieces of info","info-nugs")} with you. In ${randomChoice("confiding","whispering")} tones, they ${randomChoice("told you","let you know")} that `;
			str += cyberJob(party,job);
			break;
		default:
			return "You got wind of a heist.";
	}
	return str;
}

function cyberJob(party,job) {
	let str = "";
	switch (job) {
		case "artwork":
			str = `${randomChoice("the S/F Museum of Modern Modern Art","the San/Fran Museum of Postconceptual Art","the San/Fran Museum of Virtual Artworks",`the ${randCyberCorp()} Gallery of Postdigital Art`, "the Whitestatic Gallery", "Xorblatt's Auction House")} will soon be showcasing a ${randomChoice("priceless",`billion-cred`)} collection of ${randomChoice("oil paintings","pixelgifs","voxel paintings","raytrace models","silicosculptures")} by ${randomChoice("Julia Chan-Lux", "Richardio Vanderclay", "Imelda Tonton", "Groobioo Snoot","Wyclef Schwartz", "Beverly Clever", "E-Liz Pi-Kos")}. The artworks are currently stored in a vault beneath the facility, but the security grid will only be ${randomChoice("fully operational","jacked and onlined","fully activated")} when the showcase is ${randomChoice("made","announced to the")} public.`;
			break;
		case "money":
			str = `${randomChoice("The San/Fran Banking Conglomerate","San/Fran/Bank",`${randCyberCorp()} Savings and Loan`),`${randCyberCorp()} Post-Industrial Banking`, `the ${randCyberCorp()} Money Exchange`} will be ${randomChoice(`keeping an unusually ${randomChoice("enormous","massive")} collection of physical ${randCyberMoney()} ${randomChoice("in their main vault","on premises")} for the next two ${randomChoice("weeks","months")} in order to ${randomChoice("facilitate a grey-legal corpo buyout","back an immoral corpo merger","pay off a digital warlord")}. S`,`transporting a fortune in gold-pressed ${randCyberMoney()} next week. They'll be using ${randomChoice("an armored tanksafe","a helivault")}, so s`)}ecurity will be tight, but not commensurate with the potential take.`;
			break;
		case "NOC":
			let temppol = randomChoice("the FBXI", "Cypherpol", "Corpopol", "the S/F/PD", "AI-Reg Enforcement", "the IRS2.0");
			str = `${temppol} has recently confiscated a ${randomChoice("datasphere","holodrive","nanochip")} from a captured ${randomChoice("saboteur","hackspy")} and is in the process of decrypting it. They don't yet realize how explosive the contents are: it lists the cover identities of every secret field agent from ${randomChoice("Eurasia","Saigon Province","the House of Mars",randCyberCorp())}. This information would sell for billions of ${randCyberMoney()} to governments and corporations worried about spies in their midst. And because ${temppol} doesn't realize what they're sitting on, security isn't nearly what it should be.`;
			break;
		case "backdoor":
			let culpable = randCyberCorp();
			str = `${randomChoice("blackhats","hackjobbers","blackhat codehackers")} have discovered a massive ${randomChoice("backdoor","firmware")} exploit in the ${randomChoice("laser", "sonic", "quantum")} security systems designed by ${culpable}. ${culpable} is trying ${randomChoice("to keep this quiet","to keep quiet about this vulnerability")} while scrambling to release a patch, but in the meantime, their clients are unknowingly exposed. You do a quick ${randomChoice("netsearch","infolookup","online infoscan")} and the results scroll across ${randomChoice("your retinas","your palmscreen","the nearest screenwall")}: their biggest client, and the ${randomChoice("ripest potential target","most promising mark")}, is the ${randomChoice(`Saint Alcatraz ${randomChoice("Cyber","Digi","Droid","Robo")}horse Racetrack`,"FLUX Hotel and Casino","Calexican State Treasury and Latinum Reserve",`${randCyberCorp()} private vault`)}. It won't be completely defenseless, but it's more vulnerable than it will be ever again. ${randomChoice("","You can't pass up this opportunity.")}`;
			break;
		case "antique":
			str = ``;
			break;
		case "military":
			str = `${randomChoice("engineers","hardware wonks","gearheads")} for the ${randomChoice(randCyberCorp(),"Federal","Calexican","American Interplanetary")} ${randomChoice("Militia","Military","Cyberforce")} have developed a working prototype of a ${randomChoice("cold-fission ion bomb","biovirus wetdrive","sonic disruption beam","psionic G-bomb","telephase jumpsuit","quantum cross-world targeting chip","geophage rifle","hackstatic firewall")}. This sort of military tech could permanently ${randomChoice("rewrite","alter","upend")} the balance between the corpos and govs.${randomChoice(".. a"," A")}ny global player would pay ${randomChoice("nearly anything","handsomely")} for it. It's currently being held at ${randomChoice("Gibson Memorial Airfield","Canticle Military Base","Fort Ellison","Fort Snowcrash")} awaiting delivery to top brass.`;
			break;
		case "corpo":
			str = ``;
			break;
		case "gangboss":
			str = ``;
			break;
		default:
			return "there's a possible heist on the horizon ."
	}
	return str;
}

// corpo secrets, drugs/weapons from crimeboss, big old gem or relics.