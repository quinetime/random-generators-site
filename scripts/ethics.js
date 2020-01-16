let ethicsQNo = 1;

const me = () => randomChoice("a moral ", "an ethical ");
const mely = () => randomChoice("morally ","ethically ");
const menly = () => randomChoice("morally ", "ethically ","","");
const time = () => randomChoice("sometimes ","never ","always ");
const timen = () => randomChoice("sometimes ","never ","always ","","","");

const ethicsActivityVerbs = [
	()=>`treat others as a mere means`,
	()=>`increase global utility`,
	()=>`intentionally decrease global utility`,
	()=>`pursue happiness`,
	()=>`pursue wealth`,
	()=>`own pets`,
	()=>`acculumate capital`,
	()=>`consume ${randomChoice(`meat`,`fossil fuels`,`veal`,`octopus`,`cephalopods`,`horse meat`,`dog meat`,`cat meat`,`foie gras`,`human flesh`,`pornography`)}`,
	()=>`consume ${randomChoice(`meat`,`fossil fuels`,`veal`,`octopus`,`cephalopods`,`horse meat`,`dog meat`,`cat meat`,`foie gras`,`human flesh`,`pornography`)}`,
	()=>`consume ${randomChoice(`meat`,`fossil fuels`,`veal`,`octopus`,`cephalopods`,`horse meat`,`dog meat`,`cat meat`,`foie gras`,`human flesh`)}`,
	()=>`eat ${randomChoice(`meat`,`veal`,`octopus`,`cephalopods`,`horse meat`,`dog meat`,`cat meat`,`foie gras`,`human flesh`)}`,
	()=>`steal`,
	()=>`steal ${randomChoice(`bread`,`lottery tickets`,`food from a soup kitchen`,`candy from a baby`,`the identity of a credulous senior citizen`,`credit card numbers`,`more than a thousand dollars`,`thousands of dollars worth of consumer electronics`,`banking passwords`,`Netflix passwords`,`intellectual property`)}`,
	()=>`steal ${randomChoice(`bread`,`lottery tickets`,`food`,`candy`,`credit card numbers`,`more than a thousand dollars`,`thousands of dollars worth of consumer electronics`,`banking passwords`,`Netflix passwords`,`intellectual property`,`art`)} from ${randomEthicsPerson()}`,
	()=>`steal ${randomChoice(`bread`,`lottery tickets`,`food from a soup kitchen`,`candy from a baby`,`the identity of a credulous senior citizen`,`credit card numbers`,`more than a thousand dollars`,`thousands of dollars worth of consumer electronics`,`banking passwords`,`Netflix passwords`,`intellectual property`)}`,
	()=>`steal ${randomChoice(`bread`,`lottery tickets`,`food from soup kitchens`,`candy from a baby`,`the identity of a credulous senior citizen`,`credit card numbers`,`more than a thousand dollars`,`thousands of dollars worth of consumer electronics`,`banking passwords`,`Netflix passwords`,`intellectual property`)} to save the life of ${randomEthicsPerson()}`,
	()=>`steal ${randomChoice(`bread`,`lottery tickets`,`food from soup kitchens`,`candy from a baby`,`the identity of a credulous senior citizen`,`credit card numbers`,`more than a thousand dollars`,`thousands of dollars worth of consumer electronics`,`banking passwords`,`Netflix passwords`,`intellectual property`)} to feed ${randomEthicsPerson()}`,
	()=>`rob ${randomChoice(`a bank`,`a convenience store`,`an ATM`,`a gas station`,`a liquor store`)}`,
	()=>`rob ${randomChoice(`a bank`,`a convenience store`,`an ATM`,`a gas station`,`a liquor store`)} to save the life of ${randomEthicsPerson()}`,
	()=>`abstain from pleasure`,
	()=>`abstain from drug use`,
	()=>`have children`,
	()=>`decide not to procreate`,
	()=>`believe a falsehood`,
	()=>`lie`,
	()=>`break the law`,
	()=>`jaywalk`,
	()=>`overeat`,
	()=>`drink ${randomChoice(`alcohol`,`energy drinks`,`hard liquor`,`bottled water`,`human blood`,"fair trade coffee")}`,
	()=>`drink ${randomChoice(`alcohol`,`hard liquor`,`bottled water`,`human blood`,"fair trade coffee")}`,
	()=>`use illegal drugs`,
	()=>`use mescaline`,
	()=>`use meth`,
	()=>`smoke`,
	()=>`sell flavored vapes`,
	()=>`break a promise`,
	()=>`break a promise to ${randomChoice(`a dying relative`,`one's parents`)}`,
	()=>`break a promise to ${randomChoice(`a child`, `a lover`)}`,
	()=>`cheat on one's taxes`,
	()=>`bequeath one's estate to ${randomChoice(`charity`,`one's children`,`one's eldest son`)}`,	
	()=>`brag about one's accomplishments`,
	()=>`flirt`,
	()=>`vaccinate one's children`,
	()=>`vaccinate ${randomEthicsPerson()}`,
	()=>`give blood`,
	()=>`donate bone marrow`,
	()=>`give money to charity`,
	()=>`give money to a religious charity`,
	()=>`pledge to give ten percent of one's earnings to charity`,
	()=>`pledge to give half of one's earnings to ${randomEthicsPerson()}`,
	()=>`speed over the limit`,
	()=>`have sex outside wedlock`,
	()=>`masturbate`,
	()=>`wear fur`,
	()=>`argue in online comment threads`,
	()=>`give government subsidies to the ${randomChoice("corn","petroleum","tobacco","tech")} industry`,
	()=>`buy clothes made with sweatshop labor`,
	()=>`cheer for the away team at a baseball game`,
	()=>`root for the underdog at a basketball game`,
	()=>`travel back in time to kill Hitler`,
	()=>`waste one's life on meaningless pursuits`,
	()=>`fail to vote in a Federal election`,
	()=>`vote`,
	()=>`drive when walking is an option`,
	()=>`buy fur`,
	()=>`fail to recycle`,
	()=>`litter`,
	()=>`cheat on one's spouse`,
	()=>`be a rude conversationalist`,
	()=>`seek revenge against an enemy`,
	()=>`feel hatred`,
	()=>`nurture a grudge`,
	()=>`tell one's child that Santa Claus exists`,
	()=>`tell someone else's child that Santa Claus does not exist`,
	()=>`share one's Netflix account`,
	()=>`plagiarize`,
	()=>`download bittorrented music`,
	()=>`form a belief without evidence`,
	()=>`act without thinking`,
	()=>`drive without a license`,
	()=>`gamble`,
	()=>`take an eye for an eye`,
	()=>`force ${randomEthicsPerson()} to become addicted to drugs`,
	()=>`starve ${randomEthicsPerson()}`,
	()=>`play a trick on ${randomEthicsPerson()}`,
	()=>`write a vidinctive revenge novel about ${randomEthicsPerson()}`,
	()=>`kill ${randomEthicsPerson()} to save ${randomEthicsPerson()}`,
	()=>`kill ${randomEthicsPerson()} to save ${randomEthicsPerson()}`,
	()=>`kill ${randomEthicsPerson()} to save ${randomEthicsPerson()}`,
	()=>`murder ${randomEthicsPerson()}`,
	()=>`be generous to ${randomEthicsPerson()}`,
	()=>`put the needs of ${randomEthicsPerson()} over the needs of ${randomEthicsPerson()}`,
	()=>`be friends with ${randomEthicsPerson()}`,
	()=>`drown ${randomEthicsPerson()}`,
	()=>`psychologically torture ${randomEthicsPerson()}`,
	()=>`torture ${randomEthicsPerson()} to save the life of ${randomEthicsPerson()}`,
	()=>`lend money to ${randomEthicsPerson()}`,
	()=>`donate a kidney to ${randomEthicsPerson()}`,
	()=>`antagonize ${randomEthicsPerson()}`,
	()=>`annoy ${randomEthicsPerson()}`,
	()=>`tickle ${randomEthicsPerson()}`,
	()=>`invite ${randomEthicsPerson()} to dinner`,
	()=>`befriend ${randomEthicsPerson()}`,
	()=>`endorse ${randomEthicsPerson()} for office`,
	()=>`feel hate in one's heart toward ${randomEthicsPerson()}`,
	()=>`spread untrue rumors about ${randomEthicsPerson()}`,
	()=>`sacrifice ${randomEthicsPerson()} to save ${randomEthicsPerson()}`,
	()=>`sacrifice ${randomEthicsPerson()} to save the life of ${randomEthicsPerson()}`,
	()=>`bring ${randomEthicsPerson()} into existence`,
	()=>`steal food from ${randomEthicsPerson()} to feed ${randomEthicsPerson()}`,
	()=>`steal money from ${randomEthicsPerson()} to save the life of ${randomEthicsPerson()}`,
	()=>`rob from ${randomEthicsPerson()} and give to ${randomEthicsPerson()}`,
	()=>`dedicate one's life to ${randomEthicsPerson()}`,
	()=>`treat ${randomEthicsPerson()} as a mere means`,
	()=>`divert a runaway trolley to hit ${randomEthicsPerson()} in order to save ${randomEthicsPerson()}`,
	()=>`repent for one's sins moments before dying`,
	()=>`sing off-key at karaoke`,
	()=>`fake one's own death`,
	()=>`extort ${randomEthicsPerson()}`,
	()=>`sell counterfeit goods`,
	()=>`exploit the cognitive biases of ${randomEthicsPerson()}`,
	()=>`inflict ${randomChoice("long-term","permanent","significant")} emotional damage upon ${randomEthicsPerson()}`,
	()=>`inflict physical pain, but not mental anguish, on ${randomEthicsPerson()}`,
	()=>`invade ${randomChoice("a smaller","a less powerful", "an oil-rich", "a neighboring")} country`,
	()=>`invite one's parents to move in`,
	()=>`watch pornography`,
	()=>`give in to one's baser instincts and ${randomEthicsActivityVerb()}`,
	()=>`buy cryptocurrency`,
	()=>`desire fame`,
	()=>`desire immortality`,
	()=>`commit adultery`,
	()=>`bear false witness against ${randomEthicsPerson()}`
];

