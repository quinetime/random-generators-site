//BULLY

const Title = ["Tough", "Squat", "Big", "Lumpy", "Meaty", "Burly", "Scary", "Beefy", "Fat", "Pudgy", "Shaggy", "Lantern-jawed", "Scruffy", "Gruff", "Ugly", "Rough", "Savage", "Surly", "Dimwit", "Sleazy", "Mad", "Angry", "Blubbery", "Illiterate", "Semi-literate", "Pimply", "Hairy", "Heavy", "Delinquent", "Cruel", "Creepy", "Gross", "Monkey Wrench", "Well-fed", "Ill-kempt", "Hamfisted", "Open-mouth", "Pastepot", "Butcher's boy", "Go-nowhere", "Post-pubescent", "Furious", "Sweaty", "Lumpen", "Gangly", "Oafish", "Gassy", "Paste-eating", "Glue-huffing", "Abusive", "Sloppy"];

const Firstname = ["Spike", "Rocko", "Hugo", "Nelson", "Kearney", "Jimbo", "Dolph", "Ralph", "Rex", "Bobby", "Nick", "Mike", "Mitch", "Pete", "Gordie", "Louie", "Huell", "Huey", "Bluto", "Biff", "Griff", "Leo", "Leon", "Gus", "Dermot", "Travis", "Justin", "Bernie", "Bert", "Burt", "Maury", "Morris", "Bo", "Butch", "Shlomo", "Terrence", "Hagar", "Mac", "Barney", "Cliff", "Clifford", "Harry", "Leroy", "Clem", "B. B.", "T. J.", "Sluggo", "Hugh", "Moe", "Doug", "Don", "Ben", "Curtis", "Dave", "Ted", "Teddy", "Chad", "Brad", "Bradley", "Craig", "Aaron", "Jeremy", "Kev", "Al", "Russ", "Ross", "Brett", "Terry", "Drew", "B. J.", "Rick", "Barry", "Georgie", "George"];

const Nickname = ["Bugs", "Spider", "Tiny", "Crusher", "Pompadour", "Booger", "Knuckles", "Lungfish", "Ox", "Lunk", "Pimple", "Beefside", "Muttonchop", "Porkchop", "Butthead", "Mad Dog", "Zit", "Pig", "Big Belly", "King Kong", "Sweathog", "Pizzaface", "Roadrash", "Roadkill", "Skunk", "Pug", "Bulldog", "Wart", "Snot", "Two-Eyes", "Buffalo", "Gravystain", "Dirtbag", "Wideload", "Brick", "Mudboy", "Babyfat", "Tank", "Meatcar", "Spitball", "Wet Willy", "Rugburn", "Slo-Mo", "Kneecap", "Dirtface", "Ham", "Beef", "Moobs", "Gutterball", "Flunk", "Armpit", "Pitstain", "Crotch", "Lazy Eye", "Lugnut", "Beefstick", "Lunchmeat", "Fatbutt", "Gravyboat", "Fangs", "Potpie", "Bloat", "Melonhead", "Slug", "Acne", "Fisheye", "Tugboat", "Gargle", "Butterbutt", "Tummy", "Cheeseball", "Cowpie", "Mudpie", "Honk", "Chuckles", "Boom Boom", "Buttcrack", "Pukeface", "Facial Hair", "Wedgie", "Pummel", "Horsemeat", "Moose", "Gumball"];

const Lastname = ["Muntz", "Larson", "Larsen", "Jones", "Jones", "Smith", "Smith", "Fogarty", "Desnoyers", "Mason", "Crump", "Pratt", "Turturro", "Cooper", "Tannen", "Andrews", "Spitzer", "Spicer", "Fletcher", "Malfoy", "D'Angelo", "Pitino", "O'Connell", "Wheaton", "Goldthwait", "Mactavish", "Johnson", "Johnson", "Donaldson", "Pearson", "Simmons", "Simmons", "Peterson", "Peterson", "Roosevelt", "Wasserman", "D'Amico", "Nichols", "Thompson", "Anderson", "Anderson", "O'Leary", "O'Leary", "Grimes", "Snell", "Mahoney", "Nass", "Maguire", "McGee", "McCree", "Schwartz", "Schwartz", "Smith", "Rodriguez", "Lopez", "Mackenzie", "Barnes", "Smithee", "Bundy", "Seeley", "McEwan", "Robinson", "Robertson", "O'Malley", "Westin", "Garsbury", "Moore", "Russell", "Portman", "Gordon", "Carey", "Carver", "Levinstein", "Chan", "Watterman", "McElroy", "Carson", "Zimmerman", "Meany", "Freeman", "Rickles"];

