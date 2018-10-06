// CYBERPUNKS

const lastRoles = [];
// const cyberRoles = ["forger", "hacker", "magic", "politics", "religion", "driver", "detective", "brawler", "weapons", "wildcard", "fence", "corpo", "hedonist", "celebrity", "intellect", "thief", "hood", "lookout", "engineer"];

const cyberRoles = ["forger", "politics", "religion", "driver", "wildcard", "lookout","engineer"];
// other: explosive, weapons, acrobat, martial artist/brawler, strike force lead, scav, gang member, undedrworld boss  corporat corpoxec
let cybersHired = 0;

function nextCyberRole() {
	let randonum = Math.floor(Math.random()*cyberRoles.length);
	let newRole = cyberRoles.splice(randonum, 1)[0];
	lastRoles.push(newRole);
	if (lastRoles.length>=6) {
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
			criminal = randomChoice("The Hacker: ", "The Netrunner: ", "The Decker: ");
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
			criminalText = cyberFaith();
			break;
		case "driver":
			criminal = randomChoice("The Driver: ", "The Getaway: ");
			criminalText = cyberDriver();
			break;
		case "detective":
			criminal = randomChoice("The Investigator: ", "The Fact-Finder: ", "The Blackmailer: ");
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
			criminal = randomChoice("The Intellect: ", "The Brains: ");
			break;
		case "thief":
			criminal = randomChoice("The Thief: ", "The Rogue: ", "The Burglar: ");
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
    let outcome = "";
    
    if (cybersHired<5) {
    	outcome = `You need ${6-cybersHired} more ${randomChoice("team members","accomplices","associates","heistmates")}.`;
    }
    if (cybersHired==5) {
    	outcome = `You need just one more ${randomChoice("team member","accomplice","associate","heistmate")}.`;
    }

    if (cybersHired >= 6) {
    	// change text on button
    	// put outcome in remainingCrims
    	// make button onclick call cyberReset function
    }

    setTextContent(document.getElementById("cyberOutcome"),outcome);
}

function cyberReset() {
	// change text on button back to normal
	// make button onclick hire dudes again
	// cybersHired = 0;
	// erase all cybertitle and cyberperson nodes
	// make a new intro
}






/// Tools for making descriptions


const cyberPrefixes = ["raster", "neo", "techno", "mech", "tech", "plasma", "bit", "byte", "meme", "gif", "vector", "cyber", "plasti", "array", "crypto", "pixel", "voxel", "script", "code", "repli", "nano", "xeno", "pico", "light", "laser", "futuro", "net", "hack", "jack", "info", "holo", "mecha", "silico", "deck", "data", "robo", "giga", "circuit", "crash", "bio", "neon", "beam", "magneto", "wave", "freq", "rift", "oculo", "scan", "gene", "splice", "ion", "crack", "cipher", "mirror", "hyper", "quantum", "digi","fusion","edge","smart"];
const cyberSimplePrefixes = ["cyber", "techno", "crypto", "neo", "nano"];
const cyberMoneyPrefixes = ["neo", "corpo", "omni", "giga", "cyber", "byte", "vox", "net", "neuro", "media", "patriot", "electro"];
const cyberMoneySuffixes = ["creds", "dollars", "coins", "bucks"];
const cyberCorpPrefixes = ["Omni", "Umbra", "Globo", "Inter", "Nett", "Shado", "Tyrell", "Ayro", "Sky", "Edu", "Yawaha", "Grün", "Ultra", "Time", "Pax", "Patreo", "Coca", "Wylan", "Cyty", "Virtu", "Philoso", "Lambda", "Upsilon", "Encyclo", "Gymno", "Geny", "Tindr", "Twitt", "Googo", "Neutrino", "ICE", "Uber", "Episteme", "Neu", "Credo", "Panthe", "Z-Wave", "Sy"];
const cyberCorpSuffixes = ["corp", "zon", "soft", "comp", "labs", " Pharmaceuticals", " Macrosystems", " Microsystems", " Telecoms", " Comms", " Systems", " Enterprises", " Brands", " Industries", " Biotech"];
const cyberSpecies = ["human", "human", "alien", "xenomorph", "cyborg", "robot", "holo-AI", "android"];
const cyberGenders = [["his", "him", "he", "man", "boy"], ["her", "her", "she", "woman", "girl"]];
const cyberPolice = ["the FBXI", "Cypherpol", "Corpopol", "the S/F/PD", "AI-Reg Enforcement", "the IRS2.0", "Drug Enforcement Systems", "the Feds", "a vigilante Street Judge"];


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

function randCaps(str) {
	let newstr = str.charAt(0).toUpperCase();
	for (let i=1; i<str.length;i++) {
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
			return `${randomChoice("First", "Last", "Wisest", "Most beautiful", "Most glorified", "Most secretive", "Most decadent", "Most cunning", "Most gracious", "Most bloodthirsty", "Cruelest", "Most spite-filled")} of the ${randomChoice("Electronic", "Computational", "Amoral", "Immortal", "Telecom", "Geothermal", "Steam-Powered", "Punchcard", "Circuitboard", "Wireless", "Clockwork")} Muses, ${randomChoice("Her Excellency the Lady", "the Lady", "Oracle", "Seer", "Her Royal Highness, Lady", "Madame")} ${randomChoice("Xoriana", "Nande", "Logixx", "Bayessa", "Cleon", "Pembroke", "Cortana", "Siri", "Alexa","Lovelace")}.`;
			break;
		case 4:
			return `${randomChoice("Martian","Venusian","Alpha Centaurian","Neptunian","Dominion")} shapeshifter ${randomChoice("Fr","Br","Tr","Cr")+"'"+randomChoice("tata","baba","dada","lala","nana")+" "+randomChoice("Cho","Ko","Bo","Lo","Ro","Tro","Sto","Sho","Jonzz","Odo")}, whose ability to take the forms of ${randomChoice("an ID badge", "an easel", "a windowwashing pail", "a desk chair", "a smoke detector", "a pillow", "a coffee mug", "a police badge", "a severed hand", "a treadmill")} and ${randomChoice("a ladder", "a rat", "a guard dog", "a throw rug", "a piece of abstract art", "a shampoo bottle", "a toothbrush", "a wrench", "a necktie", "an alarm clock", "a plasma rifle", "a plasma grenade")} ${randomChoice("should prove invaluable", "will come in handy", "will be necessary")}.`;
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
			return `${randomChoice("Handsome","Smiling","Friendly","Kind-Eyed","Wise and Dimpled","Humble", "Goodboy")+" "+goodname}, ${randomChoice("extremely popular","beloved")+" "+randomChoice("President","Prime Minister")} of the virtual cyberspace country of ${goodname+"topia (population: "+randomChoice("7","8","12","21","40")} million) who in meatspace is secretly the infamous ${randomChoice("terrorist","arsonist","kidnapper")+" and "+randomChoice("assassin ","murderer ","serial killer ")+randomChoice("Filthy ","Horrorshow ","Bandsaw ","Bonecrack ","Pigblood ","Lobotomy ")+randomChoice("Pete","Chuck","Burt","Stu","Dick","Rob")}.`;
			break;
		case 5:
			let cappre = capFirst(randCyberPrefix());
			return `${randomChoice("Br","N","Sp","L","R","Str","Pl","Ph","J","K")+randomChoice("aul","ichard","ichael","ack","elvin","obert","istopher","onny","ohnathan","athan","ian", "effrey")+" "+randomChoice("Jones","Smith","Jefferson","Jameson","James","Johns","McKay")}, State ${cappre+randomChoice("secretary","-Overseer","-Admin")} so overburdened with ${randomChoice("cybergambling debts","creditchip debt","his cryptomortgage","the costs of his expensive holosuite addiction")} that he has agreed to help us acquire the ${randomChoice("security room access","VR security footage","sewer holomaps","building access neurocodes","government nanoschedules","blockchains","military tech","firewall crack","government clearance", "phase shifters")} we need and provide us with a cover story in the ${randCyberPrefix()}${randomChoice("-media","-news")}.`;
		case 6:
			let lastn = randomChoice("Jonzz","Alexx","Smith","Freqout","Snuze","Drear","Clott","Grott","Trawl","Phylax","Mudd","Druck","Ziil","Trutch", "Plott", "Glugg");
			let news = lastn+" "+capFirst(randCyberPrefix()+randomChoice("report","Eye","news","times","blitz","-Update","-Enquirer","-Inquiry","tattle","snoop","cast"));
			return `${randomChoice("Grundle","Fredder","Balder","Hander","Cinder","Buggle","Uggle","Crog","Bug","Conker")+randomChoice("drudge","tote","grote","chunt","cruft","pore","plunt","rush","hump","mane")} ${lastn}, ${randomChoice("squat","short","greasy","lunatic","loud")} and ${randomChoice("unsavory","contemptible","dissolute")} ${randomChoice("host","editor","journo","muckracker")} of the conspiracy-minded ${randomChoice("holoprogram","cyberrag","cybertube show","podwire show","tabloidtube","tabloid")} The ${news}, a ${randomChoice("confusingly","frustratingly","surprisingly")} influential ${randomChoice("blowhard","gasbag","slimeball","creep")} who has had so many ${randomChoice("senshancements","facegrafts","cheekpuffs")} and ${randomChoice("skinfrills","oculomods","sweatbloks")} installed that he looks ${randomChoice("just","almost exactly", "a lot")} like a ${randomChoice("wastetoad","mutofrog","raccoon","wasteland lemur","kinkajou","blobfish", "catfish", randCyberPrefix()+"muppet")}.`;
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
			return `The ${randomChoice("Midwich","Borgia","San Bernardino","Dunwich","Alcatraz","Simi Valley","Bordeaux","Brie","Savescumm","Voight-Ashbury")} ${randomChoice("Commune","One-Mind","Ego","Network","Consortium","Collective","Aggregate","Aggregation","Polyphony","Organon","Organum")}, a hivemind-for-hire made up of ${hivemindNum} ${randomChoice("gang members","college students","housewives","teenagers","Prussian mobsters","bohemians","French mobsters","escaped prisoners")} so thoroughly quantum-${randomChoice("networked","interlinked")} that they have become a single conscious ${randomChoice("being", "entity")} with ${randomChoice(hivemindNum)} bodies... and ${randomChoice(hivemindNum)} pairs of eyes to ${randomChoice("keep lookout", "keep watch", "survey the job site", "help coordinate our activities")}.`;
			break;
		case 2:
			return `${randomChoice("Josh","Barb","Greg","Mon","Max","Mal","Jenn")+randomChoice("ua","ifer","ara","pold","ory","ica","field","imillian")} ${randomChoice("Up","Down","Fly","Spider","Ant","Bould","Climb","Verti","Whirli","Hop")+randomChoice("wards","face","slope","scale","leap","jump","kick")}, ${randomChoice("Olympic-level","platinum-medal-winning","godtier","professional","galaxy-class")} ${randomChoice("free-runner","parkour expert","arrythmic gymnast", "track star")} outfitted with a pair of ${randomChoice("grav-","mag-","gravmag-")+randomChoice("boots","shoes","footpads")} that lets ${randomChoice("him","her")} run straight up walls at ${randomChoice("incredible","dizzying","astounding","next-gen")} speeds.`;
			break;
		case 3:
			return `${randomChoice("Pug","Pup","Kit","Bee","Eel","Gecko","Pett","Pupa")} ${randomChoice("M","P","L","R")+vowel("y")+randomChoice("ria","stia","gra","gry","rry","ren","rent","rrent","ckent")}, animal body${randomChoice("mod","sculpt")} ${randomChoice("fanatic","addict")} who can fly above the site of the heist on ${gend[0]} ${randomChoice("dragonfly wings","eagle wings","crow wings","batwings")} and ${randomChoice("surveil","keep tabs on")} the scene with ${randomChoice(gend[0]+" hawk's eyes",gend[0]+" ultraviolet-sensing compound eyes",gend[0]+" enormous tarsier eyes",gend[0]+" nightvision cateyes", "the eyes of twelve different animals")}, ${gend[0]} ${randomChoice("bloodhound's nose", "St. Bernard's nose", "three dog noses", "huge rabbit ears", "huge elephant ears")}, and ${gend[0]} ${randomChoice("dolphingraft sonar", "sharkgraft sensivitity to electric fields", "pigeongraft sensitivity to magnetic fields")}.`;
			break;
		case 4:
			return `${randomChoice("Midas","Elvin","Flyboy","Goldcoil","Hetset","Hurlburt","Goose","Mavric","Jester")} ${randomChoice("K","P","M","F","T")}. ${randomChoice("Keats","Keaton","Airson","Millet","Cortell","Metacalf","Bradshaw","Eisman")}, ${randomChoice("discharged Spaceforce pilot","octogenarian aviation enthusiast","basement-dwelling peeping tom")} whose ${randomChoice("primary visual cortex is linked to","optic nerve fibers receive wireless signals from")} the cameras of ${randomChoice("thirty","forty","fifty","sixty")} ${randomChoice("aerodrones","soarsphere drones","helidrones","helicopter drones")}.`;
			break;
		case 5:
			return `${randomChoice("Eagle","Hawk","Dead","Buck")}-${randomChoice("I","III","I/O")}, a ${randomChoice("telepathic","talking")} ${randomChoice("two-foot-wide","cantaloupe-sized","baseball-sized")} ${randomChoice("floating","hovering")} eyeball ${randomChoice("who","that")} ${randomChoice("alleges","purports")} to be ${randomChoice("","just ")}an autonomous ${randomChoice("AI sentry drone","mechanical drone","robot made by "+randCyberCorp())}... a claim you ${randomChoice("find wholly implausible","pretend to accept, though you secretly know the truth","know for a fact to be false","choose not to question")}.`;
			break;
		case 6:
			return `${randomChoice("Outback","Dingo","Wallaby","Eucalyptus","Sydney","Perth","Uluru")}, ${randomChoice("a retired ","an ex-","a onetime ")}sniper for the ${randCyberCorp()} private ${randomChoice("army","militia","security force")} ${randomChoice("who sports","outfitted with")} ${randomChoice("multiple","some","a number of")} ${randomChoice("costly","outrageously expensive","dangerous")} vigilance ${randomChoice("augments","biomods")}, ${randomChoice("such as","including")} ${randomChoice("a 220 degree FOV","asynchronous blinking","transparent nictitating membranes")} and a constant flow of attention-boosting ${randomChoice("dextroamphetamines",randCyberPrefix()+"amphetamines",randCyberPrefix()+"-modafinil")} ${randomChoice("squirted","dripped","delivered intravenously")} into ${gend[0]} bloodstream.`;
			break;
		default: return "No lookout can be found.";
	}
}



// UNDER SIX... TO FINISH

var cyberFaithTypes = [];
function cyberFaith() {
	if (cyberFaithTypes.length == 0) {
		cyberFaithTypes = [1,2,3,4,5];			//enter numbers equal to the number of switchcases.
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
				return `${randomChoice("Fra","Father")} ${randomChoice("Fresnelle","Variable","Monoculus","Quinine","Vaporcool","Turbo","Hyperlink","Ahref","404","Mountdrive","Sudo","Perceptron")},${randomChoice(" fallen"," corrupt"," mad")} ${randomChoice("monk", "robomonk","cybermonk","robopriest","cyberpriest","lasermonk","mutant monk","digimonk","technomonk")} of the ${randomChoice("XOR","Uplink","Inheritance Class","Higher Scope","Lambda","Envatted","System S4","Gates of Logic","Strict Entailment","Hidden Layer","Kernel")} Brotherhood.`; 
			}
			else {
				return `${randomChoice("Sister","Mother")} ${randomChoice("Fresnelle","Variable","Monoculus","Quinine","Vaporcool","Turbo","Hyperlink","404","Mountdrive","Sudo","Perceptron")}, ${randomChoice("fallen","corrupt","mad")} ${randomChoice("nun", "robonun","cybernun", "lasernun","mutant nun","diginun","technonun")} of ${randomChoice("XOR","Uplink","Inheritance Class","Higher Scope","Lambda","The Envatted","The Gates of Logic","Strict Entailment","Hidden Layer","Kernel")} Abbey.`
			}
			break;
		case 4:
			return `Nameless ${randomChoice("supplicant","parishioner", "Faith Militant", "crusader", "Sentinel")} of the Church of ${randomChoice("Digi","Sciento","Laser","Infoge","Cryo","Info","Plasma","Io")}netics, on ${gend[0]} ${randomChoice("first","second","third")} of the ${randomChoice("Three","Four")} ${randomChoice("Holy Acts of Cybercrime","Immoral Ordeals","Sacred Crimetrials")} required before ${gend[2]} can be ritually ${randomChoice("slain","sacrificed","drowned","beheaded")} and ascend to pure ${randomChoice("data","information","abstracta")}.`;
			break;
		case 5:
			return `${randomChoice("A young","An old","A middle-aged")} ${gend[3]} who recently installed ${randomChoice("a God", "an Angel", "an Ecstati")+randomChoice("chip","mod")}, which ${randomChoice("gives","grants")} ${randomChoice("powerful","intense")} ${randomChoice("religious","spiritual")} ${randomChoice("experiences","visions")} but also secretly lets ${randCyberCorp()} wipe the user's ${randomChoice("consciousness","agency","memory")} and take control of ${gend[0]} body to rent out for ${randomChoice("anonymous tasks... such as a cyberheist","suicide missions", "dangerous jobs","criminal undertakings")}.`;
			break;

		default: return "No religious figure can be found.";
	}
}