const ethicsActivityNouns = [
	()=>`inciting political revolution`,
	()=>`wearing fur`,
	()=>`taking a vow of ${randomChoice(`chastity`,`silence`)}`,
	()=>`conspicious consumption`,
	()=>`cleanliness`,
	()=>`vanity`,
	()=>`masturbation`,
	()=>`peer pressure`,
	()=>`flirting`,
	()=>`theft`,
	()=>`robbery`,
	()=>`public nudity`,
	()=>`gluttony`,
	()=>`overeating`,
	()=>`drinking too much`,
	()=>`mescaline use`,
	()=>`amphetamine use`,
	()=>`vaping`,
	()=>`blood transfusion`,
	()=>`literacy`,
	()=>`car ownership`,
	()=>`flirting`,
	()=>`curiosity`,
	()=>`seething in anger`,
	()=>`violence`,
	()=>`empathy`,
	()=>`loneliness`,
	()=>`theft`,
	()=>`arson`,
	()=>`becoming a foster parent`,
	()=>`abortion`,
	()=>`euthanasia`,
	()=>`loneliness`,
	()=>`hoarding property`,
	()=>`laziness`,
	()=>`jealousy`,
	()=>`envy`,
	()=>`buying merchandise licensed by the NFL`,
	()=>`supporting universal health care`,
	()=>`speaking ill of the dead`,
	()=>`envy of ${randomEthicsPerson()}`,
	()=>`suffering`,
	()=>`inflicting mental anguish (but not physical pain) on ${randomEthicsPerson()}`,
	()=>`ambition`,
	()=>`sloth`,
	()=>`cremation`,
	()=>`talent`,
	()=>`bragging about one's accomplishments`,
	()=>`professional failure`,
	()=>`wealth`,
	()=>`poverty`,
	()=>`kindness`,
	()=>`professional accomplishment`,
	()=>`leadership`,
	()=>`sadness`,
	()=>`happiness`,
	()=>`the pursuit of pleasure`,
	()=>`the pursuit of wealth`,
	()=>`the pursuit of happiness`,
	()=>`arguing in online comment threads`,
	()=>`pleasure`,
	()=>`private property`,
	()=>`disdain toward ${randomEthicsPerson()}`,
	()=>`taxation`,
	()=>`gun ownership`,
	()=>`war`,
	()=>`veganism`,
	()=>`protesting against manmade global warming`,
	()=>`causing the extinction of a species`,
	()=>`putting the needs of the many over the needs of the few`,
	()=>`indolence`,
	()=>`achieving professional success`,
	()=>`sex outside wedlock`,
	()=>`polyamory`,
	()=>`monogamy`,
	()=>`crying in public`,
	()=>`locavorism`,
	()=>`loud chewing`,
	()=>`masturbation`,
	()=>`helping an old lady cross the street`,
	()=>`chivalry`,
	()=>`jaywalking`,
	()=>`overeating`,
	()=>`the use of rideshare apps`,
	()=>`tipping at least 20 percent`,
	()=>`tipping less than 20 percent`,
	()=>`facial hair`,
	()=>`using Facebook`,
	()=>`using Twitter`,
	()=>`using Paypal`,
	()=>`buying locally`,
	()=>`buying groceries on Amazon`,
	()=>`donating a kidney to ${randomEthicsPerson()}`,
	()=>`sacrificing ${randomEthicsPerson()} to save ${randomEthicsPerson()}`,
	()=>`stealing ${randomChoice(`bread`,`lottery tickets`,`food from a soup kitchen`,`candy from a baby`,`the identity of a credulous senior citizen`,`credit card numbers`,`thousands of dollars worth of consumer electronics`,`banking passwords`,`Netflix passwords`,`intellectual property`)}`,
	()=>`stealing ${randomChoice(`bread`,`lottery tickets`,`food`,`candy`,`credit card numbers`,`more than a thousand dollars`,`thousands of dollars worth of consumer electronics`,`banking passwords`,`Netflix passwords`,`intellectual property`,`art`)} from ${randomEthicsPerson()}`,
	()=>`stealing ${randomChoice(`bread`,`lottery tickets`,`food from a soup kitchen`,`candy from a baby`,`the identity of a credulous senior citizen`,`credit card numbers`,`more than a thousand dollars`,`thousands of dollars worth of consumer electronics`,`banking passwords`,`Netflix passwords`,`intellectual property`)}`,
	()=>`stealing ${randomChoice(`bread`,`lottery tickets`,`food from soup kitchens`,`candy from a baby`,`the identity of a credulous senior citizen`,`credit card numbers`,`more than a thousand dollars`,`thousands of dollars worth of consumer electronics`,`banking passwords`,`Netflix passwords`,`intellectual property`)} to save the life of ${randomEthicsPerson()}`,
	()=>`stealing ${randomChoice(`bread`,`lottery tickets`,`food from soup kitchens`,`candy from a baby`,`the identity of a credulous senior citizen`,`credit card numbers`,`more than a thousand dollars`,`thousands of dollars worth of consumer electronics`,`banking passwords`,`Netflix passwords`,`intellectual property`)} to feed ${randomEthicsPerson()}`,
	()=>`killing ${randomEthicsPerson()} to save ${randomEthicsPerson()}`,
	()=>`killing ${randomEthicsPerson()} to save ${randomEthicsPerson()}`,
	()=>`murdering ${randomEthicsPerson()} to save ${randomEthicsPerson()}`,
	()=>`sacrificing ${randomEthicsPerson()} to save ${randomEthicsPerson()}`,
	()=>`preferring the company of ${randomEthicsPerson()} to the company of ${randomEthicsPerson()}`,
	()=>`drinking ${randomChoice(`alcohol`,`hard liquor`,`bottled water`,`human blood`,"fair trade coffee")}`,
	()=>`loving ${randomEthicsPerson()}`,
	()=>`admiring ${randomEthicsPerson()}`,
	()=>`befriending ${randomEthicsPerson()}`,
	()=>`cutting in line`,
	()=>`bullying`,
	()=>`bullying ${randomEthicsPerson()}`,
	()=>`instilling a sense of ${randomChoice("justice","fairness","morality","guilt")} in one's children`,
	()=>`playing violent video games`,
];