const Job = ["flunky", "henchman", "second-in-command", "member", "new member", "founding member", "bruiser", "third-in-command", "right hand man", "go-to guy", "lickspittle", "muscle", "leader", "head", "head", "head", "crony", "henchbully", "whiniest member", "henchman", "bully-in-chief", "leader", "stooge", "enforcer", "treasurer", "newest member", "founder", "founder", "lowlife", "dreg", "meanest member", "biggest member", "strongest member", "scariest member", "oldest member", "fiercest member", "dumbest member", "thickest-necked member", "head bully", "sweatiest member", "scary teenager", "last remaining member", "unofficial mascot", "inspiration behind the logo", "grossest member", "biggest bully", "terrifying leader", "cruel leader", "dues-paying member", "muscle", "muscle", "lead bully", "member", "member", "member", "member", "member", "heaviest member", "dropout", "muscle", "most dangerous member", "cruelest member", "ugliest member", "pimpliest member", "hairiest member", "highschool-aged member", "worst bully", "scariest bully", "oldest bully", "most psychologically abusive bully", "nerd-pounder", "most mischievious member"];

const Gangadjective = ["Screamin'", "Flamin'", "Flamin' Skull", "Flyin'", "Fireball", "Bloody", "Meat", "Bone", "Fightin'", "Bitchin'", "Heck", "Batwing", "Batman", "Angry", "Rippin'", "Midnight", "Silver", "Penny", "Killer", "Nickel", "Bitter", "Poison", "Bullet", "Neon", "Silver Dollar", "Electric", "Crime", "Strong", "Knob", "Skull", "Diesel", "Terror", "Switchblade", "Junkyard", "Deadly Ghost", "Boardwalk", "Seaside", "Westside", "Southside", "Flipside", "Northside", "Main Street", "Sixth Avenue", "Fifth Street", "Back Alley", "Leather", "Loathing", "Rusty", "Sewer", "Pizza", "Phat", "Garbage", "Trash", "Badass", "Kickass", "Gnarly", "Black Eye", "Rough and Tumble", "Eighth Avenue", "Brick Lane", "Sidewalk", "Roadside", "Smoking", "Dirty", "Hadouken", "Crazy Eight", "Killer Clown", "Wicked", "Derby", "Milk", "Backyard", "Alley", "Brickbat", "Pog", "Cockney", "Ruff", "Cool", "Slug", "Chain", "Tuff", "Garbage Can", "Li'l", "Grunge", "Stink", "Fang", "Fourth Avenue", "Clubhouse", "Dump", "Westside", "Yard", "Sandlot", "Corner Store", "Bullfrog", "Town Square", "Milk Carton", "Apple Carton", "Milkjug", "Schoolyard", "Dragonpunch", "Homerun", "Comic Book", "Grossout", "Vomit", "Puke", "Barf", "Grass-stained", "Skinned Knee", "Bowling Alley", "Onion", "Nasty", "Bleepin'", "Nunchuck", "Mixed Martial Arts", "South Shore", "North Shore", "Extreme", "Root Beer", "Jumpkick", "Belch", "Pus", "Judo"];

const Gangname = ["Gang", "Orphans", "Newsies", "Jets", "Eagles", "Weasels", "Tigers", "Jackals", "Sharks", "Gorillas", "Werewolves", "Badasses", "Muscles", "Devils", "Snakes", "Toads", "Vipers", "Cobras", "Hounds", "Bobcats", "Cats", "Dogs", "Piranhas", "Punchers", "Bruisers", "Bulldogs", "Apes", "Toughies", "Lizards", "Godzillas", "Scorpions", "Boyz", "Boys", "Boys", "Boys", "Posse", "Kings", "Gang", "Harlequins", "Nation", "Rockers", "Rockets", "Ogres", "Crew", "Crew", "Goons", "Goons", "Jokers", "Rats", "Kids", "Outlaws", "Rascals", "Authority", "Brotherhood", "Lords", "Dudes", "Destroyers", "Lunatics", "Madboys", "Smackers", "Bastards", "Thugs", "Skullz", "Squad", "Pirates", "Buckaroos", "Crowd", "Frogs", "Ferrets", "Grizzlies", "Rabbits", "Badgers", "Honey Badgers", "Scabs", "Brigade", "Cursewords", "Splats", "Heavyweights"];
  
 let TempTitle = Title.slice();
 let TempFirstname = Firstname.slice();
 let TempLastname = Lastname.slice();
 let TempNickname = Nickname.slice();
 let TempJob = Job.slice();
 let TempGangadjective = Gangadjective.slice();
 let TempGangname = Gangname.slice();
  