//add a climate druid who took a vow of silence.

var cyberEngTypes = [];
function cyberEng() {
	if (cyberEngTypes.length == 0) {
		cyberEngTypes = [1,2,3,4];			//enter numbers equal to the number of switchcases.
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
				geniusname = randomChoice("Reginald","Reggie","Anthony","Thomas","Richie","Owethu","Jabulani","Manqobi");
			} else {
				geniusname = randomChoice("Janice","Yuki","Karabo","Iminathi","Ayanda","Amanda","Mercedes","Taylor");
			}
			return `${geniusname} ${randomChoice("Warren","Quiz","Query","Quest","Ziphozonke","Yamakazi","Ventura")}, ${gend[4]} genius who ${randomChoice("made "+gend[0]+" fortune", "revolutionized industry","astonished the world")} by ${randomChoice("patenting","developing","designing")} ${randomChoice("hundreds of","more than a hundred")} ${randomChoice("marvels of engineering","society-changing inventions")} as a child (including ${randomChoice("a clean hypofission reactor","Riemannian curvature blockchain-cracks","electric sugar","transparent concrete")}, ${randomChoice("paperscreens","information landfills","phase cloaks","quantum darkfuel","ozone constructors","crowdsourced bioenergy collectors","solar pseudotravel")}, and ${randomChoice("ionic democracy","pharma beans","grassfed housing",`genetically modified fallout-cleansing ${randomChoice("spiders","rats","turtles")}`,"nuclear VR","timestop chambers")}), but who has now in ${randomChoice("adulthood",gend[0]+" late twenties",gend[0]+" early thirties")} grown bored of success and ${randomChoice("idly ","")}turned to crime ${randomChoice("as a sort of sport","in search of fun","to try to find some sort of challenge")}.`;
			break;
		case 3:
			return `${randomChoice("Gizmo","Gyro","Sprock","Hardhat","Gadget","Zipper","Hardware")}, ${randomChoice("head ","")}repair${gend[3]} for the ${randCyberCorp()} fleet of ${randomChoice("interstellar","interplanetary","intergalactic","startravel","space-tourism","moontravel")} ${randomChoice("ships","cruisers","mechs","mechanthropes")}, a ${randomChoice("reliable","dependable")} worker who has replaced one of ${gend[0]} ${randomChoice("hands","arms")} with ${randomChoice("a holographic multitool","a soldering laser","a huge wrench","a welding magtorch")}.`;
			break;
		case 4:
			return `${randomChoice("Fievel","Fourvel","Evo","Eva","Friend","Lady","Good Nan")}, a wild ${randomChoice("goat","doberman","bear")} from the ${randomChoice("waste","bad","out","border")}lands who ${randomChoice("somehow","mysteriously")} acquired ${randomChoice("human","superhuman","a huge influx of")} intelligence, built a bipedal exoskeleton${randomChoice(" out of scraps","")}${randomChoice(" on the city's fringes","")}, ${randomChoice("",`got a ${randomChoice("sweet","cool")} ${randomChoice("set of dreadlocks,","mohawk,","eyepatch,")} `)}and set up a ${randomChoice("hovercycle"," mech"," roboservant")} repair shop in ${randomChoice("the Castro 2.0", "the Voight-Ashbury district", "Nob Crater","Russiatown","the Emission district","Sector 17","The Savescumm Sector")}.`;
			break;

		// 5: black market ripperdoc
		// 6: some sort of security system cyborg?  stargate border enforcement
		default: return "No engineers can be found.";
	}
}