const ethicsJudgments = [
	()=>`is ${timen()+mely()}necessary`,
	()=>`is ${mely()}prohibited`,
	()=>`is ${mely()}mandatory`,
	()=>`is ${mely()}wrong`,
	()=>`is ${mely()}wrong`,
	()=>`is ${mely()}permissible`,
	()=>`is ${mely()}impermissible`,
	()=>`is ${menly()}permissible`,
	()=>`is ${menly()}impermissible`,
	()=>`is ${time()+menly()}permissible`,
	()=>`is ${time()+menly()}impermissible`,
	()=>`is ${menly()}right`,
	()=>`is ${timen()}wrong`,
	()=>`is ${timen()}a virtue`,
	()=>`is ${timen()+mely()}necessary`,
	()=>`is ${mely()}prohibited`,
	()=>`is ${mely()}mandatory`,
	()=>`is ${menly()}wrong`,
	()=>`is ${timen()+mely()}right`,
	()=>`is ${timen()+mely()}wrong`,
	()=>`is ${timen()}a virtue`,
	()=>`is ${timen()}a moral virtue`,
	()=>`is ${timen()}a sin`,
	()=>`is sinful`,
	()=>`can be justified on particular occasions but not as a rule`,
	()=>`is bad`,
	()=>`is good`,
	()=>`is mean`,
	()=>`is an Aristotelian virtue`,
	()=>`creates a moral stain that can never be washed away`,
	()=>`is ${menly()}praiseworthy`,
	()=>`is ${me()}wrong`,
	()=>`is ${me()}good`,
	()=>`is ${me()}vice`,
	()=>`is ${me()}sin`,
	()=>`is ${timen()}a vice`,
	()=>`is ${timen()}an ethical vice`,
	()=>`is ${timen()}a carnal sin`,
	()=>`is ${timen()}a venial sin`,
	()=>`is ${timen()}a mortal sin`,
	()=>`is ${menly()}virtuous`,
	()=>`is ${mely()}repugnant`,
	()=>`is ${mely()}repellant`,
	()=>`is neither good nor bad`,
	()=>`is ${timen()+menly()}good`,
	()=>`is ${timen()+menly()}bad`,
	()=>`is illegal but ${timen()+menly()}acceptable`,
	()=>`is supererogatory`,
	()=>`goes above and beyond what is ${mely()}required`,
	()=>`is illegal but ${timen()+mely()}mandatory`,
	()=>`is ${timen()+menly()}exemplary`,
	()=>`is ${mely()}criminal`,
	()=>`is a virtue (but not the highest virtue)`,
	()=>`is the highest virtue`,
	()=>`is ethically rude`,
	()=>`can be willed to universal law`,
	()=>`cannot be willed to universal law`,
	()=>`is morally exemplary`,
	()=>`is prohibited by the laws of rationality`,
	()=>`is permitted by the laws of morality`,
	()=>`contravenes morality`,
	()=>`is ${mely()}wrong`,
	()=>`prevents entry into the Kingdom of Heaven`,
	()=>`is ${mely()}frowned upon`,
	()=>`is inconsistent with the good life`,
	()=>`is inconsistent with evil`,
	()=>`is evil`,
	()=>`is saintly`,
	()=>`is ${mely()}unfair`,
	()=>`is ${mely()}justifiable`,
	()=>`is ${mely()}unjustifiable`,
	()=>`is ${mely()}necessary but physically impossible`,
	()=>`is the duty of a virtuous person`,
	()=>`is ${me()}duty`,
	()=>`is ${menly()}villainous`,
	()=>`is ${menly()}heroic`,
	()=>`is the activity of a villain`,
	()=>`is the mark of a decent person`,
	()=>`is the mark of a moral saint`,
	()=>`is saintly`,
	()=>`is something to aspire to`,
	()=>`is nothing shameful`,
	()=>`is despicable`,
	()=>`is shameful`,
	()=>`is incompatible with utilitarianism`,
	()=>`is next to godliness`,
	()=>`is its own reward`,
	()=>`is good in itself`,
	()=>`is ${menly()}good (no matter what the consequences)`,
	()=>`is an ultimate good`,
	()=>`is less wrong than ${randomEthicsActivityNoun()}`,
	()=>`is less bad than ${randomEthicsActivityNoun()}`,
	()=>`is ${mely()}inconsistent with ${randomEthicsActivityNoun()}`,
	()=>`is ${menly()}better than ${randomEthicsActivityNoun()}`,
	()=>`is not the mark of a decent person`,
	()=>`is evidence of a corrupt mind`,
	()=>`is morally bankrupt`,
	()=>`reveals a vicious character`,
	()=>`reveals a virtuous character`,
	()=>`is the mark of a virtuous character`,
	()=>`manifests a villainous character`,
	()=>`violates human rights`,
	()=>`is a tragedy`,
	()=>`merits praise`,
	()=>`deserves punishment`,
	()=>`is a tool of the devil`,
	()=>`is looked on unfavorably at the Gates of Heaven`,
	()=>`is bad karma`,
	()=>`is good karma`,
	()=>`is a mitzvah`,
	()=>`is one's spiritual duty`,
	()=>`is a wicked deed`,
	()=>`is wicked`,
	()=>`will lead to one's reincarnation as a worm`,
	()=>`guarantees salvation`,
	()=>`is an act of grace`,
	()=>`is normatively required`,
	()=>`is normatively prohibited`,
	()=>`contravenes the social contract`,
	()=>`is ${mely()}wrongheaded`,
	()=>`is ${mely()}self-justifying`,
	()=>`is ideologically bankrupt`,
	()=>`is ${menly()}unforgivable`,
	()=>`can never be ${menly()}forgiven`,
	()=>`can be absolved only with ${randomChoice("five","ten")} Hail Marys`,
	()=>`blemishes ${randomChoice("the soul","one's moral character","one's moral standing")}`,
	()=>`deserves the death penalty`,
	()=>`is upstanding`,
	()=>`is socially expected but not ${mely()+randomChoice("required","mandatory")}`,
	()=>`is immoral`,
	()=>`is unethical`,
	()=>`evolved for a purpose but it is no longer morally acceptable`,
	()=>`runs counter to ${me()}obligation`,
	()=>`is ${randomChoice("prudentially","instrumentially")} useful but ${mely()}unacceptable`,
	()=>`is wrong (according to deep-seated moral intuitions)`,
	()=>`cannot be morally defended (in a non-question-begging way)`,
	()=>`can be justified by ${randomChoice("rule utilitarian","Kantian","deontological","consequentialist")} principles`,
	()=>`generates a moral paradox`,
	()=>`is divine`,
	()=>`brings balance to the universe`,
	()=>`uses oneself as a mere means`,
	()=>`decreases global utility`,
	()=>`increases global utility`,
	()=>`does a disservice to future generations`,
	()=>`disrespects the wishes of the dead`,
	()=>`is demanded by the categorical imperative`,
	()=>`is falsely believed to be ${randomChoice("good","bad")}`,
	()=>`${randomChoice("evinces","is proof of")} the ${randomChoice("fallen","irredeemable","essentially good")} status of ${randomChoice("humanity","mankind")}`,
	()=>`is irredeemable`,
	()=>`is ${mely()}naïve`,
	()=>`is a moral violation`,
	()=>`consigns one's soul to eternal damnation${randomChoice("","in the flames of Hell")}`,
	()=>`contravenes ${randomChoice("one","two","three")} of the eight points on the Noble Eightfold path to enlightenment`,
	()=>`is not wrong in itself but is apt to lead to future harmful acts`,
	()=>`harms one's dignity`,
	()=>`drags a person down to the level of a mere animal`,
];