function makeBully() {

    if (TempTitle.length == 0) {
    	TempTitle = Title.slice(); }
    var randTitleNum = Math.floor(Math.random() * TempTitle.length);
    var randTitle = TempTitle[randTitleNum];

    if (TempFirstname.length == 0) {
    	TempFirstname = Firstname.slice(); }
    var randFirstnameNum = Math.floor(Math.random() * TempFirstname.length);
    var randFirstname = TempFirstname[randFirstnameNum];

    if (TempNickname.length == 0) {
    	TempNickname = Nickname.slice(); }
    var randNicknameNum = Math.floor(Math.random() * TempNickname.length);
    var randNickname = TempNickname[randNicknameNum];

    if (TempLastname.length == 0) {
    	TempLastname = Lastname.slice(); }
    var randLastnameNum = Math.floor(Math.random() * TempLastname.length);
    var randLastname = TempLastname[randLastnameNum];

    if (TempJob.length == 0) {
    	TempJob = Job.slice(); }
    var randJobNum = Math.floor(Math.random() * TempJob.length);
    var randJob = TempJob[randJobNum];
    TempJob.splice(randJobNum, 1);

    if (TempGangadjective.length == 0) {
    	TempGangadjective = Gangadjective.slice(); }
    var randGangadjectiveNum = Math.floor(Math.random() * TempGangadjective.length);
    var randGangadjective = TempGangadjective[randGangadjectiveNum];
    TempGangadjective.splice(randGangadjectiveNum, 1);

    if (TempGangname.length == 0) {
    	TempGangname = Gangname.slice(); }
    var randGangnameNum = Math.floor(Math.random() * TempGangname.length);
    var randGangname = TempGangname[randGangnameNum];
    TempGangname.splice(randGangnameNum, 1);


    switch (Math.floor(Math.random() * 4)) {
        case 0: 
            document.getElementById("bullyResult").innerHTML = randTitle + " " + randFirstname + " " + randLastname + ", " + randJob + " of the " + randGangadjective + " " + randGangname;
        TempTitle.splice(randTitleNum, 1);
        TempFirstname.splice(randFirstnameNum, 1);
        TempLastname.splice(randLastnameNum, 1);
            break;
        case 1:
            document.getElementById("bullyResult").innerHTML = randTitle + " " + randFirstname + ", " + randJob + " of the " + randGangadjective + " " + randGangname;
        TempTitle.splice(randTitleNum, 1);
        TempFirstname.splice(randFirstnameNum, 1);
            break;
        case 2:
            document.getElementById("bullyResult").innerHTML = randNickname + " " + randLastname + ", " + randJob + " of the " + randGangadjective + " " + randGangname;
        TempNickname.splice(randNicknameNum, 1);
        TempLastname.splice(randLastnameNum, 1);
            break;
        case 3:
            document.getElementById("bullyResult").innerHTML = randFirstname + " \"" + randNickname + "\" " + randLastname + ", " + randJob + " of the " + randGangadjective + " " + randGangname;
        TempFirstname.splice(randFirstnameNum, 1);
        TempNickname.splice(randNicknameNum, 1);
        TempLastname.splice(randLastnameNum, 1);
    }
}

//ILLNESS

const getNodes = str => new DOMParser().parseFromString(str, 'text/html').body.childNodes;


