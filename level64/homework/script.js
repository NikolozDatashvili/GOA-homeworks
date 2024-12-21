//<> exercise N1
console.log("Exercise N1 >>>>>>>>");
function test(bool1, bool2) {
  return "Passed => " + bool1 || bool2;
}
console.log(test(false, true));
console.log("Exercise N2 >>>>>>>>");
//<> exercise N2

function goOut(goodWeather, time, ready) {
  return "Can go out => " + (goodWeather && time) || ready;
}
console.log(goOut(true, true, true));
console.log(goOut(false, true, true));
console.log(goOut(true, true, false));
console.log("Exercise N3 >>>>>>>>");
//<> exercise N3

function step(barricade, space, trafficLight) {
  return "Can step => " + (!barricade && space) || trafficLight;
}
console.log(step(true, true, true));
console.log(step(false, true, true));
console.log(step(true, true, false));
console.log("Exercise N4 >>>>>>>>");
//<> exercise N4

function takeItem(itemAval, itemPermit, someoneUsing) {
  return "Can take item => " + ((itemAval && itemPermit) || !someoneUsing);
}

console.log(takeItem(true, true, true));
console.log(takeItem(false, true, true));
console.log(takeItem(true, true, false));
console.log("Exercise N5 >>>>>>>>");
//<> exercise N5

function recall(ongoingInfo, neededInfo, haveTime) {
  return "Should recall => " + ((ongoingInfo || neededInfo) && haveTime);
}
console.log(recall(true, true, true));
console.log(recall(false, true, true));
console.log(recall(true, true, false));
console.log("Exercise N6 >>>>>>>>");

//<> exercise N6

function sleep(timeLate, tired, getUpEarly, light) {
  let firstCondition = timeLate && tired;
  let secondCondition = getUpEarly && light;
  return "Should sleep => " + (firstCondition || secondCondition);
}
console.log(sleep(true, true, true, true));
console.log(sleep(false, true, true, false));
console.log(sleep(true, true, true, false));
console.log(sleep(false, true, true, true));
console.log(sleep(false, false, false, false));
console.log("Exercise N7 >>>>>>>>");
//<> exercise N7

function goToParty(friendsAgreed, work, partyNear) {
  return "Can go to party => " + ((friendsAgreed && !work) || partyNear);
}
console.log(recall(true, true, true));
console.log(recall(false, true, true));
console.log(recall(true, true, false));

console.log("Exercise N8 >>>>>>>>");

//<> exercise N8

function stayAtHome(rainy, snowy, plans) {
  return "Stay at home =>" + ((rainy || snowy) && plans);
}
console.log(stayAtHome(true, true, true));
console.log(stayAtHome(false, true, true));
console.log(stayAtHome(true, true, false));

console.log("Exercise N9 >>>>>>>>");

//<> exercise N9

function run(dryWeather, shoesAval, friendReady) {
  return "Can go for run => " + ((dryWeather && shoesAval) || friendReady);
}
console.log(run(true, true, true));
console.log(run(false, true, true));
console.log(run(true, true, false));

console.log("Exercise N10 >>>>>>>>");

//<> exercise N10

function watchFootball(saturday, sunday, otherWork, favTeam) {
  return (
    "Can watch football => " + (((saturday || sunday) && otherWork) || favTeam)
  );
}
console.log(watchFootball(true, true, true, true));
console.log(watchFootball(false, true, true, false));
console.log(watchFootball(true, true, true, false));
console.log(watchFootball(false, true, true, true));
console.log(watchFootball(false, false, false, false));