const ethicsPerson = [
	()=>`one's mother`,
	()=>`one's father`,
	()=>`one's child`,
	()=>`thy neighbor`,
	()=>`thy neighbor's wife`,
	()=>`a lover`,
	()=>`a puppy`,
	()=>`a baby`,
	()=>`two puppies`,
	()=>`a cat`,
	()=>`a pig`,
	()=>`two pigs`,
	()=>`three cats`,
	()=>`the occupants of a burning building`,
	()=>`one's own clone`,
	()=>`one's employee`,
	()=>`a doctor`,
	()=>`an octopus`,
	()=>`four babies`,
	()=>`a stranger`,
	()=>`two strangers`,
	()=>`the president of a small country`,
	()=>`a philosopher`,
	()=>`two ethicists`,
	()=>`a nun`,
	()=>`the Pope`,
	()=>`the Dalai Lama`,
	()=>`a man in a coma`,
	()=>`a convicted murderer`,
	()=>`a billionaire`,
	()=>`the leader of a drug cartel`,
	()=>`a dying bird`,
	()=>`a war criminal`,
	()=>`a newborn`,
	()=>`two chickens`,
	()=>`a horse with a broken leg`,
	()=>`a moth`,
	()=>`a member of the Royal Family`,
	()=>`a king`,
	()=>`one's uncle`,
	()=>`one's aunt`,
	()=>`a sentient AI`,
	()=>`a talking ${randomChoice("horse","mule")}`,
	()=>`the world's most famous ${randomChoice("pig","lion","and fattest cat","donkey")}`,
	()=>`a computer that passes the Turing Test`,
	()=>`a slime mold`,
	()=>`an alien`,
	()=>`both of one's parents`,
	()=>`a random child`,
	()=>`three random children`,
	()=>`two random college students`,
	()=>`a happy baby`,
	()=>`a hungry baby`,
	()=>`a hungry dog`,
	()=>`a pet`,
	()=>`a pet fish`,
	()=>`a pet bulldog`,
	()=>`a friend's child`,
	()=>`a friend`,
	()=>`an enemy`,
	()=>`an enemy's enemy`,
	()=>`oneself`,
	()=>`oneself`,
	()=>`one's future self`,
	()=>`one's past self`,
	()=>`the rich`,
	()=>`the poor`,
	()=>`the educated`,
	()=>`the literati`,
	()=>`the glitterati`,
	()=>`the chattering classes`,
	()=>`the hoi polloi`,
	()=>`the masses`,
	()=>`the billionaire class`,
	()=>`a senator`,
	()=>`Jeff Bezos`,
	()=>`a violinist surgically attached to oneself`,
	()=>`the father of ${randomEthicsPerson()}`,
	()=>`the mother of ${randomEthicsPerson()}`,
	()=>`a friend of a friend`,
	()=>`an evil demon`,
	()=>`the public`,
	()=>`the readership of The New Yorker`,
	()=>`a man with a gun to one's head`,
	()=>`a person threatening to kill ${randomEthicsPerson()}`,
	()=>`a person threatening to torture ${randomEthicsPerson()}`,
	()=>`an old lady`,
];

