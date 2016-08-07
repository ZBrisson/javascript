var name = prompt("Welcome to my game. What's your name?");
var user = prompt("Hello " + name + ". You find yourself on the playground at pre-school enjoying your time with the tire swing when your dreaded bully comes running up to you! He threatens to beat you up if you don't give up the tire swing. Do you RUN, HIDE, or FIGHT?").toUpperCase();

switch (user) {
    case 'RUN':
        var runPrompt = prompt("Are you FAST or SLOW?").toUpperCase();
        if (runPrompt === "FAST") {
            console.log("You barely make it out alive!");
        }
        else if (runPrompt === "SLOW") {
            console.log("You don't make it out alive!");
        }
        else {
            ("Sorry" + name + ". I didn't understand what " + runPrompt + " means exactly. Please type FAST or SLOW.");
        }
        break;
    case 'HIDE':
        var hidePrompt = prompt("Are you BIG or SMALL?").toUpperCase();
        if (hidePrompt === 'SMALL') {
            console.log("You hide succesfully and they never spot you!");
        }
        else if (hidePrompt === "BIG") {
            console.log("You fail to hide behind the tiny bush because of your BIG status. The bully beat's you to a pulp.");
        }
        else {
            console.log("Sorry" + name + ". I didn't understand what " + hidePrompt + " means exactly. Please type BIG or SMALL");
        }
        break;
    case 'FIGHT':
        var fightPrompt = prompt("Are you LEFT or RIGHT handed?").toUpperCase();
        var fightFollowUp = prompt("Are you 60' or taller? Please answer YES or NO").toUpperCase();
        if (fightPrompt === 'LEFT' && fightFollowUp === "YES") {
            console.log("Your left hook catches the bully off guard! You successfully defend yourself!");
        }
        else if (fightPrompt === 'RIGHT' || fightFollowUp === "No") {
            console.log("Your bully has a lot more experience with fighting then you and knocks your RIGHT hook away easily. You are beat to a pulp.");
        }
        else {
            console.log("Sorry" + name + ". I didn't understand what " + fightPrompt + " means exactly. Please type BIG or SMALL");
        }
        break;
    default:
        console.log("Sorry" + name + ". I didn't understand what " + user + " means. Please type RUN, HIDE, or FIGHT.");
}
