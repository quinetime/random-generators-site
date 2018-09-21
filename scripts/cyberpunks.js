const last8Roles = [];
const cyberRoles = ["hacker", "magic", "politics", "religion", "driver", "detective", "brawler", "weapons", "wildcard", "fence", "corpo", "hedonist", "celebrity", "intellect", "thief", "hood"];
// other: explosive, weapons, acrobat, martial artist/brawler, scav, gang member, undedrworld boss  corporat

let sixCyberHired = false;

function nextCyberRole() {
	let randonum = Math.floor(Math.random()*cyberRoles.length);
	let newRole = cyberRoles.splice(randonum, 1)[0];
	last8Roles.push(newRole);
	if (last8Roles.length>8) {
		let oldRole = last8Roles.shift();
		cyberRoles.push(oldRole);
	}
	console.log(newRole);
	return newRole;
}


function makeCyberpunk() {
	
	let criminal="";
	let criminalText = "";

	switch (nextCyberRole()) {
		case "hacker":
			criminal = "The Hacker: ";
			break;
		case "magic":
			criminal = "The Gifted: ";
			break;
		case "politics":
			criminal = "The Influence: ";
			break;
		case "religion":
			criminal = "The Faith: ";
			break;
		case "driver":
			criminal = "The Driver: ";
			criminalText = cyberDriver();
			break;
		case "detective":
			criminal = "The Information Seeker: ";
			break;
		case "brawler":
			criminal = "The Brawler: ";
			break;
		case "weapons":
			criminal = "The Striker: ";
			break;
		case "wildcard":
			criminal = "The Wild Card:";
			break;
		case "fence":
			criminal = "The Fence: ";
			break;
		case "corpo":
			criminal = "The Corporate: ";
			break;
		case "hedonist":
			criminal = "The Distraction: ";
			break;
		case "celebrity":
			criminal = "The Celebrity: ";
			break;
		case "intellect":
			criminal = "The Intellect: ";
			break;
		case "thief":
			criminal = "The Thief: ";
			break;
		case "hood":
			criminal = "The Street Hood: ";
			break;
		default:
			criminal = "No Criminal Found."
	}




	var cyberRoleNode = document.createElement("H3");
	//var cyberRoleTitle = document.createElement("em");
    var cyberTitleText = document.createTextNode(criminal);
    //cyberRoleTitle.appendChild(cyberTitleText);
    cyberRoleNode.appendChild(cyberTitleText);

    var cyberPersonNode=document.createElement("H4");
    var cyberPersonText = document.createTextNode(criminalText);
    cyberPersonNode.appendChild(cyberPersonText);
    cyberPersonNode.classList.add("cyberperson");
    cyberRoleNode.appendChild(cyberPersonNode);
    document.getElementById("cyberList").appendChild(cyberRoleNode);
}



function cyberDriver() {
	return "Rom Beeseech, a lightcycle pro.";
}