const ethicsPurposes = [
	()=>`in order to avoid starvation`,
	()=>`for its own sake`,
	()=>`for the sake of future generations`,
	()=>`in order to feed one's family`,
	()=>`in an effort to enter the Kingdom of Heaven`,
	()=>`in order to preserve one's chastity`,
	()=>`in order to become successful`,
	()=>`for personal gain`,
	()=>`simply to feel good about oneself`,
	()=>`simply because one enjoys it`,
	()=>`for no good reason`,
	()=>`because one's boss orders it`,
	()=>`simply because of one's upbringing`,
	()=>`when it is a norm of one's community`,
	()=>`for humility's sake`,
	()=>`to save the life of a cherished pet`,
	()=>`to save the life of a child`,
	()=>`purely for recreation`,
	()=>`purely for fun`,
	()=>`simply to keep a promise`,
	()=>`to get to an appointment on time`,
	()=>`because an attractive person asks`,
	()=>`because a police officer asks`,
	()=>`because a lover demands it`,
	()=>`when ordered by an authority figure`,
	()=>`in order to avoid breaking the law`,
	()=>`in order to avoid being rude`,
	()=>`out of anger`,
	()=>`out of love`,
	()=>`out of hatred`,
	()=>`out of jealousy`,
	()=>`out of fear`,
	()=>`out of a desire for revenge`,
	()=>`for money`,
	()=>`for personal gain`,
	()=>`to save ${randomEthicsPerson()}`,
	()=>`to save ${randomEthicsPerson()}`,
	()=>`to save the life of ${randomEthicsPerson()}`,
	()=>`to save the life of ${randomEthicsPerson()}`,
	()=>`to get revenge on ${randomEthicsPerson()}`,
	()=>`to feed ${randomEthicsPerson()}`,
	()=>`to humiliate ${randomEthicsPerson()}`,
	()=>`to make life easier for ${randomEthicsPerson()}`,
	()=>`in times of hardship`,
	()=>`in times of extreme duress`,
	()=>`under the influence of powerful psychotropics`,
	()=>`under the influence of alcohol`,
	()=>`when coerced by ${randomEthicsPerson()}`,
	()=>`for any reason`,
	()=>`if no one else ever finds out`,
	()=>`as long as there aren't any witnesses`,
	()=>`unless the authorities are watching`,
	()=>`without a court order signed by a judge`,
	()=>`on a Sunday`,
	()=>`except in a church`,
	()=>`except in a graveyard`,
	()=>`but only in philosophy class`,
	()=>`if no one is watching`,
	()=>`if all other alternatives are exhausted`,
	()=>`when diplomacy has broken down`,
	()=>`under capitalism`,
	()=>`under communism`,
	()=>`in the workplace`,
];