var cyberForgerTypes = [];
function cyberForger() {
	if (cyberForgerTypes.length == 0) {
		cyberForgerTypes = [1,2,3,4,5];			//enter numbers equal to the number of switchcases.
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
			return `${randomChoice("Sprite","Tempe5t","T-P0se","Br0ck","Klaus++","c0m","Brainfloss","HREF","Hushtag")}, a${randomChoice("n ultra","n uber"," radical")}-talented graffiti artist who can use ${randCyberPrefix()+randomChoice("spray","paint")} to create ${randomChoice("atom","pixel","voxel")}-perfect ${randomChoice("fake IDs","fake scanbadges","fake passports")}, but whose ${randomChoice("identity","face")} is always kept hidden beneath a ${randomChoice("chromium","obsidian","rainbowsheen","neonblind")} helmet and so might not be just a single person.`;
			break;
		case 5:
			return `${randomChoice("Postfuturo","Abstract","Postconceptual")} artist and ${randomChoice("showrunner","fashion designer","jeweler","furniture designer","architect")} ${randomChoice("Rebecca","Mikael","Travis","Griffin","Justina","Clinton","Blake","Chaddery","Sol")} ${randomChoice("Psonic","Chanman","Glorify","Arbys","Subway","Volcaneo","Kilroy","Basquiat","Sara")}, a ${randomChoice("turtlenecked","quartz-studded","cyberberet-sporting")}, ${randomChoice("neckerchiefed","nanovisored","vaperillo-puffing")}, ${randomChoice("flamboyant","offensively pensive","manic")} ${randomChoice("darling of corporats who love conspicuously spending "+randCyberMoney()+" on tasteless sculptures","provocateur with the skill to counterfeit almost anything")}.`;
			break;
		default: return "No forgers can be found.";
	}
}
// 5: conceptual artist
// 6: lightfingered violinist/watchmaker who can craft unbelievable details. to a pico level.



