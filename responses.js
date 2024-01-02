function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "Hello") {
        return "Hey,Im you friend <i> SIVI </i> are you looking for my perspective or would you rather I listen";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else 
        return "Hope your Day is as awesome as you are";
    
}