let ethicsActivityVerbsTemp = ethicsActivityVerbs.slice();
let ethicsActivityNounsTemp = ethicsActivityNouns.slice();
let ethicsPersonTemp = ethicsPerson.slice();
let ethicsJudgmentsTemp = ethicsJudgments.slice();
let ethicsPurposesTemp = ethicsPurposes.slice();


function randomEthicsActivityVerb() {
	if (ethicsActivityVerbsTemp.length == 0) {ethicsActivityVerbsTemp = ethicsActivityVerbs.slice();}
    let rando = Math.floor(Math.random() * ethicsActivityVerbsTemp.length);
    return ethicsActivityVerbsTemp.splice(rando, 1)[0]();
}

function randomEthicsActivityNoun() {
	if (ethicsActivityNounsTemp.length == 0) {ethicsActivityNounsTemp = ethicsActivityNouns.slice();}
    let rando = Math.floor(Math.random() * ethicsActivityNounsTemp.length);
    return ethicsActivityNounsTemp.splice(rando, 1)[0]();
}

function randomEthicsPerson() {
	if (ethicsPersonTemp.length == 0) {ethicsPersonTemp = ethicsPerson.slice();}
    let rando = Math.floor(Math.random() * ethicsPersonTemp.length);
    return ethicsPersonTemp.splice(rando, 1)[0]();
}