//burglar: ghost, Iron Man style corpo saboteur ghost with a phase cloak, gentleman cat burglar (Raffles, Lupin, Kaito Kid, Tux), catwoman cat burglar with animal mods, lightfingered orphan with many fingers modded out by Orphanmaster 




//mall santa gone mad, become crime boss?

	// The Forger?  Old monkish eyeball grower for retinal scans, painter / level designer / 3d space artist, ID and passport maker
	// Forger: bodysculptrix.  Gif-tattoo artist and animator.  Graffiti artist

	//Melvin/Gerald/Percy onetime desk jockey who became an action antihero by taking an immersive VR holovacation in TITLE, and then he believes he never left and that he is still in the game... and found the experience so intoxicating that he refuses to acccept that he was ever unplugged.

	//Onetime deskjockey office slave Melvin, who three years ago took on the role of indestructible criminal antihero Jack Slater in the hit immersive VR game/sensation/experience Kung Fu Cyberheist, and apparently found the experience so intoxicating that he refuses to accept that he ever logged out.


// The Search Engine for Shadow broker
// href as a name
// Heynong, Bugmane

//matric like upload of skills way past safe limit

//a ghost... dead consciousness in a flickering electronic form.  Great infiltrator/burglar!

//racist and xenophobic stargate border enforcement