const BodyPart = ["heart", "lung", "kidney", "bone", "liver", "brain", "eye jelly", "spine", "muscle", "nervous system", "face", "tongue", "nerve", "nose", "throat", "pubic", "gluteus", "foot", "shoulder", "ankle", "lymph node", "respiratory", "hormone", "skin", "white blood cell", "vein", "frontal lobe", "sinus", "hairline", "ear canal", "tooth", "bone marrow", "retina", "intestinal", "hemoglobin", "genital", "hip", "urethral", "deep vein", "extremity", "underarm", "knee", "glandular", "bowel", "stomach", "septum", "follicle", "oral", "aural", "cardiac", "renal", "amygdala", "dermal", "glucose", "serotonin", "neuron", "neural", "mental", "navel", "tricep", "pectoral", "red blood cell", "macular", "retinal", "emotion", "cognitive", "mitochondrial", "thumb", "brainstem", "spine", "bipolar", "gum", "lip", "forebrain", "forearm", "occipital lobe", "temporal lobe", "aortal", "large intestine", "small intestine", "pyloric sphincter", "joint", "adrenal", "internal", "chest cavity", "tonsil", "vocal cord", "adenoid", "nasopharynx", "full body", "head", "cell wall", "organ", "nipple", "facial", "gene", "DNA", "chromosomal", "epithelial", "bladder", "gall bladder", "platelet", "pulmonary", "leg", "spleen", "windpipe", "kneecap", "elbow", "jowl", "tailbone", "gut", "fatty tissue", "muscle", "limb", "reproductive system", "skeletal", "skull", "crotch", "lymphatic", "upper palate", "toe", "belly", "memory", "cognitive", "esophageal", "ribcage", "colon", "urinary tract", "mucous membrane", "gastric", "gastrointestinal", "immune system", "duodenum", "oral cavity", "epiglottal", "jaw", "jawbone", "uvula", "nasolabial", "upper body", "lower body", "midsection", "groin", "diaphragm", "pituitary", "eardrum", "stomach lining", "rectal", "tearduct", "eyelid", "scalp", "abdominal", "cranial", "vascular", "pancreatic", "smooth muscle", "canker", "hamstring", "inner thigh", "inner ear", "subcutaneous"];

const Disorder = ["cancer", "stones", "flu", "growths", "warts", "swelling", "inflammation", "bursitis", "scabies", "goiters", "lice", "parasites", "mush", "chills", "sprains", "decay", "arthritis", "rash", "worm", "detachment", "loosening", "wobble", "tickle", "pain", "ache", "fibromyalgia", "trickle", "moistness", "leak", "rabies", "discharge", "oozing", "colic", "anemia", "dryness", "infection", "rot", "migraines", "overactivity", "sneezing", "tenderness", "bruising", "prolapse", "rejection syndrome", "swishes", "thrombosis", "sweats", "leprosy", "dementia", "depression", "sponginess", "pox", "larvae", "irritation syndrome", "clog", "spasms", "cholera", "scaliness", "influenza", "phlegm", "bile", "hardening", "plaque", "inflation", "deflation", "sweats", "diabetes", "loss", "bacteria", "detachment", "pustules", "acne", "oiliness", "itchiness", "problems", "discoloration", "inversus", "tumors", "crabs", "stiffness", "deformation", "abnormalities", "disease", "trauma", "consumption", "tearing", "slipperiness", "reflux", "cavities", "polyps", "wrinkling", "immaturity", "pathogens", "cysts", "abscesses", "defects", "fattiness", "softness syndrome", "dysplasia", "clefts", "rupture", "expansion", "atrophy", "carcinoma", "anomalies", "dwarfism", "hepatitis", "fibrosis", "drop", "fungus", "lumps", "mumps", "scurvy", "paralysis", "squish", "wiggle", "displacement", "judder", "whistle", "rattle", "seizures", "cramps", "crusting", "clotting", "blockage", "loss", "creases", "mites", "spiders", "papilloma", "fuzz", "bloat", "bumps", "gurgle", "softness", "itch", "sores", "gumminess", "degradation", "perforations", "spurs", "spines", "pus", "odor", "blisters", "displacement", "arthritis", "yeast", "collapse", "failure", "wetness", "excess", "slime", "gingivitis", "deformity", "bubbles", "lesions", "melt", "meltdown disorder", "dysphoria", "molt", "mold", "derangement syndrome", "putrefaction", "petrification", "boils", "spoil", "withdrawal", "disappearance disorder", "asymmetry", "buboes", "waxiness", "distortion", "throb", "pinch", "seep", "growth disorder", "unrest", "twitch", "squirm", "shimmy", "tremors", "lymphoma", "embolism", "milkiness", "enlargement", "shrinking", "wither", "dropsy", "vapors", "murmur", "strain", "drip", "upset", "hemorrhage", "eruption", "contusions", "shock", "nodules", "blemishes", "disfigurement", "patchiness", "stains", "autoimmune disorder", "inversion risk", "explosion risk", "peeling", "burns", "necrosis", "fractures", "poisoning", "dandruff", "restlessness", "gout", "heaviness", "pneumonia", "eczema", "crumble", "herpes", "burps", "drift", "puffiness", "shivers", "calluses", "corns", "bunions", "numbness", "apnea", "fatigue", "sepsis", "weep", "crystals", "liquefaction", "unfolding", "spores", "dander", "sluggishness", "lacerations", "suffocation", "flip-out"];

