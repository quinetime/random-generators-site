//DADJOKES

const getNodes = str => new DOMParser().parseFromString(str, 'text/html').body.childNodes;

const joke = str => `<strong class="haha">${str}</strong>`;

const adverbItem = [
	[`a bicycle`, joke`wheel`+`y`],
	[`a necktie`, joke`knot`],
	[`a fishing rod`, joke`reel`+`y`],
	[`a can of minestrone`, joke`soup`+`er`],
	[`a hatchet`, joke`ax`+`tremely`],
	[`a wizard`, joke`mage`+`rly`],
	[`a tiny drill`, `a ${joke`little bit`}`],
	[`a witch`, joke`wicked`],
	[`a tiny bug`, joke`mite`+`y`],
	[`a teacher's pen`, joke`ink-red`+`-ibly`],
	[`a beautiful flower`, joke`pretty`],
	[`your iPhone's voice assistant`, joke`Siri`+`ously`],
	[`a clown`, joke`hilariously`],
	[`a pane of glass`, joke`clear`+`ly`],
	[`a sock that needs mending`, joke`darn`],
	[`a beaver`, joke`dam`],
	[`Beelzebub`, joke`devilishly`],
	[`a zombie`, joke`dead`],
	[`a kid who just ate a ton of sugar`, joke`hyper`],
	[`an insult`, joke`slight`+`ly`],
	[`a person who needs a massage`, joke`sore`+`-ta`],
	[`electricity`, `some`+joke`watt` ],
	[`electricity`, joke`shocking`+`ly`],
	[`your uncle`, joke`relative`+`ly`],
	[`a six-pack`, joke`ab`+`-solutely`],
	[`Frankenstein`, `de`+joke`monster`+`ably`],
	[`pizza cheese`, joke`grate`+`ly`],
	[`a beautiful sock that's just been mended`, `${joke`pretty`} ${joke`darn`}`],
	[`a fat frog`, joke`toad`+`ally`],
	[`a cloud`, joke`high`+`ly`],
	[`a cow`, joke`udder`+`ly`],
	[`a lion`, joke`mane`+`ly`],
	[`a house that has lots of windows`, joke`paneful`+`ly`],
	[`the guy who runs your school`, joke`principal`+`ly`],
	[`an army leader`, joke`general`+`ly`],
	[`the number 7`, joke`prime`+`-arily`],
	[`a toilet`, joke`commode`+`-iously`],
	[`farmer pants`, joke`overall`],
	[`an omelette`,joke`egg`+`stra`],
	[`Swiss cheese`, `w`+joke`hole`+`y`],
	[`a nun`, joke`habit`+`ually`],
	[`an optimist`, joke`positively`],
	[`the number one`, joke`one`+`-derfully`],
	[`snot`, joke`gross`+`ly`],
	[`the Wolfman`, joke`monstrously`],
	[`a haunted house`, joke`frightfully`],
	[`an addition sign with a multiplication sign`, joke`sum`+joke`times`],
	[`Bambi`, joke`deer`+`ly`],
	[`a Twitter button`, joke`like`+`ly`],
	[`a donkey`, joke`ass`+`pecially`],
	[`a shaggy dog`, joke`fur`+`rociously`],
	[`a family that just finished Thanksgiving dinner`, joke`full`+`y`],
	[`a grizzly`, joke`bear`+`ly`],
	[`undercooked meat`, joke`rare`+`ly`],
	[`any cop who isn't the police chief`, joke`not chief`+`ly`],
	[`a rabbit`, `in-`+joke`hare`+`-ently`],
	[`the Loch Ness Monster`, joke`Nessie`+`sarily`],
	[`a submarine engineer named Stan`, joke`Sub Stan`+`-tially`],
	[`an empty kennel`, joke`doggone`],
	[`dynamite`, joke`blasted`],
	[`a terrible surgeon`, joke`bloody`],
	[`dandelion greens`, joke`bitter`+`ly`],
	[`the knot that keeps thread from going through the eye of a needle`, joke`knot`+` `+joke`sew`],
	[`the number 3`, joke`not 2`],
	[`champagne`, `pro`+joke`bubbly`],
	[`a flock of ghosts`, joke`scares`+`ly`],
	[`an oil spill`, joke`slick`+`ly`],
	[`a person who just passed out`, joke`faint`+`ly`],
	[`sexy pyjamas`, joke`négligée`+`-bly`],
	[`some Earl Grey that I bought`, joke`my-tea`],
	[`the netherworld`, joke`hell`+`a`],
	[`road rage`, joke`mad`],
	[`Pokemon Go`, joke`craze`+`y`],
	[`a cow`, joke`moo`+`cho`],
	[`a gang of cowboys`, joke`posse`+`bly`],
	[`something unimpressive`, joke`meh`+`-ga`],
	[`a campground`, `in`+joke`tents`+`ly`],
	[`a ballerina`, joke`too too`],
	[`a plant`, joke`plant`+`y`],
	[`deodorizer`, joke`scentsless`+`ly`]
];

