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
    document.getElementById("illnessButton").disabled = true;
    createNewAilment();
    let str = `<h3 class="illnesses"><span class="sick">${diseaseName},</span>`;
    createNewAilment();
    str += `<span class="sick"> ${diseaseName},</span>`;
    createNewAilment();
    str += `<span class="sick"> and ${diseaseName}</span></h3>`;

    let illnessNode = getNodes(str)[0];

    document.getElementById("theList").appendChild(illnessNode)

    if (firstSickness) {
        setTimeout(function() {
            document.getElementById("badnews").classList.add("badnewsShow");
        }, 50);
        setTimeout(function() {
            illnessNode.classList.add("illnessesShow");
            illnessNode.childNodes[0].classList.add("sickShow");
        }, 900);
        setTimeout(function() {
            illnessNode.childNodes[1].classList.add("sickShow");
        }, 2100);
        setTimeout(function() {
            illnessNode.childNodes[2].classList.add("sickShow");
        }, 3300);
        setTimeout(function() {
            document.getElementById("illnessButton").childNodes[0].nodeValue = "Anything Else?";
            document.getElementById("illnessButton").disabled = false;
        }, 4500);
        firstSickness = false;
    } else {
        setTimeout(function() {
            illnessNode.classList.add("illnessesShow");
            illnessNode.childNodes[0].classList.add("sickShow");
        }, 50);
        setTimeout(function() {
            illnessNode.childNodes[1].classList.add("sickShow");
        }, 1200);
        setTimeout(function() {
            illnessNode.childNodes[2].classList.add("sickShow");
        }, 2400);
        setTimeout(function() {
            document.getElementById("illnessButton").disabled = false;
        }, 3600);
    }
}