function randomEthicsJudgment() {
	if (ethicsJudgmentsTemp.length == 0) {ethicsJudgmentsTemp = ethicsJudgments.slice();}
    let rando = Math.floor(Math.random() * ethicsJudgmentsTemp.length);
    return ethicsJudgmentsTemp.splice(rando, 1)[0]();
}

function randomEthicsPurpose() {
	if (ethicsPurposesTemp.length == 0) {ethicsPurposesTemp = ethicsPurposes.slice();}
    let rando = Math.floor(Math.random() * ethicsPurposesTemp.length);
    return " "+ethicsPurposesTemp.splice(rando, 1)[0]();
}

const rareEthicsTemplate1 = () => `${randomChoice("One","One","A good person","An ethical person","A moral actor","A moral agent","Thou")} ${randomChoice("must not", "must never","cannot in good conscience","cannot, on pain of being morally stained,","must never intentionally","shalt not","must","shall","must whenever possible","ought not","ought to","should","should not")} ${randomEthicsActivityVerb()}.`;
const rareEthicsTemplate2 = () => `There is ${randomChoice(`nothing`,`nothing`,`very little`,`little`)} ${randomChoice(`more`,`less`)} ${randomChoice(`virtuous`,`evil`,`despicable`,`selfish`,`morally horrid`,`morally praiseworthy`,`outrageously evil`)} than ${randomEthicsActivityNoun()}.`;