const Prefix = ["early onset", "late onset", "late stage", "early stage", "elevated risk of", "bubonic", "contagious", "communicable", "untreatable", "opiate-related", "alcohol-related", "selective", "midlife", "toxic", "allergy-related", "sexually transmitted", "psychosomatic", "stress-related", "age-related", "idiopathic", "hereditary", "congenital", "chronic", "degenerative", "progressive", "human", "swimmer's", "farmer's", "athlete's", "incipient"]

  
let TempBodyPart = BodyPart.slice();
let TempDisorder = Disorder.slice();
let TempPrefix = Prefix.slice();

var randBodyPart;
var randBodyPartNum;
var randDisorder;
var randDisorderNum;
var randPrefix;
var randPrefixNum;
var diseaseName;

let firstSickness = true;


function createNewAilment() {
    if (TempBodyPart.length == 0) {TempBodyPart = BodyPart.slice(); }
    randBodyPartNum = Math.floor(Math.random() * TempBodyPart.length);
    randBodyPart = TempBodyPart[randBodyPartNum];

    if (TempDisorder.length == 0) {TempDisorder = Disorder.slice(); }
    randDisorderNum = Math.floor(Math.random() * TempDisorder.length);
    randDisorder = TempDisorder[randDisorderNum];

    diseaseName = randBodyPart + " " + randDisorder;
    TempBodyPart.splice(randBodyPartNum, 1);
    TempDisorder.splice(randDisorderNum, 1);

    if (Math.floor(Math.random() * 8) == 0) {
        if (TempPrefix.length == 0) {TempPrefix = Prefix.slice(); }
        randPrefixNum = Math.floor(Math.random() * TempPrefix.length);
        randPrefix = TempPrefix[randPrefixNum];
        diseaseName = randPrefix + " " + diseaseName;
        TempPrefix.splice(randPrefixNum, 1);
    }
}


function threeAilments() {
    createNewAilment();
    let str = `<h3 class="illnesses"><span class="sick">${diseaseName},</span>`;
    createNewAilment();
    str += `<span class="sick"> ${diseaseName},</span>`;
    createNewAilment();
    str += `<span class="sick"> and ${diseaseName}</span></h3>`;

    let illnessNode = getNodes(str)[0];

    document.getElementById("theList").appendChild(illnessNode)

    if (firstSickness) {
        document.getElementById("illnessButton").childNodes[0].nodeValue = "Anything Else?";
        setTimeout(function() {
            document.getElementById("badnews").classList.add("badnewsShow");
        }, 10);
        setTimeout(function() {
            illnessNode.classList.add("illnessesShow");
            illnessNode.childNodes[0].classList.add("sickShow");
        }, 1200);
        setTimeout(function() {
            illnessNode.childNodes[1].classList.add("sickShow");
        }, 2400);
        setTimeout(function() {
            illnessNode.childNodes[2].classList.add("sickShow");
        }, 3600);
        firstSickness = false;
    } else {
        setTimeout(function() {
            illnessNode.classList.add("illnessesShow");
            illnessNode.childNodes[0].classList.add("sickShow");
        }, 10);
        setTimeout(function() {
            illnessNode.childNodes[1].classList.add("sickShow");
        }, 1200);
        setTimeout(function() {
            illnessNode.childNodes[2].classList.add("sickShow");
        }, 2400);
    }
}