// Anonymous hacker: Guy, Incognito, Anonym, Nameless, Faceless, Nondescript, Impersonal





function setTextContent(element, text) {
    while (element.firstChild!==null)
        element.removeChild(element.firstChild); // remove existing text
    	element.appendChild(document.createTextNode(text));
}

function buildCyberIntro() {
	let coffee = randomChoice("coffee","caffinium","neurostim","coff-E","kov","java","hotbrown","presso");
	let alcohol = randomChoice("synthohol","biobooze","alcopills","ionic cocktails","whiskeyblasters","absynth");
	let divebar = randomChoice("The Collapsing Waveform","Xeno's","The King's Bionics","Rare Earth Mineral","The Dog and Hacker","Mechaskullz","Club Neon","The Wireless Underground", "Touchscreen", "Glass and Leather","The Sensor Bar");
	let party = randomChoice("mansion","nybar","olympics","sports");
	let rich = randomChoice("true","false");
	let job = randomChoice("artwork","money","NOC");
	let awakener = randomChoice("implant","traffic","assistant","clock");

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
		intro3 += `${randomChoice("sip it","take a sip")} as you take stock of your tiny ${randomChoice("condopod","podflat","cyberflat","techpartment")}. ${randomChoice(`It's grey and squalid without a single ${randomChoice("biojack","VR-jack","techport")} in sight; you frown in disapproval.`,"A mutoroach runs under a rug, and you shudder in revulsion.")} Time to turn your life around. You've been waiting for ${randomChoice("your big break", "that one job that'll pull you up to the station you deserve")}, and now, it seems, you've found it. You smile. `;
		if (party=="mansion"||party=="olympics") {
			intro3 += `Sneaking into the mayoral party without an invitation paid off, big time.`
		} else intro3 += `You got more from ${divebar} last night than just a massive hangover.`;
	}

	let intro4 = cyberOverhear(party,job);
	let intro5 = randomChoice("This is going to be a perfect heist.","Now is the time to strike.")+" You just need to assemble your team. Six experienced criminals should "+randomChoice("be the right number.","do it.");

	setTextContent(document.getElementById("cyberIntroPar1"), intro1);
	setTextContent(document.getElementById("cyberIntroPar2"), intro2);
	setTextContent(document.getElementById("cyberIntroPar3"), intro3);
	setTextContent(document.getElementById("cyberIntroPar4"), intro4);
	setTextContent(document.getElementById("cyberIntroPar5"), intro5);

	// let cyberIntroNode1 = document.createElement("p");
 //    let cyberIntroText1 = document.createTextNode(intro1);
 //    cyberIntroNode1.appendChild(cyberIntroText1);
	// let cyberIntroNode2 = document.createElement("p");
 //    let cyberIntroText2 = document.createTextNode(intro2);
 //    cyberIntroNode2.appendChild(cyberIntroText2);
 //    let cyberIntroNode3 = document.createElement("p");
 //    let cyberIntroText3 = document.createTextNode(intro3);
 //    cyberIntroNode3.appendChild(cyberIntroText3);
 //    let cyberIntroNode4 = document.createElement("p");
 //    let cyberIntroText4 = document.createTextNode(intro4);
 //    cyberIntroNode4.appendChild(cyberIntroText4);

 //    let cyberIntroHead = document.getElementById("cyberIntro");
 //    cyberIntroHead.appendChild(cyberIntroNode1);
 //    cyberIntroHead.appendChild(cyberIntroNode2);
 //    cyberIntroHead.appendChild(cyberIntroNode3);
 //    cyberIntroHead.appendChild(cyberIntroNode4);
} 