const makeEthicsProp = () => {
	const rando = Math.random();
	const purposeFlag = (Math.random()<0.34) ? randomEthicsPurpose() : "";
	let proposition = "";
	if (rando<0.43) {
		proposition = capitalize(`${randomEthicsActivityNoun() + purposeFlag + " " + randomEthicsJudgment()}.`)
	} else if (rando<0.86) {
		proposition = `It ${randomEthicsJudgment()} to ${randomEthicsActivityVerb() + purposeFlag}.`
	} else if (rando<0.93) {
		proposition = rareEthicsTemplate1();
	} else {
		proposition = rareEthicsTemplate2();
	}
	proposition = `${ethicsQNo}. ${proposition}`;
	ethicsQNo++;
	console.log(proposition);
	return proposition;
}

const addEthicsLine = () => {
	const ethicsLineNode = document.createElement("div");
	const ethicsNode = document.createElement("p");
	ethicsLineNode.classList.add("ethicsLine");
	const ethicsTextNode = document.createTextNode(makeEthicsProp());
	ethicsNode.appendChild(ethicsTextNode);
	ethicsLineNode.appendChild(ethicsNode);
	document.getElementById("ethicsQuestions").appendChild(ethicsLineNode);
	document.getElementById("ethicsBtn").childNodes[0].nodeValue = "Next Proposition";
	// setTimeout(ethicsLineNode.classList.add("ethicsLineUnspooled"), 3000);
}