const adjItem = [
	[`a snowman`, joke`cool`],
	[`an eighteen-wheeler`, joke`tired`],
	[`an eighteen-wheeler`, joke`tire`+`some`],
	[`a baby's shoe`, joke`booty`+`licious`],
	[`the number 9`, joke`odd`],
	[`a record`, joke`groovy`],
	[`a bee`, joke`buzz`+`worthy`],
	[`an airplane`, joke`fly`],
	[`a rodent`, joke`ratty`],
	[`Garfield`, joke`catty`],
	[`a glove`, joke`hand`+`some`],
	[`a peach`, joke`pit`+`iful`],
	[`a stick`, joke`sticky`],
	[`Black Beauty`, joke`hoarse`],
	[`a hunger strike`, joke`fast`],
	[`a crustacean`, joke`crabby`],
	[`a vape pen`, joke`puff`+`y`],
	[`overcooked meat`, joke`well done`],
	[`a cow`, joke`cud`+`dly`],
	[`a teabag`, joke`steep`],
	[`an apartment`, joke`flat`],
	[`a green gemstone`, joke`jade`+`d`],
	[`someone walking down the sidewalk`, joke`pedestrian`],
	[`a teddy bear`, joke`stuffy`],
	[`a golfer`, joke`tee`+`dious`],
	[`a drill`, joke`boring`],
	[`a bird`, joke`flight`+`y`],
	[`a whiskey-maker`, joke`still`],
	[`a ladybug`, joke`dotty`],
	[`a window`, joke`sill`+`y`],
	[`a person hiding a rabbit under ${randomChoice("his","her")} hat`, joke`harebrained`],
	[`a pine tree`, joke`sappy`],
	[`fish soup`, joke`chowder`+`headed`],
	[`a cashew`, joke`nutty`],
	[`a distant galaxy`, joke`far out`],
	[`a screw`, joke`screwy`],
	[`a flea market`, joke`bazaar`+`-o`],
	[`Lancelot's horse`, joke`knight`+joke`mare`+`-ish`],
	[`a painting that fell down`, joke`off the wall`],
	[`a pet`, joke`petty`],
	[`the number 9`, `asi-`+joke`nine`],
	[`a toddler who always says "no"`, joke`no`+`-torious`],
	[`the letter M`, joke`M`+`-pressive`],
	[`a screw with a golfball`, joke`screwball`],
	[`a baseball glove`, joke`catchy`],
	[`a high school dance`, joke`prom`+`inent`],
	[`a waterpark`, joke`splashy`],
	[`a professional bowler`, joke`striking`],
	[`a police officer`, joke`arresting`],
	[`the tide`, joke`swell`],
	[`a submarine sandwich with a lime`, joke`sub`+joke`lime`],
	[`a person getting rained on`, joke`under the weather`],
	[`the Shakespeare shelf at the library`, joke`play`+`ful`],
	[`a chicken strip`, joke`tender`],
	[`the contents of a witch's cauldron`, joke`brew`+`tal`],
	[`a kitty cat`, joke`purr`+`ple`],
	[`a kitty cat`, joke`mew`+`sical`],
	[`a ceiling fan`, joke`fan`+`cy`],
	[`a skull`, joke`boneheaded`],
	[`a weaving machine`, joke`loom`+`inous`],
	[`a ballpoint`, joke`pen`+`-dulous`],
	[`a really cold day`, joke`brrr`+`ly`],
	[`a lumberjack`, joke`plaid`+`itudinous`],
	[`a poltergeist`, joke`spirit`+`ed`],
	[`the letter E`, joke`E`+`-ger`],
	[`a rushing river`, joke`rapid`],
	[`a dictionary that only defines the word 'itself' over and over`, joke`full of itself`],
	[`the North Pole`, joke`on top of the world`],
	[`the first-place finisher of a race`, joke`win`+`some`],
	[`a beet thrown high into the air`, joke`upbeet`],
	[`a riot`, joke`revolting`],
	[`a pig`, joke`sty`+`lish`],
	[`iron ore`, joke`unrefined`],
	[`a jack-in-the-box`, joke`crank`+`y`],
	[`a saxophone solo`, joke`saxy`]
];