function cyberIntroParty(party, alcohol,divebar) {
	switch (party) {
		case "mansion":
			return `It's the first day of 21${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}, and you hit the ${alcohol} pretty hard last night at the New Year's Eve Masquerade Ball at the San/Fran mayoral mansion.`;
			break;
		case "nybar":
			return `It's the first day of 21${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}, and you hit the ${alcohol} pretty hard last night.  You remember counting down the New Year at ${divebar}, one of San/Fran's ${randomChoice("thoroughly","truly")} ${randomChoice("seedy","disgusting")} dive bars, but you can barely recall how you got home.`;
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
			str =  `While ${randomChoice("standing in line for the bathroom","waiting for a drink at the bar","playing laserpool","playing sonicdarts")}, you managed to overhear a drunk and looselipped ${randomChoice("corporat","cyberbro","government clerk","security guard")} spill some secrets while ${randomChoice("bragging to","trying to seem like a bigshot to", "boasting to")} ${randomChoice("a group of uninterested women","the android bartender","a couple of neopunks")}. Apparently, `;
			str += cyberJob(party,job);
			break;
		case "olympics":
			str = `In the midst of the revelry, you managed to overhear some juicy information from a drunk and looselipped ${randomChoice("government aide","municipal clerk","Street Judge","corporat","fashionista")}. It turns out that `;
			str += cyberJob(party,job);
			break;
		case "sports":
			str = `The jubilant celebration over San/Fran's ${randomChoice("win","victory")} led ${randomChoice("a gang of razorpunks","some roided-up lowlifes","some particularly shady neopunks")} to take you as friend, and with misplaced camaraderie they shared some juicy ${randomChoice("pieces of info","info-nugs")} with you. In ${randomChoice("confiding","whispering")} tones, they ${randomChoice("told you","let you know")} that `;
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
			str = `${randomChoice("the S/F Museum of Modern Modern Art","the San/Fran Museum of Postconceptual Art","the San/Fran Museum of Virtual Artworks",`the ${randCyberCorp()} Gallery of Postdigital Art`, "the Whitestatic Gallery", "Xorblatt's Auction House")} will soon be showcasing a ${randomChoice("priceless",`billion-${randCyberMoney()}`)} collection of ${randomChoice("oil paintings","pixelgifs","voxel paintings","raytrace models","silicosculptures")} by ${randomChoice("Julia Chan-Lux", "Richardio Vanderclay", "Imelda Tonton", "Groobioo Snoot","Wyclef Schwartz", "Beverly Clever", "E-Liz Pi-Kos")}. The artworks are currently stored in a vault beneath the facility, but the security grid will only be ${randomChoice("fully operational","jacked and onlined","fully activated")} when the showcase is ${randomChoice("made","announced to the")} public.`;
			break;
		case "money":
			str = `${randomChoice("The San/Fran Banking Conglomerate","San/Fran/Bank",`${randCyberCorp()} Savings and Loan`),`${randCyberCorp()} Post-Industrial Banking`, `the ${randCyberCorp()} Money Exchange`} will be ${randomChoice(`keeping an unusually ${randomChoice("enormous","massive")} collection of physical ${randCyberMoney()} ${randomChoice("in their main vault","on premises")} for the next two ${randomChoice("weeks","months")} in order to ${randomChoice("facilitate a grey-legal corpo buyout","back an immoral corpo merger","pay off a digital warlord")}`,`transporting a fortune in gold-pressed ${randCyberMoney()} across the city in ${randomChoice("an armored tankbox","a helivault")} next week`)}. Security will be tight, but not commensurate with the potential take.`;
			break;
		case "NOC":
			let temppol = randomChoice("the FBXI", "Cypherpol", "Corpopol", "the S/F/PD", "AI-Reg Enforcement", "the IRS2.0");
			str = `${temppol} has recently confiscated a ${randomChoice("datasphere","holodrive","nanochip")} from a captured ${randomChoice("saboteur","hackspy")} and is in the process of decrypting it. They don't yet realize how explosive the contents are: it lists the cover identities of every secret field agent from ${randomChoice("Eurasia","Saigon Province","the House of Mars",randCyberCorp())}. This information would sell for billions of ${randCyberMoney()} to governments and corporations worried about spies in their midst. And because ${temppol} doesn't realize what they're sitting on, security isn't nearly what it should be.`;
			break;
		case "antique":
			str = ``;
			break;
		case "military":
			str = ``;
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