var adverbTemp = [];
var adjTemp = [];


function writeJokeOpening() {

	if (adverbTemp.length == 0) {
    	adverbTemp = adverbItem.slice(); }
    if (adjTemp.length == 0) {
    	adjTemp = adjItem.slice(); }  // repopulate empty joke arrays

    let randoAdv = Math.floor(Math.random()*adverbTemp.length);
	let currentAdv = adverbTemp[randoAdv];
	let randoAdj = Math.floor(Math.random()*adjTemp.length);
	let currentAdj =adjTemp[randoAdj];

	let childfirstname = randomChoice("Jenny","Jimmy","Bobby","Sammy","Taylor","Emily","Aiden","Sally","Charlie","Jayden","Molly","Sally Jo","Bobbie","Jennifer","Michael","Claire","Richie","Lizzy","Melanie","Oscar","Dexter","Alice","Billy","Jessie","Marcus","Ashley","Taylor","Matty");
	let childname = randomChoice("","little ","lil' ","","")+childfirstname;

	let opening = randomChoice(
		`Psst... hey, ${childname}. W`,
		`Hey, ${childname}! W`,
		`Hey, ${childname}. W`,
		`Good morning, ${childname}. W`,
		`I've got a good one for you, ${childname}! W`,
		`What's up, ${childname}? Listen, w`,
		`Hey ${childname}, dinner's in fifteen. By the way, w`,
		`Hey ${childname}, how was school today? Good, good. By the way, w`
		)+`hat do you get when you cross ${currentAdv[0]} with ${currentAdj[0]}?`

	let kidresponse1 = randomChoice(
		`(eyeroll) I don't know, dad. What?`,
		`Ugh. What, dad?`,
		`What, dad?`,
		`What, dad?`,
		`What, dad?`,
		`Ugh. I dunno, dad. What?`,
		`Really? Another dad joke? Fine... I dunno, what?`,
		`Dad, I told you not to call me that any more. I go by ${randomChoice("Amethyst","Raven","Peridot","Sphynx","Harkness","Nightshadow")} now.`
		);

	var theJoke = document.getElementById("theJoke");

	setTextContent(document.getElementById("jokeSetup"), opening);
	setTextContent(document.getElementById("jokeBtn"), kidresponse1);
	document.getElementById("jokeBtn").onclick = revealJokeZinger;

	theJoke.removeChild(theJoke.lastChild); // remove existing joke answer
	let zingertext = `<p id="jokeZinger" class="hiddenzinger">I don't know, but I bet it's ${currentAdv[1]} ${currentAdj[1]}!</p>`;
	theJoke.appendChild(getNodes(zingertext)[0]);

	adjTemp.splice(randoAdj, 1);
	adverbTemp.splice(randoAdv, 1);  // take used-up jokes out of array
}


function revealJokeZinger() {
	var zingerNode = document.getElementById("jokeZinger");
    zingerNode.classList.toggle("hiddenzinger");

	let kidresponse2 = randomChoice(
		`I swear to god, dad! Get out of my room!`,
		`Dad! That doesn't even make any sense!`,
		`Ugh. Whatever, dad.`,
		`Get outta here, dad! I'm on the phone with ${randomChoice("Skye","Jaylor","Sasha","Cindy","Brett","Hawksley")}!`,
		`Get outta here, dad! I'm playing Fortnite!`,
		`Dad, your jokes suck.`,
		`Dad, your jokes make no sense.`,
		`OMG. You suck, dad.`,
		`Heh. Good one, dad.`,
		`(eyeroll) Dad, go away.`,
		`Are you okay, dad?`,
		`Dad, leave me alone.`,
		`Get out of my room, dad.`,
		`Groan.`,
		`Ugh. Go bug mom.`
		);

	setTextContent(document.getElementById("jokeBtn"), kidresponse2);
	document.getElementById("jokeBtn").onclick = writeJokeOpening;

	let hahas = document.querySelectorAll(".haha");

	hahas[0].classList.add("firsthaha");
	hahas[0].classList.add("waggle");

	for (let i=1;i<hahas.length;++i) {
  		hahas[i-1].addEventListener("animationend", () => {
    		hahas[i].classList.add("waggle");
  		});
	}


}


